class ProdutosPage {

    visitarUrl() {
        
        cy.visit('/produtos');
    }

   buscarProduto(nome) {
    cy.get('[name="s"]').eq(1).type(nome)      
    cy.get('.button-search').eq(1).click()     
}

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
            .contains(nomeProduto)
            .click();
    }

    visitarProduto() {
        
    }

    addProdutoCarrinho() {
    
    } 
}

export default new ProdutosPage();
