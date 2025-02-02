const basePage = require(process.cwd() + '/tests_explorer/pages/basePage');
const {webdriver, builder, By, Key, until} = require('selenium-webdriver');

const formLogin = By.xpath('//div[@id="root"]/div/div[2]/div[1]');
const txtUsername = By.xpath('//input[@id="user-name"]');
const txtPassword = By.xpath('//input[@id="password"]');
const btnLogin = By.xpath('//input[@id="login-button"]');

class Login extends basePage {

    async loadFormLogin() {
        await this.waitForDisplayed(formLogin);
    }

    async inputUsername(strUsername) {
        await this.waitForDisplayed(txtUsername);
        await this.click(txtUsername);
        await this.sendKeys(txtUsername, strUsername);
    }

    async inputPassword(strPassword) {
        await this.waitForDisplayed(txtPassword);
        await this.click(txtPassword);
        await this.sendKeys(txtPassword, strPassword);
    }

    async clickLogin() {
        await this.waitForDisplayed(btnLogin);
        await this.click(btnLogin);
    }

}
module.exports = Login

