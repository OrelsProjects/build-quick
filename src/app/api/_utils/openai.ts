import OpenAI from "openai";
import Product from "@/lib/models/product";
import { buildLandingPageGuidePrompt, buildLandingPagePrompt } from "./utils";
import { ChatCompletion } from "openai/resources/index.mjs";

export interface LandingPage {
  landingPage: string;
  npmInstallCommands: string;
}

type Model = "gpt-4o" | "gpt-4o-mini" | "o1-preview";

const openai = new OpenAI();

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
  isFreeUser = true
): Promise<LandingPage | null> {
  const selectedModel: Model = !isFreeUser ? "gpt-4o-mini" : "gpt-4o";
  //   const styleGuideResponse = await openai.chat.completions.create({
  //     model: selectedModel,
  //     messages: [
  //       {
  //         role: "system",
  //         content: buildLandingPageGuidePrompt(product),
  //       },
  //     ],
  //   });

  //   const stylingGuide = parseResponse<string>(styleGuideResponse);
  //   if (!stylingGuide) {
  //     throw new Error("Failed to generate styling guide");
  //   }
  const now = new Date();
  const prompt = buildLandingPagePrompt(templateCode, product);
  console.log(prompt);
  const landingPageResponse = await openai.chat.completions.create({
    model: selectedModel,
    messages: [
      {
        role: "system",
        content: prompt,
      },
    ],
  });

  let landingPage: LandingPage | null = null;

  try {
    landingPage = parseResponse<LandingPage>(landingPageResponse);
  } catch (error) {
    // retry once
    const landingPageResponse = await openai.chat.completions.create({
      model: selectedModel,
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
    });
    landingPage = parseResponse<LandingPage>(landingPageResponse);
  }

  const timeToRun = new Date().getTime() - now.getTime();
  console.log("Time to run", timeToRun);

  return landingPage;
}
