"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CheckCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "../lib/utils";
import Link from "next/link";

export interface PaymentSideBarProps {
  open: boolean;
  email: string;
  onOpenChange: (open: boolean) => void;
}

export const features = [
  "React project with TypeScript and NextJS",
  "TailwindCSS for styling",
  "Prisma ORM",
  "MongoDB/Supabase database",
  "NextAuth for authentication",
  "Framer Motion for animations",
  "PayPal integration for payments",
  "Beautiful UI using Shadcn components",
  "Posthog for advanced analytics and session records",
];

export const bonuses = [
  "A written guide to help you get started",
  "A full-length video course explaining how to build this project from scratch",
];

export default function PaymentSideBar({
  open,
  email,
  onOpenChange,
}: PaymentSideBarProps) {
  const FullRefund = ({ className }: { className?: string }) => (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-base font-semibold text-blue-900", className)}
    >
      💸 Full Refund Guarantee: If you don&apos;t receive the repository within
      30 days, we&apos;ll issue a complete refund—no questions asked.
    </motion.p>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[400px] sm:w-6/12 sm:max-w-5xl overflow-auto scroll-"
      >
        <SheetHeader>
          <SheetTitle>All-in-One React Project Package</SheetTitle>
          <SheetDescription>
            Get started with a fully-featured React project in minutes!
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">What&apos;s Included:</h3>
            <h5 className="mb-2 text-gray-600">A full repository with:</h5>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <h3 className="text-lg font-semibold mb-2">Bonuses:</h3>
            <ul className="space-y-2">
              {bonuses.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index === 0 ? 1.6 : 1 * (index + 1) }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 * bonuses.length }}
            className="p-4 rounded-md bg-blue-50 border border-blue-200"
          >
            <h3 className="text-lg font-semibold mb-2">One Last Thing:</h3>
            <p className="text-base font-medium">
              This product is actively in development. By purchasing today,
              you&apos;re not only supporting the final stages of development
              but also securing early access price and awesome benefits in
              future products!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 * bonuses.length }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Early Bird Offer:</h3>
              <Badge variant="secondary" className="text-sm">
                Limited Time
              </Badge>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-white text-sm font-medium">
                    Regular Price
                  </p>
                  <p className="text-white text-2xl font-bold line-through">
                    $50.00
                  </p>
                </div>
                <Sparkles className="text-yellow-300 h-8 w-8" />
              </div>
              <div className="mb-6">
                <p className="text-white text-sm font-medium">
                  Early Bird Price
                </p>
                <p className="text-white text-4xl font-bold">$24.99</p>
              </div>
              <Button
                className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 text-lg font-semibold py-6"
                asChild
              >
                <Link
                  href={`/checkout/${email ? `?to=${email}` : ""}`}
                  onClick={() => {
                    onOpenChange(false);
                  }}
                >
                  Get Early Access Now
                </Link>
              </Button>
              {email && (
                <p className="text-gray-300 text-xs mt-1">
                  A confirmation will be sent to{" "}
                  <span className="underline">{email}</span>
                </p>
              )}
            </div>
            <p className="text-center text-sm text-gray-600">
              🔒 Secure payment powered by PayPal
            </p>
            <FullRefund />
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
