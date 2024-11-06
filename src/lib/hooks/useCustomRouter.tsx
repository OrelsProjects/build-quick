"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter, useSearchParams } from "next/navigation";

export interface CustomRouterOptions {
  preserveQuery?: boolean | null; // Use null for now to not preserve query and not break existing code
  paramsToRemove?: string[];
  paramsToAdd?: Record<string, string>;
}

export function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const push = (
    href: string,
    routerOptions: CustomRouterOptions = { preserveQuery: true },
    options?: NavigateOptions
  ) => {
    // HACK: If relative URL given, stick the current host on the string passed to URL()
    // as the constructor throws an error if URL without a host is given
    const url = new URL(
      href.includes("http") ? href : window.location.host + href
    );

    if (routerOptions?.preserveQuery) {
      searchParams.forEach((val, key) => {
        url.searchParams.append(key, val);
      });
    }

    if (routerOptions?.paramsToRemove) {
      routerOptions.paramsToRemove.forEach((key) => {
        url.searchParams.delete(key);
      });
    }

    if (routerOptions?.paramsToAdd) {
      Object.entries(routerOptions.paramsToAdd).forEach(([key, val]) => {
        url.searchParams.append(key, val);
      });
    }

    let urlString = url.toString();

    // If the href arg was relative, strip everything before the first '/' to
    // revert it back to a relative URL we can pass into the router.push() method
    if (!href.includes("http")) {
      urlString = urlString.substring(urlString.indexOf("/"));
    }

    router.push(urlString, options);
  };

  return { ...router, push };
}
