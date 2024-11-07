import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/_db/db";

export async function POST(req: NextRequest) {
  const { email }: { email: string } = await req.json();

  
  try {
    const userOrder = await prisma.userOrders.findFirst({
      where: {
        email,
      },
    });

    if (!userOrder || userOrder.status !== "COMPLETED") {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "User could not be verified" },
      { status: 500 }
    );
  }
}
