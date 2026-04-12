"use client";

import { Button } from "@once-ui-system/core";

export function BackButton() {
  return (
    <Button
      variant="tertiary"
      size="s"
      prefixIcon="chevronLeft"
      onClick={() => window.history.back()}
    >
      Back to Projects
    </Button>
  );
}
