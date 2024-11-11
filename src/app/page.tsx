"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Rocket,
  Layers,
  Server,
  CreditCard,
  Move3D,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { montserrat } from "@/lib/fontUtils";
import Link from "next/link";
import { cn } from "../lib/utils";
import FAQSection from "./faq";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ViewTemplatesButton = () => (
  <Button
    asChild
    className="w-64 h-12 px-8 py-3 font-bold text-lg bg-primary hover:bg-primary/90 transition-colors"
  >
    <Link href="/gallery" className="h-fit w-fit">
      <Rocket className="h-6 w-6" />
      View Templates
    </Link>
  </Button>
);

export default function Component() {
  return (
    <div
      className={cn(
        "flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
        montserrat.className
      )}
    >
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-800 shadow-md">
        <a className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="ml-2 font-bold text-primary">BuildQuick</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            About
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-10">
                <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center">
                  Launch your startup
                  <span className="whitespace-nowrap relative mx-auto">
                    <span className="mr-3 sm:mr-4 md:mr-5">in minutes,</span>
                    <span className="relative whitespace-nowrap">
                      <span className="absolute bg-accent -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 bg-yellow-300"></span>
                      <span className="relative text-transparent bg-clip-text bg-accent-foreground">
                        not days
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl dark:text-gray-400">
                  Turn your idea into a fully functional web app with just a few
                  clicks.
                </p>
              </div>
              <ViewTemplatesButton />
            </motion.div>
          </div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <motion.div
              className="grid gap-6 items-center"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                    How It Works
                  </h2>
                  <p className="max-w-[600px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
                    Our simple process gets you from idea to launch in no time.
                  </p>
                </div>
                <div className="w-full max-w-full space-y-4 mx-auto">
                  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {[1, 2, 3].map((step) => (
                      <motion.div
                        key={step}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="min-h-[8.5rem] border-2 border-primary/20 hover:border-primary/50 transition-colors">
                          <CardHeader className="pb-2">
                            <CardTitle className="md:text-xl text-primary">
                              {step === 1 && "1. Choose Template"}
                              {step === 2 && "2. Provide Details"}
                              {step === 3 && "3. Get Your Codebase"}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm md:text-base text-gray-900 dark:text-gray-400">
                              {step === 1 &&
                                "Select from our curated collection of landing page templates."}
                              {step === 2 &&
                                "Tell us about your core feature in 255 words or less."}
                              {step === 3 &&
                                "Receive a fully equipped code repository you can tweak and deploy on your own terms."}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Build with Cutting-Edge Technologies
                </h2>
                <p className="max-w-[600px] text-gray-800 mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Ensure your landing page is fast, responsive, and reliable
                  with the latest web technologies.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  {
                    icon: Rocket,
                    title: "React (TS) & Next.js",
                    description:
                      "High performance and SEO-friendly frameworks.",
                  },
                  {
                    icon: Code,
                    title: "Tailwind CSS",
                    description: "Rapid styling with utility-first CSS.",
                  },
                  {
                    icon: Move3D,
                    title: "Framer Motion",
                    description: "Create smooth, captivating animations.",
                  },
                  {
                    icon: Layers,
                    title: "shadcn/ui",
                    description: "Modern, customizable UI components.",
                  },
                  {
                    icon: Layers,
                    title: "Prisma",
                    description: "Advanced ORM for TypeScript and Node.js.",
                  },
                  {
                    icon: Server,
                    title: "Supabase or MongoDB",
                    description: "Flexible, scalable database options.",
                  },
                  {
                    icon: Mail,
                    title: "MailGun",
                    description: "Send emails with ease using MailGun.",
                  },
                  {
                    icon: CreditCard,
                    title: "Payment Integration",
                    description: "Accept payments securely with PayPal.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="md:min-h-[176px]"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2">
                        <item.icon className="h-8 w-8 mb-4 mx-auto text-primary" />
                        <CardTitle className="text-primary">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-800 dark:text-gray-400">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <FAQSection />

        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Validating Your Idea Today
                </h2>
                <ViewTemplatesButton />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-800 dark:text-gray-400">
          © 2023 BuildQuick. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:text-primary transition-colors"
            href="/tos"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:text-primary transition-colors"
            href="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
