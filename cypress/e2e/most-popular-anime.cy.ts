describe('Most Popular Anime', () => {
  it('should display a most popular anime section', () => {
    cy.visit('/');
    cy.contains('h2', 'Most Popular Anime');
  });
});