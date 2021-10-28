import gql from "graphql-tag";

import { Recipe } from "types/recipes";

export interface ListRecipesQuery {
  recipes: Pick<Recipe, "id" | "name" | "imageURL">[];
}

const LIST_RECIPES_QUERY = gql`
  query ListRecipes {
    recipes: recipes(order_by: {
      updatedAt: desc
    }) {
      id
      name
      imageURL
    }
  }
`;

export default LIST_RECIPES_QUERY;
