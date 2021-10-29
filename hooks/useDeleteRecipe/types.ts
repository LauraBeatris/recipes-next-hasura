import { MutationResult } from "@apollo/client";

export type UseDeleteRecipePayload = [
  (id: string) => void,
  MutationResult
]
