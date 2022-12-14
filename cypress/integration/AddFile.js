/// <reference types="cypress" />

describe("E2E - Adding file", () => {
    it("Adding file to input", () => {
        cy.visit("/index.php?controller=contact")
        cy.get("#fileUpload").attachFile("../fixtures/file.jpeg");
        cy.get("span.filename").should("contain", "file.jpeg")
    })
})