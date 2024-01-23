/// <reference types ='cypress' />

describe("Irctc trains availability",()=>{

    it("trains",()=>{

        cy.visit("https://www.irctc.co.in/nget/train-search");

    

        
        
    let drop=    cy.get('.ui-autocomplete > .ng-tns-c57-8').find('#pr_id_1_list > :nth-child(2)').invoke('text')
    console.log(drop)

    })
})