import gql from "graphql-tag";

const DELETE_RECIPE_MUTATION = gql`
  mutation DeleteRecipe ($id: uuid!) {
    delete_recipes_recipes_by_pk(id: $id) {
      id
    }
  }
`;

export default DELETE_RECIPE_MUTATION;
