/* global cy, describe, it */

describe("Financial Profile E2E", () => {
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
});