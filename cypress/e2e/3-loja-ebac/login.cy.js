/// <reference types="cypress" />

const perfil = require('../../fixtures/perfil.json');

describe('Funcionalidade login', () => {

  beforeEach(() => {
    cy.visit('/minha-conta/');
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('rborges.qaa@gmail.com.br');
    cy.get('#password').type('Teste00@@##');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
      .should('contain', 'Olá, rborges.qaa ');
  });

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('usuario@invalido.com');
    cy.get('#password').type('Teste00@@##');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li')
      .should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    cy.get('.woocommerce-error').should('exist');
  });

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
  cy.get('#username').type('rborges.qaa@gmail.com.br');
  cy.get('#password').type('Teste00##45');
  cy.get('.woocommerce-form > .button').click();
  cy.get('.woocommerce-error > li')
    .should('contain.text', 'Erro');
  cy.get('.woocommerce-error').should('exist');
});

  it('Deve fazer login com sucesso - usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario);
    cy.get('#password').type(perfil.senha);
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
      .should('contain', 'Olá, rborges.qaa ');
  });

it('Deve fazer login com sucesso - usando fixture', () => {
  cy.fixture('perfil').then(dados => {
    cy.get('#username').type(dados.usuario);
    cy.get('#password').type(dados.senha);
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
      .should('contain', 'Olá, rborges.qaa ');
  });

});
  it('Deve fazer login utilizando comando customizado', () => {
    cy.login('rborges.qaa@gmail.com.br', 'Teste00@@##');
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist');
  });

});
