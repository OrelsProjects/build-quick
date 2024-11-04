"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Clock, Zap, BarChart } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function SocialProofGenerator() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image
            src="/placeholder.svg"
            alt="Logo"
            width={150}
            height={40}
            className="w-auto h-8"
          />
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#features"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-blue-600 hover:text-blue-800"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#demo" className="text-blue-600 hover:text-blue-800">
                  Request Demo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              {...fadeInUp}
            >
              Streamline Your Support with Reusable Macros
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto"
              {...fadeInUp}
            >
              Empower your customer support team with efficient, consistent
              responses using our macro system.
            </motion.p>
            <motion.div {...fadeInUp}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
                  title: "Reusable Responses",
                  description:
                    "Create and manage a library of pre-written responses for common inquiries.",
                },
                {
                  icon: <Clock className="h-8 w-8 text-blue-600" />,
                  title: "Time-Saving",
                  description:
                    "Significantly reduce response time by quickly inserting relevant macros.",
                },
                {
                  icon: <Zap className="h-8 w-8 text-blue-600" />,
                  title: "Consistency",
                  description:
                    "Ensure consistent messaging across your support team.",
                },
                {
                  icon: <BarChart className="h-8 w-8 text-blue-600" />,
                  title: "Performance Tracking",
                  description:
                    "Monitor macro usage and effectiveness to optimize your support process.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {feature.icon}
                        <span>{feature.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Create Macros",
                  description:
                    "Build a library of reusable responses for common customer inquiries.",
                },
                {
                  step: 2,
                  title: "Insert Efficiently",
                  description:
                    "Quickly search and insert relevant macros while responding to tickets.",
                },
                {
                  step: 3,
                  title: "Analyze & Optimize",
                  description:
                    "Track macro usage and effectiveness to continually improve your support process.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">See It in Action</h2>
                <p className="text-gray-600 mb-6">
                  Watch how our macro system simplifies and accelerates your
                  support workflow, ensuring consistent and efficient responses.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Watch Demo Video
                </Button>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg"
                  alt="Product Demo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="demo" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Streamline Your Support?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Schedule a demo today and see how our macro system can transform
              your customer support efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/placeholder.svg"
                alt="Logo"
                width={120}
                height={30}
                className="w-auto h-6 mb-4"
              />
              <p className="text-gray-400">
                Empowering support teams with efficient macro systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-gray-400 hover:text-white">
                    Request Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: info@supportmacros.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Support Macro System. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
