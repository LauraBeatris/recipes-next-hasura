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
