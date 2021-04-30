const expect = require("chai").expect;
import {URLs,labels} from "../../expected" ; 
import practiceForm, {PracticeForm} from "../../pageobjects/practiceForm";

describe('Forms page test suit', () => {
    it('Validate the title on the Forms page', () => {
        browser.url(URLs.mainPage);
        practiceForm.formTileOnTheMainPage.click();
        expect(practiceForm.labelTitle).to.equal(labels.Forms)
    });
    it('Open the practice form and validate URL', () => {
        practiceForm.PracticeFormTile.click();
        // expect(practiceForm.LabelOfPracticeTile).to.equal(labels.practiceFormLabels.tileLabel);
        expect(browser.getUrl()).to.equal(URLs.practiceForm);
    });
    it('Validate the names on the practice form page ', () => {
        expect(practiceForm.mainHeaderLabel).to.equal(labels.FormLabels.tileLabel)
        expect(practiceForm.labelName).to.equal(labels.FormLabels.PracticeFormName);
        expect(practiceForm.labelEmail).to.equal(labels.FormLabels.PracticeFormEmail);
        expect(practiceForm.labelGender).to.equal(labels.FormLabels.PracticeFormGender);
        expect(practiceForm.labelMobile).to.equal(labels.FormLabels.PracticeFormMobile);
        expect(practiceForm.labelDateOfBirth).to.equal(labels.FormLabels.PracticeFormBday);
        expect(practiceForm.labelSubjects).to.equal(labels.FormLabels.PracticeFormSubj);
        // expect(practiceForm.labelHobbies).to.equal(labels.practiceFormLabels.PracticeFormHobbies);
        // expect(practiceForm.labelPictures).to.equal(labels.practiceFormLabels.PracticeFormPicture);
        expect(practiceForm.labelCurrentAddress).to.equal(labels.FormLabels.PracticeFormCurAddress);
        expect(practiceForm.labelStateCity).to.equal(labels.FormLabels.PracticeFormState);






    });
    
});