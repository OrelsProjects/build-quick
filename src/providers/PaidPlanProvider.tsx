"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PaymentSideBar from "../components/paymentSideBar";
import usePayments from "../lib/hooks/usePayments";
import { useCustomRouter } from "../lib/hooks/useCustomRouter";

export default function PaidPlanProvider() {
  const { verifyUserPayment } = usePayments();
  const router = useCustomRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openPaidPlan, setOpenPaidPlan] = useState(false);

  useEffect(() => {}, [searchParams]);

  useEffect(() => {
    const showRepository = searchParams.get("repository") === "true";
    setOpenPaidPlan(showRepository);
    console.log("showRepository", showRepository);
    const encodedEmail = searchParams.get("to") || "";
    const email = decodeURIComponent(encodedEmail);
    verifyUserPayment(email)
      .then(() => {
        setOpenPaidPlan(false);
        router.push("/checkout/success", {
          preserveQuery: false,
          paramsToAdd: { email },
        });
      })
      .catch(() => {});
  }, [pathname]);

  const email = useMemo(() => {
    const encodedEmail = searchParams.get("to");
    if (!encodedEmail) return null;
    return decodeURIComponent(encodedEmail);
  }, [searchParams]);

  const handleClose = (open: boolean) => {
    if (open) return;
    setOpenPaidPlan(false);
  };

  return (
    <PaymentSideBar
      open={openPaidPlan}
      onOpenChange={handleClose}
      email={email || ""}
    />
  );
}
