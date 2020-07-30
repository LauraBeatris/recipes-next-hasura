import gql from "graphql-tag";

const LIST_RECIPES_QUERY = gql`
  query listRecipes {
    recipes: recipes_recipes {
      id
      image_url
      ingredients
      instructions
      name
      recipe_url
    }
  }
`;

export default LIST_RECIPES_QUERY;
