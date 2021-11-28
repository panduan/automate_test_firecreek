// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import * as login from '../Integration/stepDef/loginStepDef';
const loginURL = Cypress.env('protocol') + Cypress.env('domain');
Cypress.Commands.add('login', () => {
    login.navigateURL(loginURL);
    login.enterCredentialUser("robot+tester_1@firecreekweb.com","Qwerty66#");
    login.clickLoginButton();
    login.showingMainPage();
  });