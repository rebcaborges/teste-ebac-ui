//// <reference typess="cypress" />


describe ('Funcionalidade: detalhes da conta', () => {


        beforeEach(() => {
            cy.visit('/minha-conta/edit-account/')
            cy.login('rborges.qaa@gmail.com.br', 'Teste00@@##');
        });

        it('Deve completar detalhes da conta com sucesso', () => {
            cy.detalhesConta('Rebeca', 'Borges','rebecaborges.qa')
        });
});