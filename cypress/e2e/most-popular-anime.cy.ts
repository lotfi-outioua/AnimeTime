describe('Most Popular Anime', () => {
  beforeEach(() => { cy.visit('/'); })

  it('should display a most popular anime section', () => {
    cy.contains('h2', 'Most Popular Anime');
  });

  it('should display 5 anime', () => {
    cy.get('[data-test-id="top-anime-cards"] > .anime-card').should((cards) => {
      expect(cards).to.have.length(5)
    })
  });
});