const expect = require("chai").expect;
import WebTable from "../../pageobjects/webTableClass";
import { URLs } from "../../expected";
import { WebTableData } from "../../input";
describe("Validate Table Section", () => {
    const myData = WebTableData();
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
  it("Fill the form the text and click the submit button", () => {
    WebTable.fillWebTable(myData);
    browser.pause(5000);
    WebTable.buttonAdd.click();
    WebTable.fillWebTable(WebTableData());
    browser.pause(5000);
  });
});
