"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function BoardDeletButton() {
  const { pending } = useFormStatus();

  return (
    <Button size="sm" type="submit" disabled={pending}>
      Delete
    </Button>
  );
}
