"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Edit,
  FileInput,
  Rocket,
  ListChecks,
  BellRing,
  DownloadCloud,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "../../lib/utils";

export default function BuildQuickLanding() {
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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Build Quick
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="outline"
            className="text-white border-white bg-transparent hover:bg-white hover:text-purple-500"
          >
            Login
          </Button>
        </motion.div>
      </nav>

      <main className="container mx-auto px-6 py-8 pb-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-4"
          >
            Launch Your Project Effortlessly
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl mb-8">
            Choose a page template, type your product&apos;s name, and write
            your core idea.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-purple-500 hover:bg-purple-100"
            >
              Start for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white bg-transparent hover:bg-white hover:text-purple-500"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              icon: LayoutGrid,
              title: "Choose Templates",
              description:
                "Select from a variety of ready-to-use page templates.",
            },
            {
              icon: Edit,
              title: "Customizable Fields",
              description: "Type your product name and core idea with ease.",
            },
            {
              icon: Rocket,
              title: "Quick Setup",
              description: "Launch your project within minutes, effortlessly.",
            },
            {
              icon: ListChecks,
              title: "Feature Highlights",
              description: "Add and showcase your product&apos;s top features.",
            },
            {
              icon: BellRing,
              title: "Notifications",
              description: "Stay informed with important launch updates.",
            },
            {
              icon: DownloadCloud,
              title: "Download Ready",
              description:
                "Get a ready-to-ship project download with one click.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-30 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            Ready to launch your project?
          </motion.h2>
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="max-w-xs bg-white bg-opacity-20 text-white placeholder:text-gray-100/70 border-white"
            />
            <Button
              type="submit"
              disabled={isLoading || isCompleted}
              className={cn("bg-white text-purple-500 hover:bg-purple-100", {
                "px-10": !isLoading && !isCompleted,
              })}
            >
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
          </motion.form>
        </motion.div>
      </main>

      <footer className="container mx-auto p-6 text-center">
        <p>&copy; 2024 Build Quick. All rights reserved.</p>
      </footer>
    </div>
  );
}
