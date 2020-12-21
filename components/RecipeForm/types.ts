import { RecipeFormData } from "types/recipes";

export interface CreateRecipeForm {
  onSubmit: (recipeData: RecipeFormData) => void;
  isLoading: boolean;
  defaultValues?: RecipeFormData
}
