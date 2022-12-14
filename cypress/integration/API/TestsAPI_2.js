/// <reference types="cypress" />

describe("Perfoming query directly to API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {    
            this.daneApi = data;
        })
    })

    it("Authorization + Adding a new article", () => {
        const daneAutoryzacja = {
            "user": {
                "email": "rafal-podraza@test.pl",
                "password": "rafalpodraza@"
            }
        }

        const daneArtykul = {
            "article": {
                "tagList": [],
                "title": "test tytuł bezpośrednio z API",
                "description": "test",
                "body": "test"
            }
        }

        cy.request("POST", "https://api.realworld.io/api/users/login", daneAutoryzacja)
        .its("body").then(res => {
            const authToken = res.user.token;
            
            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: daneArtykul,
                headers: {
                    'Authorization': 'Token ' + authToken
                } 
            }).then(res => {
                expect(res.status).to.equal(200)
            })
        })
    })

})