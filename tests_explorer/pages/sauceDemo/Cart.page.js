const basePage = require(process.cwd() + '/tests_explorer/pages/basePage');
const {webdriver, builder, By, Key, until} = require('selenium-webdriver');

const cartList = By.xpath('//div[@id="cart_contents_container"]/div/div[1]');
const btnCheckout = By.xpath('//button[@id="checkout"]');
const btnRemove1 = By.xpath('//button[@id="remove-sauce-labs-backpack"]');
const btnRemove2 = By.xpath('//button[@id="remove-sauce-labs-bike-light"]');
const btnRemove3 = By.xpath('//button[@id="remove-sauce-labs-bolt-t-shirt"]');

class Inventory extends basePage {

    async loadCartList() {
        await this.waitForDisplayed(cartList);
    }

    async clickCheckout() {
        await this.waitForDisplayed(btnCheckout);
        await this.click(btnCheckout);
    }

    async clickRemove1() {
        await this.waitForDisplayed(btnRemove1);
        await this.click(btnRemove1);
    }

    async clickRemove2() {
        await this.waitForDisplayed(btnRemove2);
        await this.click(btnRemove2);
    }

    async clickRemove3() {
        await this.waitForDisplayed(btnRemove3);
        await this.click(btnRemove3);
    }

}
module.exports = Inventory
