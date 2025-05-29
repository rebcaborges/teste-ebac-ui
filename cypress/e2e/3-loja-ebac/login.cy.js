/// <reference types="cypress"/>

describe('Funcionalidade login' , () => {

    it ('Deve fazer login  com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('rborges.qa@gmail.com.br')
        cy.get('#password').type('Borges00@@')
        cy.get('.woocommerce-form > .button').click()


cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
  .should('be.visible')
  .and('contain', 'Olá, rborges.qa-5403');
    })
})
