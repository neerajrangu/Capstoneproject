/// <reference types="cypress" />
const n=require("../../cypress/e2e/TestData.json")
describe("OrangeHRM",()=>{
    it("Orange",()=>{

        //visiting link /app

        cy.visit(n.orange)

        //performing entering data
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")

        //performing clcick operation
        cy.get('.oxd-button').click()

        //using a trigeering operation/method
        cy.get('.oxd-userdropdown-tab').trigger('mouseover').click()

        //performing logout opearion usin text


        //cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        cy.contains('Logout').click()
    })
})