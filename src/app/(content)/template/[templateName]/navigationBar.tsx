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
  animate = true,
  disableOnClick,
}: {
  templateName: string;
  animate?: boolean;
  disableOnClick?: boolean;
}) {
  const [opacitated, setOpacitated] = React.useState(false);
  const [didHover, setDidHover] = React.useState(false);
  const [positionX, setPositionX] = React.useState<number | null>(null);

  React.useEffect(() => {
    // Load saved position from localStorage on mount
    // const savedPosition = localStorage.getItem("navigationBarX");
    // if (savedPosition) {
    //   setPositionX(parseFloat(-savedPosition));
    // } else {
    // Center position if no saved value
    setPositionX(0);
    // }
  }, []);

  const handleDragEnd = (event: any, info: { point: { x: number } }) => {
    // Save new x position in localStorage on drag end
    localStorage.setItem("navigationBarX", info.point.x.toString());
  };

  if (positionX === null) {
    // Avoid rendering until the position is determined
    return null;
  }

  const NavigationButtonContainer = ({
    href,
    className,
    children,
  }: {
    href: string;
    className?: string;
    children: React.ReactNode;
  }) =>
    disableOnClick ? (
      <div className={className}>{children}</div>
    ) : (
      <Link href={href} className={className}>
        {children}
      </Link>
    );

  return (
    <TooltipProvider delayDuration={50}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -480, right: 480 }} // 30rem in each direction (30rem = 480px)
        onDragEnd={handleDragEnd}
        initial={{ x: positionX, opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: animate ? 0.5 : 0,
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
          "fixed bottom-2 md:bottom-10 inset-x-0 mx-auto rounded-full shadow-md border bg-gray-600 border-gray-200 w-fit h-fit py-2 px-4 z-50 flex space-x-8 transition-colors duration-150",
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
                delay: animate ? 0.6 : 0,
                duration: 1,
              }}
              className="flex items-center space-x-2 px-1 py-1 rounded-full transition-shadow opacity-20"
            >
              <NavigationButtonContainer
                href="/gallery"
                className="flex flex-col justify-center items-center gap-0 text-white text-xs"
              >
                <Undo2 className="h-4 w-4 md:h-5 md:w-5 text-gray-200 hover:text-gray-400 transition-colors" />
                Back
              </NavigationButtonContainer>
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
                delay: animate ? 0.9 : 0,
                duration: 1,
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-full transition-shadow"
            >
              <NavigationButtonContainer
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
              </NavigationButtonContainer>
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
