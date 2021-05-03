class TextBox {
  get labelFullName() {
    return $("#userName-label").getText(); //так как нам нужно проверить текс , то сразу можем напить getText() после css селектора
  }
  get labelEmail() {
    return $("#userEmail-label").getText();
  }
  get labelCurrentAddress() {
    return $("#currentAddress-label").getText();
  }
  get labelPermAddress() {
    return $("#permanentAddress-label").getText();
  }
  get inputFullName() {
    return $("#userName");
  }
  get inputFullNamePlaceHolder() {
    return this.inputFullName.getAttribute("placeholder");
  }
  get inputEmail() {
    return $("#userEmail");
  }
  get inputEmailPlaceHolder() {
    return this.inputEmail.getAttribute("placeholder");
  }
  get inputCurrentAddress() {
    return $("textarea#currentAddress");
  }
  get inputCurrentAddressPlaceHolder() {
    return this.inputCurrentAddress.getAttribute("placeholder");
  }
  get inputPermanentAddress() {
    return $("textarea#permanentAddress");
  }
  fillForm(obj) {
    this.inputFullName.setValue(obj.fullName);
    this.inputEmail.setValue(obj.email);
    this.inputCurrentAddress.setValue(obj.currentAddress);
    this.inputPermanentAddress.setValue(obj.permanentAddress); //setValue() - позволяет устанавливать значения
  }
  get resultFullName() {
    return $("#name").getText();
  }
  get resultEmail() {
    return $("#email").getText();
  }
  get resultCurrentAddress() {
    return $("p#currentAddress").getText();
  }
  get resultPermanentAddress() {
    return $("p#permanentAddress").getText();
  }
  get btnSubmit() {
    return $("#submit");
  }
}
export default new TextBox(); // создали инстанс класса (new TextBox), для того, чтобы обращаться к нему .
