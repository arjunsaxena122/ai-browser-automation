import OpenAI from "openai";
import { env } from "@/config/config";
import { Agent, run, RunConfig } from "@openai/agents";
import { NextRequest, NextResponse } from "next/server";
import {
  Runner,
  OpenAIProvider,
  setDefaultOpenAIClient,
  setOpenAIAPI,
  setTracingDisabled,
} from "@openai/agents";
import {
  clickOnScreen,
  fillTheForm,
  openBrowser,
  openURL,
  takeScreenShot,
} from "@/utils/tools.utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log(body);

    const { query } = body;

    if (!query) {
      throw NextResponse.json(
        {
          message: "User query not found",
        },
        { status: 404 }
      );
    }

    // ! If you want to work with Gemini AI
    if (
      !env.GEMINI_API_KEY ||
      !env.GEMINI_BASE_URL ||
      !env.GEMINI_MODEL_NAME ||
      !env.OPENAI_API_KEY ||
      !env.OPENAI_MODEL_NAME
    ) {
      throw NextResponse.json(
        {
          message: "Please set your enviroment variables",
        },
        { status: 400 }
      );
    }

    const openAIClient = new OpenAI({
      apiKey: env.GEMINI_API_KEY,
      baseURL: env.GEMINI_BASE_URL,
    });

    const modelProvider = new OpenAIProvider({
      openAIClient,
    });

    setDefaultOpenAIClient(openAIClient);
    setOpenAIAPI("chat_completions");

    // ! You want your prompt are logs by openAI or Gemini then you can false this
    setTracingDisabled(true);

    const agent = new Agent({
      name: "Browser Automation",
      model: env.GEMINI_MODEL_NAME,
      instructions: `
        -You are a browser automation agent ai assistant. The user will tell you any action they want to perform on any website.
        -Then call open_url with the URL: ${
          query.includes("https://")
            ? query.match(/https:\/\/[^\s]+/)[0]
            : "the URL mentioned"
        }
        -You always perform a every action at a time in a sequence if it is succeed gohead and if it isn't exit yourself or stop yourself
        -You should always perform tool in the sequence on the basis of user query
        -First always call openBrowser tool and then call openURL tool and call takeScreenshot tool
        -On the user query basis means if user wants to click on the screen or something then you invoke the tool clickOnScreen and fillTheForm tool
    `,
      tools: [openBrowser, openURL, takeScreenShot, clickOnScreen, fillTheForm],
    });

    if (!agent) {
      throw NextResponse.json(
        {
          message: "Something issue arise in creating new agent",
        },
        { status: 400 }
      );
    }

    //! GeminiAI
    const runner = new Runner(modelProvider as Partial<RunConfig>);
    // ! OpenAI
    // const runner = new Runner();

    const response = await runner.run(agent, query);

    if (!response) {
      throw NextResponse.json(
        {
          message: "response are not generating",
        },
        { status: 400 }
      );
    }

    console.log("📜 ->", response.history);
    console.log("😁 ->", response.finalOutput);

    return NextResponse.json(
      {
        response: response.finalOutput,
        messsage: "Your query proceed successfully!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.log(error);
    const message =
      error instanceof Error ? error.message : "Internal server error";

    return NextResponse.json(
      {
        message,
      },
      { status: 500 }
    );
  }
}
