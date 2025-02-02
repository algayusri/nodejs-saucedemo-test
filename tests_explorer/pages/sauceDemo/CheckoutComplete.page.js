const basePage = require(process.cwd() + '/tests_explorer/pages/basePage');
const {webdriver, builder, By, Key, until} = require('selenium-webdriver');

const completePage = By.xpath('//div[@id="checkout_complete_container"]');

class CheckoutComplete extends basePage {

    async loadCompletePage() {
        await this.waitForDisplayed(completePage);
    }
    
}
module.exports = CheckoutComplete
    