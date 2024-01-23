/// <reference types='cypress' />
describe('template spec', () => {
    it('passes', () => {

        //opening the appliaction
        cy.visit("https://only-testing-blog.blogspot.com/2013/11/new-test.html")


        //entering first Name and last Name
        cy.get('[name="fname"]').type("Neeraj")
        

        //applying check operation
        cy.get('[value="Bike"]').check()

        //selecting a file 
        cy.get('[type="file"]').selectFile('C:/Users/Admin/Pictures/latest.PNG')

        //performing selectt operation
        cy.get('select').should('have.value','USA')

        cy.get('[name="FromLB"]').select("USA")

        //prompt window
        cy.get('[onclick="myFunction()"]').click()

        cy.on('window:confirm',()=>false)

        cy.get('[onclick="myFunction1()"]').click()

        
        cy.on('window:confirm', (alert)=> {

        expect(alert).to.equal("Press 'OK' or 'Cancel' button!")





            

    })  

    })
    })
