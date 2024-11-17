import { NextRequest, NextResponse } from "next/server";
import { generateLandingPage } from "../_utils/openai";
import Product from "../../../models/product";
import fs from "fs";
import path from "path";

export const maxDuration = 60; // 5 minutes

// TODO: Make sure the user has enough permissions to access this route. maybe via ip verification or something
export async function POST(req: NextRequest) {
  try {
    if (process.env.NODE_ENV !== "development") {
      return NextResponse.json(
        { error: "This route is not reachable at the moment" },
        { status: 404 }
      );
    }
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

    const blogPath = path.join(
      process.cwd(),
      "src/components/template",
      `blog.tsx`
    );

    const componentString = fs.readFileSync(componentPath, "utf-8");
    const blogString = fs.readFileSync(blogPath, "utf-8");
    const landingPage = await generateLandingPage(
      product,
      componentString,
      blogString,
      true
    );

    // parse the response, replace \n with new lines and \" with "
    const componentStringified = landingPage?.landingPage;
    const blog1Stringified = landingPage?.blog1 || "";
    const blog2Stringified = landingPage?.blog2 || "";
    if (!componentStringified) {
      return NextResponse.json(
        { error: "Failed to generate landing page" },
        { status: 500 }
      );
    }

    const componentParsed = componentStringified
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"');

    const blog1Parsed = blog1Stringified
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"');

    const blog2Parsed = blog2Stringified
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

    fs.writeFileSync(
      path.join(process.cwd(), "src/components/generated", `blog1.tsx`),
      blog1Parsed
    );

    fs.writeFileSync(
      path.join(process.cwd(), "src/components/generated", `blog2.tsx`),
      blog2Parsed
    );

    return NextResponse.json({ landingPage }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
