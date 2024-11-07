"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
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
import { createId } from "@paralleldrive/cuid2";
import { usePathname, useSearchParams } from "next/navigation";
import TemplateContainer from "@/components/template-container";
import { PlaceholdersAndVanishInput } from "@/components/ui/palceholder-and-vanish-input";
import { productDescriptions } from "@/lib/consts";
import { useCustomRouter } from "@/lib/hooks/useCustomRouter";
import _ from "lodash";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { ProductRequest } from "@prisma/client";
import { object, string } from "yup";
import PaymentSideBar from "../../../components/paymentSideBar";
import usePayments from "../../../lib/hooks/usePayments";

const STORAGE_KEY_IDEA = "build-quick-idea";
const STORAGE_KEY_PROMPT = "build-quick-prompt";

const saveIdea = (idea: Partial<Idea>): string => {
  const existingIdeaString = localStorage.getItem(STORAGE_KEY_IDEA);
  const id = createId();
  if (!existingIdeaString) {
    localStorage.setItem(STORAGE_KEY_IDEA, JSON.stringify(idea));
    return id;
  } else {
    const existingIdea = JSON.parse(existingIdeaString);
    const diff = _.omit(idea, "id");
    const diffExisting = _.omit(existingIdea, "id");
    const isDiff = !_.isEqual(diffExisting, diff);
    if (isDiff) {
      localStorage.setItem(
        STORAGE_KEY_IDEA,
        JSON.stringify({ ...existingIdea, ...idea, id })
      );
      localStorage.removeItem(STORAGE_KEY_PROMPT);
      return id;
    } else {
      return existingIdea.id;
    }
  }
};

const getIdea = (): Idea => {
  const ideaString = localStorage.getItem(STORAGE_KEY_IDEA);
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
  email?: string;
}

const schema = object({
  ideaName: string().required(),
  elevatorPitch: string().required(),
  email: string().email().required(),
});

