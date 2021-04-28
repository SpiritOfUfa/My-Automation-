const expect = require("chai").expect;
import {URLs,labels} from "../../expected";  // '../../expected' таким образом мы находим нужные обьекты для импортирования

describe("Main page test suite", () => {
  it("Validate the title of the main page", () => {
    browser.url("https://demoqa.com/");
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.equal(labels.title);
  });
  it("Validate the number of tiles on the main page", () => {
    const elements = $$("div.category-cards > div");
    expect(elements.length).to.equal(6);
  });
  it('Validate the text of footer', () => {
    const span = $("#app > footer > span");
    const actualText = span.getText();
    expect(actualText).to.equal(labels.footer);
  });
  it('Validate the names of tiles', () => {
    const [actualElements,actualForms,actualAlerts,actualWidgets,
           actualInteractions,actualBookstore] = $$('h5').map(el => el.getText())
    expect(actualElements).to.equal(labels.elements);
    expect(actualForms).to.equal(labels.forms);
    expect(actualAlerts).to.equal(labels.alerts);
    expect(actualWidgets).to.equal(labels.widgets);
    expect(actualInteractions).to.equal(labels.interections);
    expect(actualBookstore).to.equal(labels.books);
  });
  it('Click on element tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const element = $$('.category-cards > div')[0];
    element.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.elements)
  });
  it('Click on forms tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const forms = $$('.category-cards > div')[1];
    forms.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.forms);
  });
  it('Click on alert tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const alert = $$('.category-cards > div')[2];
    alert.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.alertsWindows)
  });
  it('Click on Widgets tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const widget = $$('.category-cards > div')[3];
    widget.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.widgets)
  });
  it('Click on Interactives tile and validate the target URL', () => {
    browser.url("https://demoqa.com/")
    const interactives = $$('.category-cards > div')[4];
    interactives.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.interection);
  });
  it('Click on Book tile and validate the target URL', () => {
    browser.url("https://demoqa.com/");
    const book = $$('.category-cards > div')[5];
    book.click();
    const actualURL = browser.getUrl();
    expect(actualURL).to.equal(URLs.books)
  });
})
