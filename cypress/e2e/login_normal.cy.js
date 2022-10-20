describe('Teste Login Normal', () => {
  //node_modules\.bin\cypress open
  const realizaLogin = (username, password) => {
    cy.visit('https://hml-app.learntofly.global/login');
    if (Cypress.isBrowser('edge')) {
      cy.get('#mat-dialog-0 > app-actions-help > div.actions > button').click();
    }   
        
    cy.get('#mat-input-0', { timeout: 30000 }).clear().type(username);
    cy.get('#mat-input-1').clear().type(password).type('{enter}');
  }
    
  it('Credenciais Corretas', () => {
    realizaLogin('testeqa@mailinator.com', '123456');    
    cy.get('body > app-root > app-pages > mat-sidenav-container > mat-sidenav-content > mat-toolbar > mat-toolbar-row > span.wellcome-name').should('have.class', 'wellcome-name');
  });

  it('Credenciais Incorretas - senha', () => {
    realizaLogin('testeqa@mailinator.com', '1273456');    
    cy.contains('Usuário ou senha inválidos');
  });

  it('Credenciais Incorretas - email', () => {
    realizaLogin('teaasteqa@mailinator.com', '123456');    
    cy.contains('Usuário ou senha inválidos');
  });

  it('Email maisculo para minusculo', () => {
    realizaLogin('TESTEQA@MAILINATOR.COM', '123456');    
    cy.get('body > app-root > app-pages > mat-sidenav-container > mat-sidenav-content > mat-toolbar > mat-toolbar-row > span.wellcome-name').should('have.class', 'wellcome-name');
  });
});

