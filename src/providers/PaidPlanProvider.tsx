"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PaymentSideBar from "../components/paymentSideBar";
import usePayments from "../lib/hooks/usePayments";
import { useCustomRouter } from "../lib/hooks/useCustomRouter";

export default function PaidPlanProvider() {
  const { verifyUserPayment } = usePayments();
  const router = useCustomRouter();
  const searchParams = useSearchParams();
  const [openPaidPlan, setOpenPaidPlan] = useState(false);

  useEffect(() => {
    const showRepository = searchParams.get("repository") === "true";
    if (showRepository) {
      setOpenPaidPlan(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const encodedEmail = searchParams.get("to");
    if (!encodedEmail) return;
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
  });

  const email = useMemo(() => {
    const encodedEmail = searchParams.get("to");
    if (!encodedEmail) return null;
    return decodeURIComponent(encodedEmail);
  }, [searchParams]);

  return (
    <PaymentSideBar
      open={openPaidPlan}
      onOpenChange={setOpenPaidPlan}
      email={email || ""}
    />
  );
}
