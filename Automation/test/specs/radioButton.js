const expect = require("chai").expect;
import {URLs} from "../../expected";
import RadioButton from "../../pageobjects/radioButtonClass";
describe('Validate Radio Button Page', () => {
    it('Randomly select radion button and validate the selection', () => {
       browser.url(URLs.radioButton);
       const selections = Math.round(Math.random());
       RadioButton.radioButtons[selections].nextElement().click()
       expect(RadioButton.no.isEnabled()).to.be.false;
       expect(RadioButton.yes.isEnabled()).to.be.true;
       expect(RadioButton.impressive.isEnabled()).to.be.true;

       expect(RadioButton.textSuccess).to.equal(RadioButton.radioButtons[selections].nextElement().getText())
    });

 
});