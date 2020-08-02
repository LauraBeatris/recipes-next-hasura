import gql from "graphql-tag";

const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipe ($recipeData: recipes_recipes_insert_input!) {
    insert_recipes_recipes_one(object: $recipeData) {
      id
    }
  }
`;

export default CREATE_RECIPE_MUTATION;
