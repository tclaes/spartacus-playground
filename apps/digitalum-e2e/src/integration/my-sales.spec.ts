describe('My sales component', () => {
  beforeEach(() => cy.visit('/'));

  it('should display sales works message', () => {
    cy.visit('/electronics-spa/en/EUR/sales');
    cy.contains('my-sales works!');
  });
});
