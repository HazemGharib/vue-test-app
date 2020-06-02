// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits Home page", () => {
    cy.visit("/");
    cy.contains("Home");
    cy.contains("Vue Test App");
    cy.get(".page-footer").within(() => {
      cy.contains("Footer Content");
      cy.contains("Links");
      cy.get("ul li").contains("Link 1");
      cy.get("ul li").contains("Link 2");
      cy.get("ul li").contains("Link 3");
      cy.get("ul li").contains("Link 4");
    });
    cy.get(".card").should("have.length", 24);
    cy.visit("/home");
  });

  it("Visits About page", () => {
    cy.visit("/about");
    cy.contains("About");
    cy.contains("h1", "Vue Test App");
    cy.contains("h6", "V1.0.0");
    cy.contains(
      "p",
      "This is a test application to experience how easy is it to use Vue JS"
    );
    cy.contains(
      "p",
      "Vue router, Unit tests, E2e tests and much more were used here"
    );
  });
});
