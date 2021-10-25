declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * get by testId (from data-testid="xxx" attribute)
     * @example
     * cy.getByTestId('button-submit')
     */
    getByTestId: typeof cy.get
  }
}
