import { NextRequest, NextResponse } from "next/server";
import prisma from "../../_db/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: params.orderId,
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const discount = parseFloat(process.env.EARLY_BIRD_DISCOUNT || "1");

    return NextResponse.json({ product, discount }, { status: 200 });
  } catch (error) {
    console.error("Error getting product", {
      orderId: params.orderId,
      data: { error },
    });
    return NextResponse.json(
      { error: "Error getting product" },
      { status: 500 }
    );
  }
}
