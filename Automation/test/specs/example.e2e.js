const expect = require("chai").expect;

describe("Main page test suite", () => {
  it("Validate the title of the main page", () => {
    browser.url("https://demoqa.com/");
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.equal("ToolsQA");
  });
    it('Test 2', () => {
     const elements = $$('div.category-cards > div');
     expect(elements.length).to.equal(6)   
    });
});
