class RadioButton {
  get yes() {
    return $("#yesRadio"); //ищем такой элемент label(можно назвать и по другому) у которого атрибут for = 'yesRadio'
  }
  get no() {
    return $("#noRadio");
  }
  get impressive() {
    return $("#impressiveRadio");
  }
  get radioButtons(){
      return [this.yes,this.impressive,this.no]
  }
  get textSuccess(){
      return $('.text-success').getText();
  }
}
export default new RadioButton();
