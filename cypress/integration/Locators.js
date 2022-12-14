/// <reference types="cypress" />

describe("E2E - Locators ", () => {
    it("Locators", () => {
        cy.visit("/")

        //By index
        cy.get("a");

        //By id
        cy.get("#search_query_top")

        //By class name
        cy.get(".form-control")

        //By attributes
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //By attribute and index
        cy.get('input[placeholder="Search"]')

        //By a few attributes
        cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //Best practice to get elements from page
        cy.get('[data-cy="wyszukiwarka"]')
    })

    it.only("Locators", () => {
        cy.visit("/")
        cy.contains("Shop now !")
        cy.contains('[title="Contact Us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").first()
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
    })

})