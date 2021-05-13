class WebTable {
get buttonAdd(){
    return $("#addNewRecordButton");
}
get registrationForm(){
    return $(".modal-content");
}
get registrationFormHeader(){
   return $("#registration-form-modal").getText();
}
get firstName(){
    return $('#firstName')
}
get lastName(){
    return $('#lastName')
}
get email(){
    return $('#userEmail')
}
get age(){
    return $('#age')
}
get salary(){
    return $('#salary')
}
get department(){
    return $('#department')
}
get allFields(){
    return [
        this.firstName,
        this.lastName,
        this.email,
        this.age,
        this.salary,
        this.department
    ]
}
get buttonSubmit(){
    return $('#submit');
}
fillWebTable(WebTableData){
    this.firstName.setValue(WebTableData.firstName);
    this.lastName.setValue(WebTableData.lastName);
    this.email.setValue(WebTableData.userEmail);
    this.age.setValue(WebTableData.age); //от 20 до 50 
    this.salary.setValue(WebTableData.salary);
    this.department.setValue(WebTableData.department);
    this.buttonSubmit.click() 
    this.registrationForm.waitForExist({ timeout: 5000, reverse : true});
}
get tableBody(){
    return $(".rt-tbody")
}
get tableRows(){
    return $$(".rt-tr-group")
}
buttonDelete(a){
return $(`#delete-record-${a}`)
}
buttonEdit(a){
    return $(`#edit-record-${a}`)

}
}
export default new WebTable();