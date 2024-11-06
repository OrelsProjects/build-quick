"use client";

import FontProvider from "../../providers/FontProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <FontProvider>{children}</FontProvider>;
};

export default Layout;
