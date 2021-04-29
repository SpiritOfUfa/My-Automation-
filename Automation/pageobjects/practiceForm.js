class practiceForm {
    get labelPracticeTile(){
        return $$(".menu-list"[1]);
    }
  get labelTitle() {
      return $(".main-header").getText();
  }
  get labelName() {
    return $("label#userName-label").getText();
  }
  get labelEmail(){
      return $("label#userEmail-label").getText();
  }
  get labelGender(){
      return $('#genterWrapper > div.col-md-3.col-sm-12').getText();
  }
  get labelMobile(){
      return $("#userNumber-label").getText();
  }
  get labelDateOfBirth(){
    return $("#dateOfBirth-label").getText();
}
get labelSubjects(){
    return $("#subjects-label"[0]).getText();
}
get labelHobbies(){
    return $("label#subjects-label"[1]).getText();
}
get labelPictures(){
    return $("label#userNumber-label"[2]).getText();
}
get labelCurrentAddress(){
    return $("#currentAddress-label").getText();
}
get labelStateCity(){
    return $("#stateCity-label").getText();
}
}
export default new practiceForm();
