import { MutationResult } from "@apollo/client";

import { RecipeFormData } from "types/recipes";

export type UseUpdateRecipePayload = [
  (recipeId: string, recipeData: RecipeFormData) => void,
  MutationResult
]
