//  ＜reference types="cypress" /＞

import * as login from '../stepDef/loginStepDef';

const loginURL = Cypress.env('protocol') + Cypress.env('domain');

describe('Exam', ()=> {
    beforeEach(() => {

    })
    it('Login success to system', ()=> {
        login.navigateURL(loginURL);
        login.enterCredentialUser("robot+tester_1@firecreekweb.com","Qwerty66#");
        login.clickLoginButton();
        login.showingMainPage();
    });
});
