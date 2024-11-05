import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBooster() {
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
          <div className="text-2xl font-bold">TrustBooster</div>
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
          <h1 className="text-5xl font-bold mb-6">Boost Trust on Your E-commerce</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Integrate widgets like recent purchases, visitor counts, and live testimonials to build confidence among your shoppers.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Generate Widgets Now
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
              <ShoppingBag className="h-12 w-12 mb-4 text-indigo-300" />
              <h3 className="text-xl font-semibold mb-2">
                Recent Purchases
              </h3>
              <p>Showcase real-time purchase updates to instill confidence among new customers.</p>
            </motion.div>
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Users className="h-12 w-12 mb-4 text-indigo-300" />
              <h3 className="text-xl font-semibold mb-2">
                Visitor Counts
              </h3>
              <p>Display live visitor stats to emphasize popularity and trustworthiness.</p>
            </motion.div>
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="h-12 w-12 mb-4 text-indigo-300" />
              <h3 className="text-xl font-semibold mb-2">
                Live Testimonials
              </h3>
              <p>Feature authentic customer reviews to enhance credibility instantly.</p>
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
                {["Sign Up for Your Account","Choose Your Widgets","Customize to Match Your Brand","Embed Easily Into Your Site","Enjoy Increased Trust!"].map((step, index) => (
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
                    <p>{step}</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Trust?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join countless e-commerce platforms that trust us to increase their credibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Get Started for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              Schedule Your Demo
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
            © 2024 TrustBooster. All rights reserved.
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