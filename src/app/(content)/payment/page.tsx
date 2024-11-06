'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, CreditCard, BarChart3, Key, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-inter">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Rocket className="h-8 w-8 text-[#2563EB]" />
          <span className="text-xl font-bold">FullStackStarter</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="text-[#374151] hover:text-[#2563EB]">Features</Link></li>
            <li><Link href="#benefits" className="text-[#374151] hover:text-[#2563EB]">Benefits</Link></li>
            <li><Link href="#setup" className="text-[#374151] hover:text-[#2563EB]">Setup</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Full-Stack Dream, Ready to Deploy
          </motion.h1>
          <motion.p 
            className="text-xl text-[#374151] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get a complete React project with all the bells and whistles. Just add your keys and you&apos;re good to go!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors duration-200"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Download Now
              <motion.span
                className="inline-block ml-2"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Button>
          </motion.div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Everything You Need, All in One Place</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Code className="h-8 w-8 text-[#2563EB]" />, title: "React + TypeScript", description: "Build robust, type-safe applications with ease." },
                { icon: <Database className="h-8 w-8 text-[#2563EB]" />, title: "Prisma + MongoDB/Supabase", description: "Flexible database solutions for your data needs." },
                { icon: <Key className="h-8 w-8 text-[#2563EB]" />, title: "NextAuth", description: "Secure authentication, right out of the box." },
                { icon: <CreditCard className="h-8 w-8 text-[#2563EB]" />, title: "PayPal Integration", description: "Accept payments with minimal setup." },
                { icon: <BarChart3 className="h-8 w-8 text-[#2563EB]" />, title: "PostHog Analytics", description: "Advanced analytics and session recording." },
                { icon: <Rocket className="h-8 w-8 text-[#2563EB]" />, title: "Framer Motion", description: "Beautiful animations to bring your UI to life." },
              ].map((feature, index) => (
                <Card key={index} className="transition-all duration-200 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      {feature.icon}
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why You&apos;ll Love This Starter Kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Save Time, Ship Faster</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Skip the setup hassle. Start building your features from day one.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flexibility Built-In</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Whether you&apos;re validating an idea or building a full-fledged app, this kit scales with you.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Best Practices Baked-In</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Benefit from industry-standard tools and patterns, set up the right way.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Deploy Anywhere</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Your project, your rules. Deploy on your preferred platform with ease.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="setup" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Easy Setup, Endless Possibilities</h2>
            <div className="max-w-2xl mx-auto">
              <ol className="list-decimal list-inside space-y-4">
                <li>Download the repository</li>
                <li>Run <code className="bg-[#F3F4F6] px-2 py-1 rounded">npm install</code> to get all dependencies</li>
                <li>Set up your environment variables (we&apos;ve got a guide for that)</li>
                <li>Run <code className="bg-[#F3F4F6] px-2 py-1 rounded">npm run dev</code> to start your development server</li>
                <li>Start building your dream project!</li>
              </ol>
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors duration-200">
                  Get the Full Setup Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1F2937] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FullStackStarter</h3>
              <p className="text-sm text-gray-300">Your launchpad for amazing web applications.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-sm text-gray-300 hover:text-white">Features</Link></li>
                <li><Link href="#benefits" className="text-sm text-gray-300 hover:text-white">Benefits</Link></li>
                <li><Link href="#setup" className="text-sm text-gray-300 hover:text-white">Setup Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">GitHub</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Discord Community</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
            © {new Date().getFullYear()} FullStackStarter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}