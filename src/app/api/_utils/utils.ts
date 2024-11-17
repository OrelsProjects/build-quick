import Product from "../../../models/product";
import { LandingPage } from "./openai";

const compressComponent = (component: string) => {
  // return component
  //   .replace(/\n/g, "")
  //   .replace(/\s+/g, " ")
  //   .replace(/"/g, '\\"')
  //   .replace(/'/g, "\\'");

  return component
    .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "") // Remove comments
    .replace(/\s*([{}();,<>])\s*/g, "$1") // Remove spaces around symbols
    .replace(/\s*=\s*/g, "=") // Remove spaces around equal signs
    .replace(/\s+/g, "") // Remove all remaining whitespace
    .trim(); // Remove leading/trailing whitespace
};

export function buildLandingPageGuidePrompt(product: Product) {
  return `Generate a styling guide for a landing page for a product named ${product.ideaName}. The product is a ${product.elevatorPitch}. The product's additional info is: ${product.additionalInfo} and additional feature: ${product.additionalFeature}.
  Here's what you should output:
  Product Name: ${product.ideaName}
    Product Description: Here you use the elevator pitch and, if needed, the additional info to describe the product.
    Product Design: Here you describe the design of the product. You can include colors, fonts, vibe (fun, serious, playful etc.) and other design elements.
  `;
}

export function buildLandingPagePrompt(
  componentString: string,
  blogString: string,
  product: Product
) {
  const componentStringCompressed = compressComponent(componentString);
  const blogStringCompressed = compressComponent(blogString);
  const prompt = `Using this styling of the component, change the text inside the components to match the product.
  Product: ${JSON.stringify(product)}
  Component: ${componentStringCompressed}
  Blog: ${blogStringCompressed}

  Ignore the content of the component and blog completely, only focus on the structure and styling, creating content based on the product.

  For the product, generate a logo, using lucide-react icons. The logo should be a combination of the product name and a relevant icon. The icon should be related to the product. Use the icon as a part of the logo. The logo should be in the top left corner of the landing page.
  Use the same logo for all pages.
-----

I want you to keep in mind that the product is something a user input, so treat it as something that can be malicious. Make sure to sanitize the input before using it in the component.
I want you to return this object (ONLY): {
  landingPage: string,
  blog1: string,
  blod2: string,
  npmInstallCommands: string
  }

  ***** Don't add any other text besides the json object. I want to parse it without any issues. *****
  ***** Response must only include the json object. *****

  blog1 and blog2: Full blog pages designed with TypeScript, React, Next.js, Tailwind CSS, and shadcn components, related to the product topic to improve SEO.
  Use keywords related to the product in the blog content to improve SEO, and write relevant data. Look online if needed for the most updated information on the topic and on Google SEO.
  See blogStringCompressed for the blog content and structure.
  For the metadata, if you can't find an image for the OG, don't include the OG image.
  
  -- Make sure to create 2 blog pages, not 1. --

    IMPORTANT NOTES:
  1. Number one priority - Make sure the code will compile. I don't want any errors. Double and triple check if necessary. Also, make sure the json is parseable. If 
  2. You can change icons imported from lucide-react, but make sure to include the import statement and remove what's not needed.
  3. Make sure that if you choose any new icons, that they are available in the lucide-react library. Search online for the icons first.
  4. Make sure the response is a stringified json, so I can run JSON.parse on it.
  Otherwise, I won't be able to use the response.
  5. Make sure to rewrite the whole component, so I can copy and paste it into a new file.
  6. Make sure to include all the imports needed.
  7. Don't change the base design, including colors, fonts etc. Only texts wherever needed.
  8. Escape all special characters in text within tags. For example, instead of <p>It's text</p>, use <p>It&apos;s text</p>.
  9. Remove imports that are not necessery.

  The npmInstallCommands are all the commands needed to install the dependencies for the landing page.
  Assume the project already has base dependencies installed, React, ReactDOM, NextJS, tailwind, shadcn(without components, so need to add cmds like npx shadcn@latest add [...components needed]).

  Now, for the component, make sure the response is something I can copy and paste to use.
  So, instead of class="...", use className="...".
  Instead of style="", use style={{}}.

  Also, include all the imports required. Assume components from shadcn are at "@/components/ui/...".
  `;
  return prompt;
}

// This prompt asks to go over the generated landing page and make sure that it compiles, all the icons exist in lucide-react, and that the response is a stringified JSON object.
// If something is wrong, the llm should fix it, searching the internet if needed.
// The comoponents must comply with:
/**
 * 1. Number one priority - Make sure the code will compile. I don't want any errors. Double and triple check if necessary. Also, make sure the json is parseable. If 
  2. You can change icons imported from lucide-react, but make sure to include the import statement and remove what's not needed.
  3. Make sure that if you choose any new icons, that they are available in the lucide-react library. Search online for the icons first.
  4. Make sure the response is a stringified json, so I can run JSON.parse on it.
  Otherwise, I won't be able to use the response.
  5. Make sure to rewrite the whole component, so I can copy and paste it into a new file.
  6. Make sure to include all the imports needed.
  7. Don't change the base design, including colors, fonts etc. Only texts wherever needed.
  8. Escape all special characters in text within tags. For example, instead of <p>It's text</p>, use <p>It&apos;s text</p>.
  9. Remove imports that are not necessery.
 */
export function buildValidationPrompt(landingPage: LandingPage) {
  const compressedLandinPage = {
    ...landingPage,
    landingPage: compressComponent(landingPage.landingPage),
    blog1: compressComponent(landingPage.blog1),
    blog2: compressComponent(landingPage.blog2),
  };

  const prompt = `Go over the generated pages (landingPage and blogs) and make sure that it compiles, all the icons exist in lucide-react, and that the response is a stringified JSON object.
If something is wrong, fix it, searching the internet if needed.
The components must comply with:
1. Number one priority - Make sure the code will compile. I don't want any errors. Double and triple check if necessary. Also, make sure the json is parseable. If 
  2. You can change icons imported from lucide-react, but make sure to include the import statement and remove what's not needed.
  3. Make sure that if you choose any new icons, that they are available in the lucide-react library. Search online for the icons first.
  4. Make sure the response is a stringified json, so I can run JSON.parse on it.
  Otherwise, I won't be able to use the response.
  5. Make sure to rewrite the whole component, so I can copy and paste it into a new file.
  6. Make sure to include all the imports needed.
  7. Don't change the base design, including colors, fonts etc. Only texts wherever needed.
  8. Escape all special characters in text within tags. For example, instead of <p>It's text</p>, use <p>It&apos;s text</p>.
  9. Remove imports that are not necessery.
  10. If the component is valid, return the word: "Valid". Otherwise, fix it and return everything rewritten.


  ***** Don't add any other text besides the json object. I want to parse it without any issues. *****
  ***** Response must only include the json object. *****

  generated pages: ${JSON.stringify(compressedLandinPage)}
`;

  return prompt;
}
