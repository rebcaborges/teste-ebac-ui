//// <reference typess="cypress" />


describe ('Funcionalidade: detalhes da conta', () => {


        beforeEach(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/edit-account/')
            cy.login('rborges.qaa@gmail.com.br', 'Teste00@@##');
        });

        it('Deve completar detalhes da conta com sucesso', () => {
            
        });
});