"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PaymentSideBar, {
  OpenChangeOptions,
} from "../components/paymentSideBar";
import usePayments from "../lib/hooks/usePayments";
import { useCustomRouter } from "../lib/hooks/useCustomRouter";

export default function PaidPlanProvider() {
  const searchParams = useSearchParams();
  const router = useCustomRouter();
  const pathname = usePathname();

  const { verifyUserPayment, getSpotsLeft } = usePayments();

  const [openPaidPlan, setOpenPaidPlan] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null);

  useEffect(() => {
    getSpotsLeft()
      .then((spots) => setSpotsLeft(spots))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const showRepository = searchParams.get("repository") === "true";
    setOpenPaidPlan(showRepository);
    // console.log("showRepository", showRepository);
    // const encodedEmail = searchParams.get("to") || "";
    // const email = decodeURIComponent(encodedEmail);
    // verifyUserPayment(email)
    //   .then(() => {
    //     setOpenPaidPlan(false);
    //     router.push("/checkout/success", {
    //       preserveQuery: false,
    //       paramsToAdd: { to: email },
    //     });
    //   })
    //   .catch(() => {});
  }, [pathname, searchParams]);

  const email = useMemo(() => {
    const encodedEmail = searchParams.get("to");
    if (!encodedEmail) return null;
    return decodeURIComponent(encodedEmail);
  }, [pathname, searchParams]);

  const handleClose = (open: boolean, options?: OpenChangeOptions) => {
    if (open) return;
    setOpenPaidPlan(false);

    if (options?.avoidNavigation) return;

    router.push(pathname, {
      preserveQuery: true,
      paramsToRemove: ["to", "repository"],
    });
  };

  return (
    <PaymentSideBar
      open={openPaidPlan}
      onOpenChange={handleClose}
      email={email || ""}
      spotsLeft={spotsLeft}
    />
  );
}
