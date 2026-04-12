import React from "react";
import { App } from "./App";
import { LeapsPicker } from "./LeapsPicker";
import { TempovorePage } from "./TempovorePage";
import { normalizePath } from "./utils";

export function resolvePage(pathname: string) {
  const path = normalizePath(pathname);

  if (path === "/leapspicker") {
    return <LeapsPicker />;
  }

  if (path === "/tempovore") {
    return <TempovorePage />;
  }

  return <App />;
}
