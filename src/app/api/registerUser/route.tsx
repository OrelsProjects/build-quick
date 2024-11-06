import { NextRequest, NextResponse } from "next/server";
import { InterestedUser, ProductRequest } from "@prisma/client";
import prisma from "../_db/db";
import { sendWelcomeMail } from "../_utils/mail/mail";

type Body = {
  interestedUser: string;
  product: Partial<ProductRequest>;
};

export async function POST(req: NextRequest) {
  try {
    const { interestedUser, product }: Body = await req.json();
    console.log("interestedUser", interestedUser);

    const existingUser = await prisma.interestedUser.findFirst({
      where: {
        email: interestedUser,
      },
    });

    console.log("existingUser", existingUser);

    if (!existingUser) {
      await prisma.interestedUser.create({
        data: {
          email: interestedUser,
        },
      });
    }

    console.log("product", product);

    await prisma.productRequest.create({
      data: {
        ...product,
        ideaName: product.ideaName || "",
        elevatorPitch: product.elevatorPitch || "",
        templateName: product.templateName || "",
        userEmail: interestedUser,
      },
    });

    if (!existingUser) {
      console.log("sendWelcomeMail");
      await sendWelcomeMail(interestedUser, false);
      console.log("sendWelcomeMail done");
    }

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error registering user", { error });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
