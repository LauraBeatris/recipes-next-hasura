Cypress.Commands.add("fillForm", recipeData => {
  cy.getByTestId("recipe-name-input").click();
  cy.getByTestId("recipe-name-input").clear();
  cy.getByTestId("recipe-name-input").type(recipeData.name);

  cy.getByTestId("recipe-image-url-input").click();
  cy.getByTestId("recipe-image-url-input").clear();
  cy.getByTestId("recipe-image-url-input").type(recipeData.image_url);

  cy.getByTestId("recipe-ingredients-input").click();
  cy.getByTestId("recipe-ingredients-input").clear();
  cy.getByTestId("recipe-ingredients-input").type(recipeData.ingredients);

  cy.getByTestId("recipe-instructions-input").click();
  cy.getByTestId("recipe-instructions-input").clear();
  cy.getByTestId("recipe-instructions-input").type(recipeData.instructions);

  cy.getByTestId("recipe-recipe-url-input").click();
  cy.getByTestId("recipe-recipe-url-input").clear();
  cy.getByTestId("recipe-recipe-url-input").type(recipeData.recipe_url);

  cy.getByTestId("save-recipe-button").click();
});
