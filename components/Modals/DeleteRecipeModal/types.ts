import { Recipe } from "types/recipes";

export interface DeleteRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipeId: Recipe["id"],
  recipeName: Recipe["name"],
}
