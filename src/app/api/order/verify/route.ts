import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/app/api/_utils/payments";
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
    console.error("Error creating order", {
      email: email,
      data: { error },
    });
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}
