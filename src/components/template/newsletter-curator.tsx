"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Zap,
  BarChart,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "../ui/input";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function NewsletterCurator() {
  const [activeCategory, setActiveCategory] = useState("tech");
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

  const categories = [
    { id: "tech", name: "Technology", color: "bg-blue-500" },
    { id: "finance", name: "Finance", color: "bg-green-500" },
    { id: "lifestyle", name: "Lifestyle", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1
          className="text-5xl font-bold mb-6 text-violet-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Personalize Every Newsletter
        </motion.h1>
        <motion.p className="text-xl mb-8 text-violet-700" {...fadeInUp}>
          Curate tailored content for each subscriber based on their
          preferences.
        </motion.p>
        <motion.div {...fadeInUp}>
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white"
            // on click, go to #cta
            onClick={() =>
              document?.getElementById("cta")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Start Your Free Trial
          </Button>
        </motion.div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <ChevronDown className="mx-auto w-8 h-8 text-violet-500 animate-bounce" />
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-violet-900">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mail className="w-12 h-12 mb-4 text-violet-600" />,
              title: "Create Categories",
              description:
                "Set up content categories that matter to your audience.",
            },
            {
              icon: <Zap className="w-12 h-12 mb-4 text-violet-600" />,
              title: "Personalize Content",
              description:
                "Our AI curates relevant content based on subscriber preferences.",
            },
            {
              icon: <BarChart className="w-12 h-12 mb-4 text-violet-600" />,
              title: "Track Performance",
              description:
                "Analyze open rates and adjust personalization strategies.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-2 text-violet-800">
                {item.title}
              </h3>
              <p className="text-violet-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-12 text-center text-violet-900">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "AI-Powered Curation",
              description:
                "Automatically select the most relevant content for each subscriber.",
            },
            {
              title: "Easy Integration",
              description:
                "Seamlessly connect with popular email platforms like Mailchimp and Substack.",
            },
            {
              title: "Customizable Templates",
              description:
                "Create beautiful, responsive newsletter designs that reflect your brand.",
            },
            {
              title: "Detailed Analytics",
              description:
                "Gain insights into subscriber engagement and content performance.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border border-violet-200 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-violet-800">
                {feature.title}
              </h3>
              <p className="text-violet-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customization Preview */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-violet-900">
          Personalization in Action
        </h2>
        <Tabs
          defaultValue={activeCategory}
          className="w-full"
          onValueChange={setActiveCategory}
        >
          <TabsList className="grid w-full grid-cols-3">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-lg"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Preview: {category.name}</CardTitle>
                  <CardDescription>
                    See how content adapts based on subscriber preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={`w-full h-64 ${category.color} rounded-lg flex items-center justify-center text-white text-2xl font-bold`}
                  >
                    {category.name} Content
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-violet-600">
                    Content dynamically changes based on individual preferences.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-violet-50 rounded-lg">
        <h2 className="text-4xl font-bold mb-12 text-center text-violet-900">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Chen",
              role: "Tech Blogger",
              quote:
                "This tool revolutionized my newsletter. My engagement rates have skyrocketed!",
            },
            {
              name: "Sarah Johnson",
              role: "Financial Advisor",
              quote:
                "The personalization capabilities are unmatched. My clients love the tailored content.",
            },
            {
              name: "Mike Thompson",
              role: "Lifestyle Influencer",
              quote:
                "Easy to use and incredibly effective. It's a game-changer for content creators.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <p className="text-violet-600 mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-semibold text-violet-800">
                {testimonial.name}
              </p>
              <p className="text-sm text-violet-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      {/* <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-violet-900">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              plan: "Starter",
              price: "$29",
              features: [
                "Up to 1,000 subscribers",
                "3 content categories",
                "Basic analytics",
              ],
            },
            {
              plan: "Pro",
              price: "$79",
              features: [
                "Up to 10,000 subscribers",
                "Unlimited categories",
                "Advanced analytics",
                "Priority support",
              ],
            },
            {
              plan: "Enterprise",
              price: "Custom",
              features: [
                "Unlimited subscribers",
                "Custom integrations",
                "Dedicated account manager",
              ],
            },
          ].map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-violet-200 flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-violet-800">
                  {tier.plan}
                </h3>
                <p className="text-4xl font-bold mb-6 text-violet-600">
                  {tier.price}
                  <span className="text-base font-normal">/month</span>
                </p>
                <ul className="mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="mb-2 text-violet-700">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="w-full self-end bg-violet-600 hover:bg-violet-700 text-white">
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      <section id="cta" className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-violet-900">
            Ready to Revolutionize Your Newsletters?
          </h2>
          <p className="text-xl mb-8 text-violet-700">
            Start personalizing your content and watch your engagement soar.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md text-violet-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white w-full max-w-md"
              disabled={isLoading || isSubmitted}
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
                "Subscribe"
              )}
            </Button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Personalized Newsletter Tool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
