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
  get firstName(){
    // return $('input#firstName')
    return $("input#firstName")
  }
  get firstNamePlaceholder(){
    return this.firstName.getAttribute("placeholder");
  }
  get lastName(){
    return $("#lastName");
  }
  get lastNamePlaceholder(){
    return this.lastName.getAttribute("placeholder");
    
  }
  get labelEmail() {
    return $("label#userEmail-label").getText();
  }
  get email(){
    return $("#userEmail");
  }
  get emailPlaceholder(){
    return this.email.getAttribute("placeholder")
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
  get mobile(){
    return $("#userNumber");
  }
  get mobilePlaceholder(){
     return this.mobile.getAttribute("placeholder")
  }
  get labelDateOfBirth() {
    return $("#dateOfBirth-label").getText();
  }
  get inputDate(){
    return $('#dateOfBirthInput')
  }
  get subject(){
    return $("#subjectsContainer");
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
  get currentAddress(){
    return $("textarea#currentAddress");
  }
  get currentAddressPlaceholder(){
    return this.currentAddress.getAttribute("placeholder")
  }
  get labelStateCity() {
    return $("#stateCity-label").getText();
  }
  get ddState(){
    return $("#state > div > div:nth-of-type(1) ");
  }
  get ddStateList(){
    return $$("#state > div:nth-of-type(2) > div > div")
  }
  get ddCity(){
    return $("#city > div > div:nth-of-type(1) ")
  }
  get ddCityList(){
    return $$("#city > div:nth-of-type(2) > div > div")
  }
  get submitButton(){
    return $('#submit');
  }
  fillPracticeForm(FormData) {
    this.firstName.setValue(FormData.FirstName);
    this.lastName.setValue(FormData.LastName);
    this.email.setValue(FormData.Email);
    this.mobile.setValue(FormData.MobileNumber); //???? 20 ???? 50 
    this.currentAddress.setValue(FormData.CurrentAddress);
  }
  get allTrElementsAfterSubmit(){
    return $$('td').map(el => el.getText()); 
  }

}
export default new practiceForm();
