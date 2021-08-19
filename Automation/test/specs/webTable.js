const expect = require("chai").expect;
import WebTable from "../../pageobjects/webTableClass";
import { URLs } from "../../expected";
import { WebTableData } from "../../input";
import webTableClass from "../../pageobjects/webTableClass";
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
  it("Click on Delete button and validate that the row has got delited ", () => {
    browser.url(URLs.webTable);
    const firstRowText = WebTable.tableRows[0].getText();
    WebTable.buttonDelete(1).click();
    browser.pause(5000);
    const allText = WebTable.tableBody.getText();
    expect(allText).to.not.include(firstRowText);
  });
  it("Click on the Edite button of the second row, make changes,save changes and validate result", () => {
    browser.url(URLs.webTable);
    browser.maximizeWindow();
    WebTable.buttonEdit(1).click();
    WebTable.registrationForm.waitForExist({ timeout: 10000 });
    WebTable.firstName.clearValue();
    WebTable.firstName.setValue("Dima");
    WebTable.buttonSubmit.click();
    browser.pause(5000);
    const firstRowText = WebTable.tableRows[0].getText();
    expect(firstRowText.split('\n')[0]).to.equal("Dima");
    browser.pause(5000);
  });
});
