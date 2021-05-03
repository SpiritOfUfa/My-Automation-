const expect = require("chai").expect;
import {URLs,labels} from "../../expected" ; 
import practiceForm, {PracticeForm} from "../../pageobjects/practiceFormClass";

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
        expect(practiceForm.labelHobbies.getText()).to.equal(labels.FormLabels.PracticeFormHobbies);
        expect(practiceForm.labelPictures.getText()).to.equal(labels.FormLabels.PracticeFormPicture);
        expect(practiceForm.labelCurrentAddress).to.equal(labels.FormLabels.PracticeFormCurAddress);
        expect(practiceForm.labelStateCity).to.equal(labels.FormLabels.PracticeFormState);
        expect(practiceForm.HobbiesMusic.getText()).to.equal(labels.FormLabels.HobbiesMusic);       
        expect(practiceForm.HobbiesReading.getText()).to.equal(labels.FormLabels.HobbiesReading);
        expect(practiceForm.HobbiesSports.getText()).to.equal(labels.FormLabels.HobbiesSports);
        // expect(practiceForm.ClicksElements.getText()).to.equal(labels.FormLabels.HobbiesMusic)
    });
    it('Make clicks on Genders and Hobbies checkboxes and validate the clicks', () => {
        for (let i = 0 ; i <= 2; i++){
            practiceForm.GendersButtons[i].click();
            browser.pause(2000);
        }
        practiceForm.HobbiesSports.click();
        browser.pause(2000);
        practiceForm.HobbiesReading.click();
        browser.pause(2000);
        practiceForm.HobbiesMusic.click();
        browser.pause(2000);
        expect(practiceForm.CheckedElements).to.eql(['Other','Sports','Reading','Music'])
        });
        
});