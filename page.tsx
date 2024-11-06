"use client";

import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import lottie from 'lottie-web';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { inter } from "@/lib/fontUtils";
import { cn } from "@/lib/utils";

export default function PurchaseConfirmationPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/celebration-animation.json' // Make sure to add this JSON file to your public folder
      });
    }
  }, []);

  return (
    <div className={cn("min-h-screen bg-gray-50 flex items-center justify-center p-4", inter.className)}>
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div ref={animationContainer} className="w-64 h-64 mx-auto mb-4" />
          <CardTitle className="text-3xl font-bold">Congratulations!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-4">Your purchase was successful!</p>
          <p className="text-gray-600 mb-6">
            We've sent a confirmation email to <strong>{email}</strong>. Please check your inbox for further instructions.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
            <p className="font-bold">Important:</p>
            <p>If you don't see the email in your inbox, please check your spam folder.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => window.location.href = '/'}>Return to Home</Button>
        </CardFooter>
      </Card>
    </div>
  );
}