import createRecipeMock from "../../fixtures/createRecipeMock.json";
import recipesListMock from "../../fixtures/recipesListMock.json";
import deleteRecipeMock from "../../fixtures/deleteRecipeMock.json";

const MAP_OPERATION_NAME_TO_MOCK = {
  ListRecipes: recipesListMock.response,
  CreateRecipe: createRecipeMock.response,
  DeleteRecipe: deleteRecipeMock.response,
};

const MAP_OPERATION_NAME_TO_ALIAS = {
  ListRecipes: "listRecipesQuery",
  CreateRecipe: "createRecipeMutation",
  DeleteRecipe: "deleteRecipeMutation",
};

Cypress.Commands.add("graphqlOperations", () => {
  cy.intercept(
    "POST",
    "/graphql",
    (req) => {
      const { body: { operationName } } = req;

      req.alias = MAP_OPERATION_NAME_TO_ALIAS[operationName];

      if (MAP_OPERATION_NAME_TO_MOCK[operationName]) {
        req.reply(MAP_OPERATION_NAME_TO_MOCK[operationName]);
      }
    },
  );
});

