"use client";

import { create } from "@/actions/createBoard";
import { useFormState } from "react-dom";
import BoardInput from "./board-input";
import BoardButton from "./board-button";

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <div>
      <form action={dispatch} className="flex items-center gap-2">
        <BoardInput />
        <BoardButton />
      </form>

      {state?.errors?.title?.map((error: string) => (
        <p key={error} className="text-rose-500">
          {error}
        </p>
      ))}
    </div>
  );
}
