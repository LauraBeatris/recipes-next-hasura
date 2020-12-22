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
});
