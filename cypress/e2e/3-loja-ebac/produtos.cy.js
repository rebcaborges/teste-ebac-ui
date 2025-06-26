
/// reference types="cypress"/> 
describe('Funcionalidade:  Produtos', () => {

     beforeEach(() => {
            cy.visit('/produtos/')
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