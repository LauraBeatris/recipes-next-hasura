/// <reference types="cypress" />

context("Recipes", () => {
  it("Should list recipes", () => {
    cy.fixture("recipesListMock.json").then((mockedData) => {
      cy.listRecipesQuery(mockedData);

      cy.visit(Cypress.env("baseUrl"));

      cy.wait("@listRecipesQuery");

      const expectedListRecipesLength = mockedData.body.data.recipes.length;

      cy.getByTestId("recipe").should("have.length", expectedListRecipesLength);
    });
  });

  it("Should create recipe", () => {
    cy.fixture("createRecipeMock.json").then((mockedData) => {
      const { newListResponse, response, formData } = mockedData;

      cy.listRecipesQuery(newListResponse);
      cy.createRecipeMutation(response);

      cy.getByTestId("add-recipe-button").click();

      cy.fillForm(formData);

      cy.wait(["@listRecipesQuery", "@createRecipeMutation"]);

      cy.getByTestId(`recipe-${response.data.insert_recipes_recipes_one.id}`).should("exist");

      const newListRecipeExpectedLength = newListResponse.body.data.recipes.length;

      cy.getByTestId("recipe").should("have.length", newListRecipeExpectedLength);
    });
  });
});
