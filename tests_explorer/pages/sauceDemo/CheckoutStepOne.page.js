const basePage = require(process.cwd() + '/tests_explorer/pages/basePage');
const {webdriver, builder, By, Key, until} = require('selenium-webdriver');

const formCheckout = By.xpath('//div[@id="checkout_info_container"]');
const txtFirstname = By.xpath('//input[@id="first-name"]');
const txtLastname = By.xpath('//input[@id="last-name"]');
const txtPostalcode = By.xpath('//input[@id="postal-code"]');
const btnContinue = By.xpath('//input[@id="continue"]');
const strErrorMessage = By.xpath('//div[@id="checkout_info_container"]/div/form/div/div/h3')

class CheckoutStepOne extends basePage {

    async loadFormCheckout() {
        await this.waitForDisplayed(formCheckout);
    }

    async inputFirstname(strFirstname) {
        await this.waitForDisplayed(txtFirstname);
        await this.click(txtFirstname);
        await this.sendKeys(txtFirstname, strFirstname);
    }

    async inputLastname(strLastname) {
        await this.waitForDisplayed(txtLastname);
        await this.click(txtLastname);
        await this.sendKeys(txtLastname, strLastname);
    }

    async inputPostalcode(strPostalcode) {
        await this.waitForDisplayed(txtPostalcode);
        await this.click(txtPostalcode);
        await this.sendKeys(txtPostalcode, strPostalcode);
    }

    async getErrorMessage() {
        await this.waitForDisplayed(strErrorMessage);
        return this.getText(strErrorMessage);
    }

    async clickContinue() {
        await this.waitForDisplayed(btnContinue);
        await this.click(btnContinue);
    }

}
module.exports = CheckoutStepOne