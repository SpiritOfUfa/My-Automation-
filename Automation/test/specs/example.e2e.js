import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url("https://github.com");
        console.log(browser.getTitle());
    });
});


