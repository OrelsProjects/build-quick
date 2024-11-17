"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import NavigationBar from "./navigationBar";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    templateName: string;
  };
}) => {
  const { templateName } = params;
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (templateName) {
      // Format the templateName to a readable title
      const formattedTitle = templateName
        .toString()
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      if (!document) return;
      // Set the document title
      document.title = "Template | " + formattedTitle;
    } else {
      // Default title if no template name is provided
      document.title = "Default Title";
    }

    // Check if it's the user's first visit
    const hasSeenOverlay = localStorage.getItem("hasSeenNavigationOverlay");
    if (!hasSeenOverlay) {
      setShowOverlay(true);
    }
  }, [templateName]);

  // Define the path for the OG image based on the template name
  const ogImageUrl = templateName
    ? `/templates/${templateName}/og-image.jpg`
    : "/icon.png";

  const dismissOverlay = () => {
    setShowOverlay(false);
    localStorage.setItem("hasSeenNavigationOverlay", "true");
  };

  return (
    <>
      <Head>
        <meta property="og:title" content={document?.title} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
      </Head>

      <div className="relative">
        <NavigationBar templateName={templateName} />
        {children}

        {showOverlay && (
          <motion.div
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, y: 20 },
            }}
            transition={{ delay: 1, duration: 500 }}
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center font-sans"
          >
            <div className="bg-white p-6 rounded-lg max-w-md mx-4 relative flex flex-col">
              <h2 className="text-xl font-bold mb-4">
                Welcome to the Template Preview
              </h2>
              <p className="mb-4">
                Use the navigation bar at the bottom to decide whether you like
                this template and want to continue or if you want to keep
                exploring
              </p>
              <Button
                onClick={dismissOverlay}
                className="w-fit self-center px-10"
              >
                Got it!
              </Button>
            </div>
            <div className="absolute bottom-28 inset-x-0 mx-auto transform flex justify-center">
              <svg
                className="w-8 h-8 text-white animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <NavigationBar disableOnClick templateName={templateName} />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Layout;
