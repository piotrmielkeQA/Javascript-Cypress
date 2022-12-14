/// <reference types="cypress" />

describe("E2E - Home Page", () => {
    it("Shoud open home page - automationpractice", () => {
        cy.visit("/")
    })
})