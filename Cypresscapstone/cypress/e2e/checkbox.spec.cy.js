/// <reference types = 'cypress' />

const n= require("../e2e/cypressscripts/TestData.json")

describe("checking the checkboxes",()=>{

    it("checking",()=>{

        cy.visit(n.checkbox)
        cy.xpath("//form[@id='checkboxes']//input[1]").uncheck()
        cy.xpath("//form[@id='checkboxes']//input[2]").uncheck()
    
    })
})