"use client";

import React, { FC, useState, useEffect } from "react";

// Import all components
import IdeasGenerator from "@/components/template/ideas-generator";
import DataHarvester from "@/components/template/data-harvester";
import OnboardFlow from "@/components/template/onboard-flow";
import TrendyCalender from "@/components/template/trendy-calendar";
import LogoGenerator from "@/components/template/logo-generator";
import SocialProofGenerator from "@/components/template/social-proof-generator";
import TrustBoost from "@/components/template/trust-boost";
import PolicyCraft from "@/components/template/policy-craft";
import ProductivityPro from "@/components/template/productivity-pro";
import NewsletterCurator from "@/components/template/newsletter-curator";
import { AnimatePresence, motion } from "framer-motion";

// Define the component mapping
const componentMap: Record<string, FC> = {
  "ideas-generator": IdeasGenerator,
  "data-harvester": DataHarvester,
  "onboard-flow": OnboardFlow,
  "trendy-calendar": TrendyCalender,
  "logo-generator": LogoGenerator,
  "social-proof-generator": SocialProofGenerator,
  "trust-boost": TrustBoost,
  "policy-craft": PolicyCraft,
  "productivity-pro": ProductivityPro,
  "newsletter-curator": NewsletterCurator,
};

// framer-motion props
const fadeFromTop = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const TemplateRenderer = ({ params }: { params: { templateName: string } }) => {
  const [showBanner, setShowBanner] = useState(false);
  const { templateName } = params;

  useEffect(() => {
    const bannerDismissed = localStorage.getItem("templateBannerDismissed");
    if (!bannerDismissed) {
      setShowBanner(true);
    }
  }, []);

  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem("templateBannerDismissed", "true");
  };

  if (!templateName || typeof templateName !== "string") {
    return <div>Loading...</div>;
  }

  // Retrieve the component based on the templateName
  const SelectedComponent = componentMap[templateName];

  if (!SelectedComponent) {
    return <div>Template not found</div>;
  }

  return (
    <div className="font-sans">
      <AnimatePresence>
        {showBanner && (
          <motion.div
            key="template-preview-banner"
            {...fadeFromTop}
            className="fixed top-0 left-0 w-full bg-sky-500 text-white p-4 shadow-md z-50 animate-slide-down"
            role="alert"
            aria-live="polite"
          >
            <div className="container mx-auto flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">Template Preview</h2>
                <p className="mt-1">
                  This is a template preview. CTA buttons and forms are not
                  connected to any functionality (though other buttons may...)
                </p>
              </div>
              <button
                onClick={dismissBanner}
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="Close banner"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SelectedComponent />
    </div>
  );
};

export default TemplateRenderer;
