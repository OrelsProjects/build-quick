import React from "react";
import Template, { TemplateId } from "@/lib/models/template";
import DataHarvester from "@/components/template/data-harvester";
import IdeasGenerator from "@/components/template/ideas-generator";
import LogoGenerator from "@/components/template/logo-generator";
import NewsletterCurator from "@/components/template/newsletter-curator";
import OnboardFlow from "@/components/template/onboard-flow";
import PolicyCraft from "@/components/template/policy-craft";
import ProductivityPro from "@/components/template/productivity-pro";
import SocialProofGenerator from "@/components/template/social-proof-generator";
import TrustBoost from "@/components/template/trust-boost";
import TrendyCalender from "@/components/template/trendy-calendar";

export const templates: Template[] = [
  {
    name: "Ideas Generator",
    image: "/templates/ideas-generator-large.png",
    id: "ideas-generator",
  },
  {
    name: "Data Harvester",
    image: "/templates/data-harvester-large.png",
    id: "data-harvester",
  },
  {
    name: "Onboard Flow",
    image: "/templates/onboard-flow-large.png",
    id: "onboard-flow",
  },
  {
    name: "Trendy Calendar",
    image: "/templates/trendy-calendar-large.png",
    id: "trendy-calendar",
  },
  {
    name: "Logo Generator",
    image: "/templates/logo-generator-large.png",
    id: "logo-generator",
  },
  {
    name: "Newsletter Curator",
    image: "/templates/newsletter-curator-large.png",
    id: "newsletter-curator",
  },
  {
    name: "Social Proof Generator",
    image: "/templates/social-proof-generator-large.png",
    id: "social-proof-generator",
  },
  {
    name: "Trust Boost",
    image: "/templates/trust-boost-large.png",
    id: "trust-boost",
  },
  {
    name: "Policy Craft",
    image: "/templates/policy-craft-large.png",
    id: "policy-craft",
  },
  {
    name: "Productivity Pro",
    image: "/templates/productivity-pro-large.png",
    id: "productivity-pro",
  },
];

export const productDescriptions = [
  "A tool that enables content creators to curate personalized newsletters for each subscriber based on their preferences.",
  "A service for e-commerce sites to generate trust-boosting widgets like recent purchases, visitor counts, and live testimonials.",
  "A streamlined tool that lets startups and small businesses create logos from a brief description of their brand identity.",
  "A tool that generates custom privacy policies and terms based on a business’s needs and industry, making legal compliance easier for startups.",
];

export const templateNameToComponent: Record<TemplateId, () => React.ReactNode> = {
    "ideas-generator": () => React.createElement(IdeasGenerator),
    "data-harvester": () => React.createElement(DataHarvester),
    "onboard-flow": () => React.createElement(OnboardFlow),
    "trendy-calendar": () => React.createElement(TrendyCalender),
    "logo-generator": () => React.createElement(LogoGenerator),
    "newsletter-curator": () => React.createElement(NewsletterCurator),
    "social-proof-generator": () => React.createElement(SocialProofGenerator),
    "trust-boost": () => React.createElement(TrustBoost),
    "policy-craft": () => React.createElement(PolicyCraft),
    "productivity-pro": () => React.createElement(ProductivityPro),
  };
  