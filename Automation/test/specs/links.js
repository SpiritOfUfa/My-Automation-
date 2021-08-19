import Links from "../../pageobjects/linksClass";
const expect = require("chai").expect;
const axios = require("axios");
import links from "../../links.json";

describe("Validate all links on the page", () => {
  it("Validate each link", async () => {
    for (let key in links) { //для каждого обьекта в links
      try {
        // fetch data from a url endpoint
        const response = await axios.get(links[key].link); // перешли по ссылке
        expect(response.status).to.equal(links[key].code);// и сравнили статус с тем кодом который прописан внутри обьекта
      } catch (error) {
        console.log("error", links[key].link + error.toJSON().message); //обработали ошибки 
        // appropriately handle the error
      }
    }
  });
  it("Validate all links", async () => {
    await browser.url("https://github.com");
    let allLinks = await $$('a');//создали массив линков (все "a" элементы)
    for (let a of allLinks) { //для каждого элемента 'а' из alllinks
      let href = await a.getAttribute("href"); // достали атрибут 'href'
      console.log(href);
      if ((href !== null) && (href.indexOf('https://github.com') !== -1)){ //href !== null - потому ,что иногда нет href,поэтому и null
      try {
        // fetch data from a url endpoint
        console.log(href);
        const response = await axios.get(href); //переходим по ссылке href
        expect(response.status).to.equal(200); // ожидаем ,статус код 200
      } catch (error) {
        console.log("error", href + '  --->  ' +  error.toJSON().message);
        // appropriately handle the error
      }
    }
  };
  });
});
