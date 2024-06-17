///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('https://homolog-contratante.efretamento.com/rio2/login')
        cy.get('#mat-input-0').type('larissa')
        cy.get('#mat-input-1').type('123456')
        cy.get('.bt-primary').click()

        cy.get('.large-text').should('contain' , 'Passageiros no Contrato')
    });
});