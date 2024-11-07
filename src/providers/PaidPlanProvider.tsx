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
  const [forcedClose, setForcedClose] = useState(false);

  useEffect(() => {}, [searchParams]);

  useEffect(() => {
    const showRepository = searchParams.get("repository") === "true";
    setOpenPaidPlan(showRepository);

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
  });

  const email = useMemo(() => {
    const encodedEmail = searchParams.get("to");
    if (!encodedEmail) return null;
    return decodeURIComponent(encodedEmail);
  }, [searchParams]);

  const handleClose = (open: boolean) => {
    if (open) return;
    router.push(pathname, {
      preserveQuery: true,
      paramsToRemove: ["repository", "to"],
    });
    setOpenPaidPlan(false);
    setForcedClose(true);
  };

  return (
    <PaymentSideBar
      open={openPaidPlan && !forcedClose}
      onOpenChange={handleClose}
      email={email || ""}
    />
  );
}
