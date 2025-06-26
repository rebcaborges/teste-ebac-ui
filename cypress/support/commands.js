//const { it } = require('mocha')

        Cypress.Commands.add('login', (email, password) => { 
                cy.get('#username').type(email)
                cy.get('#password').type(password)
                cy.get('.woocommerce-form > .button').click()

 })
        Cypress.Commands.add('preCadastro' ,(email, senha, nome, sobrenome)  => {

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(Nome)
        cy.get('#account_last_name').type(sobrenome)
        //cy.wait(5000)
        cy.get('.woocommerce-Button').click()

        })

        
        