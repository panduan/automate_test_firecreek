import { func } from 'assert-plus';
import { prop } from 'ramda';
import propObj from '../../support/pageObjects/propObj';

const property = new propObj();

export function clickManuProperty(){
    property.locatorPropMenu()
    .should('be.visible')
    .click();
    property.locatorPropertiesItem()
    .should('be.visible')
    .click();
}

export function clickAddPropertyBtn(){
    property.locatorAddPropertyBtn()
    .should('be.visible')
    .click();
}

export function clickOnMultipleRentable(){
    property.locatorMultiUnit()
    .should('be.visible')
    .click();
}

export function inputRequiredField(data){
    property.locatorInputPropName().type(data[0]);
    property.locatorSelectPropOwner().click();
    property.locatorEnterAutoPropOwner().type(data[1]+'{enter}');
    property.locatorAddress().type(data[2]);
}

export function checkingCheckbox(value){
    property.locatorCheckedboxmanage().should(value)
}

export function clickOnNextAddProperty(){
    property.locatorNextUnitBtn().click({force: true});
}

export function enterUnitValue(data){
    cy.wait(2000);
    property.locatorUnitTypeDropdown().select(data[0]);
    property.locatorAddUnit().click();
    property.locatorUnitType1().select(data[1]);
}

export function clickOnNextSubmitAdd(){
    property.locatorNextSubmitAddProp().click({force:true});
}

export function checkResult(data){
    property.locatorShowingResult().invoke('text').should('include',data);
}