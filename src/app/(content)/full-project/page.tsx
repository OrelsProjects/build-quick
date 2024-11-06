'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [showGuide, setShowGuide] = useState(false)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <motion.section className="text-center space-y-6" {...fadeIn}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Full-Stack Starter Kit
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Get your next big idea off the ground in no time with our comprehensive, ready-to-deploy full-stack solution.
          </p>
          <Button size="lg" onClick={() => setShowGuide(!showGuide)}>
            {showGuide ? 'Hide Setup Guide' : 'View Setup Guide'}
          </Button>
        </motion.section>

        {/* Features List */}
        <motion.section {...fadeIn}>
          <h2 className="text-3xl font-bold text-center mb-10">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "React with TypeScript",
              "TailwindCSS for styling",
              "Prisma ORM",
              "MongoDB/Supabase database",
              "NextAuth for authentication",
              "Framer Motion animations",
              "PayPal integration",
              "Shadcn UI components",
              "PostHog analytics"
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-green-500" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section className="text-center space-y-6" {...fadeIn}>
          <h2 className="text-3xl font-bold">Why Choose Our Starter Kit?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
                <p>Get your project up and running in minutes, not days.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Flexible</h3>
                <p>Easily customize and extend to fit your specific needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Production-Ready</h3>
                <p>Built with best practices and scalability in mind.</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Call-to-Action */}
        <motion.section className="text-center space-y-6" {...fadeIn}>
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2" /> Download Repository
          </Button>
          <p className="text-sm text-gray-600">
            *You&apos;ll be redirected to the download page after clicking.
          </p>
        </motion.section>

        {/* Setup Guide Preview */}
        {showGuide && (
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center">Setup Guide Preview</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>Clone the repository to your local machine</li>
              <li>Install dependencies using <code>npm install</code> or <code>yarn</code></li>
              <li>Set up your environment variables (we provide a detailed guide)</li>
              <li>Configure your database (MongoDB or Supabase)</li>
              <li>Set up authentication with NextAuth</li>
              <li>Configure PayPal for payments</li>
              <li>Set up PostHog for analytics</li>
              <li>Deploy your project to your preferred hosting platform</li>
            </ol>
            <p className="text-center">
              <Button variant="outline" className="mt-4">
                Full Setup Guide <ArrowRight className="ml-2" />
              </Button>
            </p>
          </motion.section>
        )}
      </main>
    </div>
  )
}