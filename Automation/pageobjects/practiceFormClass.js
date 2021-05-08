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
    return $("#state > div")
  }
  get ddStateList(){
    return $$("#state > div:nth-of-type(2) > div")

  }
  fillPracticeForm(FormData) {
    this.firstName.setValue(FormData.FirstName);
    this.lastName.setValue(FormData.LastName);
    this.email.setValue(FormData.Email);
    this.mobile.setValue(FormData.MobileNumber); //от 20 до 50 
    this.currentAddress.setValue(FormData.CurrentAddress);
  //   this.firstName.setValue(obj.firstName);
  //   this.lastName.setValue(obj.lastName);
  //   this.inputEmail.setValue(obj.email);
  //   this.mobile.setValue(obj.mobileNumber);
  //   this.currentAddress.setValue(obj.currentAddress); //setValue() - позволяет устанавливать значения
  }
}
export default new practiceForm();
