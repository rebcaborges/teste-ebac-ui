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

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtoPage.buscarProduto(produto)
        cy.get('.product_title').should('contain',produto)
    });    

    it('Deve visitar a página de produtos', () => {
        produtoPage.visitarProduto('Zeppelin-Yoga-Pant');
        cy.get('.product_title').should('contain','Zeppelin Yoga Pant')

    }); 

    it('Deve adicionar um produto com sucesso ao carrinho', () => {
        let qtd = 1
        produtoPage.buscarProduto('Abominable Hoodie')
        produtoPage.addProdutoCarrinho('L','Red', qtd)
        cy.get('.woocommerce-message').should('contain',' “Abominable Hoodie” foi adicionado no seu carrinho.')
    }); 
      it.only('Deve adicionar um produto com sucesso ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
       
        produtoPage.buscarProduto(dados[1].nomeProduto)
        produtoPage.addProdutoCarrinho(
        dados[0].tamanho,
        dados[0].cor,
        dados[0].quantidade)

        cy.get('.woocommerce-message').should('contain',dados[1].nomeProduto)
            
    })
        
        
        
    });   


});


// cy.contains('Abominable Hoodie').click();
       // cy.get('.single_add_to_cart_button').click();
       // cy.get('.woocommerce-message')
       // should('contain', 'foi adicionado no seu carrinho');