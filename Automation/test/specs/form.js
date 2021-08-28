const expect = require("chai").expect;
import { URLs, labels } from "../../expected";
import practiceForm from "../../pageobjects/practiceFormClass";
import { FormData } from "../../input";
import practiceFormClass from "../../pageobjects/practiceFormClass";

describe("Forms page test suit", () => {
  it("Validate the title on the Forms page", () => {
    browser.maximizeWindow();
    browser.url(URLs.mainPage);
    practiceForm.formTileOnTheMainPage.click();
    expect(practiceForm.labelTitle).to.equal(labels.Forms);
  });
  it("Open the practice form and validate URL", () => {
    practiceForm.PracticeFormTile.click();
    // expect(practiceForm.LabelOfPracticeTile).to.equal(labels.practiceFormLabels.tileLabel);
    expect(browser.getUrl()).to.equal(URLs.practiceForm);
  });
  it("Validate the names on the practice form page ", () => {
    expect(practiceForm.mainHeaderLabel).to.equal(labels.FormLabels.tileLabel);
    expect(practiceForm.labelName).to.equal(labels.FormLabels.PracticeFormName);
    expect(practiceForm.labelEmail).to.equal(
      labels.FormLabels.PracticeFormEmail
    );
    expect(practiceForm.labelGender).to.equal(
      labels.FormLabels.PracticeFormGender
    );
    expect(practiceForm.labelMobile).to.equal(
      labels.FormLabels.PracticeFormMobile
    );
    expect(practiceForm.labelDateOfBirth).to.equal(
      labels.FormLabels.PracticeFormBday
    );
    expect(practiceForm.labelSubjects).to.equal(
      labels.FormLabels.PracticeFormSubj
    );
    expect(practiceForm.labelHobbies.getText()).to.equal(
      labels.FormLabels.PracticeFormHobbies
    );
    expect(practiceForm.labelPictures.getText()).to.equal(
      labels.FormLabels.PracticeFormPicture
    );
    expect(practiceForm.labelCurrentAddress).to.equal(
      labels.FormLabels.PracticeFormCurAddress
    );
    expect(practiceForm.labelStateCity).to.equal(
      labels.FormLabels.PracticeFormState
    );
    expect(practiceForm.HobbiesMusic.getText()).to.equal(
      labels.FormLabels.HobbiesMusic
    );
    expect(practiceForm.HobbiesReading.getText()).to.equal(
      labels.FormLabels.HobbiesReading
    );
    expect(practiceForm.HobbiesSports.getText()).to.equal(
      labels.FormLabels.HobbiesSports
    );
    // expect(practiceForm.ClicksElements.getText()).to.equal(labels.FormLabels.HobbiesMusic)
  });
  it("Make clicks on Genders and Hobbies checkboxes and validate the clicks", () => {
    for (let i = 0; i <= 2; i++) {
      practiceForm.GendersButtons[i].click();
      browser.pause(200);
    }
    practiceForm.HobbiesSports.click();
    browser.pause(200);
    expect(practiceForm.HobbiesSports.isEnabled()).to.be.true;
    practiceForm.HobbiesReading.click();
    browser.pause(200);
    expect(practiceForm.HobbiesReading.isEnabled()).to.be.true;
    practiceForm.HobbiesMusic.click();
    browser.pause(200);
    expect(practiceForm.HobbiesMusic.isEnabled()).to.be.true;
    expect(practiceForm.CheckedElements).to.eql([
      "Other",
      "Sports",
      "Reading",
      "Music",
    ]);
  });
  it("Validate placeholders texts inputs", () => {
    expect(practiceForm.firstNamePlaceholder).to.equal(
      labels.FormsPlaceholders.FirstName
    );
    expect(practiceForm.lastNamePlaceholder).to.equal(
      labels.FormsPlaceholders.LastName
    );
    expect(practiceForm.emailPlaceholder).to.equal(
      labels.FormsPlaceholders.Email
    );
    expect(practiceForm.mobilePlaceholder).to.equal(
      labels.FormsPlaceholders.Mobile
    );
    expect(practiceForm.currentAddressPlaceholder).to.equal(
      labels.FormsPlaceholders.CurAddress
    );
  });
  it("Fill the practice form", () => {
    practiceForm.fillPracticeForm(FormData);
    browser.pause(500);
  });
  it("Make a selection in STATE Drop Down", () => {
    // browser.url(URLs.practiceForm);
    if (practiceForm.ddState.isDisplayedInViewport())
      practiceForm.ddState.scrollIntoView(); //если ddState не видно, то проскролить до его появления
    practiceForm.ddState.click();
    practiceForm.ddStateList[0].waitForExist({ timeout: 500 });
    const stateList = practiceForm.ddStateList.map((el) => el.getText());
    const state = "Haryana";
    const index = stateList.indexOf(state); // в массиве stateList ищем индекс константы state
    practiceForm.ddStateList[index].click();
    browser.pause(500);
  });
  it("Get the list of Cities per states", () => {
    let obj = {};
    practiceForm.ddState.click();
    practiceForm.ddStateList[0].waitForExist({ timeout: 2000 });
    for (let i = 0; i < practiceForm.ddStateList.length; i++) {
      const state = practiceForm.ddStateList[i].getText(); //вытаскиваем значение штата с индексом [i] (NCR)
      practiceForm.ddStateList[i].click(); //кликаем на этом штате
      practiceForm.ddCity.click(); //кликаем на список городов
      practiceForm.ddCityList[0].waitForExist({ timeout: 2000 }); //ждем пока он появится
      const cityList = practiceForm.ddCityList.map((el) => el.getText()); //вытаскиваем список городов из массива ddCityList ([ 'Delhi', 'Gurgaon', 'Noida' ])
      obj[state] = [...cityList]; // наш obj под ключом state записываем туда массив (NCR: [ 'Delhi', 'Gurgaon', 'Noida' ],)
      practiceForm.ddState.click(); //кликаем по ddState, чтобы начать цикл заново (i = 1) и т.д 
    }
    console.log(obj);
  });
  it('Set Date', () => {
    practiceForm.inputDate.click();
    browser.keys(['Meta', 'a']);
    browser.keys('Space')
    practiceForm.inputDate.setValue('23 April 2020');
    browser.keys('Enter');
    
  });
  it('Click Submit Button and Validate the Result ', () => {
    practiceForm.submitButton.click();
    browser.pause(2000);
    console.log(practiceForm.allTrElementsAfterSubmit);
    expect(practiceForm.allTrElementsAfterSubmit[1]).to.equal(FormData.FirstName + ' ' + FormData.LastName)
    expect(practiceForm.allTrElementsAfterSubmit[3]).to.equal(FormData.Email);
    expect(practiceForm.allTrElementsAfterSubmit[5]).to.equal('Other');
    expect(practiceForm.allTrElementsAfterSubmit[7]).to.equal(FormData.MobileNumber.toString());
    expect(practiceForm.allTrElementsAfterSubmit[9]).to.equal('23 April,2020');
  });
  
});
