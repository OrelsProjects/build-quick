import { NextRequest, NextResponse } from "next/server";
import { captureOrder } from "@/app/api/_utils/payments";
import prisma from "@/app/api/_db/db";
import { sendWelcomeMail } from "../../../_utils/mail/mail";

export async function POST(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const { orderId } = params;

    const captureResponse = await captureOrder(orderId);
    const isCaptureSuccessful = !captureResponse?.details?.[0]?.issue;

    if (isCaptureSuccessful) {
      await prisma.userOrders.update({
        where: {
          orderId,
        },
        data: {
          status: captureResponse.status,
        },
      });

      const userOrder = await prisma.userOrders.findFirst({
        where: {
          orderId,
        },
        select: {
          email: true,
        },
      });

      if (!userOrder) {
        console.error("Something went completely wrong!", {
          orderId,
          data: { error: "User order not found" },
        });
        return NextResponse.json(
          { error: "User order not found" },
          { status: 404 }
        );
      }
      try {
        await sendWelcomeMail(userOrder.email, true);
      } catch (error) {
        console.error("Error sending welcome mail", {
          orderId,
          data: { error, email: userOrder.email },
        });
      }
    }

    return NextResponse.json(captureResponse, { status: 200 });
  } catch (error) {
    console.error("Error capturing order", {
      orderId: params.orderId,
      data: { error },
    });
    return NextResponse.json(
      { error: "Error capturing order" },
      { status: 500 }
    );
  }
}
