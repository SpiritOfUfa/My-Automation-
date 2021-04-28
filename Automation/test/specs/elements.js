const expect = require("chai").expect;
import {URLs,labels} from "../../expected"; 
describe('Validate Elements section', () => {
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
});