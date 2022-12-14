/// <reference types="cypress" />

describe("E2E - Input Text", () => {
    it("Input text to field", () => {
        cy.visit("/");
        //cy.searchPhrase("new text{backspace}", 1200);
        cy.get("#search_query_top").type("Example Product{backspace}", {delay: 500})
    })

    it("Clear text from field", () => {
        cy.get("#search_query_top").clear();
    })
})