import axios from "axios";
import {
  CreateSubscriptionPlan,
  OnApproveData,
  PayPalCapture,
  PayPalCreate,
  PayPalSubscriptionPlan,
  PayPalSubscriptionResource,
} from "@/models/payment";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_SECRET as string;
const PAYPAL_BASE_URL = process.env.PAYPAL_BASE_URL as string;

/**
 * Generates an access token for PayPal API requests.
 * This token is required to authenticate PayPal API calls.
 * 
 * Use this function whenever you need to make an authenticated request to any PayPal API endpoint.
 * @returns {Promise<string>} A Promise that resolves to the PayPal access token.
 * @throws Will throw an error if API credentials are missing or if the request fails.
 */
const generateAccessToken = async (): Promise<string> => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
    ).toString("base64");

    const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
    throw error;
  }
};

/**
 * Verifies the status of a PayPal order by checking if it has been approved.
 * 
 * This function should be called in the `onApprove` callback after a user completes payment.
 * It ensures that the order was processed successfully before proceeding with additional actions such as fulfillment.
 * 
 * @param {OnApproveData} data - Data from the onApprove callback, containing the PayPal order ID.
 * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating if the order is approved.
 */
export const verifyResponse = async (data: OnApproveData): Promise<boolean> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v2/checkout/orders/${data.orderID}`;

  const response = await axios.get<PayPalCapture>(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data.status === "APPROVED";
};

/**
 * Verifies the signature of a webhook event to ensure it is legitimately from PayPal.
 * 
 * This function is essential when processing PayPal webhooks to confirm the event's authenticity before acting on it.
 * Use this function in your webhook handler to validate incoming webhook events.
 * 
 * @param {Headers} headers - The HTTP headers from the webhook request.
 * @param {any} body - The body of the webhook event, representing the event data.
 * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating if the signature verification is successful.
 */
export const verifyWebhookSignature = async (
  headers: Headers,
  body: any,
): Promise<boolean> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v1/notifications/verify-webhook-signature`;

  const headersValues = Object.fromEntries(headers.entries());

  const requestBody = {
    auth_algo: headersValues["paypal-auth-algo"],
    cert_url: headersValues["paypal-cert-url"],
    transmission_id: headersValues["paypal-transmission-id"],
    transmission_sig: headersValues["paypal-transmission-sig"],
    transmission_time: headersValues["paypal-transmission-time"],
    webhook_id: process.env.PAYPAL_WEBHOOK_ID, // Ensure this is set with the correct webhook ID
    webhook_event: body,
  };

  const response = await axios.post(url, requestBody, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data.verification_status === "SUCCESS";
};

/**
 * Retrieves the details of a specific PayPal subscription.
 * 
 * Use this function to fetch detailed information about an existing subscription, such as status, billing cycles, and subscriber information.
 * This is useful when you need to display subscription details or handle subscription logic.
 * 
 * @param {string} subscriptionId - The ID of the subscription to retrieve.
 * @returns {Promise<PayPalSubscriptionResource>} A Promise that resolves to the subscription resource data.
 */
