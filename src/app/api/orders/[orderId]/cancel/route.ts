import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/_db/db";
import { getOrder } from "@/app/api/_utils/payments";

export async function POST(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const order = await getOrder(params.orderId);

    await prisma.userOrders.update({
      where: {
        orderId: params.orderId,
      },
      data: {
        status: order.status === "APPROVED" ? order.status : "CANCELLED",
      },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error("Error cancelling order", {
      orderId: params.orderId,
      data: { error },
    });
    return NextResponse.json(
      { error: "Error cancelling order" },
      { status: 500 }
    );
  }
}
