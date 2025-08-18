/// <reference types="cypress"/> 
import produtoPage from "../../support/page-objects/produto.page";

describe('Funcionalidade: Produtos', () => {
  
    beforeEach(() => {
        produtoPage.visitarUrl();
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row');

        cy.contains('Abominable Hoodie').click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin yoga Pant'
        produtoPage.buscarProduto(produto);
        cy.get('.product_title').should('contain','Zeppelin Yoga Pant')
    });    

    it('Deve visitar a página de produtos', () => {
        produtoPage.visitarUrl();
    }); 

    it('Deve adicionar um produto com sucesso ao carrinho', () => {
        cy.contains('Abominable Hoodie').click();
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message')
            .should('contain', 'foi adicionado no seu carrinho');
    }); 
});
