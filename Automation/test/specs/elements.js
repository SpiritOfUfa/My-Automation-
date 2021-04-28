const expect = require("chai").expect;
import { URLs, labels } from "../../expected";
import TextBox from "../../pageobjects/textbox";
import { inputTextBox } from "../../input";
describe("Validate Elements section", () => {
  it("Navigate to elements page and check the header text", () => {
    browser.url(URLs.elements);
    const header = $(".main-header");
    expect(header.getText()).to.equal(labels.elements);
  });
  it("Validate the URL of the Text Box element", () => {
    const elements = $$(".accordion > .element-group")[0];
    const textBox = elements.$$("div > ul > li")[0];
    textBox.click();
    expect(browser.getUrl()).to.equal(URLs.textBox);
  });
  it("Validate the labels in TextBox area", () => {
    expect(TextBox.labelFullName).to.equal(labels.textBoxLabels.fullName);
    expect(TextBox.labelEmail).to.equal(labels.textBoxLabels.email);
    expect(TextBox.labelCurrentAddress).to.equal(
      labels.textBoxLabels.currentAdress
    );
    expect(TextBox.labelPermAddress).to.equal(labels.textBoxLabels.permAdress);
  });
  it("Validate laceholders texts inputs", () => {
    expect(TextBox.inputFullNamePlaceHolder).to.equal(
      labels.textBoxPlaceholders.fullName
    );
    expect(TextBox.inputEmailPlaceHolder).to.equal(
      labels.textBoxPlaceholders.email
    );
    expect(TextBox.inputCurrentAddressPlaceHolder).to.equal(
      labels.textBoxPlaceholders.currentAdress
    );
  });
  it("Fill the form ,click submit btn and validate results", () => {
    TextBox.fillForm(inputTextBox);
    TextBox.btnSubmit.click();
    expect(TextBox.resultFullName.split(":")[1]).to.equal(
      inputTextBox.fullName
    );
    expect(TextBox.resultEmail.split(":")[1]).to.equal(inputTextBox.email);
    expect(TextBox.resultCurrentAddress.split(":")[1]).to.equal(
      inputTextBox.currentAddress
    );
    expect(TextBox.resultPermanentAddress.split(":")[1]).to.equal(
      inputTextBox.permanentAddress
    );
  });
});
