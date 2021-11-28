class loginObj{
    locatorEmail(){
        return cy.get('[id="UserEmail"]');
    }
    locatorPassword(){
        return cy.get('input[id="UserPassword"]');
    }
    locatorButton(){
        return cy.get('input[value="Log in"]');
    }
    locatorDashboard(){
        return cy.get('[href="/robottester/dashboards/index"]',{ timeout: 10000 });
    }
}
export default loginObj;