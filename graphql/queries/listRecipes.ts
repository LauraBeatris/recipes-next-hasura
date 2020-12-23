import gql from "graphql-tag";

import { Recipe } from "types/recipes";

export interface ListRecipesQuery {
  recipes: Pick<Recipe, "id" | "name" | "image_url">[];
}

const LIST_RECIPES_QUERY = gql`
  query ListRecipes {
    recipes: recipes_recipes(order_by: {
      updated_at: desc
    }) {
      id
      name
      image_url
    }
  }
`;

export default LIST_RECIPES_QUERY;
