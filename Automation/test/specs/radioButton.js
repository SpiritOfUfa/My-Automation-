const expect = require("chai").expect;
import {URLs} from "../../expected";
import RadioButton from "../../pageobjects/radioButtonClass";
describe('Validate Radio Button Page', () => {
    it('Randomly select radion button and validate the selection', () => {
       browser.url(URLs.radioButton);
       const selections = Math.round(Math.random());
       RadioButton.radioButtons[selections].click()
       expect(RadioButton.textSuccess).to.equal(RadioButton.radioButtons[selections].getText())
    });

 
});