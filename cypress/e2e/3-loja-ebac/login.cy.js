/// <reference types="cypress"/>

//const { it } = require('@faker-js/faker');
const perfil  = require ('../../fixtures/perfil.json')

describe('Funcionalidade login' , () => {

        beforeEach(()=> {
                cy.visit('/minha-conta/')

        });

        //afterEach(() => {
        //        cy.screenshot()        
       // });

        it('Deve fazer login  com sucesso', () => {
        
                cy.get('#username').type('rborges.qaa@gmail.com.br')
                cy.get('#password').type('Teste00@@##')
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, rborges.qaa ') 
        })

        it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
                cy.get('#username').type('rbrges@gmail.com.br')
                cy.get('#password').type('Teste00@@##')
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
                cy.get('.woocommerce-error').should('exist')
        });

        it('Deve exibir uma mensagem de erro ao inserir senha invalida',() => {
                cy.get('#username').type('rbrges.qaa@gmail.com.br')
                cy.get('#password').type('Teste00@@1')
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
                cy.get('.woocommerce-error').should('exist')
        });

                it('Deve fazer logion com sucesso -  usando massa de dados', () => {
                cy.get('#username').type(perfil.usuario)
                cy.get('#password').type(perfil.senha)
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, rborges.qaa ') 

        });

                it('Deve fazer loion com sucesso -  usanod fixture', () => {
                        cy.fixture('perfil').then (dados => {
                                cy.get('#username').type(dados.usuario, {log: false})
                                cy.get('#password').type(dados.senha,{log: false})
                                cy.get('.woocommerce-form > .button').click()
                                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, rborges.qaa ') 

                })               
     
        });

                it('Deve fazer login utilizando - comandos customuzados', () => {
                        cy.login('rborges.qaa@gmail.com.br', 'Teste00@@##')
                        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
                
         });
        
      
})
