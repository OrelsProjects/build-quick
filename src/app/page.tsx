"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const templates = [
  {
    name: "Ideas Generator",
    image: "/templates/ideas-generator-large.png",
    router: "ideas-generator",
  },
  {
    name: "Data Harvester",
    image: "/templates/data-harvester-large.png",
    router: "data-harvester",
  },
  {
    name: "Onboard Flow",
    image: "/templates/onboard-flow-large.png",
    router: "onboard-flow",
  },
  {
    name: "Trendy Calendar",
    image: "/templates/trendy-calendar-large.png",
    router: "trendy-calendar",
  },
  {
    name: "Logo Generator",
    image: "/templates/logo-generator-large.png",
    router: "logo-generator",
  },
  {
    name: "Social Proof Generator",
    image: "/templates/social-proof-generator-large.png",
    router: "social-proof-generator",
  },
  {
    name: "Trust Boost",
    image: "/templates/trust-boost-large.png",
    router: "trust-boost",
  },
  {
    name: "Policy Craft",
    image: "/templates/policy-craft-large.png",
    router: "policy-craft",
  },
  {
    name: "Productivity Pro",
    image: "/templates/productivity-pro-large.png",
    router: "productivity-pro",
  },
  {
    name: "Newsletter Curator",
    image: "/templates/newsletter-curator-large.png",
    router: "newsletter-curator",
  },
];

export default function Component() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Template Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className={`w-full h-full md:hover:cursor-pointer transition-transform duration-300 ${
                        hoveredIndex === index ? "scale-105" : "scale-100"
                      }`}
                      onClick={() => {
                        // navigate and open a new tab
                        window.open(`template/${template.router}`, "_blank");
                      }}
                    >
                      <Image
                        src={template.image}
                        alt={template.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-4 bg-background/80 backdrop-blur-sm absolute bottom-0 left-0 right-0">
                    <h2 className="font-semibold text-lg">{template.name}</h2>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
