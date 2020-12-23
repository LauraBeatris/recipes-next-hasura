import { MutationResult } from "@apollo/react-hooks";

import { RecipeFormData } from "types/recipes";

export type UseCreateRecipePayload = [
  (recipeData: RecipeFormData) => void,
  MutationResult
]