export const getSubscription = async (subscriptionId: string): Promise<PayPalSubscriptionResource> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v1/billing/subscriptions/${subscriptionId}`;

  const response = await axios.get<PayPalSubscriptionResource>(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

/**
 * Retrieves details of a specific PayPal subscription plan by its ID.
 * 
 * Use this function when you need to access the information about a subscription plan, such as pricing and billing details.
 * This can be helpful for displaying plan options or verifying the structure of an existing plan.
 * 
 * @param {string} planId - The ID of the subscription plan to retrieve.
 * @returns {Promise<PayPalCreate>} A Promise that resolves to the subscription plan details.
 */
export const getSubscriptionPlan = async (planId: string): Promise<PayPalCreate> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v1/billing/plans/${planId}`;

  const response = await axios.get<PayPalCreate>(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

/**
 * Retrieves the details of a PayPal order.
 * 
 * This function is useful for getting comprehensive information about an order, such as the buyer's details, items purchased, and payment status.
 * It can be used in the `onApprove` or `onSuccess` callback to verify order details before fulfilling the order.
 * 
 * @param {string} orderId - The ID of the order to retrieve.
 * @returns {Promise<PayPalCapture>} A Promise that resolves to the order details.
 */
export const getOrder = async (orderId: string): Promise<PayPalCapture> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

/**
 * Creates a new subscription plan in PayPal.
 * 
 * Use this function when you need to programmatically create subscription plans for users to subscribe to.
 * This is typically used during the setup phase of a service that offers subscription-based payments.
 * 
 * @param {CreateSubscriptionPlan} item - The subscription plan data, including product ID, billing cycles, and payment preferences.
 * @returns {Promise<PayPalCreate>} A Promise that resolves to the created subscription plan details.
 */
export const createSubscriptionPlan = async (item: CreateSubscriptionPlan): Promise<PayPalCreate> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v2/billing/plans`;

  const payload = {
    product_id: item.product_id,
    name: item.name,
    description: item.description,
    billing_cycles: item.billing_cycles,
    payment_preferences: item.payment_preferences,
    taxes: item.taxes,
  };

  const response = await axios.post<PayPalCreate>(url, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

/**
 * Lists all existing PayPal subscription plans, sorted by creation time.
 * 
 * Use this function to retrieve and display all available subscription plans.
 * This can be used in the UI for users to select their preferred subscription plan.
 * 
 * @returns {Promise<PayPalSubscriptionPlan[]>} A Promise that resolves to an array of subscription plans.
 */
export const listSubscriptionPlans = async (): Promise<PayPalSubscriptionPlan[]> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v1/billing/plans?sort_by=create_time&sort_order=desc`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      Prefer: "return=representation",
    },
  });

  return response.data;
};

/**
 * Creates a new product in PayPal for subscriptions.
 * 
 * This function is called when you need to set up a new product that users can subscribe to. 
 * It defines the product name, type, and optional image and home URLs.
 * 
 * @param {object} item - The product data, including name, description, type, and optional image and home URLs.
 * @returns {Promise<PayPalCreate>} A Promise that resolves to the created product details.
 */
export const createSubscription = async (item: {
  name: string;
  description?: string;
  type: "fixed" | "infinite";
  imageUrl?: string;
  homeUrl?: string;
}): Promise<PayPalCreate> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v1/catalogs/products`;

  const payload = {
    name: item.name,
    description: item.description,
    type: item.type,
    category: "SOFTWARE", // Adjust this as necessary for other categories
    image_url: item.imageUrl,
    home_url: item.homeUrl,
  };

  const response = await axios.post<PayPalCreate>(url, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

/**
 * Creates a new PayPal order for payment capture.
 * 
 * This function is called when initiating a one-time payment. The order can be passed to the front-end for further processing or checkout.
 * 
 * @param {object} item - The order data, including currency and value of the purchase.
 * @returns {Promise<PayPalCreate>} A Promise that resolves to the created order details.
 */
export const createOrder = async (item: {
  currency: string;
  value: number;
}): Promise<PayPalCreate> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v2/checkout/orders`;

  const payload = {
    intent: "CAPTURE", // Specifies that the payment will be captured immediately after the order is approved.
    purchase_units: [
      {
        amount: {
          currency_code: item.currency,
          value: item.value,
        },
      },
    ],
  };

  const response = await axios.post<PayPalCreate>(url, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

/**
 * Captures an authorized PayPal order to complete the transaction.
 * 
 * Use this function after an order has been approved by the user to capture the payment and complete the purchase.
 * This function is essential for ensuring the funds are moved from the buyer's account to the seller's account.
 * 
 * @param {string} orderID - The ID of the order to capture.
 * @returns {Promise<PayPalCapture>} A Promise that resolves to the captured order details, confirming the transaction.
 */
export const captureOrder = async (orderID: string): Promise<PayPalCapture> => {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await response.json();
};
