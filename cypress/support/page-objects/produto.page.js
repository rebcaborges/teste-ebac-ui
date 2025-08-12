class ProdutosPage {

    visitarUrl() {
        
        cy.visit('/produtos');
    }

    buscarProduto(nome) {
        cy.get('input[type="search"]').type(nome);
        cy.get('button[type="submit"]').click();
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
