"use client";
// components/Layout.js
import { useEffect } from "react";
import Head from "next/head";
import NavigationBar from "./navigationBar";

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

  useEffect(() => {
    if (templateName) {
      // Format the templateName to a readable title
      const formattedTitle = templateName
        ?.toString()
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

      // Set the document title
      document.title = "Template | " + formattedTitle;
    } else {
      // Default title if no template name is provided
      document.title = "Default Title";
    }
  }, [templateName]);

  // Define the path for the OG image based on the template name
  const ogImageUrl = templateName
    ? `/templates/${templateName}/og-image.jpg` // Customize this path if needed
    : "/icon.png"; // Default image if no template name is provided

  return (
    <>
      <Head>
        {/* Other meta tags */}
        <meta property="og:title" content={document.title} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
      </Head>

      <div className="relative">
        <NavigationBar 
        templateName={templateName}
        />
        {children}
      </div>
    </>
  );
};

export default Layout;
