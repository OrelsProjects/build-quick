"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";

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

const TemplateRenderer = ({ params }: { params: { templateName: string } }) => {
  const router = useRouter();
  const { templateName } = params;
  if (!templateName || typeof templateName !== "string") {
    return <div>Loading...</div>;
  }

  // Retrieve the component based on the templateName
  const SelectedComponent = componentMap[templateName];

  if (!SelectedComponent) {
    return <div>Template not found</div>;
  }

  return <SelectedComponent />;
};

export default TemplateRenderer;
