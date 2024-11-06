"use client";

import { comfortaa } from "../lib/fontUtils";

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={comfortaa.className}>{children}</div>;
}
