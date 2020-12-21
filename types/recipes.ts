export interface Recipe {
  id: string;
  name: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  recipe_url: string;
  ingredients: string;
  instructions: string;
}

export type RecipeFormData = Omit<Recipe, "id" | "created_at" | "updated_at">;
