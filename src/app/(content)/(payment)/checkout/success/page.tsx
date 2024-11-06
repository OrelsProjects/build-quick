"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { inter } from "@/lib/fontUtils";
import { cn } from "@/lib/utils";
import usePayments from "@/lib/hooks/usePayments";
import { useCustomRouter } from "../../../../../lib/hooks/useCustomRouter";
import { Loader2 } from "lucide-react";

export default function PurchaseConfirmationPage() {
  const searchParams = useSearchParams();
  const router = useCustomRouter();
  const { verifyUserPayment } = usePayments();

  const loading = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userVerified, setUserVerified] = useState(false);

  const email = useMemo(
    () => decodeURI(searchParams.get("email") || ""),
    [searchParams]
  );

  useEffect(() => {
    if (loading.current) return;
    loading.current = true;
    setIsLoading(true);

    const email = decodeURI(searchParams.get("email") || "");
    if (!email) {
      router.push("/404");
    }

    verifyUserPayment(email)
      .then(() => {
        setUserVerified(true);
      })
      .catch(() => {
        router.push("/404");
      })
      .finally(() => {
        loading.current = false;
        setIsLoading(false);
      });
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Loader2 className="w-12 h-12 mx-auto mt-20 animate-spin" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-gray-50 flex items-center justify-center p-4",
        inter.className
      )}
    >
      <Card className="w-full max-w-md text-center relative">
        <DotLottieReact
          src="/celebration.lottie"
          autoplay
          loop={false}
          className="absolute inset-0 !w-full !h-full mx-auto mb-4 z-0"
        />
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Congratulations!</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-xl mb-4">Your purchase was successful!</p>
          <p className="text-gray-600 mb-6">
            We&apos;ve sent a confirmation email to <strong>{email}</strong>.
            Please check your inbox for further instructions.
          </p>
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6"
            role="alert"
          >
            <p className="font-bold">Important:</p>
            <p>
              If you don&apos;t see the email in your inbox, please check your
              spam folder.
            </p>
          </div>
        </CardContent>
        <CardFooter className="relative flex justify-center z-20">
          <Button onClick={() => (window.location.href = "/")}>
            Return to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
