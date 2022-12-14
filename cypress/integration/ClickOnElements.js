/// <reference types="cypress" />

describe("E2E - Click on elements", () => {
    it("Click on elements", () => {
        cy.visit("/")
        cy.contains('[title="Contact Us"]', 'Contact us').click();
        cy.get('[title="Return to Home"]').click();
    })
})