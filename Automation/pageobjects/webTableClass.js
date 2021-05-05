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
}
export default new WebTable();