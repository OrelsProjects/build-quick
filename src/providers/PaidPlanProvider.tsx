"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PaymentSideBar from "../components/paymentSideBar";

export default function PaidPlanProvider() {
  const searchParams = useSearchParams();
  const [openPaidPlan, setOpenPaidPlan] = useState(false);

  useEffect(() => {
    const showRepository = searchParams.get("repository") === "true";
    setOpenPaidPlan(showRepository);
  }, [searchParams]);

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
