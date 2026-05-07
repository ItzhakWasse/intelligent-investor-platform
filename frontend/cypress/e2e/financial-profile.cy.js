/* global cy, describe, it */

describe("Financial Profile E2E", () => {
  it("loads the application successfully", () => {
    cy.visit("/");

    cy.contains("The Intelligent Investor Platform").should("be.visible");
    cy.contains("Financial Profile").should("be.visible");
    cy.contains("Calculate Plan").should("be.visible");
    cy.contains("Save Profile").should("be.visible");
  });

  it("calculates and saves a financial profile", () => {
    const uniqueName = `E2E User ${Date.now()}`;

    cy.visit("/");

    cy.contains("The Intelligent Investor Platform").should("be.visible");

    cy.get('input[placeholder="Yehuda Baza"]').clear().type(uniqueName);
    cy.get('input[placeholder="15000"]').clear().type("15000");
    cy.get('input[placeholder="10000"]').clear().type("10000");

    cy.contains("button", "Calculate Plan").click();

    cy.contains("Fixed Costs").should("be.visible");
    cy.contains("Savings Goals").should("be.visible");
    cy.contains("Active Investments").should("be.visible");
    cy.contains("Guilt-Free Spending").should("be.visible");

    cy.contains("₪5,500").should("be.visible");
    cy.contains("₪1,000").should("be.visible");
    cy.contains("₪2,750").should("be.visible");

    cy.contains("15-Year Investment Projection").should("be.visible");

    cy.contains("button", "Save Profile").click();

    cy.contains("Profile saved successfully").should("be.visible");
    cy.contains("Saved Profiles").should("be.visible");
    cy.contains(uniqueName).should("be.visible");
  });

  it("shows validation error when gross salary is missing", () => {
    cy.visit("/");

    cy.get('input[placeholder="Yehuda Baza"]').clear().type("Missing Gross Salary User");
    cy.get('input[placeholder="15000"]').clear();
    cy.get('input[placeholder="10000"]').clear().type("10000");

    cy.contains("button", "Calculate Plan").click();

    cy.contains("Gross salary is required").should("be.visible");
  });

  it("calculates plan when bank net is missing by using estimated bank net", () => {
  cy.visit("/");

  cy.get('input[placeholder="Yehuda Baza"]').clear().type("Estimated Bank Net User");
  cy.get('input[placeholder="15000"]').clear().type("15000");
  cy.get('input[placeholder="10000"]').clear();

  cy.contains("button", "Calculate Plan").click();

  cy.contains("Fixed Costs").should("be.visible");
  cy.contains("Savings Goals").should("be.visible");
  cy.contains("Active Investments").should("be.visible");
  cy.contains("Guilt-Free Spending").should("be.visible");

  cy.contains("15-Year Investment Projection").should("be.visible");
  cy.contains("Spending plan calculated successfully").should("be.visible");
});

  it("shows validation error when saving without name", () => {
    cy.visit("/");

    cy.get('input[placeholder="Yehuda Baza"]').clear();
    cy.get('input[placeholder="15000"]').clear().type("15000");
    cy.get('input[placeholder="10000"]').clear().type("10000");

    cy.contains("button", "Save Profile").click();

    cy.contains("Name is required").should("be.visible");
  });
});