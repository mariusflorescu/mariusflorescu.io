import Providers from "@components/Providers";
import { NextPageWithLayout } from "@types";
import React from "react";

export function withProviders(fn: (page: React.ReactElement) => React.ReactNode) {
  return function withPage(page: React.ReactElement) {
    return <Providers>{fn(page)}</Providers>;
  };
}
