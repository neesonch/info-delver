// Import commands.js using ES2015 syntax:
import './commands'


// Returns the visible, clickable toggle element based on given label
cy.getToggleByLabel = (label) => {
  return cy
    .get('label')
    .contains(new RegExp(label, "g"))
    .invoke('attr', 'for')
    .then((id) => {
      cy.get(`input[id*="${id}"]`).siblings('label')[0];
    })
}

// Returns the value of the hidden checkbox based on given label
cy.getToggleValueByLabel = (label) => {
  return cy
    .get('label')
    .contains(new RegExp(label, "g"))
    .invoke('attr', 'for')
    .then((id) => {
      cy.get(`input[id*="${id}"]`).value;
    })
}

// Returns the select input associated with a given label
cy.getSelectByLabel = (label) => {
  return cy
    .get('label')
    .contains(new RegExp(label, "g"))
    .siblings()
    .find('select');
}
