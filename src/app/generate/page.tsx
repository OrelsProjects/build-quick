/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactDOMServer from "react-dom/server";
import { useFormik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useClipboard } from "use-clipboard-copy";
import { FaRegCopy, FaArrowLeft } from "react-icons/fa"; // Import back arrow icon
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { comfortaa } from "@/lib/fontUtils";
import { Typewriter } from "react-simple-typewriter";
import _ from "lodash";
import { createId } from "@paralleldrive/cuid2";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSearchParams } from "next/navigation";
import TemplateContainer from "@/components/template-container";
import { PlaceholdersAndVanishInput } from "@/components/ui/palceholder-and-vanish-input";
import { productDescriptions } from "@/lib/consts";
import { useCustomRouter } from "@/lib/hooks/useCustomRouter";
import Product from "@/lib/models/product";
import { TemplateId } from "@/lib/models/template";
import axios from "axios";

const saveIdea = (idea: Partial<Idea>): string => {
  const existingIdeaString = localStorage.getItem("idea");
  const id = createId();
  if (!existingIdeaString) {
    localStorage.setItem("idea", JSON.stringify(idea));
    return id;
  } else {
    const existingIdea = JSON.parse(existingIdeaString);
    const diff = _.omit(idea, "id");
    const diffExisting = _.omit(existingIdea, "id");
    const isDiff = !_.isEqual(diffExisting, diff);
    if (isDiff) {
      localStorage.setItem(
        "idea",
        JSON.stringify({ ...existingIdea, ...idea, id })
      );
      localStorage.removeItem("prompt");
      return id;
    } else {
      return existingIdea.id;
    }
  }
};

const getIdea = (): Idea => {
  const ideaString = localStorage.getItem("idea");
  if (!ideaString) {
    return {};
  }
  return JSON.parse(ideaString);
};

interface Idea {
  id?: string;
  ideaName?: string;
  elevatorPitch?: string;
  additionalInfo?: string;
  additionalFeature?: string;
}

