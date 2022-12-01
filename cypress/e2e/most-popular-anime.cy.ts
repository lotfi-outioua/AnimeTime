describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('h1', 'Most Popular Anime')
    
  })
})