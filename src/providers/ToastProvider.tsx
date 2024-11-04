"use client";

import * as toast from "react-toastify";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <toast.ToastContainer />
      {children}
    </>
  );
}
