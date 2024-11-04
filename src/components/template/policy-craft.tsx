"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, FileText, RefreshCw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PolicyCraft() {
  const [email, setEmail] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold">PolicyCraft</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-green-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-green-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-green-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <motion.section
          className="bg-indigo-900 text-white py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Generate Custom Privacy Policies and Terms
            </h1>
            <p className="text-xl mb-8">
              Simplify legal compliance for your startup with tailored
              documents.
            </p>
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-600 text-white"
            >
              Generate Your Custom Policy
            </Button>
          </div>
        </motion.section>

        <motion.section
          id="how-it-works"
          className="py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Answer Questions",
                  description:
                    "Provide information about your data collection and compliance needs.",
                },
                {
                  icon: FileText,
                  title: "Generate Policy",
                  description:
                    "We create a tailored privacy policy and terms of service.",
                },
                {
                  icon: RefreshCw,
                  title: "Customize",
                  description:
                    "Further refine your documents with specific clauses.",
                },
                {
                  icon: Download,
                  title: "Download & Use",
                  description:
                    "Get your documents ready for use on your website.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <step.icon className="w-12 h-12 mx-auto mb-4 text-green-700" />
                  <h3 className="font-serif font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="features"
          className="bg-gray-100 py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Customized to Your Business",
                "GDPR & CCPA Compliant",
                "Easy to Understand Language",
                "Regular Updates",
                "Embeddable on Your Website",
                "24/7 Customer Support",
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-serif font-bold mb-2">{feature}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="testimonials"
          className="py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  company: "Tech Startup",
                  quote:
                    "PolicyCraft simplified our compliance process. Highly recommended!",
                },
                {
                  name: "Jane Smith",
                  company: "E-commerce Platform",
                  quote:
                    "The customization options are fantastic. It's like having a legal team on demand.",
                },
                {
                  name: "Mike Johnson",
                  company: "SaaS Company",
                  quote:
                    "Regular updates give us peace of mind in the ever-changing legal landscape.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="bg-indigo-900 text-white py-20 gray-900"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ready to Simplify Your Legal Compliance?
            </h2>
            <p className="text-xl mb-8">
              Get started with PolicyCraft today and ensure your business is
              protected.
            </p>
            <form
              className="max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-green-700 hover:bg-green-600 text-white"
                >
                  Get Started
                </Button>
              </div>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 PolicyCraft. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
