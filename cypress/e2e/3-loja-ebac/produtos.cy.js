
/// reference types="cypress"/> 
describe('Funcionalidade:  Produtos', () => {

     beforeEach(() => {
<<<<<<< HEAD
            cy.visit('/produtos/')
=======
            cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
>>>>>>> e2279506f63f3a169cfd90900f1d92492186afa4
        });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
            //.first()
            //.last()
            //.eq(2)
            cy.contains ('Apollo Running Short')
            .click()

            cy.get('#tab-title-description > a').should('contain','Descrição')
        
    });
});