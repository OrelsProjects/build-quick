"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import PaymentButtons from "@/components/ui/paymentButtons";
import usePayments from "@/lib/hooks/usePayments";
import { OnApproveData } from "@/models/payment";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { inter } from "@/lib/fontUtils";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { useCustomRouter } from "@/lib/hooks/useCustomRouter";

const planId = process.env.NEXT_PUBLIC_EARLY_BIRD_PRODUCT_ID as string;

const features = [
  "React project with TypeScript and NextJS",
  "TailwindCSS for styling with beautiful UI using Shadcn components",
  "Prisma ORM with MongoDB/Supabase database",
  "NextAuth for authentication",
  "Framer Motion for animations",
  "PayPal integration for payments",
  "Posthog for advanced analytics and session records",
];

const bonuses = [
  "A written guide to help you get started",
  "A full-length video course explaining how to build this project from scratch",
];

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useCustomRouter();
  const loadingFetchOrder = useRef(false);
  const [error, setError] = React.useState<string | null>(null);
  const [productItem, setProductItem] = React.useState<{
    product: Product;
    discount: number;
  } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [email, setEmail] = React.useState(
    decodeURI(searchParams.get("to") || "")
  );

  const {
    approveOrder,
    cancelOrder,
    createOrder,
    getOrder,
    verifyUserPayment,
  } = usePayments();

  const fetchOrder = async () => {
    if (loadingFetchOrder.current) return;
    loadingFetchOrder.current = true;
    setIsLoading(true);
    try {
      const order = await getOrder(planId);
      setProductItem(order);
    } catch (error) {
      console.error("Error fetching order", { error });
      setError("Failed to load product details. Please try again later.");
    } finally {
      loadingFetchOrder.current = false;
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  useEffect(() => {
    verifyUserPayment(email)
      .then(() => {
        router.push("/checkout/success", {
          preserveQuery: false,
          paramsToAdd: { email },
        });
      })
      .catch(() => {});
  }, []);

  const handleCreateOrder = async () => await createOrder(planId, email);

  const handleApproveOrder = async (data: OnApproveData, actions: any) => {
    const orderData = await approveOrder(data.orderID);
    const errorDetail = orderData?.details?.[0];
    if (errorDetail?.issue) {
      if (errorDetail.issue === "INSTRUMENT_DECLINED") {
        return actions.restart();
      } else if (errorDetail.issue === "PAYER_CANNOT_PAY") {
        throw new Error("Payer cannot pay");
      } else if (errorDetail) {
        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
      }
    } else {
      router.push("/checkout/success", {
        preserveQuery: false,
        paramsToAdd: { email },
      });
    }
  };

  const product = productItem?.product;

  const discountAmount = product ? product.price * productItem.discount : 0;
  const totalAmount = product ? product.price - discountAmount : 0;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className={cn("min-h-screen bg-gray-50 p-4 md:p-8", inter.className)}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
          <Card
            className={cn(!isEmailValid && "opacity-50 pointer-events-none")}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {isLoading ? (
                <>
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </>
              ) : (
                <>
                  {product && (
                    <div className="flex justify-between items-center">
                      <span className="text-lg">{product?.name}</span>
                      <span className="text-lg font-semibold">
                        {product?.currency} {product.price.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-sm text-green-600">
                    <span>Early bird discount (50%)</span>
                    <span>
                      -{product?.currency} {discountAmount.toFixed(2)}
                    </span>
                  </div>
                </>
              )}
              <Separator />
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                {isLoading ? (
                  <Skeleton className="h-6 w-24" />
                ) : (
                  <span>
                    {product?.currency} {totalAmount.toFixed(2)}
                  </span>
                )}
              </div>
              <Separator />
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Payment Method</h2>
                {isLoading ? (
                  <div className="flex flex-col items-center gap-3">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ) : (
                  <div>
                    <PaymentButtons
                      style={{
                        color: "gold",
                        shape: "rect",
                        layout: "vertical",
                        label: "pay",
                        height: 40,
                      }}
                      createOrder={async (data, actions) => {
                        const order = await handleCreateOrder();
                        return order;
                      }}
                      onApprove={async (data: OnApproveData, actions) => {
                        setError(null);
                        await handleApproveOrder(data, actions);
                      }}
                      onError={(err: any) => {
                        setError(err.message);
                      }}
                      onCancel={async (data) => {
                        if (data.orderID) {
                          await cancelOrder(data.orderID as string);
                        }
                        setError(null);
                      }}
                    />
                    {!isEmailValid && (
                      <p className="text-red-500 mt-2">
                        Please enter a valid email address to proceed with
                        payment.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                What&apos;s Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="features">
                  <AccordionTrigger>Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="bonuses">
                  <AccordionTrigger>Bonuses</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {bonuses.map((bonus, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
