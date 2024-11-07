import Link from "next/link";
import Image from "next/image";
import Template, { TemplateRouter } from "../models/template";
import { Card, CardContent } from "./ui/card";
import { templates } from "../lib/consts";
import { useMemo } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const templateContainerVariants = cva(
  "overflow-hidden hover:shadow-lg transition-shadow duration-300",
  {
    variants: {
      size: {
        default: "",
        small: "h-40 w-40",
      },
    },
  }
);
const bottomBarTextVariants = cva("", {
  variants: {
    textSize: {
      default: "font-semibold text-lg",
      small: "font-semibold text-sm",
    },
  },
});

export interface TemplateContainerProps {
  template: Template | TemplateRouter;
  className?: string;
  size?: "default" | "small";
  openInNewTab?: boolean;
}

export default function TemplateContainer({
  template,
  className,
  openInNewTab,
  size = "default",
}: TemplateContainerProps) {
  const templateObject = useMemo(() => {
    if (typeof template === "string") {
      return templates.find((t) => t.id === template) || templates[0];
    }
    return template;
  }, [template]);

  return (
    <Card className={cn(templateContainerVariants({ size }), className)}>
      <CardContent className="p-0">
        <div className="aspect-square relative">
          <div className="absolute inset-0 overflow-hidden">
            <Link
              className="w-full h-full md:hover:cursor-pointer transition-transform duration-300 hover:scale-105"
              href={`/template/${templateObject.id}`}
              target={openInNewTab ? "_blank" : undefined}
            >
              <Image
                src={templateObject.image}
                alt={templateObject.name}
                fill
                className="transition-transform duration-300 hover:scale-105 object-cover"
              />
            </Link>
          </div>
          <div className="p-4 bg-background/80 backdrop-blur-sm absolute bottom-0 left-0 right-0">
            <h2 className={cn(bottomBarTextVariants({ textSize: size }))}>
              {templateObject.name}
            </h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
