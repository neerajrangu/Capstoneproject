/// <reference types='cypress'/>

const a=require("../../cypress/e2e/cypressscripts/TestData.json")

describe("implemting alert",()=>{


    it("click on JS alert",()=>{

        cy.visit(a.selfalert)
        cy.get('[onclick="jsAlert()"]').click()
        cy.get('[id="result"]').should('have.text','You successfully clicked an alert')
        cy.get('button[onclick="jsConfirm()"]').click()
         
    })
    it("click on JS confirm",()=>{


        cy.visit(a.selfalert)
        cy.get('button[onclick="jsConfirm()"]').click()

        cy.on('window:confirm', ()=> false)
       cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it("click for JS prompt",()=>{
        cy.visit(a.selfalert)
        cy.window().then(function(p){
            cy.stub(p,"prompt").returns("Neeraj Rangu")
            cy.get('[onclick="jsPrompt()"]').click()
        })
        
        })
})