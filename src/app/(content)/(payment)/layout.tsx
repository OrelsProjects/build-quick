"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
        vault: true, // Enable vault to store payment details
        currency: "USD",
        enableFunding: "card,ideal",
        components: "googlepay,buttons",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
};

export default Layout;
