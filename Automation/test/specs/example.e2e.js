const expect = require("chai").expect;

describe("Main page test suite", () => {
  it("Validate the title of the main page", () => {
    browser.url("https://demoqa.com/");
    const expectedTitle = 'ToolsQA';
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.equal(expectedTitle);
  });
  it("Validate the number of tiles on the main page", () => {
    const elements = $$("div.category-cards > div");
    expect(elements.length).to.equal(6);
  });
  it('Validate the text of footer', () => {
    const span = $("#app > footer > span");
    const expectedText = '© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.'
    const actualText = span.getText();
    expect(actualText).to.equal(expectedText);
  });
  it('Validate the names of tiles', () => {
    const [actualElements,actualForms,actualAlerts,actualWidgets,
           actualInteractions,actualBookstore] = $$('h5').map(el => el.getText())
    expect(actualElements).to.equal('Elements');
    expect(actualForms).to.equal('Forms');
    expect(actualAlerts).to.equal('Alerts, Frame & Windows');
    expect(actualWidgets).to.equal('Widgets');
    expect(actualInteractions).to.equal('Interactions');
    expect(actualBookstore).to.equal('Book Store Application');
  });
  it('Click on element tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const element = $$('.category-cards > div')[0];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal('https://demoqa.com/elements')
  });
  it('Click on forms tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const forms = $$('.category-cards > div')[1];
    forms.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal('https://demoqa.com/forms');
  });
  it('Click on alert tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const alert = $$('.category-cards > div')[2];
    alert.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal('https://demoqa.com/alertsWindows')
  });
  it('Click on Widgets tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const widget = $$('.category-cards > div')[3];
    widget.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal('https://demoqa.com/widgets')
  });
  it('Click on Interactives tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const interactives = $$('.category-cards > div')[4];
    interactives.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal('https://demoqa.com/interaction');
  });
  it('Click on Book tile and validate the target URL', () => {
    browser.url("https://demoqa.com/");
    const book = $$('.category-cards > div')[5];
    book.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal('https://demoqa.com/books')
  });
  // it("Click on Books tile and validate the target URL", () => {
  //   browser.url("https://demoqa.com/");
  //   const element = $$(".category-cards > div")[5];
  //   element.click();
  //   const actualURL = browser.getUrl();
  //   expect(actualURL).to.equal('https://demoqa.com/books');
  // });

})

