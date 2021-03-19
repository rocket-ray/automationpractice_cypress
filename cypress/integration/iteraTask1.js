/// <reference types="cypress" />

describe('Contact us test', () => {
    it('Kunne kontakte kundeservice/webmaster', () => {
        
        cy.viewport(1280,720)
        cy.visit('http://automationpractice.com/index.php')

        cy.contains('Contact us').click().should('be.visible')
       
        //cy.contains('Subject Heading').select('Webmaster')
        cy.get('#id_contact').select('Webmaster').should('exist')
        
        //cy.contains('Email address').type('fake@mail.no')
        cy.get('#email').type('fake@mail.no').should('exist')

        cy.get('#id_order').should('exist')
        
        cy.get('#message').should('be.empty')
        cy.get('#message').type('Hello World!')
        
        // 'sent' er bare en snippet av setningen
        cy.contains('Send').click().should('exist')
        
        // Feedback burde være synlig
        cy.contains('sent').should('be.visible')
    
    })
})