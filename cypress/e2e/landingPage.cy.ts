describe('Landing Page', () => {
  it('should render', () => {
    cy.visit('/');
    cy.get('[data-testid="map-container"]').get('canvas').should('exist');
  });
});
