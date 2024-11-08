import { NextRequest, NextResponse } from "next/server";
import prisma from "../../_db/db";

const MAX_SPOTS = 11;
const MAX_SPOTS_LEFT_AFTER_FIRST_PURCHASE = 10;

export async function GET(req: NextRequest) {
  try {
    const paidOrders = await prisma.userOrders.findMany({
      where: {
        status: "COMPLETED",
      },
    });

    // filter all duplicated emails
    const uniquePaidOrders = paidOrders.filter(
      (email, index) => paidOrders.indexOf(email) === index
    );

    const spotsLeft =
      (uniquePaidOrders.length > 0
        ? MAX_SPOTS_LEFT_AFTER_FIRST_PURCHASE
        : MAX_SPOTS) - uniquePaidOrders.length;

    if (spotsLeft <= 0) {
      return NextResponse.json({ spotsLeft: 3 }, { status: 200 });
    }

    return NextResponse.json({ spotsLeft }, { status: 200 });
  } catch (error) {
    console.error("Error fetching paid orders", {
      data: { error },
    });
    return NextResponse.json(
      { error: "Error fetching paid orders" },
      { status: 500 }
    );
  }
}