export default function GeneratePage() {
  const router = useCustomRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const { showRepositoryPaymentSideBar } = usePayments();

  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingSubmitEmail, setLoadingSubmitEmail] = useState(false);
  const [showExistingIdeaPrompt, setShowExistingIdeaPrompt] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const formik = useFormik<Idea>({
    initialValues: {
      ideaName: "",
      elevatorPitch: "",
      email: "",
    },
    enableReinitialize: true,
    onSubmit: async (values: Idea) => {
      const idea = { ...values };
      const id = saveIdea(values);
      formik.setValues({ ...idea, id });
      if (stage < 2) {
        nextStage();
      } else if (stage === 2) {
        setIsLoading(true);
        // random between 600-1300
        const randomTime = Math.floor(Math.random() * 700) + 600;
        await new Promise((resolve) => setTimeout(resolve, randomTime));

        setIsLoading(false);
        nextStage();
      } else if (stage === 3) {
        try {
          setLoadingSubmitEmail(true);
          const body: {
            interestedUser: string;
            product: Partial<ProductRequest>;
          } = {
            interestedUser: idea.email || "",
            product: {
              ideaName: idea.ideaName,
              elevatorPitch: idea.elevatorPitch,
              templateName: selectedTemplate || "",
              wasInterestedInTemplate: false,
              additionalFeature: idea.additionalFeature,
              additionalInfo: idea.additionalInfo,
            },
          };
          await axios.post("/api/registerUser", body);
          setSubmissionComplete(true);
          setShowThankYouDialog(true);
        } catch (error) {
          console.error(error);
        } finally {
          setLoadingSubmitEmail(false);
        }
      }
    },
  });

  useEffect(() => {
    const template = params.get("template");
    if (!template) {
      router.push("/gallery");
    }
    setSelectedTemplate(template);
  }, [params, router]);

  useEffect(() => {
    const idea = getIdea();
    if (Object.keys(idea).length > 0) {
      // if formik current values (idea and pitch) equal to the idea in local storage, do nothing
      if (
        formik.values.ideaName === idea.ideaName &&
        formik.values.elevatorPitch === idea.elevatorPitch
      ) {
        return;
      }
      formik.setValues(idea);
      setShowExistingIdeaPrompt(true);
    }
    setSpecificStage(1);
  }, [params]);

  useEffect(() => {
    const stageString = params.get("stage");
    const stage = parseInt(stageString || "1", 10);
    if (formik.values.ideaName === "") {
      updateStage(1);
    } else if (formik.values.elevatorPitch === "") {
      updateStage(2);
    } else {
      updateStage(stage);
    }
  }, [params]);

  const showRepositoryPurchase = useMemo(() => {
    return params.get("get-repository") === "true";
  }, [params]);

  const canPressNext = useMemo(() => {
    if (stage === 1) {
      return formik.values.ideaName !== "";
    } else if (stage === 2) {
      return formik.values.elevatorPitch !== "";
    } else if (stage === 3) {
      return formik.values.email !== "";
    }
    return false;
  }, [formik.values, stage]);

  const updateStage = (stage: number) => {
    if (stage > 0 && stage <= 3) {
      setStage(stage);
    }
  };

  const nextStage = () => {
    const newStage = stage + 1;
    if (newStage <= 3) {
      router.push(pathname, {
        preserveQuery: true,
        paramsToRemove: ["stage"],
        paramsToAdd: { stage: newStage.toString() },
      });
    }
  };

  const setSpecificStage = (stage: number) => {
    const paramsToAdd = stage > 1 ? { stage: stage.toString() } : undefined;
    router.push(pathname, {
      preserveQuery: true,
      paramsToRemove: ["stage"],
      paramsToAdd,
    });
  };

  const previousStage = () => {
    const newStage = stage - 1;
    if (newStage >= 1) {
      router.back();
    }
  };

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  const handleRepositoryClick = async () => {
    // check if email is inserted correctly
    try {
      await schema.validate(formik.values);
      showRepositoryPaymentSideBar(formik.values.email);
    } catch (error: any) {
      formik.setErrors({ email: error.message });
    }
  };

  const handleRepositoryClose = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  const onStartFresh = () => {
    localStorage.removeItem(STORAGE_KEY_IDEA);
    localStorage.removeItem(STORAGE_KEY_PROMPT);
    formik.resetForm();
    setSpecificStage(1);
  };

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
            <AlertDialogCancel onClick={onStartFresh}>
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
        className="space-y-8 md:space-y-4 z-10 w-full max-w-xl py-6"
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

        <motion.div
          className="w-full max-h-40 flex flex-row items-start justify-start gap-4"
          {...fadeInOut}
        >
          <TemplateContainer
            template={selectedTemplate || ""}
            size="small"
            className="flex-shrink-0"
            openInNewTab
          />
          <motion.div
            className="w-full h-full max-h-40 flex flex-col text-gray-600 gap-1 font-sans text-center md:text-start"
            {...fadeInOut}
          >
            {formik.values.ideaName && stage > 1 && (
              <h3 className="text-2xl font-light text-start">
                {formik.values.ideaName}
              </h3>
            )}
            {formik.values.elevatorPitch && stage > 2 && (
              <p className="text-base text-start overflow-auto font-extralight pr-1.5">
                {formik.values.elevatorPitch}
              </p>
            )}
          </motion.div>
        </motion.div>
        <div className="min-h-[270px] flex flex-col gap-3 items-start justify-start pt-8 md:pt-0 md:justify-center">
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div
                key="stage1"
                className="w-full flex flex-col"
                {...fadeInOut}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  What&apos;s your idea called?
                </h2>
                <Input
                  name="ideaName"
                  placeholder="Enter your idea name"
                  required
                  onChange={(e) => {
                    formik.handleChange(e);
                    saveIdea({ ideaName: e.target.value });
                  }}
                  value={formik.values.ideaName}
                />
              </motion.div>
            )}
            {stage === 2 && (
              <motion.div key="stage2" {...fadeInOut} className="w-full">
                <h2 className="text-2xl font-bold mb-4">
                  What&apos;s your elevator pitch?
                </h2>
                <PlaceholdersAndVanishInput
                  placeholders={productDescriptions}
                  name="elevatorPitch"
                  rows={4}
                  required
                  onChange={(e) => {
                    formik.handleChange(e);
                    saveIdea({ elevatorPitch: e.target.value });
                  }}
                  value={formik.values.elevatorPitch || ""}
                />
              </motion.div>
            )}
            {stage === 3 && (
              <motion.div key="stage3" {...fadeInOut}>
                <h2 className="text-2xl font-bold mb-4">
                  Enter your email to receive your results
                </h2>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your best email"
                  error={!!formik.errors.email}
                  required
                  onChange={(e) => {
                    formik.handleChange(e);
                    saveIdea({ email: e.target.value });
                  }}
                  value={formik.values.email || ""}
                />
                <div className="w-full h-fit flex flex-col gap-0 items-center mt-3">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loadingSubmitEmail}
                  >
                    {loadingSubmitEmail ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Just a moment...
                      </>
                    ) : (
                      "Send Results"
                    )}
                  </Button>
                  <Button
                    type="button"
                    disabled={isLoading}
                    variant={"link"}
                    className={cn("w-fit", {
                      hidden: stage !== 3,
                    })}
                    onClick={handleRepositoryClick}
                  >
                    I want the full code repository
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {stage < 3 && (
            <Button
              type="submit"
              className="w-full"
              disabled={!canPressNext || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {stage === 3 ? "Sending..." : "Just a moment..."}
                </>
              ) : stage === 3 ? (
                "Send Results"
              ) : (
                "Next"
              )}
            </Button>
          )}
        </div>
      </form>

      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Thank you! 🎉🎉</DialogTitle>
            <DialogDescription className={cn("pt-3")}>
              <p className="font-">Orel here.</p>
              I want to personally thank you for the vote of confidence.
              <br /> Check your email for more details about the product and
              updates.
              <br />
              <br />
              If you&apos;re interested in the full code repository, click here
              👇
              <Button
                type="button"
                className="w-full mt-2"
                onClick={handleRepositoryClick}
              >
                Get the full code repository
              </Button>
              <br />
              <br />
              Talk soon.
              <br />- Orel
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* {formik.values.email && (
        <PaymentSideBar
          email={formik.values.email}
          open={showRepositoryPurchase}
          onOpenChange={handleRepositoryClose}
        />
      )} */}
    </div>
  );
}
