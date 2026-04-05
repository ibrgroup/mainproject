"use client";

import NextTopLoader from "nextjs-toploader";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader showSpinner={false} color="#40E0D0" height={3} />
      {children}
    </>
  );
}
