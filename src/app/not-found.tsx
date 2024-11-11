"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, MapPin, Mail, Copy } from "lucide-react";

export default function NotFound() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  const checkoutStatus = useMemo(
    () => searchParams.get("checkout"),
    [searchParams]
  );
  const toEmail = useMemo(() => searchParams.get("to"), [searchParams]);

  const isCheckoutFailed = checkoutStatus === "failed";
  const supportEmail = "orelsmail@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          {isCheckoutFailed ? (
            <Mail className="h-24 w-24 text-blue-500 animate-pulse" />
          ) : (
            <MapPin className="h-24 w-24 text-blue-500 animate-bounce" />
          )}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          {isCheckoutFailed
            ? "Oops! Something Went Wrong"
            : "Oops! Page Not Found"}
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          {isCheckoutFailed
            ? "We're having trouble verifying your payment. Don't worry, we're looking into it."
            : "It seems you've wandered off the beaten path. Don't worry, even the best explorers get lost sometimes!"}
          <p>
            {isCheckoutFailed
              ? "In the meanwhile, check your inbox to see if you were charged."
              : ""}
          </p>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/" passHref>
            <Button className="text-lg px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Return Home</span>
            </Button>
          </Link>
          {isCheckoutFailed && (
            <Link
              href={`mailto:${supportEmail}?subject=Checkout%20Failed&body=Hello,%20I'm%20having%20trouble%20with%20my%20payment%20verification.%20Can%20you%20please%20help?`}
            >
              <Button className="text-lg px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Contact Support</span>
              </Button>
            </Link>
          )}
        </div>
        {isCheckoutFailed && (
          <div className="mt-4 text-gray-500">
            <p>If the email link doesn&apos;t work, please contact me at:</p>
            <div className="flex items-center justify-center mt-2">
              <span className="font-medium">{supportEmail}</span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            {copied && (
              <p className="text-green-500 mt-2" aria-live="polite">
                Email copied to clipboard!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
