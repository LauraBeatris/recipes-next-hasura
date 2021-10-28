import gql from "graphql-tag";

const GET_RECIPE_QUERY = gql`
  query GetRecipe($id: uuid!) {
    recipe: recipes_by_pk(id: $id) {
      id
      name
      imageURL
      recipeURL
      ingredients
      instructions
    }
  }
`;

export default GET_RECIPE_QUERY;
