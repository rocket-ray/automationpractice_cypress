/// <reference types="cypress" />

describe('Tester funksjonalitetene til en bruker', () => {

    // Gjøres før hver eneste test
    beforeEach(() => {

        cy.viewport(1280, 720)
        cy.visit('http://automationpractice.com/index.php')

        // mail: in3240@mail.no
        // passord: qwertyui

        cy.contains('Sign in').click()
        cy.get('#email').type('in3240@mail.no')
        cy.contains('Password').type('qwertyui')
        cy.get('#SubmitLogin').click().should('exist')

    })

    
    // Gjøres etter hver eneste test
    afterEach(() => {
        //cy.contains('Sign out').click()
        cy.get('.logout').click()
    })
    
    

    it('Sjekk om innlogget', () => {
        // Sjekker om utlogging finnes
        cy.get('.logout').should('be.visible')
        // Logo skal kunne ta deg til hovedsiden
        cy.get('#header_logo').click().should('have.id','header_logo')
        cy.get('.logout').should('exist')

    })


    it('Sjekk personlig informasjon', () => {
        cy.get('.icon-user').click().should('exist')
        // Passordbyttevalg skal eksistere
        cy.get('#passwd').should('be.empty')

    })

    it('Shoppetest', () => {
  
        // Velge første valg i menyen over, "Women" i denne sammenhengen
        cy.get('ul.sf-menu li').eq(0).click();

        // Velger en vare fra specials
        cy.get('.products-block-image').click()

        // Legger varen til i kassen
        cy.get('#add_to_cart').click().should('have.id','add_to_cart')

        // Den får et pop-up-vindu om den ønsker å gå til kassen eller å shoppe videre
        // Velger å shoppe videre
        cy.get('.icon-chevron-left').click()


    })

})