export default function GeneratePage() {
  const router = useCustomRouter();
  const clipboard = useClipboard();
  const params = useSearchParams();

  const loading = useRef(false);

  const [stage, setStage] = useState(1);
  const [isThinking, setIsThinking] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [showExistingIdeaPrompt, setShowExistingIdeaPrompt] = useState(false);
  const [shouldFakeAIGeneratePrompt, setShouldFakeAIGeneratePrompt] =
    useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showCopyPrompt, setShowCopyPrompt] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId | null>(
    null
  );

  const generatedPromptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const template = params.get("template");
    if (!template) {
      router.push("/gallery");
    }
    setSelectedTemplate(template as TemplateId);
  }, [params]);

  useEffect(() => {
    const idea = getIdea();
    if (Object.keys(idea).length > 0) {
      formik.setValues(idea);
      setShowExistingIdeaPrompt(true);
    }
    updateStage(1);
  }, [params]);

  const updateStage = (stage: number) => {
    if (stage > 0 && stage <= 4) {
      setStage(stage);
    }
  };

  const nextStage = () => {
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TemplateContainer template={selectedTemplate || ""} />
    );
    if (stage < 4) {
      updateStage(stage + 1);
    }
  };

  const previousStage = () => {
    if (stage > 1) {
      updateStage(stage - 1);
    }
  };

  const formik = useFormik<Omit<Product, "template">>({
    initialValues: {
      ideaName: "",
      elevatorPitch: "",
      additionalInfo: "",
      additionalFeature: "",
    },
    enableReinitialize: true,
    onSubmit: async (values: Idea) => {
      const idea = { ...values };
      const id = saveIdea(values);
      formik.setValues({ ...idea, id });
      if (stage < 3) {
        nextStage();
      } else if (stage === 3) {
        if (loading.current) return;
        loading.current = true;
        setIsThinking(true);

        try {
          const landingPage = await axios.post("/api/landing-page", {
            product: { ...values, id },
            templateName: selectedTemplate,
          });
        } catch (error) {
          console.error(error);
        } finally {
          loading.current = false;
          setIsThinking(false);
        }
      }
    },
  });

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("idea");
    localStorage.removeItem("prompt");
    formik.resetForm();
  };

  const handleCopy = () => {
    if (!shouldFakeAIGeneratePrompt) {
      clipboard.copy(generatedPrompt);
    }
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // Tooltip visible for 2 seconds
  };

  const shouldShouldCopyPromptButton = useMemo(
    () => showCopyPrompt || !shouldFakeAIGeneratePrompt,
    [showCopyPrompt, shouldFakeAIGeneratePrompt]
  );

  return (
    <div
      className={cn(
        "relative w-screen h-screen p-4 flex justify-center items-center bg-gradient-to-br from-blue-200/30 via-white to-purple-200",
        comfortaa.className
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <AlertDialog
        open={showExistingIdeaPrompt}
        onOpenChange={setShowExistingIdeaPrompt}
      >
        <AlertDialogContent className={comfortaa.className}>
          <AlertDialogHeader>
            <AlertDialogTitle>Continue with existing idea?</AlertDialogTitle>
            <AlertDialogDescription>
              You have an idea you already started. Would you like to continue
              with it?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={clearLocalStorage}>
              No, start fresh
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setShowExistingIdeaPrompt(false);
              }}
            >
              Yes, continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 z-10 w-full max-w-xl"
      >
        <motion.div key="back" {...fadeInOut}>
          <Button
            variant="outline"
            className={cn("flex items-center space-x-2 mb-4")}
            asChild={stage === 1}
          >
            {stage === 1 ? (
              <Link href={`/gallery`} className="w-fit">
                <FaArrowLeft />
                <span>Back to Gallery</span>
              </Link>
            ) : (
              <div
                className="flex items-center space-x-2 "
                onClick={(e) => {
                  e.preventDefault();
                  previousStage();
                }}
              >
                <FaArrowLeft />
                <span>Back to Previous stage</span>
              </div>
            )}
          </Button>
        </motion.div>

        <TemplateContainer
          template={selectedTemplate || ""}
          size="small"
          className={cn({
            hidden: stage === 4,
          })}
        />
        <div className="min-h-[360px] flex flex-col gap-3 justify-center">
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div
                key="stage1"
                className="w-full flex flex-col "
                {...fadeInOut}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  What&apos;s your idea called?
                </h2>
                <Input
                  name="ideaName"
                  placeholder="Enter your idea name"
                  onChange={formik.handleChange}
                  value={formik.values.ideaName}
                />
              </motion.div>
            )}
            {stage === 2 && (
              <motion.div key="stage2" {...fadeInOut}>
                <h2 className="text-2xl font-bold mb-4">
                  What&apos;s your elevator pitch?
                </h2>
                <PlaceholdersAndVanishInput
                  placeholders={productDescriptions}
                  name="elevatorPitch"
                  rows={4}
                  onChange={formik.handleChange}
                  value={formik.values.elevatorPitch || ""}
                />
              </motion.div>
            )}
            {stage === 3 && (
              <motion.div key="stage3" {...fadeInOut}>
                <h2 className="text-2xl font-bold mb-4">
                  Anything else you&apos;d like to add?
                </h2>
                <Textarea
                  name="additionalInfo"
                  placeholder="Any additional details?"
                  onChange={formik.handleChange}
                  value={formik.values.additionalInfo}
                  rows={4}
                  maxLength={255}
                />
                <div className="mt-4">
                  <Label>Additional Feature</Label>
                  <RadioGroup
                    defaultValue="none"
                    name="additionalFeature"
                    value={formik.values.additionalFeature || "none"}
                    onValueChange={(value: string) => {
                      formik.setFieldValue("additionalFeature", value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="none" />
                      <Label htmlFor="none">None</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email">
                        Add email input to verify the idea
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="payment" id="payment" />
                      <Label htmlFor="payment">With payment</Label>
                    </div>
                  </RadioGroup>
                </div>
              </motion.div>
            )}
            {stage > 4 && (
              <motion.div
                key="stage4"
                {...fadeInOut}
                className="flex flex-col h-full"
              >
                <h2 className="text-2xl font-bold mb-4">Generated Prompt</h2>

                <div className="flex-shrink">
                  <div
                    ref={generatedPromptRef}
                    className="bg-gradient-to-r from-purple-400 to-blue-500 text-white flex flex-col p-4 gap-4 rounded-lg shadow-lg mb-4 border border-opacity-30 border-white overflow-auto h-[400px] max-h-[400px] md:h-[700px] md:max-h-[700px] relative"
                  >
                    <div
                      className="sticky top-0 ml-auto h-fit w-fit flex flex-row justify-end gap-3 md:hover:cursor-pointer"
                      onClick={handleCopy}
                    >
                      <Button
                        variant="outline"
                        className="h-fit flex flex-row gap-1 rounded-md bg-transparent hover:bg-transparent hover:text-white"
                        onClick={() => window.open("https://v0.dev", "_blank")}
                      >
                        <span className="text-xs">Open</span>
                        <Image
                          src="/v0.png"
                          alt="V0 Logo"
                          fill
                          className="!relative !h-[0.8rem]"
                        />
                      </Button>
                      <TooltipProvider>
                        <Tooltip open={showTooltip}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              className="h-fit flex flex-row gap-1 rounded-md bg-transparent hover:bg-transparent hover:text-white"
                            >
                              <FaRegCopy className="cursor-pointer w-4 h-4" />
                              <span className="text-xs">Copy prompt</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent
                            side="bottom"
                            sideOffset={5}
                            className="bg-black"
                          >
                            Prompt copied!
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className="font-mono whitespace-pre-wrap overflow-auto">
                      <Typewriter
                        words={[generatedPrompt]}
                        loop={1}
                        onType={(count) => {
                          if (generatedPromptRef.current) {
                            // if not at bottom, scroll to bottom
                            if (
                              generatedPromptRef.current.scrollHeight -
                                generatedPromptRef.current.scrollTop !==
                              generatedPromptRef.current.clientHeight
                            ) {
                              generatedPromptRef.current.scrollTop =
                                generatedPromptRef.current.scrollHeight;
                            }
                          }
                        }}
                        onLoopDone={() => setShowCopyPrompt(true)}
                        typeSpeed={shouldFakeAIGeneratePrompt ? 5 : 0}
                        deleteSpeed={0}
                        delaySpeed={1000}
                      />
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {stage < 4 && (
            <Button type="submit" className="w-full">
              {isThinking ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Thinking...
                </>
              ) : (
                "Next"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
