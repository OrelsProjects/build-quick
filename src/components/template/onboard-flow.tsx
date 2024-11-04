import { useState } from "react";
import { motion } from "framer-motion";
import { MousePointer, List, MessageCircle } from "lucide-react";

export default function OnboardFlow() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { name: "Tooltips", icon: <MousePointer className="w-6 h-6" /> },
    { name: "Checklists", icon: <List className="w-6 h-6" /> },
    { name: "Pop-ups", icon: <MessageCircle className="w-6 h-6" /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <motion.header
        className="container mx-auto px-4 py-6 flex justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-bold text-purple-600">OnboardFlow</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#features"
                className="text-gray-600 hover:text-purple-600"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-purple-600"
              >
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </motion.header>

      <main>
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-4 py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Create Engaging Onboarding in Minutes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Design beautiful user onboarding flows without coding. Perfect for
            product managers who want to boost retention and engagement.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Free Trial
          </button>
        </motion.section>

        {/* Interactive Feature Showcase */}
        <motion.section
          id="features"
          className="container mx-auto px-4 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Powerful Onboarding Components
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <motion.div
                className="w-full h-64 bg-gray-200"
                animate={{
                  backgroundColor:
                    activeFeature === 0
                      ? "#E9D5FF"
                      : activeFeature === 1
                      ? "#FDE68A"
                      : "#FCA5A5",
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Placeholder for interactive mockup */}
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-600">
                  {features[activeFeature].name} Demo
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/3 space-y-6">
              {features.map((feature, index) => (
                <motion.button
                  key={feature.name}
                  className={`w-full flex items-center space-x-4 p-4 rounded-lg transition duration-300 ${
                    activeFeature === index
                      ? "bg-purple-100 text-purple-600"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFeature(index)}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {feature.icon}
                  <span className="font-semibold">{feature.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How it Works */}
        <motion.section
          id="how-it-works"
          className="container mx-auto px-4 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Upload",
                description: "Upload your app screenshots and flow objectives",
              },
              {
                title: "Design",
                description: "Select from our library of onboarding components",
              },
              {
                title: "Customize",
                description: "Edit text, set triggers, and A/B test versions",
              },
              {
                title: "Implement",
                description:
                  "Generate and integrate the onboarding flow via our SDK",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonial */}
        <motion.section
          className="container mx-auto px-4 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Client"
              className="w-24 h-24 rounded-full mx-auto mb-6"
            />
            <blockquote className="text-xl text-gray-600 mb-6">
            &quot;OnboardFlow transformed our user experience. We saw a 40%
              increase in user activation within the first month!&quot;
            </blockquote>
            <p className="font-semibold text-gray-800">
              Jane Doe, Product Manager at TechCorp
            </p>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          className="container mx-auto px-4 py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Boost Your User Engagement?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of product managers who are creating delightful
            onboarding experiences without writing a single line of code.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto">
            Start Your Free Trial
          </button>
        </motion.section>
      </main>

      <motion.footer
        className="bg-gray-100 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 OnboardFlow. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
