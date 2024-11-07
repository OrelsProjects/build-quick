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
import { useCustomRouter } from "@/lib/hooks/useCustomRouter";
import { Loader2 } from "lucide-react";

export default function PurchaseConfirmationPage() {
  const searchParams = useSearchParams();
  const router = useCustomRouter();
  const { verifyUserPayment } = usePayments();

  const loading = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userVerified, setUserVerified] = useState(false);

  const email = useMemo(
    () => decodeURI(searchParams.get("to") || ""),
    [searchParams]
  );

  useEffect(() => {
    if (loading.current) return;
    loading.current = true;
    setIsLoading(true);

    const email = decodeURI(searchParams.get("to") || "");
    console.log("Email", email);
    if (!email) {
      console.log("No email found in query params");
      router.push("/404");
    }

    console.log("about to verify user payment");

    verifyUserPayment(email)
      .then(() => {
        setUserVerified(true);
      })
      .catch(() => {
        // router.push("/404");
        console.log("Error verifying user payment");
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
        "min-h-screen  bg-gray-50 flex flex-col gap-4 items-center justify-center p-4",
        inter.className
      )}
    >
      <Card className="w-full max-w-md text-center relative">
        <DotLottieReact
          src="/celebration.lottie"
          autoplay
          loop={false}
          className="absolute inset-0 !w-full !h-full mx-auto mb-4 z-20"
        />
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            You&apos;re all set!
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-xl mb-4">Your purchase went through smoothly!</p>
          <p className="text-gray-600 mb-6">
            We&apos;ve sent a confirmation email to <strong>{email}</strong>.
            Head over to your inbox for all the juicy details.
          </p>
          <div
            className="bg-sky-100 border-l-4 border-sky-300 text-sky-700 p-4 mb-6 max-w-md z-0 rounded-md"
            role="alert"
          >
            <p className="font-bold">Quick Tip:</p>
            <p>
              Emails sometimes play hide-and-seek—if you don&apos;t spot ours in
              your inbox, be sure to check your spam or junk folder!
            </p>
          </div>
        </CardContent>
        <CardFooter className="relative flex justify-center z-20">
          <Button onClick={() => (window.location.href = "/")}>
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
