"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Loader2,
  CheckCircle,
  Code,
  Rocket,
  Layers,
  Server,
  CreditCard,
  Move3D,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Component() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsCompleted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6" />
          <span className="sr-only">Project Starter</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
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
              className="flex flex-col leading items-center space-y-4 text-center"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Launch Your Project in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Turn your idea into a fully functional web app with just a few
                  clicks. No coding required.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="px-10 py-4 text-lg">
                  <Link href="/gallery">View Templates</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    How It Works
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
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
                        <Card className="min-h-[8.5rem]">
                          <CardHeader className="pb-2">
                            <CardTitle className="md:text-xl">
                              {step === 1 && "1. Choose Template"}
                              {step === 2 && "2. Describe Your Idea"}
                              {step === 3 && "3. Generate & Download"}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                              {step === 1 &&
                                "Select from our curated collection of landing page templates."}
                              {step === 2 &&
                                "Tell us about your core feature in 255 words or less."}
                              {step === 3 &&
                                "We'll create your project and provide a download link."}
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

        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Cutting-Edge Technologies
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Your project will be built with the latest and most powerful
                  web technologies.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* React & Next.js Card */}
                <motion.div
                  className="md:min-h-[176px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <Rocket className="h-8 w-8 mb-4 mx-auto" />
                      <CardTitle>React (TS) & Next.js</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Fast, scalable, and SEO-friendly web apps with strong
                        typing
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* Tailwind CSS Card */}
                <motion.div
                  className="md:min-h-[176px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <svg
                        className="h-8 w-8 mb-4 mx-auto"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        {/* Tailwind CSS SVG Path */}
                        <path d="M12 6.036l-6.95 4.016v7.896L12 21.964l6.95-4.016v-7.896L12 6.036zM5.5 18.5l6.5 3.75 6.5-3.75v-7.5L12 7.25 5.5 11v7.5z" />
                      </svg>
                      <CardTitle>Tailwind CSS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Utility-first CSS for rapid UI development
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  className="md:min-h-[176px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <Move3D className="h-8 w-8 mb-4 mx-auto" />
                      <CardTitle>Framer Motion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Smooth animations and interactive UI
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* shadcn/ui Card */}
                <motion.div
                  className="md:min-h-[176px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <svg
                        className="h-8 w-8 mb-4 mx-auto"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        {/* shadcn/ui SVG Path */}
                        <path d="M12 2L1 7v10l11 5 11-5V7L12 2zm0 2.74l7.61 3.45L12 11.63 4.39 8.19 12 4.74zM3 8.85l8 3.64v6.77l-8-3.64V8.85zm10 10.41v-6.77l8-3.64v6.77l-8 3.64z" />
                      </svg>
                      <CardTitle>shadcn/ui</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Beautiful, accessible UI components
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* Prisma Card with Different Icon */}
                <motion.div
                  className="md:min-h-[176px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <Layers className="h-8 w-8 mb-4 mx-auto" />
                      <CardTitle>Prisma</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Next-generation ORM for Node.js and TypeScript
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* Database Card */}
                <motion.div
                  className="md:min-h-[176px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <Server className="h-8 w-8 mb-4 mx-auto" />
                      <CardTitle>Supabase or MongoDB</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Choose your preferred database solution
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* TypeScript Card */}
                <motion.div
                  className="md:min-h-[176px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <Mail className="h-8 w-8 mb-4 mx-auto" />
                      <CardTitle>MailGun</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Send welcome and confirmation emails with MailGun
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  className="md:min-h-[176px]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <CreditCard className="h-8 w-8 mb-4 mx-auto" />
                      <CardTitle>Payment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Use PayPal for secure payments
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pricing Plans
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose a plan that suits your needs.
                </p>
              </div>
              <div className="container grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-28">
                {["Basic", "Pro", "Enterprise"].map((plan) => (
                  <motion.div
                    key={plan}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="aspect-[4/4]">
                      <CardHeader className="pb-2">
                        <CardTitle>{plan}</CardTitle>
                        <CardDescription>
                          {plan === "Basic" && "$19/month"}
                          {plan === "Pro" && "$49/month"}
                          {plan === "Enterprise" && "Custom Pricing"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                          <li>Feature 1</li>
                          <li>Feature 2</li>
                          <li>Feature 3</li>
                        </ul>
                        <Button className="mt-4">
                          {plan === "Enterprise" ? "Contact Us" : "Buy Now"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section> */}
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 text-center bg-gray-100 dark:bg-gray-800">
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
                  Ready to Get Started?
                </h2>
                <div className="space-x-4">
                  <Button asChild className="px-10 py-4 text-lg">
                    <Link href="/gallery">View Templates</Link>
                  </Button>
                </div>
                {/* <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign up now to be notified when we launch. Be among the first
                  to create your perfect landing page.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-2"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" disabled={isLoading || isCompleted}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </>
                    ) : isCompleted ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Subscribed
                      </>
                    ) : (
                      "Notify Me"
                    )}
                  </Button>
                </form>
               */}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Project Starter. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/tos"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
