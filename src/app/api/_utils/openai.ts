import OpenAI from "openai";
import Product from "../../../models/product";
import {
  buildLandingPageGuidePrompt,
  buildLandingPagePrompt,
  buildValidationPrompt,
} from "./utils";
import { ChatCompletion } from "openai/resources/index.mjs";

export interface LandingPage {
  landingPage: string;
  blog1: string;
  blog2: string;
  npmInstallCommands: string;
}

type Model = "gpt-4o" | "gpt-4o-mini" | "o1-preview" | "gpt-4o-2024-08-06";

const openai = new OpenAI();

// TODO: Maybe look for the javascript code block and extract it and by that avoid weird texts in the beginning by
function parseResponse<T>(response: ChatCompletion | null): T | null {
  const text = response?.choices[0]?.message?.content;
  if (!text) return null;

  const cleanJsonData = text
    ?.replace(/\`\`\`json\n/, "")
    ?.replace(/\n\`\`\`text\n`/, "")
    ?.replace(/\n\`\`\`javascript\n/, "")
    .replace(/\n\`\`\`/, "");

  // Parse the clean JSON data into an object
  const obj = JSON.parse(cleanJsonData || "[]");
  return obj as T;
}

// Can either be a string "Valid" or a landingPage object, in that case we'll use parseResponse
function parseVerifyResponse(
  response: ChatCompletion | null,
  landingPage: LandingPage
): LandingPage | null {
  const text = response?.choices[0]?.message?.content;

  if (!text || text === "Valid") {
    return landingPage;
  }

  return parseResponse<LandingPage>(response);
}

/**
 * Generate a landing page for a product
 * @param product is the product to generate a landing page for
 * @param templateCode is the code of the template to use.
 * @param isFreeUser
 * @returns {object} { landingPage: string, npmInstallCommands: string }
 * @tutorial generate-templateCode ReactDOMServer from react-dom/server to generate the landing page content in string format.
 */
export async function generateLandingPage(
  product: Product,
  templateCode: string,
  blogCode: string,
  isPaidUser?: boolean
): Promise<LandingPage | null> {
  // const selectedModel: Model = !isPaidUser ? "gpt-4o-2024-08-06" : "gpt-4o-mini";

  // const now = new Date();
  // const prompt = buildLandingPagePrompt(templateCode, blogCode, product);
  // console.log("About to generate the landing page");
  // const landingPageResponse = await openai.chat.completions.create({
  //   model: selectedModel,
  //   messages: [
  //     {
  //       role: "system",
  //       content: prompt,
  //     },
  //   ],
  // });

  // let landingPage: LandingPage | null = null;

  // try {
  //   landingPage = parseResponse<LandingPage>(landingPageResponse);
  //   if (!landingPage) {
  //     throw new Error("Failed to generate landing page");
  //   }
  //   const verifyPrompt = buildValidationPrompt(landingPage);
  //   console.log("About to verify the landing page");
  //   const verifyLandingPage = await openai.chat.completions.create({
  //     model: selectedModel,
  //     messages: [
  //       {
  //         role: "system",
  //         content: verifyPrompt,
  //       },
  //     ],
  //   });
  //   landingPage = parseVerifyResponse(verifyLandingPage, landingPage);
  // } catch (error) {
  //   // retry once
  //   const landingPageResponse = await openai.chat.completions.create({
  //     model: selectedModel,
  //     messages: [
  //       {
  //         role: "system",
  //         content: prompt,
  //       },
  //     ],
  //   });
  //   landingPage = parseResponse<LandingPage>(landingPageResponse);
  // }

  // const timeToRun = new Date().getTime() - now.getTime();
  // const timeToRunMinutes = timeToRun / 60000;
  // console.log("Time to run: ", timeToRunMinutes + " minutes");

  // return landingPage;
  return null;
}
