///<reference types="cypress"/>

it('firefox nightly test', function(){
 cy.visit('https://google.com')
 cy.get('.gLFyf').type('Automation step by step')
 cy.get('.FPdoLc > center > .gNO89b').click();
 cy.get('.MUFPAc > :nth-child(2) > a').click();

})

it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get(':nth-child(5) > :nth-child(2) > a').click()
    cy.get('#btnSave').click()
   
})