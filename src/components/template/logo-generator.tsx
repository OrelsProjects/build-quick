"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, Type, Download, Share2 } from "lucide-react";

export default function LogoGenerator() {
  const [brandDescription, setBrandDescription] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-4 py-20 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-5xl font-bold mb-6" variants={itemVariants}>
          Create Your Perfect Logo in Minutes
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-gray-600"
          variants={itemVariants}
        >
          Transform your brand identity with our AI-powered logo generator
        </motion.p>
        <motion.div className="max-w-md mx-auto" variants={itemVariants}>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Describe your brand..."
              value={brandDescription}
              onChange={(e) => setBrandDescription(e.target.value)}
              className="flex-grow"
            />
            <Button>
              Generate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </motion.section>

      {/* How it Works Section */}
      <motion.section
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Type,
                title: "Describe Your Brand",
                description:
                  "Input your brand name, industry, and desired style",
              },
              {
                icon: Palette,
                title: "Choose Your Style",
                description: "Select color palette and font style",
              },
              {
                icon: Download,
                title: "Download Your Logo",
                description: "Get vector files ready for print and web",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Logo Showcase */}
      <motion.section
        className="py-20 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Logos Created by Our Users
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gray-200 rounded-md flex items-center justify-center">
                      <span className="text-gray-400">Logo {index + 1}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Features
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Generation",
                description:
                  "Create unique logos based on your brand description",
              },
              {
                title: "Customization Options",
                description:
                  "Fine-tune your logo with easy-to-use editing tools",
              },
              {
                title: "Multiple File Formats",
                description:
                  "Download your logo in various formats for all your needs",
              },
              {
                title: "Social Media Ready",
                description:
                  "Get your logo optimized for different social platforms",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-20 bg-blue-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Create Your Perfect Logo?
          </motion.h2>
          <motion.p className="text-xl mb-8" variants={itemVariants}>
            Join thousands of satisfied customers and bring your brand to life
            today.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" variant="secondary">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
