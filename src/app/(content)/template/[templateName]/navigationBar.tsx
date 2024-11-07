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
import { cn } from "@/lib/utils";

export default function NavigationBar({
  templateName,
}: {
  templateName: string;
}) {
  const [opacitated, setOpacitated] = React.useState(false);
  const [didHover, setDidHover] = React.useState(false);

  return (
    <TooltipProvider delayDuration={50}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          damping: 15,
          stiffness: 250,
        }}
        viewport={{ once: true }}
        onAnimationComplete={() => setOpacitated(true)}
        onHoverStart={() => {
          setDidHover(true);
          setOpacitated(false);
        }}
        onHoverEnd={() => {
          setTimeout(() => {
            setOpacitated(true);
          }, 100);
        }}
        className={cn(
          "fixed bottom-10 inset-x-0 mx-auto rounded-full shadow-md border bg-gray-600 border-gray-200 w-fit h-fit py-2 px-4 z-50 flex space-x-8 transition-colors duration-150",
          {
            "bg-opacity-50": opacitated && didHover,
          }
        )}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.6,
                duration: 1,
              }}
              className="flex items-center space-x-2 px-1 py-1 rounded-full transition-shadow opacity-20"
            >
              <Link
                href="/gallery"
                className="flex flex-col justify-center items-center gap-0 text-white text-xs"
              >
                <Undo2 className="h-4 w-4 md:h-5 md:w-5 text-gray-200 hover:text-gray-400 transition-colors" />
                Back
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
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.9,
                duration: 1,
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-full transition-shadow"
            >
              <Link
                href={
                  "/generate?" +
                  new URLSearchParams({
                    template: templateName,
                  }).toString()
                }
                className="flex flex-col justify-center items-center gap-0 text-white text-xs"
              >
                <Check className="h-4 w-4 md:h-5 md:w-5 text-gray-200 hover:text-gray-400 transition-colors" />
                Yes!
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
