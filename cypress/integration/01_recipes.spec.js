/// <reference types="cypress" />

import recipesListMock from "../fixtures/recipesListMock.json";
import createRecipeMock from "../fixtures/createRecipeMock.json";

context("Recipes", () => {
  beforeEach(() => {
    cy.graphqlOperations();

    cy.visit(Cypress.env("baseUrl"));
  });

  it("Should list recipes", () => {
    const {
      response: {
        body: {
          data: { recipes },
        },
      },
    } = recipesListMock;

    cy
      .getByTestId("recipe")
      .should("have.length", recipes.length)
      .wait("@listRecipesQuery");
  });

  it("Should create recipe", () => {
    cy.getByTestId("add-recipe-button").click();

    cy.fillForm(createRecipeMock.formData);

    const {
      response: {
        data: {
          recipe: {
            id,
          },
        },
      },
    } = createRecipeMock;

    cy
      .getByTestId(`recipe-${id}`)
      .should("exist")
      .wait("@createRecipeMutation");
  });
});
