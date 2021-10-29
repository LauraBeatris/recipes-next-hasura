import gql from "graphql-tag";

const UPDATE_RECIPE_MUTATION = gql`
  mutation UpdateRecipe (
    $recipeData: recipes_set_input!,
    $pk_columns: recipes_pk_columns_input!
  ) {
    update_recipes_by_pk(
      pk_columns: $pk_columns,
      _set: $recipeData
    ) {
      id
    }
  }
`;

export default UPDATE_RECIPE_MUTATION;
