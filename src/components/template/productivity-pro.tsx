"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { BarChart2, Clock, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ProductivityPro() {
//   const [email, setEmail] = useState("")

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center items-center">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span className="font-bold">ProductivityPro</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full flex flex-col justify-start items-center">
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-green-50">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Track Work Hours, Boost Productivity
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Empower your team with smart time tracking and productivity insights. No invasive surveillance, just pure performance.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">Start Free Trial</Button>
                <Button variant="outline">Schedule Demo</Button>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-white">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Create Projects & Assign Teams</h3>
                <p className="text-gray-500">Easily set up projects and assign your team members to track their progress.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Clock className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold">Simple Clock In/Out</h3>
                <p className="text-gray-500">Employees use a straightforward interface to log their work hours and breaks.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BarChart2 className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Analyze & Improve</h3>
                <p className="text-gray-500">Generate visual reports with productivity insights to optimize team performance.</p>
              </div>
            </div>
          </motion.div>
        </section>
        <section id="features" className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-green-50">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Time Tracking</CardTitle>
                  <CardDescription>Effortlessly log hours with our intuitive interface.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Time tracking interface"
                    className="rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Productivity Dashboard</CardTitle>
                  <CardDescription>Visualize team performance and identify areas for improvement.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Productivity dashboard"
                    className="rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-white">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Benefits for Your Business</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Increased Productivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Boost team efficiency by identifying and eliminating time-wasting activities.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Better Resource Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Optimize project staffing based on accurate time and productivity data.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Improved Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ensure fair workloads and prevent burnout with insights into work patterns.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-yellow-50">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Customers Say</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Game-Changer for Our Agency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">&quot;ProductivityPro has revolutionized how we track time and manage projects. Our team&apos;s productivity has soared!&quot;</p>
                  <p className="mt-2 font-semibold">- Sarah J., Creative Director</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Invaluable Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">&quot;The productivity insights have helped us optimize our workflows and improve our bottom line. Highly recommended!&quot;</p>
                  <p className="mt-2 font-semibold">- Michael T., Small Business Owner</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
        <section id="pricing" className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-white">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$29/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 5 team members</li>
                    <li>Basic reporting</li>
                    <li>14-day free trial</li>
                  </ul>
                  <Button className="mt-6 w-full">Start Free Trial</Button>
                </CardContent>
              </Card>
              <Card className="border-green-500">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Best for growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$79/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>Up to 20 team members</li>
                    <li>Advanced reporting</li>
                    <li>Integrations with popular tools</li>
                  </ul>
                  <Button className="mt-6 w-full bg-green-600 hover:bg-green-700">Choose Pro</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited team members</li>
                    <li>Custom reporting</li>
                    <li>Dedicated support</li>
                  </ul>
                  <Button className="mt-6 w-full" variant="outline">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-green-600">
          <motion.div
            className="container px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Tracking Smarter Today</h2>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl">
                Join thousands of businesses that have transformed their productivity with ProductivityPro.
              </p>
              <div className="space-x-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-green-600 hover:bg-green-50">Schedule a Demo</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Schedule a Demo</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we&apos;ll be in touch to schedule your personalized demo.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@company.com" />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Your company name" />
                      </div>
                      <Button type="submit" className="w-full">Request Demo</Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="bg-transparent text-white hover:bg-white/20">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div  className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-yellow-500" />
              <span className="font-bold">ProductivityPro</span>
            </div>
            <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
              © 2024 ProductivityPro. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}