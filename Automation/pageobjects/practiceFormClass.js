class practiceForm {
  get formTileOnTheMainPage() {
    return $$(".category-cards > div")[1];
  }
  get PracticeFormTile() {
    return $$("#item-0")[1];
  }
  get LabelOfPracticeTile() {
    return $("#item-0 > span")[1];
  }
  get labelTitle() {
    return $(".main-header").getText();
  }
  get mainHeaderLabel() {
    return $(".main-header").getText();
  }
  get labelName() {
    return $("label#userName-label").getText();
  }
  get labelEmail() {
    return $("label#userEmail-label").getText();
  }
  get labelGender() {
    return $("#genterWrapper > div.col-md-3.col-sm-12").getText();
  }
  get Male() {
    return $("label[for = 'gender-radio-1']");
  }
  get Female() {
    return $("label[for = 'gender-radio-2']");
  }
  get Other() {
    return $("label[for = 'gender-radio-3']");
  }
  get GendersButtons() {
    return [this.Male, this.Female, this.Other];
  }
  get labelMobile() {
    return $("#userNumber-label").getText();
  }
  get labelDateOfBirth() {
    return $("#dateOfBirth-label").getText();
  }
  get labelSubjects() {
    return $("#subjects-label").getText();
  }
  get labelHobbies() {
    return $(`//*[text() = '${"Hobbies"}']`);
  }
  get HobbiesSports() {
    // return $(`//*[text() = '${'Sports'}']`)
    return $("#hobbies-checkbox-1 + label");
  }
  get HobbiesReading() {
    // return $(`//*[text() = '${'Reading'}']`)
    return $("#hobbies-checkbox-2 + label");
  }
  get HobbiesMusic() {
    // return $(`//*[text() = '${'Music'}']`)
    return $("#hobbies-checkbox-3 + label");
  }
  get CheckedElements() {
    return $$(":checked + label").map((el) => el.getText());
  }
  get labelPictures() {
    return $(`//*[text() = '${"Picture"}']`);
  }
  get labelCurrentAddress() {
    return $("#currentAddress-label").getText();
  }
  get labelStateCity() {
    return $("#stateCity-label").getText();
  }
}
export default new practiceForm();
