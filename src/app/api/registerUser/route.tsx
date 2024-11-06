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
    
    const existingUser = await prisma.interestedUser.findFirst({
      where: {
        email: interestedUser,
      },
    });

    if (!existingUser) {
      await prisma.interestedUser.create({
        data: {
          email: interestedUser,
        },
      });
    }

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
      await sendWelcomeMail(interestedUser, false);
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
