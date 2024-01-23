/// <reference types="cypress" />


const n=require("../e2e/cypressscripts/TestData.json")

describe('verify dropdown test', () => {


    it('dropdown test', () => {

        //launch application
        cy.visit(n.radio)

        cy.get('[name="FromLB"]').should('be.visible')

        //select single value

        // cy.get('[name="FromLB"]').select('India')

        


        //select multiple value

        cy.get('[name="FromLB"]').select(['USA', 'Russia', 'India'])


    })


    

})