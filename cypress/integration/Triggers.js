describe("E2E - Scroll / Focus", () => {
    it("Focus on element", () => {
        cy.visit("/")
        cy.get(`a[title="Dresses"]`).eq(1).trigger("focus")
        cy.get(`li.sfHover a[title="Summer Dresses"]`).click();
    })

    it("Scrolling", () => {
        cy.get(`a[title="Specials"]`).first().scrollIntoView();
    })
})