"use client";

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

const backgroundVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%"],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const ViewTemplatesButton = () => (
  <Button
    asChild
    className="w-64 h-12 px-8 py-3 font-bold text-lg bg-gradient-to-l from-primary to-primary/40 hover:bg-primary/90 transition-colors text-primary-foreground"
  >
    <Link
      href="/gallery"
      className="h-fit w-fit flex items-center justify-center gap-2"
    >
      <Rocket className="h-6 w-6" />
      View Templates
    </Link>
  </Button>
);

export default function Component() {
  return (
    <div
      className={cn(
        "flex flex-col min-h-screen bg-background text-foreground",
        montserrat.className
      )}
    >
      <header className="px-4 lg:px-6 h-14 flex items-center bg-card shadow-md">
        <a className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="ml-2 font-bold text-primary">BuildQuick</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById("how-it-works")?.scrollIntoView({
                block: "center",
                behavior: "smooth",
              });
            }}
          >
            How does it work?
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById("Features")?.scrollIntoView({
                block: "center",
                behavior: "smooth",
              });
            }}
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document?.getElementById("FAQ")?.scrollIntoView({
                block: "center",
                behavior: "smooth",
              });
            }}
          >
            FAQ
          </a>
        </nav>
      </header>

      <motion.main
        className="flex-1 bg-gradient-to-tl from-primary/20 to-secondary/40 bg-cover"
        variants={backgroundVariants}
        animate="animate"
      >
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
                <h1 className="font-extrabold text-3xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center">
                  Launch your startup
                  <span className="whitespace-nowrap relative mx-auto">
                    <span className="mr-3 sm:mr-4 md:mr-5">in minutes,</span>
                    <span className="relative whitespace-nowrap">
                      <motion.span
                        // Animate fill, as if it starts from the left and fills all the way to the right. Anchor - left
                        initial={{ scaleX: 0, transformOrigin: "0 50%" }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.75 }}
                        className="absolute -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 bg-accent rounded-sm"
                      ></motion.span>
                      <span className="relative text-transparent bg-clip-text bg-accent-foreground">
                        not days
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Turn your idea into a fully functional web app with just a few
                  clicks.
                </p>
              </div>
              <ViewTemplatesButton />
            </motion.div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-card"
        >
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
                  <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-primary">
                    How It Works
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
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
                        <Card className="min-h-[8.5rem] border border-border hover:border-primary transition-colors bg-card">
                          <CardHeader className="pb-2">
                            <CardTitle className="md:text-xl text-primary dark:text-foreground">
                              {step === 1 && "1. Choose Template"}
                              {step === 2 && "2. Provide Details"}
                              {step === 3 && "3. Get Your Codebase"}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm md:text-base text-foreground/90">
                              {step === 1 &&
                                "Select a landing page template you like."}
                              {step === 2 &&
                                "Tell us about your core feature in 255 words or less."}
                              {step === 3 &&
                                "Get your repository link and deploy it!"}
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
        <section
          id="Features"
          className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-transparent"
        >
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
                  Build with the best technologies
                </h2>
                <p className="max-w-[600px] text-muted-foreground mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                    <Card className="h-full hover:shadow-lg transition-shadow bg-card text-card-foreground">
                      <CardHeader className="pb-2">
                        <item.icon className="h-8 w-8 mb-4 mx-auto text-primary" />
                        <CardTitle className="text-primary">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
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

        <FAQSection className="bg-background" />

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
              <div className="space-y-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start validating your idea today
                </h2>
                <ViewTemplatesButton />
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border bg-card">
        <p className="text-xs text-muted-foreground">
          © 2024 BuildQuick. All rights reserved.
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
