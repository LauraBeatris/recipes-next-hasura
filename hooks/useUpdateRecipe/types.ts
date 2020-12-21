import { MutationResult } from "@apollo/react-hooks";

import { RecipeFormData } from "types/recipes";

export type UseUpdateRecipePayload = [
  (recipeId: string, recipeData: RecipeFormData) => void,
  MutationResult
]
