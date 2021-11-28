/// <reference types="Cypress" />

import loginObj from '../../support/pageObjects/loginObj'

const login = new loginObj();

export function navigateURL(url){
    cy.visit(url);
}

export function enterCredentialUser(username,password){
    login.locatorEmail().type(username);
    login.locatorPassword().type(password);
     }

export function clickLoginButton(){
    login.locatorButton().click();
}

export function showingMainPage(){
    login.locatorDashboard().should('be.visible');
}