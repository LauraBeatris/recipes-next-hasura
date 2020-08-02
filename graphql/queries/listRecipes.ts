import gql from "graphql-tag";

const LIST_RECIPES_QUERY = gql`
  query listRecipes {
    recipes: recipes_recipes(order_by: {
      updated_at: asc
    }) {
      id
      name
      image_url
    }
  }
`;

export default LIST_RECIPES_QUERY;
