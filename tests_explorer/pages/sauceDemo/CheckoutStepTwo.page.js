const basePage = require(process.cwd() + '/tests_explorer/pages/basePage');
const {webdriver, builder, By, Key, until} = require('selenium-webdriver');

const checkoutSummary = By.xpath('//div[@id="checkout_summary_container"]/div/div[1]');
const strItemQuantity1 = By.xpath('//div[@id="checkout_summary_container"]/div/div/div[3]/div[1]');
const strItemQuantity2 = By.xpath('//div[@id="checkout_summary_container"]/div/div/div[4]/div[1]');
const strItemQuantity3 = By.xpath('//div[@id="checkout_summary_container"]/div/div/div[5]/div[1]');
const strItemPrice1 = By.xpath('//div[@id="checkout_summary_container"]/div/div/div[3]/div/div/div');
const strItemPrice2 = By.xpath('//div[@id="checkout_summary_container"]/div/div/div[4]/div/div/div');
const strItemPrice3 = By.xpath('//div[@id="checkout_summary_container"]/div/div/div[5]/div/div/div');
const strSubTotal = By.xpath('//div[@id="checkout_summary_container"]/div/div[2]/div[6]');
const strTax = By.xpath('//div[@id="checkout_summary_container"]/div/div[2]/div[7]');
const strTotal = By.xpath('//div[@id="checkout_summary_container"]/div/div[2]/div[8]');
const btnFinish = By.xpath('//button[@id="finish"]');

class CheckoutStepTwo extends basePage {

    async loadCheckoutSummary() {
        await this.waitForDisplayed(checkoutSummary);
    }

    async getItemQuantity1() {
        await this.waitForDisplayed(strItemQuantity1);
        return this.getText(strItemQuantity1);
    }

    async getItemQuantity2() {
        await this.waitForDisplayed(strItemQuantity2);
        return this.getText(strItemQuantity2);
    }

    async getItemQuantity3() {
        await this.waitForDisplayed(strItemQuantity3);
        return this.getText(strItemQuantity3);
    }

    async getItemPrice1() {
        await this.waitForDisplayed(strItemPrice1);
        return this.getText(strItemPrice1);
    }

    async getItemPrice2() {
        await this.waitForDisplayed(strItemPrice2);
        return this.getText(strItemPrice2);
    }

    async getItemPrice3() {
        await this.waitForDisplayed(strItemPrice3);
        return this.getText(strItemPrice3);
    }

    async getSubTotal() {
        await this.waitForDisplayed(strSubTotal);
        return this.getText(strSubTotal);
    }

    async getTax() {
        await this.waitForDisplayed(strTax);
        return this.getText(strTax);
    }

    async getTotal() {
        await this.waitForDisplayed(strTotal);
        return this.getText(strTotal);
    }

    async clickFinish() {
        await this.waitForDisplayed(btnFinish);
        await this.click(btnFinish);
    }

}
module.exports = CheckoutStepTwo
    
    