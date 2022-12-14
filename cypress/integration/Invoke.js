/// <reference types="cypress" />

describe("E2E - Method Invoke", () => {
    it("Invoke", () => {
        cy.visit("/")

        //Get value from element
       cy.get('[title="Contact Us"]').invoke("text").then(text => {
           cy.log(text)
       })

       //Get attribute from element
       cy.get('[title="Contact Us"]').invoke("attr", "href").then(link => {
           cy.log(link)
       })

       cy.get('[title="Contact Us"]').invoke("attr", "title").then(title => {
        cy.log(title)
    })

    //Get value from value of elementss
    cy.get("#search_query_top").type("value").invoke("prop", "value").then(value => {
        cy.log(value)
    })

    })
})