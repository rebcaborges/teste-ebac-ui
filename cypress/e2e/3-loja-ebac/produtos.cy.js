import { it } from "mocha";

/// reference types="cypress"/> 
describe('Funcionalidade:  Produtos', () => {

     beforeEach(() => {
            produtoPage.visitarUrl()
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

    it('Deve buscar um produto com sucesso ', () => {
        produtoPage.buscarProduto('')
    });    

      it('Deve visitar a pagina de produtos', () => {
        
    }); 

      it('Deve adicionar um produto com sao carrinho', () => {
        
    }); 

});
