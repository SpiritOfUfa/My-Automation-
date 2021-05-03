const expect = require("chai").expect; 
import { labels, URLs} from "../../expected";
import checkbox from "../../pageobjects/checkboxClass";
import CheckBox from "../../pageobjects/checkboxClass";

describe('Test suit to validate functionality of Check Box', () => {
  it('Validate URL of the page', () => {
      browser.url(URLs.mainPage);
      checkbox.MainPageElements.scrollIntoView();
      checkbox.MainPageElements.click();
      checkbox.checkbox.click();
      expect(browser.getUrl()).to.equal(URLs.checkbox)
  });
  it('Validate header of the page', () => {
    expect(checkbox.mainHeader.getText()).to.equal(labels.checkbox);
})
it('Check some of the elements and validate the result', () => {
    checkbox.expandAll.click();
    for (let i = 0; i<5; i++){ //цикл for повторяющийся  5 раз с кликом на рандомные слова
        const item = Math.trunc(Math.random()*10);
        checkbox.listItem(checkbox.allTitles[item]).click();
        browser.pause(1000); //2000 милисекунд - 2 секунды

    }
    expect(checkbox.checkedElements).to.eql(checkbox.result) // eql - когда нужно сравнить два массива
   })
   browser.pause(5000);
})