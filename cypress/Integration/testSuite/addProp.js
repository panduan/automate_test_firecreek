import * as prop from '../stepDef/addPropStepDef';


describe('Exam2', ()=> {
    beforeEach(() => {

    })
    it('Add new property is success', ()=> {
        cy.login();
        prop.clickManuProperty();
        prop.clickAddPropertyBtn();
        prop.clickOnMultipleRentable();
        var listData = ["cypress exam","Owner 1 - Sansiri","test address"];
        prop.inputRequiredField(listData);
        prop.checkingCheckbox('be.checked');
        prop.clickOnNextAddProperty();
        var listUnit = ["Flat","Owner 1 - Sansiri"]
        prop.enterUnitValue(listUnit);
        prop.clickOnNextSubmitAdd();
        prop.checkResult("cypress exam");
    });
});