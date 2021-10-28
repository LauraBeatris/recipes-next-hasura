export interface Recipe {
  id: string;
  name: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
  recipeURL: string;
  ingredients: string;
  instructions: string;
}

export type RecipeFormData = Omit<Recipe, "id" | "createdAt" | "updatedAt">;
