import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};

export const createSafeAction = <TInput, TOutput>(
  shcema: z.Schema<TInput>,
  handler: (validateData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safePerse(data);

    if (!validationResult.success) {
      fieldErrors: validationResult.error.flatten()
        .FieldErrors as FieldErrors<TInput>;
    }

    return handler(validationResult.data);
  };
};
