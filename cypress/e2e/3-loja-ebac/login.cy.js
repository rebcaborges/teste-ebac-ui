/// <reference types="cypress"/>

describe('Funcionalidade login' , () => {

        beforeEach(()=> {
                cy.visit('/minha-conta/')

        });


        afterEach(() => {
                cy.screenshot()
                
        });




    it ('Deve fazer login  com sucesso', () => {
        
        cy.get('#username').type('rborges.qa@gmail.com.br')
        cy.get('#password').type('Teste00@@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)') .should('be.visible').and('contain', 'Olá, rborges.qa-5403');
    
        })


        it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
                cy.get('#username').type('rbrges@gmail.com.br')
                cy.get('#password').type('Teste00@@')
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
                cy.get('.woocommerce-error').should('exist')
        });


        it('Deve exibir uma mensagem de erro ao inserir senha invalida',() => {
                cy.get('#username').type('rbrges@gmail.com.br')
                cy.get('#password').type('Teste00@@1')
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
                cy.get('.woocommerce-error').should('exist')
        });
                
})
