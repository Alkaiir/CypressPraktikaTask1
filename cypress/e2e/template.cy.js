describe('template spec', () => {
  it('passes', () => {
    cy.fixture('cypressTests').then(data => {
      cy.visit(data.main_url);
    });
  });
});