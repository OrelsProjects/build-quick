import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "../_utils/payments";
import prisma from "../_db/db";

export async function POST(req: NextRequest) {
  const { product }: { product: { itemId: string; email: string } } =
    await req.json();
  try {
    const item = await prisma.product.findFirst({
      where: {
        id: product.itemId,
      },
    });
    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    let discount = parseFloat(process.env.EARLY_BIRD_DISCOUNT || "1");
    const value = item.price * discount;

    const order: { id: string; status: string } = await createOrder({
      currency: item.currency,
      value,
    });

    await prisma.userOrders.create({
      data: {
        email: product.email,
        orderId: order.id,
        productId: product.itemId,
        quantity: 1,
        total: value,
        status: order.status,
      },
    });

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error creating order", {
      email: product.email,
      data: { error },
    });
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}
