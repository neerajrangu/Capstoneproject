/// <reference types="cypress" />


const n=require("./cypressscripts/TestData.json")
const cors=require("cors")



describe('verify dropdown test', () => {


    it('dropdown test', () => {

        //launch application
        cy.visit(n.zoho)

        cy.get('[id="select2-billing_country-container"]').click()

        //select single value

       cy.get('[class="select2-search__field"]').type('Italy').type('{enter}')

        


        


    })


    

})