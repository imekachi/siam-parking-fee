describe('Fee chart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the chart correctly', () => {
    // wait for chart animation to finish
    cy.wait(2000)
    cy.getByTestId('FeeChart').toMatchImageSnapshot({ name: 'feeChart' })
    cy.getByTestId('FeeChart').click(200, 140)
    cy.wait(1000)
    cy.getByTestId('FeeChart').toMatchImageSnapshot({ name: 'feeChartTooltips' })
  })
})
