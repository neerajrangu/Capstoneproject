/// <reference types="cypress" />

const n=require("../../cypress/e2e/cypressscripts/TestData.json")
describe("screenshot",()=>{


    it("screen shot on specifi",()=>{

        cy.visit(n.amazon)
        cy.get('[placeholder="Search Amazon.in"]').clear().type("Iphone15")
        cy.get('[value="Go"]').click()
        cy.screenshot('[value="Go"]')
    
    })
})
