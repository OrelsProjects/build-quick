/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "../lib/utils";
import { yearsOfExperience } from "../lib/dateUtils";

const faqData = [
  {
    question: "What do I get in the package?",
    answer: `
    <div>
        <p>
            <strong>1. Build Quick Starter Kit:</strong><br/> Everything you need to kickstart your project.<br/>Type in your core idea and build a fully functional website with features like email collection or payment integration.<br/>The starter kit includes templates, project setup files, and a seamless flow to launch quickly. The downloadable projects are available in:
        </p>
        <ul>
            <li>Typescript</li>
            <li>React, NextJS, TailwindCSS, Shadcn, and Prisma</li>
            <li>Compatible with Supabase or MongoDB</li>
            <li>Emails sending with MailGun</li>
        </ul>
        <br />
        <p>
            <strong>2. Comprehensive Documentation:</strong> Step-by-step guidance to set up your project, customize features, and ship your idea faster.
        </p>
    </div>
      `,
  },
  // Explain that I have (getExperienceYears()) years of experience writing web code, specifically in React.
  {
    question: "Why should I trust your code?",
    answer: `
    <div>
        <p>
            With ${yearsOfExperience} years of experience writing web code, specifically in React, I have built and shipped many projects, including a SaaS products and worked for startups. <br/>I have also worked with clients to build their ideas and bring them to life.
        </p>
    </div>
        `,
  },
  {
    question: "Will I get updates to the project?",
    answer: `
        <div>
            <p>
                Absolutely. I will be updating the project with new features, bug fixes, and improvements. You will get lifetime access to the updates.
            </p>
        </div>
            `,
  },
  // Will I get a refund - Since the app is in development, you will get a refund if you do not receive the project files within 30 days of purchase.
  {
    question: "What if I don't receive the project files?",
    answer: `
        <div>
            <p>
                Since the app is in development, you will get a refund if you do not receive the project files within 30 days of purchase.
            </p>
        </div>
            `,
  },

  // /app router or /pages router? - app router
  {
    question: "What is the difference between /app and /pages?",
    answer: `
            <div>
                <p>
                    The /app router is a private route that requires authentication to access. It is used for authenticated user pages, such as the dashboard or settings page. The /pages router is a public route that can be accessed by anyone, such as the home page or about page.
                </p>
            </div>
                `,
  },

  // Why should I use this and not another template? - This is more than a template. You choose your favorite landing page, type your idea, get the relevant keys (API, DB, PayPal keys etc.) and deploy to vercel.<br/> As simple as that.
  {
    question: "Why should I use this and not any other template?",
    answer: `
        <div>
            <p>
                This is more than a template.<br/> You choose your favorite landing page, type your idea, get the relevant keys (API, DB, PayPal keys etc.) and deploy to vercel.<br/> As simple as that. <br/> <strong>You don't need to add a single line of code.</strog>
            </p>
        </div>
            `,
  },
];

export default function FAQSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", className)}>
      <div className="flex flex-col gap-10 items-center md:flex-row md:justify-center md:items-start px-4 md:px-6">
        <h2 className="text-xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
          Frequently asked questions
        </h2>
        <div className="flex flex-col w-full max-w-xl">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="w-full"
              >
                <AccordionTrigger className="w-full text-lg font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  <div
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                    className="w-full"
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* <div className="text-center mt-8">
            <p className="text-base-content/80">
              Have another question? Contact me on{" "}
              <a
                className="link text-base-content"
                target="_blank"
                href="https://twitter.com/marc_louvion"
              >
                Twitter
              </a>{" "}
              or by{" "}
              <a
                href="mailto:marc@shipfa.st"
                target="_blank"
                className="link text-base-content"
              >
                email
              </a>
              .
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
