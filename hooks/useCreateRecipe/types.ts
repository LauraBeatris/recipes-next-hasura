import { MutationResult } from "@apollo/client";

import { RecipeFormData } from "types/recipes";

export type UseCreateRecipePayload = [
  (recipeData: RecipeFormData) => void,
  MutationResult
]
