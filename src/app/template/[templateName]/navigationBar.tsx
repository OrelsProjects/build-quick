"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"; // Adjust path as necessary
import { Undo2, Check } from "lucide-react"; // Example icons, replace with your own
import Link from "next/link";

export default function NavigationBar({templateName}: {templateName: string}) {
  return (
    <TooltipProvider delayDuration={50}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="fixed bottom-10 inset-x-0 mx-auto rounded-full shadow-xl border bg-gray-700 border-gray-200 w-fit h-fit py-2 px-4 z-50 flex space-x-4"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
              className="flex items-center space-x-2 px-1 py-1 rounded-full hover:shadow-md transition-shadow"
            >
              <Link href="/gallery">
                <Undo2 className="h-4 w-4 md:h-5 md:w-5 text-gray-200 hover:text-gray-400 transition-colors" />
              </Link>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white">
            I want something else
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="flex items-center space-x-2 px-2 py-1 rounded-full hover:shadow-md transition-shadow"
            >
              <Link
                href={
                  "/generate?" +
                  new URLSearchParams({
                    template: templateName,
                  }).toString()
                }
              >
                <Check className="h-4 w-4 md:h-5 md:w-5 text-gray-200 hover:text-gray-400 transition-colors" />
              </Link>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white">
            I like this template!
          </TooltipContent>
        </Tooltip>
      </motion.div>
    </TooltipProvider>
  );
}
