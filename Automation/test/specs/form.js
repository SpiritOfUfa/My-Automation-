const expect = require("chai").expect;
import {URLs,labels} from "../../expected" ; 
import practiceForm, {PracticeForm} from "../../pageobjects/practiceForm";

describe('Forms page test suit', () => {
    it('Validate the title on the Forms page', () => {
        browser.url(URLs.forms);
        expect(practiceForm.labelTitle).to.equal(labels.Forms)
    });
    it('Open the practice form URL', () => {
        browser.url(URLs.practiceForm)
    });
    it('Validate the names on the practice form page ', () => {
        expect(practiceForm.labelName).to.equal(labels.practiceFormLabels.PracticeFormName);
        expect(practiceForm.labelEmail).to.equal(labels.practiceFormLabels.PracticeFormEmail);
        expect(practiceForm.labelGender).to.equal(labels.practiceFormLabels.PracticeFormGender);
        expect(practiceForm.labelMobile).to.equal(labels.practiceFormLabels.PracticeFormMobile);
        expect(practiceForm.labelDateOfBirth).to.equal(labels.practiceFormLabels.PracticeFormBday);
        expect(practiceForm.labelSubjects).to.equal(labels.practiceFormLabels.PracticeFormSubj);
        expect(practiceForm.labelHobbies).to.equal(labels.practiceFormLabels.PracticeFormHobbies);
        expect(practiceForm.labelPictures).to.equal(labels.practiceFormLabels.PracticeFormPicture);




    });
    
});