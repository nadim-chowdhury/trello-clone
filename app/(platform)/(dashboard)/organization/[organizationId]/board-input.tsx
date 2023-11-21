"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

export default function BoardInput() {
  const { pending } = useFormStatus();

  return (
    <Input
      type="text"
      id="title"
      name="title"
      required
      placeholder="Enter a board title"
      disabled={pending}
    />
  );
}
