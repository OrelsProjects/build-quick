/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What do I get exactly?",
    answer: `
    <div>
        <p>
            <strong>1. Build Quick Starter Kit:</strong> Everything you need to kickstart your project. Type in your core idea and build a fully functional landing page with features like email collection or payment integration. The starter kit includes templates, project setup files, and a seamless flow to launch quickly. The downloadable projects are available in:
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
  {
    // question: "What are the ShipFast Leaderboards?",
    // answer: `
    //     The <a href="/leaderboard" class="link link-primary">Leaderboards</a> are a fun way to showcase your startup.<br/><br/>
    //     Startups are ranked by revenue (verified by Stripe), so you can see who&apos;s making the most money.<br/><br/>
    //     Leaderboards also help you gain exposure by showing your startup to thousands of entrepreneurs who visit the leaderboards page every month.
    //   `,
  },
];

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
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
                <AccordionTrigger className="w-full">
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
