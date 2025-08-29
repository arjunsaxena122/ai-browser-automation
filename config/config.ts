import dotenv from "dotenv";
import { NextResponse } from "next/server";
import { z } from "zod";
dotenv.config({
  path: "./.env",
});

const envSchema = z.object({
  NODE_ENV: z.string(),
  MONGO_URI: z.string(),
  ACCESS_TOKEN_KEY: z.string(),
  ACCESS_TOKEN_KEY_EXPIRY: z.string(),
  REFRESH_TOKEN_KEY: z.string(),
  REFRESH_TOKEN_KEY_EXPIRY: z.string(),
  GEMINI_BASE_URL: z.string(),
  GEMINI_API_KEY: z.string(),
  GEMINI_MODEL_NAME: z.string(),
  OPENAI_API_KEY: z.string(),
  OPENAI_MODEL_NAME: z.string(),
});

const createEnv = (env: NodeJS.ProcessEnv) => {
  const resultValidation = envSchema.safeParse(env);
  if (resultValidation.error) {
    throw NextResponse.json(
      {
        message: `enviroment variable validation failed ${env} due to ${resultValidation.error}`,
      },
      { status: 400 }
    );
  }
  return resultValidation.data;
};

export const env = createEnv(process.env);
