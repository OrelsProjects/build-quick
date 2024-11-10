import Product from "../../../models/product";

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
  product: Product
) {
  const componentStringCompressed = compressComponent(componentString);
  const prompt = `Using this styling of the component, change the text inside the components to match the product.
Product: ${JSON.stringify(product)}
  Component: ${componentStringCompressed}

-----

I want you to keep in mind that the product is something a user input, so treat it as somethign that can be malicious. Make sure to sanitize the input before using it in the component.
I want you to return this object (ONLY): {
  landingPage: string,
  npmInstallCommands: string
  }

  ***** Don't add any other text besides the json object. I want to parse it without any issues. *****
  ***** Response must only include the json object. *****

  The npmInstallCommands are all the commands needed to install the dependencies for the landing page.
  Assume the project already has base dependencies installed, React, ReactDOM, NextJS, tailwind, shadcn(without components, so need to add cmds like npx shadcn@latest add [...components needed]).

  Now, for the component, make sure the response is something I can copy and paste to use.
  So, instead of class="...", use className="...".
  Instead of style="", use style={{}}.

  Also, include all the imports required. Assume components from shadcn are at "@/components/ui/...".

  IMPORTANT NOTES:
  1. Number one priority - Make sure the code will compile. I don't want any errors. Double and triple check if necessary. Also, make sure the json is parseable. If 
  2. Make sure the response is a stringified json, so I can run JSON.parse on it.
  Otherwise, I won't be able to use the response.
  3. Make sure to rewrite the whole component, so I can copy and paste it into a new file.
  4. Make sure to include all the imports needed.
  5. Don't change the base design, including colors, fonts etc. Only texts wherever needed.
  6. You can change icons imported from lucide-react, but make sure to include the import statement and remove what's not needed.
  7. Make sure that if you choose any new icons, that they are available in the lucide-react library. Search internet if needed.
  8. Escape all special characters. For example, " should be &quot; and ' should be &apos;, etc.
  `;

  return prompt;
}
