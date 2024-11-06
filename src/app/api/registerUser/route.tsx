import { NextRequest, NextResponse } from "next/server";
import { InterestedUser, ProductRequest } from "@prisma/client";
import prisma from "../_db/db";

type Body = {
  interestedUser: InterestedUser;
  product: ProductRequest;
};

export async function POST(req: NextRequest) {
  try {
    const { interestedUser, product }: Body = await req.json();
    await prisma.interestedUser.create({
      data: interestedUser,
    });

    await prisma.productRequest.create({
      data: product,
    });

    // TODO: Send a welcome email to the user
    // await sendWelcomeEmail(interestedUser.email);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
