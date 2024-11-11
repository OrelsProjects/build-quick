"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  CheckCircle,
  Globe,
  Sliders,
  Code,
  Settings,
  Layout,
  Eye,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AvatarIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";

type Theme = "light" | "dark";

export default function TrustBoost() {
  const [widgetType, setWidgetType] = useState("recent-sales");
  const [showAvatar, setShowAvatar] = useState(true);
  const [theme, setTheme] = useState<Theme>("light");

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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Custom styles for light and dark modes
  const widgetStyles = {
    light: {
      container: "bg-white text-black",
      preview: "bg-gray-100 text-black",
      avatar: "bg-gray-300",
    },
    dark: {
      container: "bg-blue-800 text-gray-300",
      preview: "bg-blue-600 text-white",
      avatar: "bg-gray-700",
    },
  };

  return (
    <div className="min-h-screen bg-indigo-900 text-gray-200">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <motion.div {...fadeInUp} className="text-2xl font-bold text-green-400">
          TrustBoost
        </motion.div>
        <motion.nav {...fadeInUp} className="space-x-4">
          <a
            href="#features"
            className="hover:text-green-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-green-400 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="hover:text-green-400 transition-colors"
          >
            Testimonials
          </a>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold mb-6 text-white">
          Boost Conversions with Social Proof
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
        >
          Generate trust-boosting widgets like recent purchases, visitor counts,
          and live testimonials for your e-commerce site.
        </motion.p>
        <motion.form
          {...fadeInUp}
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          <Input
            type="email"
            required
            placeholder="Enter your email"
            className="w-64 text-indigo-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            disabled={isLoading || isCompleted}
            className={cn(
              "bg-green-400 text-indigo-900 hover:bg-green-500 w-64",
              {
                "px-10": !isLoading && !isCompleted,
              }
            )}
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
              <span className="flex flex-row items-center">
                Get Started <ChevronRight className="ml-2" size={20} />
              </span>
            )}
          </Button>
        </motion.form>
      </section>

      {/* Trust Signals */}
      <motion.section {...fadeInUp} className="bg-indigo-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8 text-white">
            Trusted by Leading E-commerce Brands
          </h2>
          <div className="flex justify-center space-x-8">
            {["Amazon", "Shopify", "Etsy", "eBay", "Walmart"].map((brand) => (
              <motion.div
                key={brand}
                whileHover={{ scale: 1.1 }}
                className="text-green-400 font-bold"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <section id="features" className="container mx-auto py-20">
        <motion.h2
          {...fadeInUp}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Customizable Widgets",
              description: "Tailor widgets to match your brand perfectly.",
            },
            {
              icon: Sliders,
              title: "Real-time Updates",
              description: "Show live data to create urgency and trust.",
            },
            {
              icon: Code,
              title: "Easy Integration",
              description:
                "Simple embed code or React component for quick setup.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-indigo-800 border-green-400">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-indigo-800 py-20">
        <div className="container mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              {[
                "Input your website URL and business type",
                "Choose from suggested widget styles",
                "Customize colors, font, and positioning",
                "Get embed code or React component",
                "Set up API keys to connect with your database",
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="text-green-400 flex-shrink-0" />
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </motion.div>
            <motion.div
              {...fadeInUp}
              className={`p-6 rounded-lg shadow-xl ${widgetStyles[theme].container}`}
            >
              <h3 className="text-2xl font-semibold mb-4">
                Widget Customization
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="widget-type">Widget Type</Label>
                  <Select value={widgetType} onValueChange={setWidgetType}>
                    <SelectTrigger id="widget-type" className="w-full">
                      <SelectValue placeholder="Select widget type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent-sales">Recent Sales</SelectItem>
                      <SelectItem value="visitor-count">
                        Visitor Count
                      </SelectItem>
                      <SelectItem value="testimonials">Testimonials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-avatar">Show Avatar</Label>
                  <Switch
                    id="show-avatar"
                    checked={showAvatar}
                    onCheckedChange={setShowAvatar}
                  />
                </div>
                <div>
                  <Label htmlFor="theme">Theme</Label>
                  <Select
                    value={theme}
                    onValueChange={(value) => {
                      if (value === "light" || value === "dark") {
                        setTheme(value);
                      }
                    }}
                  >
                    <SelectTrigger id="theme" className="w-full">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div
                className={`mt-6 p-4 rounded-lg ${widgetStyles[theme].preview}`}
              >
                <h4 className="text-lg font-semibold mb-2">Preview</h4>
                <div className="flex items-center space-x-3 text-sm">
                  <AnimatePresence>
                    {showAvatar && (
                      <motion.div
                        {...fadeIn}
                        key="avatar"
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${widgetStyles[theme].avatar}`}
                      >
                        <AvatarIcon className="w-6 h-6 mx-auto" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div>
                    <p>John D. just purchased</p>
                    <p className="text-green-400">Premium Package</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto py-20 pb-36">
        <motion.h2
          {...fadeInUp}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              company: "Tech Gadgets Inc.",
              content:
                "TrustBoost increased our conversions by 25% in just one month!",
            },
            {
              name: "Jane Smith",
              company: "Fashion Forward",
              content:
                "The widgets blend seamlessly with our site design. Highly recommended!",
            },
            {
              name: "Alex Johnson",
              company: "Outdoor Adventures",
              content:
                "Easy to set up and the results speak for themselves. A must-have for any e-commerce site.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-indigo-800 border-green-400">
                <CardContent className="p-6 text-gray-300">
                  <p className="mb-4">&quot;{testimonial.content}&quot;</p>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-green-400">{testimonial.company}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 bg-green-400 py-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-indigo-900 font-bold">
            Ready to boost your conversions?
          </div>
          <Button className="bg-indigo-900 text-green-400 hover:bg-indigo-800">
            Start Free Trial
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
