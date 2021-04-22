const expect = require("chai").expect;

describe("Main page test suite", () => {
  it("Validate the title of the main page", () => {
    browser.url("https://demoqa.com/");
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.equal("ToolsQA");
  });
  it("Validate the number of tiles on the main page", () => {
    const elements = $$("div.category-cards > div");
    expect(elements.length).to.equal(6);
  });
});