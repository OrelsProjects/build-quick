export type TemplateRouter = string;

export type TemplateId =
  | "ideas-generator"
  | "data-harvester"
  | "onboard-flow"
  | "trendy-calendar"
  | "logo-generator"
  | "newsletter-curator"
  | "social-proof-generator"
  | "trust-boost"
  | "policy-craft"
  | "productivity-pro";

export default interface Template {
  name: string;
  id: TemplateId;
  image: string;
}
