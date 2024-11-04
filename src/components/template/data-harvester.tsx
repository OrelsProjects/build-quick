import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointerClick, FileDown, Key } from "lucide-react";
import { motion } from "framer-motion";

export default function DataHarvester() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-[10%] top-[20%] h-[300px] w-[300px] text-purple-300 opacity-20"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="20"
            stroke="currentColor"
            fill="none"
          />
        </svg>
        <svg
          className="absolute right-[15%] bottom-[20%] h-[400px] w-[400px] text-indigo-300 opacity-20"
          viewBox="0 0 100 100"
        >
          <rect
            width="80"
            height="80"
            x="10"
            y="10"
            strokeWidth="20"
            stroke="currentColor"
            fill="none"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          className="container mx-auto px-4 py-6 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-bold">DataHarvest</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-4 py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">Scrape Data Without Code</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Easily extract data from any website with just a few clicks. Perfect
            for researchers, analysts, and businesses.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Start Scraping for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MousePointerClick className="h-12 w-12 mb-4 text-indigo-300" />
              <h3 className="text-xl font-semibold mb-2">
                Point and Click Interface
              </h3>
              <p>
                Simply highlight the data you want to scrape. No coding
                required.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FileDown className="h-12 w-12 mb-4 text-indigo-300" />
              <h3 className="text-xl font-semibold mb-2">
                Multiple Export Formats
              </h3>
              <p>Export your data in CSV or JSON format for easy analysis.</p>
            </motion.div>
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Key className="h-12 w-12 mb-4 text-indigo-300" />
              <h3 className="text-xl font-semibold mb-2">API Key Management</h3>
              <p>
                Easily set up and manage API keys for authenticated scraping.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          id="how-it-works"
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-6">
                {[...Array(5)].map((_, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white text-purple-600 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p>Step description goes here...</p>
                  </motion.li>
                ))}
              </ol>
            </div>
            <motion.div
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center text-gray-400">
                [Product Demo Video]
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="container mx-auto px-4 py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Scraping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already saving time and resources
            with our no-code web scraping tool.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Sign Up for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              Schedule a Demo
            </Button>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="border-t border-white/20 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center text-sm">
            © 2024 DataHarvest. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
