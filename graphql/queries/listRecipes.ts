import gql from "graphql-tag";

const LIST_RECIPES_QUERY = gql`
  query listRecipes {
    recipes: recipes_recipes {
      id
      name
      imageUrl
      recipeUrl
      ingredients
      instructions
    }
  }
`;

export default LIST_RECIPES_QUERY;
