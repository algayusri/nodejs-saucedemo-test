const basePage = require(process.cwd() + '/tests_explorer/pages/basePage');
const {webdriver, builder, By, Key, until} = require('selenium-webdriver');

const itemList = By.xpath('//div[1][@id="inventory_container"]');
const btnAddToCart1 = By.xpath('//button[@id="add-to-cart-sauce-labs-backpack"]');
const btnAddToCart2 = By.xpath('//button[@id="add-to-cart-sauce-labs-bike-light"]');
const btnAddToCart3 = By.xpath('//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]');
const btnRemove1 = By.xpath('//button[@id="remove-sauce-labs-backpack"]');
const btnRemove2 = By.xpath('//button[@id="remove-sauce-labs-bike-light"]');
const btnRemove3 = By.xpath('//button[@id="remove-sauce-labs-bolt-t-shirt"]');
const shoppingCart = By.xpath('//div[@id="shopping_cart_container"]/a');

class Inventory extends basePage {

    async loadItemList() {
        await this.waitForDisplayed(itemList);
    }

    async clickAddToCart1() {
        await this.waitForDisplayed(btnAddToCart1);
        await this.click(btnAddToCart1);
    }

    async clickAddToCart2() {
        await this.waitForDisplayed(btnAddToCart2);
        await this.click(btnAddToCart2);
    }

    async clickAddToCart3() {
        await this.waitForDisplayed(btnAddToCart3);
        await this.click(btnAddToCart3);
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

    async clickShoppingCart() {
        await this.waitForDisplayed(shoppingCart);
        await this.click(shoppingCart);
    }

}
module.exports = Inventory
