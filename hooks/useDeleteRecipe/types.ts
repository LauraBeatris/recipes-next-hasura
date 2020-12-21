import { MutationResult } from "@apollo/react-hooks";

export type UseDeleteRecipePayload = [
  (id: string) => void,
  MutationResult
]
