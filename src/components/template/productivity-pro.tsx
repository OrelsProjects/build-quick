"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart2,
  Clock,
  Users,
  Zap,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function ProductivityPro() {
  const [activeTab, setActiveTab] = useState("timeTracking");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <motion.header
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span className="font-bold">ProductivityPro</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#get-started"
            >
              Get started
            </Link>
          </nav>
        </div>
      </motion.header>
      <main className="flex-1 w-full flex flex-col justify-start items-center">
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-green-50">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Track Work Hours, Boost Productivity
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Empower your team with smart time tracking and productivity
                  insights. No invasive surveillance, just pure performance.
                </p>
              </div>
              <motion.div
                className="space-x-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-green-600 hover:bg-green-700">
                  Start Free Trial
                </Button>
                <Button variant="outline">Schedule Demo</Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-white">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                variants={fadeIn}
              >
                <Users className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">
                  Create Projects & Assign Teams
                </h3>
                <p className="text-gray-500">
                  Easily set up projects and assign your team members to track
                  their progress.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                variants={fadeIn}
              >
                <Clock className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold">Simple Clock In/Out</h3>
                <p className="text-gray-500">
                  Employees use a straightforward interface to log their work
                  hours and breaks.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                variants={fadeIn}
              >
                <BarChart2 className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Analyze & Improve</h3>
                <p className="text-gray-500">
                  Generate visual reports with productivity insights to optimize
                  team performance.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section
          id="features"
          className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-green-50"
        >
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Time Tracking</CardTitle>
                  <CardDescription>
                    Effortlessly log hours with our intuitive interface.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={
                        activeTab === "timeTracking"
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                    >
                      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-lg font-semibold mb-2">
                          Current Task: Website Redesign
                        </h3>
                        <div className="flex justify-between items-center mb-4">
                          <span>Time Elapsed: 2h 15m</span>
                          <Button size="sm" variant="outline">
                            Pause
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <Button
                            className="w-full justify-start"
                            variant="ghost"
                          >
                            <Clock className="mr-2 h-4 w-4" /> Switch Task
                          </Button>
                          <Button
                            className="w-full justify-start"
                            variant="ghost"
                          >
                            <BarChart2 className="mr-2 h-4 w-4" /> View
                            Today&apos;s Summary
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Productivity Dashboard</CardTitle>
                  <CardDescription>
                    Visualize team performance and identify areas for
                    improvement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={
                        activeTab === "dashboard"
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                    >
                      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-lg font-semibold mb-4">
                          Team Productivity Overview
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Design Team</span>
                              <span>85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-green-600 h-2.5 rounded-full"
                                style={{ width: "85%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Development Team</span>
                              <span>92%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: "92%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span>Marketing Team</span>
                              <span>78%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-yellow-500 h-2.5 rounded-full"
                                style={{ width: "78%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 flex justify-center">
              <motion.button
                className="text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none"
                onClick={() =>
                  setActiveTab(
                    activeTab === "timeTracking" ? "dashboard" : "timeTracking"
                  )
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Switch View <ChevronDown className="inline-block ml-1" />
              </motion.button>
            </div>
          </motion.div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-white">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Benefits for Your Business
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <motion.div
                variants={fadeIn}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <motion.div whileHover={pulseAnimation}>
                  <BarChart2 className="h-12 w-12 text-green-500" />
                </motion.div>
                <h3 className="text-xl font-bold">Increased Productivity</h3>
                <p className="text-gray-500">
                  Boost team efficiency by identifying and eliminating
                  time-wasting activities.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <motion.div whileHover={pulseAnimation}>
                  <Users className="h-12 w-12 text-blue-500" />
                </motion.div>
                <h3 className="text-xl font-bold">
                  Better Resource Allocation
                </h3>
                <p className="text-gray-500">
                  Optimize project staffing based on accurate time and
                  productivity data.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <motion.div whileHover={pulseAnimation}>
                  <Clock className="h-12 w-12 text-yellow-500" />
                </motion.div>
                <h3 className="text-xl font-bold">
                  Improved Work-Life Balance
                </h3>
                <p className="text-gray-500">
                  Ensure fair workloads and prevent burnout with insights into
                  work patterns.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-green-50">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div variants={fadeIn}>
                <Card>
                  <CardHeader>
                    <CardTitle>Game-Changer for Our Agency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">
                      &quot;ProductivityPro has revolutionized how we track time
                      and manage projects. Our team&apos;s productivity has
                      soared!&quot;
                    </p>
                    <p className="mt-2 font-semibold">
                      - Sarah J., Creative Director
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card>
                  <CardHeader>
                    <CardTitle>Invaluable Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">
                      &quot;The productivity insights have helped us optimize
                      our workflows and improve our bottom line. Highly
                      recommended!&quot;
                    </p>
                    <p className="mt-2 font-semibold">
                      - Michael T., Small Business Owner
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section
          id="get-started"
          className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-green-600"
        >
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Boost Your Team&apos;s Productivity?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl">
                Join thousands of businesses that have transformed their
                workflow with ProductivityPro.
              </p>
              <motion.form
                className="w-full max-w-md mx-auto flex flex-col gap-2"
                onSubmit={handleSubmit}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow"
                />
                <Button
                  disabled={isLoading || isSubmitted}
                  className="bg-white text-green-600 hover:bg-green-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    "Register to free trial"
                  )}
                </Button>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={pulseAnimation}
            >
              <Zap className="h-6 w-6 text-yellow-500" />
              <span className="font-bold">ProductivityPro</span>
            </motion.div>
            <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
              © 2024 ProductivityPro. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
