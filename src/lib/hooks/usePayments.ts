import axios from "axios";
import { PayPalCapture } from "@/models/payment";
import { Product } from "@prisma/client";
import { useCustomRouter } from "./useCustomRouter";
import { usePathname } from "next/navigation";

export default function usePayments() {
  const router = useCustomRouter();
  const pathname = usePathname();

  const showRepositoryPaymentSideBar = (email?: string) => {
    const paramsToAdd = {
      repository: "true",
      to: email || "",
    };

    router.push(pathname, {
      preserveQuery: true,
      paramsToRemove: ["to", "repository"],
      paramsToAdd,
    });
  };

  const createOrder = async (itemId: string, email: string) => {
    try {
      const result = await axios.post("/api/order", {
        product: {
          itemId,
          email,
        },
      });
      const orderData = result.data;

      if (orderData.id) {
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error: any) {
      console.error("Error creating order", { error });
      throw error;
    }
  };

  const approveOrder = async (orderId: string): Promise<PayPalCapture> => {
    try {
      const response = await axios.post<PayPalCapture>(
        `/api/orders/${orderId}/capture`
      );
      return response.data;
    } catch (error: any) {
      console.error("Error approving order", { error });
      throw error;
    }
  };

  const cancelOrder = async (orderId: string) => {
    try {
      await axios.post(`/api/orders/${orderId}/cancel`);
    } catch (error: any) {
      console.error("Error cancelling order", { error });
      throw error;
    }
  };

  const getOrder = async (
    orderId: string
  ): Promise<{ product: Product; discount: number }> => {
    try {
      const response = await axios.get<{ product: Product; discount: number }>(
        `/api/orders/${orderId}`
      );
      return response.data;
    } catch (error: any) {
      console.error("Error getting order", { error });
      throw error;
    }
  };

  const verifyUserPayment = async (email: string) => {
    try {
      await axios.post(`/api/order/verify`, { email });
    } catch (error: any) {
      throw error;
    }
  };

  return {
    approveOrder,
    cancelOrder,
    createOrder,
    getOrder,
    verifyUserPayment,
    showRepositoryPaymentSideBar,
  };
}
