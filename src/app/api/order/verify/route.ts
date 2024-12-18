import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/_db/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  try {
    const userOrder = await prisma.userOrders.findFirst({
      where: {
        AND: [{ email }, { status: "COMPLETED" }],
      },
    });

    if (!userOrder || userOrder.status !== "COMPLETED") {
      return NextResponse.json(
        { error: `User order not found ${email}` },
        { status: 404 }
      );
    }

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "User could not be verified" },
      { status: 500 }
    );
  }
}
