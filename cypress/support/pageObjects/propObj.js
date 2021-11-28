import { F } from "ramda";

class propObj{
    locatorPropMenu(){
        return cy.xpath("//li[@data-menu-alias='properties']/i",{ timeout: 10000 });
    }
    locatorPropertiesItem(){
        return cy.xpath("//ul[@class='children']/li[@data-menu-alias='properties']",{ timeout: 10000 });
    }
    locatorAddPropertyBtn(){
        return cy.xpath("//a[@href='/robottester/properties/add' and @class=' btn']",{ timeout: 10000 });
    }
    locatorMultiUnit(){
        return cy.get("img[title='multiple-unit']",{ timeout: 10000});
    }
    locatorInputPropName(){
        return cy.get("[id='ProfileAddressName']");
    }
    locatorSelectPropOwner(){
        return cy.get("[id='s2id_PropertyOwnerId']");
    }
    locatorEnterAutoPropOwner(){
        return cy.get("#select2-drop > .select2-search > .select2-input", {timeout: 10000});
    }
    locatorAddress(){
        return cy.get("[id='ProfileAddress1']");
    }
    locatorCheckedboxmanage(){
        return cy.get("[id='PropertyFullAccess']");
    }
    locatorNextUnitBtn(){
        return cy.get(".next-page");
    }
    locatorNextSubmitAddProp(){
        return cy.get(".next > .submit");
    }
    locatorShowingResult(){
        return cy.xpath("//p[contains(.,'Property reference')]",{timeout:10000});
    }
    locatorUnitTypeDropdown(){
        return cy.get("[name='data[Prefix][Unit][unit_type_id]']");
    }
    locatorAddUnit(){
        return cy.get("[id='add-unit'");
    }
    locatorUnitType1(){
        return cy.get("[name='data[MultiUnit][3][Unit][owner_id]']");
    }
}
export default propObj;