const expect = require("chai").expect;
import WebTable from "../../pageobjects/webTableClass";
import { URLs } from "../../expected";
describe("Validate Table Section", () => {
  it("Click on Add Button and check a new models window appears", () => {
    browser.url(URLs.webTable);
    if (WebTable.buttonAdd.isDisplayedInViewport())
      WebTable.buttonAdd.scrollIntoView(); //находится ли он в видимости,если нет то скролим
    WebTable.buttonAdd.click();
    WebTable.registrationForm.waitForExist({ timeout: 5000 });
    expect(WebTable.registrationFormHeader).to.equal("Registration Form");
  });
  it("Validate that all fields are required", () => {
    for (let el of WebTable.allFields) {
      //каждый элемент массива allField
      expect(el.getProperty("required")).to.be.true;
    }
  });
  it('Fill the form the text and click the submit button', () => {
      WebTable.firstName.setValue('Dima');
      WebTable.lastName.setValue('Kuznatsov');
      WebTable.email.setValue('TwoyDed@yandex.ru');
      WebTable.age.setValue('25');
      WebTable.salary.setValue('25000');
      WebTable.department.setValue('IT');
      WebTable.buttonSubmit.click() 
      WebTable.registrationForm.waitForExist({ timeout: 5000, reverse : true});
  });
});
