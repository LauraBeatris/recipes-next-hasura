/// <reference types="cypress" />

import recipesListMock from "../fixtures/recipesListMock.json";
import createRecipeMock from "../fixtures/createRecipeMock.json";
import updateRecipeMock from "../fixtures/updateRecipeMock.json";

context("Recipes", () => {
  it("Should list recipes", () => {
    cy.graphqlOperations();
    cy.visit("/");

    const {
      response: {
        body: {
          data: { recipes },
        },
      },
    } = recipesListMock;

    cy.wait("@listRecipesQuery");

    cy.getByTestId("recipe").should("have.length", recipes.length);
  });

  it("Should create recipe", () => {
    cy.graphqlOperations();

    cy.getByTestId("add-recipe-button").click();

    cy.fillForm(createRecipeMock.formData);

    const {
      response: {
        data: {
          recipe: {
            name,
          },
        },
      },
    } = createRecipeMock;

    cy.wait("@createRecipeMutation");

    cy.getByTestId(`recipe-${name}`).should("exist");
  });

  it("Should delete recipe", () => {
    cy.graphqlOperations();

    const {
      response: {
        body: {
          data: { recipes },
        },
      },
    } = recipesListMock;

    const firstRecipeName = recipes[0].name;

    cy.getByTestId(`delete-recipe-button-${firstRecipeName}`).click();

    cy.getByTestId("delete-recipe-confirm-button").click();

    cy.wait("@deleteRecipeMutation");

    cy.getByTestId(`recipe-${firstRecipeName}`).should("not.exist");
  });

  it("Should update recipe", () => {
    cy.graphqlOperations({ hasUpdatedRecipe: true });

    const {
      response: {
        data: {
          recipe: {
            name,
          },
        },
      },
    } = createRecipeMock;

    cy.getByTestId(`recipe-${name}`).click();

    cy.wait("@getRecipeQuery");

    cy.fillForm(updateRecipeMock.formData);

    cy
      .getByTestId(`recipe-${updateRecipeMock.formData.name}`)
      .should("exist")
      .wait("@updateRecipeMutation");
  });
});
