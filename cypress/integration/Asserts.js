describe("E2E - Asserts", () => {
    it("Asserts expect and should", () => {
        cy.visit("/")

        //Verification text
        cy.get('a[title="Contact Us"]').should("contain", "Contact us");
        cy.get('a[title="Contact Us"]').then(tab => {
            expect(tab).to.contain("Contact us")
        })

        //Verification tab not contain text
        cy.get('a[title="Contact Us"]').should("not.contain", "asda us")
        cy.get('a[title="Contact Us"]').then(tab => {
            expect(tab).not.to.contain("asda us")
        })

        //Verification tab have a class
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(search => {
            expect(search).to.have.class("form-control")
        })

        //Element is visible 
        cy.get("#search_query_top").should("be.visible");
        cy.get("#search_query_top").then(search => {
            expect(search).to.be.visible
        })

        //Verification tab length
        cy.get("ul.sf-menu").find("li").should("have.length", 14)
        cy.get("ul.sf-menu").find("li").then(tabs => {
            expect(tabs).to.have.length(14)
        })

        //Verification element css
        cy.get("#search_query_top").should("have.css", "line-height", "45px")
        cy.get("#search_query_top").then(search => {
            expect(search).to.have.css("line-height", "45px")
        })
    })
})