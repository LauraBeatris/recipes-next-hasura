import createRecipeMock from "../../fixtures/createRecipeMock.json";
import recipesListMock from "../../fixtures/recipesListMock.json";
import deleteRecipeMock from "../../fixtures/deleteRecipeMock.json";
import getRecipeMock from "../../fixtures/getRecipeMock.json";
import updateRecipeMock from "../../fixtures/updateRecipeMock.json";

const MAP_OPERATION_NAME_TO_MOCK = {
  ListRecipes: recipesListMock.response,
  CreateRecipe: createRecipeMock.response,
  DeleteRecipe: deleteRecipeMock.response,
  GetRecipe: getRecipeMock.response,
  UpdateRecipe: updateRecipeMock.response,
};

const MAP_OPERATION_NAME_TO_ALIAS = {
  ListRecipes: "listRecipesQuery",
  CreateRecipe: "createRecipeMutation",
  DeleteRecipe: "deleteRecipeMutation",
  GetRecipe: "getRecipeQuery",
  UpdateRecipe: "updateRecipeMutation",
};

Cypress.Commands.add("graphqlOperations", ({ hasUpdatedRecipe = false } = {}) => {
  cy.intercept(
    "POST",
    "/graphql",
    (req) => {
      const { body: { operationName } } = req;

      req.alias = MAP_OPERATION_NAME_TO_ALIAS[operationName];

      if (operationName === "ListRecipes" && hasUpdatedRecipe) {
        req.reply(updateRecipeMock.updatedRecipesListResponse);

        return;
      }

      if (MAP_OPERATION_NAME_TO_MOCK[operationName]) {
        req.reply(MAP_OPERATION_NAME_TO_MOCK[operationName]);
      }
    },
  );
});

