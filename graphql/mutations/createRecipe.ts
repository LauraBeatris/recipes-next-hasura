import gql from "graphql-tag";

const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipe ($recipeData: recipes_recipes_insert_input!) {
    recipe: insert_recipes_recipes_one(object: $recipeData) {
      id
      name
      image_url
    }
  }
`;

export default CREATE_RECIPE_MUTATION;
