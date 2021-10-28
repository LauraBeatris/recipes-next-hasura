import { Recipe } from "types/recipes";

export interface RecipeProps extends Pick<Recipe, "id" | "name"> {
  imageUrl: Recipe["imageURL"];
}
