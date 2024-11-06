"use client";

import React, { useEffect } from "react";
import { initEventTracker } from "@/eventTracker";

const AnalyticsProvider = () => {
  useEffect(() => {
    initEventTracker();
  }, []);

  return null;
};

export default AnalyticsProvider;
