// <reference types="cypress" />

import SelectPage from "../support/page-object/selectPage";

describe("E2E - Select option in dropdown", () => {
    it("Select option", () => {
        cy.visit("/index.php?id_category=3&controller=category#/")

        //By name
        cy.get("#selectProductSort").select("In stock")

        //By value
        cy.get("#selectProductSort").select("price:asc")

        //By index
        cy.get("#selectProductSort").select(7)
    })

    it.only("selectAllOption", () => {
        cy.visit("/index.php?id_category=3&controller=category#/")
        SelectPage.selectAllOption();

        // cy.get("#selectProductSort").then(select => {
        //     cy.wrap(select).find("option").each(opcja => {
        //         cy.wrap(select).select(opcja.text())
        //     })
        // })
    })
})