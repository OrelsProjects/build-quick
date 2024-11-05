import { NextRequest, NextResponse } from "next/server";
import { generateLandingPage } from "../_utils/openai";
import Product from "../../../lib/models/product";
import fs from "fs";
import path from "path";
// TODO: Make sure the user has enough permissions to access this route. maybe via ip verification or something
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      product,
      templateName,
    }: { product: Product; templateName: string } = body;

    const componentPath = path.join(
      process.cwd(),
      "src/components/template",
      `${templateName}.tsx`
    );
    const componentString = fs.readFileSync(componentPath, "utf-8");
    const landingPage = await generateLandingPage(product, componentString);

    // parse the response, replace \n with new lines and \" with "
    const componentStringified = landingPage?.landingPage;
    if (!componentStringified) {
      return NextResponse.json(
        { error: "Failed to generate landing page" },
        { status: 500 }
      );
    }

    const componentParsed = componentStringified
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"');

    // create .tsx file with the componentStringifiedParsed
    // check if src/components/generated exists
    if (!fs.existsSync(path.join(process.cwd(), "src/components/generated"))) {
      fs.mkdirSync(path.join(process.cwd(), "src/components/generated"));
    }

    // check if templateName exists. if so, delete it
    if (
      fs.existsSync(
        path.join(
          process.cwd(),
          "src/components/generated",
          `${templateName}.tsx`
        )
      )
    ) {
      fs.unlinkSync(
        path.join(
          process.cwd(),
          "src/components/generated",
          `${templateName}.tsx`
        )
      );
    }

    fs.writeFileSync(
      path.join(
        process.cwd(),
        "src/components/generated",
        `${templateName}.tsx`
      ),
      componentParsed
    );

    return NextResponse.json({ landingPage }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
