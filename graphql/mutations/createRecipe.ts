import gql from "graphql-tag";

const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipe ($recipeData: recipes_insert_input!) {
    recipe: insert_recipes_one(object: $recipeData) {
      id
      name
      imageURL
    }
  }
`;

export default CREATE_RECIPE_MUTATION;
