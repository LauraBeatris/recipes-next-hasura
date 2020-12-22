Cypress.Commands.add("listRecipesQuery", (mockedData) => {
  cy.intercept(
    "POST",
    "/graphql",
    (req) => {
      if (req.body.operationName === "ListRecipes") {
        req.reply(mockedData);
      }
    },
  ).as("listRecipesQuery");
});

Cypress.Commands.add("createRecipeMutation", (mockedData) => {
  cy.intercept(
    "POST",
    "/graphql",
    (req) => {
      if (req.body.operationName === "CreateRecipe") {
        req.reply(mockedData);
      }
    },
  ).as("createRecipeMutation");
});
