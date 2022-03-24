
describe('Dashboard flow', () => {

  beforeEach(() => {
    cy.reload();
  })

  it('Loads successfully', () => {
    cy.visit('http://localhost:3000/')
    cy.get('header').should('include.text', 'GENERAL');
  })

  it('Activating a parent toggle expands its child toggles', () => {
    cy.getToggleByLabel('USERS').then(parentCheckbox => {
      const childCheckboxLabel = 'USERS ADD';
      cy.get(childCheckboxLabel).should('not.exist');

      parentCheckbox.click();
      cy.getToggleByLabel(childCheckboxLabel).should('exist');
    });

  })

  it('De-activating a parent toggle collapses its child toggles and clears their values', () => {

    const parentToggleLabel = 'USERS';
    const childCheckboxLabel = 'USERS ADD';

    cy.getToggleByLabel(parentToggleLabel).click();
    cy.getToggleByLabel(childCheckboxLabel).click();
    cy.getToggleValueByLabel(childCheckboxLabel).should('be.checked');

    cy.getToggleByLabel(parentToggleLabel).click();
    cy.getToggleByLabel(parentToggleLabel).click();
    cy.getToggleValueByLabel(childCheckboxLabel).should('not.be.checked');

  })


  it('Activating a number select toggle enables the its number toggle', () => {

    const numberToggleLabel = 'ALERT RULES';

    cy.getSelectByLabel(numberToggleLabel).should('be.disabled');
    cy.getToggleByLabel(numberToggleLabel).click();
    cy.getSelectByLabel(numberToggleLabel).should('be.enabled');
  })

  it('De-activating a number select toggle disables the its number toggle', () => {

    const numberToggleLabel = 'ALERT RULES';

    cy.getToggleByLabel(numberToggleLabel).click();
    cy.getSelectByLabel(numberToggleLabel).should('be.enabled');
    cy.getToggleByLabel(numberToggleLabel).click();
    cy.getSelectByLabel(numberToggleLabel).should('be.disabled');
  })
})
