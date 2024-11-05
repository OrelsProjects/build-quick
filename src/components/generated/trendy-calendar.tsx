import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Scale, ClipboardList, Bell, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PolicyGenerator() {
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold">
          PolicyGenerator
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <Button variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-purple-500">
            Login
          </Button>
        </motion.div>
      </nav>

      <main className="container mx-auto px-6 py-8 pb-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12">
          <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-4">
            Simplify Your Legal Compliance
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl mb-8">
            Generate custom privacy policies and terms based on your business needs
          </motion.p>
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-500 hover:bg-purple-100">
              Start for Free
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-purple-500">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: FileText, title: "Custom Policies", description: "Generate policies tailored to your business" },
            { icon: Shield, title: "Privacy Protection", description: "Ensure compliance with industry standards" },
            { icon: Scale, title: "Legal Accuracy", description: "Stay updated with the latest legal requirements" },
            { icon: ClipboardList, title: "Industry-Specific", description: "Policies tailored for your industry" },
            { icon: Bell, title: "Notifications", description: "Receive updates on policy changes" },
            { icon: Mail, title: "Contact Support", description: "Get assistance when you need it" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-30 transition-all duration-300">
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
          className="text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            Ready to simplify your compliance process?
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-xs bg-white bg-opacity-20 text-white placeholder:text-gray-100/70 border-white"
            />
            <Button className="bg-white text-purple-500 hover:bg-purple-100">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </main>

      <footer className="container mx-auto p-6 text-center">
        <p>&copy; 2024 PolicyGenerator. All rights reserved.</p>
      </footer>
    </div>
  );
}
