import { z } from "zod";
import { tool } from "@openai/agents";
import { Browser, chromium, Page } from "playwright";

let browser: Browser;
let page: Page;
const EmptyParams = z.object({}).strict().describe("No parameters needed")

export const openBrowser = tool({
  name: "open_browser",
  description: "Open a new browser instance",
  parameters: EmptyParams,
  async execute() {
    if (!browser) {
      let uid: number | undefined;
      if (process.getuid) {
        uid = process.getuid?.() ?? 1000;
      }
      browser = await chromium.launch({
        headless: false,
        chromiumSandbox: true,
        executablePath: "/usr/bin/google-chrome",
        env: {
          ...process.env,
          XDG_RUNTIME_DIR: `/run/user/${uid}`,
          WAYLAND_DISPLAY: "wayland-0",
        },
        args: [
          "--ozone-platform=wayland",
          "--enable-features=UseOzonePlatform",
          "--disable-gpu",
          "--no-sandbox",
          "--start-maximized",
        ],
      });

      page = await browser.newPage({
        viewport: { width: 1920, height: 1080 },
      });
    }
  },
});

export const openURL = tool({
  name: "open_url",
  description: "Open a URL in the browser",
  parameters: z
    .object({
      url: z.string(),
    })
    .strict()
    .describe("url parameters needed"),
  async execute({ url }) {
    await page.goto(url, { waitUntil: "networkidle" });
  },
});

export const takeScreenShot = tool({
  name: "take_screenshot",
  description: "Take a screenshot of the current page",
  parameters: EmptyParams,
  async execute() {
    const filename = `${Date.now()}-screenshot.png`;
    const buffer = await page.screenshot({
      path: `${process.cwd()}/screenshot/${filename}`,
      fullPage: true,
    });
    return {
      screenshot: buffer.toString("base64"),
      path: filename,
    };
  },
});

export const clickOnScreen = tool({
  name: "click_screen",
  description: "Click on the screen via using css selector",
  parameters: z
    .object({
      text: z.string().describe("It hits the selected target"),
    })
    .strict()
    .describe("text parameters needed"),
  async execute({ text }) {
    console.log(text);
    const selectors = [
      `text=${text}`,
      `button:has-text("${text}")`,
      `a:has-text("${text}")`,
      `role=button[name="${text}"]`,
      `role=link[name="${text}"]`,
      `:is(span, div, p):text-is("${text}")`,
    ];

    let locator;
    for (const sel of selectors) {
      console.log(sel);
      const loc = page.locator(sel);
      if ((await loc.count()) > 0) {
        locator = loc.first();
        console.log(`Matched selector: ${sel}`);
        break;
      }
    }

    if (!locator) {
      throw new Error(`No visible element found with text: "${text}"`);
    }

    await locator.click({ timeout: 30000 });
    console.log(`✅ Clicked element with text: "${text}"`);
  },
});

export const fillTheForm = tool({
  name: "fill_form",
  description: "Fill all required fields in the form",
  parameters: z
    .object({
      fields: z.object({}).catchall(z.string()),
    })
    .strict()
    .describe("fields parameters needed"),
  async execute({ fields }) {
    console.log(fields);
    // ! We can add also select textarea div span
    const inputs = await page.$$("input,textarea,select");
    // console.log("INPUTS -> ", inputs)

    for (const [key, value] of Object.entries(fields)) {
      let filled = false;
      for (const input of inputs) {
        // console.log("INPUT ->", input)
        const attrs = await Promise.all([
          input.getAttribute("id"),
          input.getAttribute("name"),
          input.getAttribute("placeholder"),
          input.getAttribute("aria-label"),
        ]);
        const combined = attrs.filter(Boolean).join(" ").toLowerCase();
        // console.log("COMBINED ->", combined)

        if (combined.includes(key.toLowerCase())) {
          await input.fill(value);
          filled = true;
          break;
        }
      }
      if (!filled) console.warn(`couldn't find field : ${key}`);
    }
  },
});
