require(process.cwd() + '/tests_explorer/base')
const {webdriver, builder, By, Key, until} = require('selenium-webdriver')
let driver

const initial = require(process.cwd() + '/tests_explorer/features/initial')
    , pageInventory = require(process.cwd() + '/tests_explorer/pages/sauceDemo/Inventory.page')
    , pageCart = require(process.cwd() + '/tests_explorer/pages/sauceDemo/Cart.page')
    , pageCheckoutStepOne = require(process.cwd() + '/tests_explorer/pages/sauceDemo/CheckoutStepOne.page')
    , pageCheckoutStepTwo = require(process.cwd() + '/tests_explorer/pages/sauceDemo/CheckoutStepTwo.page')
    , pageCheckoutComplete = require(process.cwd() + '/tests_explorer/pages/sauceDemo/CheckoutComplete.page')

const generate = require(process.cwd() + '/tests_explorer/utils/generate_data')
    , excel = require(process.cwd() + '/tests_explorer/utils/excel')

describe('Run Test Scenario', function () {
    
    beforeEach(async function () {
        driver = await initial.load('chrome', process.env.URL);
        await initial.login(driver, process.env.USER_NAME, process.env.PASSWORD)
    })

    it('Scenario 1: Positive - User adds 1 item and completes the checkout transaction.', async function () {
        const PageInventory = new pageInventory(driver);
        const PageCart = new pageCart(driver);
        const PageCheckoutStepOne = new pageCheckoutStepOne(driver);
        const PageCheckoutStepTwo = new pageCheckoutStepTwo(driver);
        const PageCheckoutComplete = new pageCheckoutComplete(driver);

        await PageInventory.loadItemList();
        await PageInventory.clickAddToCart1();
        await PageInventory.clickShoppingCart();

        await PageCart.loadCartList();
        await PageCart.clickCheckout();

        await PageCheckoutStepOne.loadFormCheckout();
        const filePath = `${process.cwd()}${process.env.FILE_DIR}/Checkout_Information.xlsx`;
        let rowNum = 2;
        let sheetName = 'Information'
        let sheetData = excel.readRowSheet(filePath, sheetName, rowNum);
        await PageCheckoutStepOne.inputFirstname(sheetData.firstName);
        await PageCheckoutStepOne.inputLastname(sheetData.lastName);
        await PageCheckoutStepOne.inputPostalcode(sheetData.postalCode);
        await PageCheckoutStepOne.clickContinue();

        await PageCheckoutStepTwo.loadCheckoutSummary();
        const itemList = []; 
        let itemQuantity1 = await PageCheckoutStepTwo.getItemQuantity1();
        let itemPrice1 = await PageCheckoutStepTwo.getItemPrice1();
        const objItem1 = {quantity:itemQuantity1, price:itemPrice1};
        itemList.push(objItem1);

        let subTotal = calculateSubTotal(itemList);
        let txtSubTotal = await PageCheckoutStepTwo.getSubTotal();
        let checkSubTotal = txtSubTotal.includes(subTotal); 
        let errMessageSubtotal = "Error: Subtotal mismatch!";
        expect(checkSubTotal, errMessageSubtotal).to.equal(true);

        let tax = calculateTax(subTotal);
        let txtTax  = await PageCheckoutStepTwo.getTax();
        let checkTax = txtTax.includes(tax);
        let errMessageTax = "Error: Tax mismatch!";
        expect(checkTax, errMessageTax).to.equal(true);

        let total = calculateTotal(subTotal,tax);
        let txtTotal  = await PageCheckoutStepTwo.getTotal();
        let checkTotal = txtTotal.includes(total);
        let errMessageTotal = "Error: Total mismatch!";
        expect(checkTotal, errMessageTotal).to.equal(true);

        await PageCheckoutStepTwo.clickFinish();
        await PageCheckoutComplete.loadCompletePage();

    })

    it('Scenario 2: Positive - User adds 2 item and completes the checkout transaction.', async function () {
        const PageInventory = new pageInventory(driver);
        const PageCart = new pageCart(driver);
        const PageCheckoutStepOne = new pageCheckoutStepOne(driver);
        const PageCheckoutStepTwo = new pageCheckoutStepTwo(driver);
        const PageCheckoutComplete = new pageCheckoutComplete(driver);

        await PageInventory.loadItemList();
        await PageInventory.clickAddToCart1();
        await PageInventory.clickAddToCart2();
        await PageInventory.clickShoppingCart();

        await PageCart.loadCartList();
        await PageCart.clickCheckout();

        await PageCheckoutStepOne.loadFormCheckout();
        const filePath = `${process.cwd()}${process.env.FILE_DIR}/Checkout_Information.xlsx`;
        let rowNum = 2;
        let sheetName = 'Information'
        let sheetData = excel.readRowSheet(filePath, sheetName, rowNum);
        await PageCheckoutStepOne.inputFirstname(sheetData.firstName);
        await PageCheckoutStepOne.inputLastname(sheetData.lastName);
        await PageCheckoutStepOne.inputPostalcode(sheetData.postalCode);
        await PageCheckoutStepOne.clickContinue();

        await PageCheckoutStepTwo.loadCheckoutSummary();
        const itemList = []; 
        let itemQuantity1 = await PageCheckoutStepTwo.getItemQuantity1();
        let itemPrice1 = await PageCheckoutStepTwo.getItemPrice1();
        const objItem1 = {quantity:itemQuantity1, price:itemPrice1};
        itemList.push(objItem1);

        let itemQuantity2 = await PageCheckoutStepTwo.getItemQuantity2();
        let itemPrice2 = await PageCheckoutStepTwo.getItemPrice2();
        const objItem2 = {quantity:itemQuantity2, price:itemPrice2};
        itemList.push(objItem2);

        let subTotal = calculateSubTotal(itemList);
        let txtSubTotal = await PageCheckoutStepTwo.getSubTotal();
        let checkSubTotal = txtSubTotal.includes(subTotal); 
        let errMessageSubtotal = "Error: Subtotal mismatch!";
        expect(checkSubTotal, errMessageSubtotal).to.equal(true);

        let tax = calculateTax(subTotal);
        let txtTax  = await PageCheckoutStepTwo.getTax();
        let checkTax = txtTax.includes(tax);
        let errMessageTax = "Error: Tax mismatch!";
        expect(checkTax, errMessageTax).to.equal(true);

        let total = calculateTotal(subTotal,tax);
        let txtTotal  = await PageCheckoutStepTwo.getTotal();
        let checkTotal = txtTotal.includes(total);
        let errMessageTotal = "Error: Total mismatch!";
        expect(checkTotal, errMessageTotal).to.equal(true);

        await PageCheckoutStepTwo.clickFinish();
        await PageCheckoutComplete.loadCompletePage();

    })

    it('Scenario 3: Positive - User adds 3 item and completes the checkout transaction.', async function () {
        const PageInventory = new pageInventory(driver);
        const PageCart = new pageCart(driver);
        const PageCheckoutStepOne = new pageCheckoutStepOne(driver);
        const PageCheckoutStepTwo = new pageCheckoutStepTwo(driver);
        const PageCheckoutComplete = new pageCheckoutComplete(driver);

        await PageInventory.loadItemList();
        await PageInventory.clickAddToCart1();
        await PageInventory.clickAddToCart2();
        await PageInventory.clickAddToCart3();
        await PageInventory.clickShoppingCart();

        await PageCart.loadCartList();
        await PageCart.clickCheckout();

        await PageCheckoutStepOne.loadFormCheckout();
        const filePath = `${process.cwd()}${process.env.FILE_DIR}/Checkout_Information.xlsx`;
        let rowNum = 3;
        let sheetName = 'Information'
        let sheetData = excel.readRowSheet(filePath, sheetName, rowNum);
        await PageCheckoutStepOne.inputFirstname(sheetData.firstName);
        await PageCheckoutStepOne.inputLastname(sheetData.lastName);
        await PageCheckoutStepOne.inputPostalcode(sheetData.postalCode);
        await PageCheckoutStepOne.clickContinue();

        await PageCheckoutStepTwo.loadCheckoutSummary();
        const itemList = []; 
        let itemQuantity1 = await PageCheckoutStepTwo.getItemQuantity1();
        let itemPrice1 = await PageCheckoutStepTwo.getItemPrice1();
        const objItem1 = {quantity:itemQuantity1, price:itemPrice1};
        itemList.push(objItem1);

        let itemQuantity2 = await PageCheckoutStepTwo.getItemQuantity2();
        let itemPrice2 = await PageCheckoutStepTwo.getItemPrice2();
        const objItem2 = {quantity:itemQuantity2, price:itemPrice2};
        itemList.push(objItem2);

        let itemQuantity3 = await PageCheckoutStepTwo.getItemQuantity3();
        let itemPrice3 = await PageCheckoutStepTwo.getItemPrice3();
        const objItem3 = {quantity:itemQuantity3, price:itemPrice3};
        itemList.push(objItem3);

        let subTotal = calculateSubTotal(itemList);
        let txtSubTotal = await PageCheckoutStepTwo.getSubTotal();
        let checkSubTotal = txtSubTotal.includes(subTotal); 
        let errMessageSubtotal = "Error: Subtotal mismatch!";
        expect(checkSubTotal, errMessageSubtotal).to.equal(true);

        let tax = calculateTax(subTotal);
        let txtTax  = await PageCheckoutStepTwo.getTax();
        let checkTax = txtTax.includes(tax);
        let errMessageTax = "Error: Tax mismatch!";
        expect(checkTax, errMessageTax).to.equal(true);

        let total = calculateTotal(subTotal,tax);
        let txtTotal  = await PageCheckoutStepTwo.getTotal();
        let checkTotal = txtTotal.includes(total);
        let errMessageTotal = "Error: Total mismatch!";
        expect(checkTotal, errMessageTotal).to.equal(true);

        await PageCheckoutStepTwo.clickFinish();
        await PageCheckoutComplete.loadCompletePage();

    })

    it('Scenario 4: Positive - User removes items from the inventory.', async function () {
        const PageInventory = new pageInventory(driver);

        await PageInventory.loadItemList();
        await PageInventory.clickAddToCart1();
        await PageInventory.clickAddToCart2();
        await PageInventory.clickAddToCart3();
        await PageInventory.clickRemove1();
        await PageInventory.clickRemove2();
        await PageInventory.clickRemove3();

    })

    it('Scenario 5: Positive - User removes items from the cart.', async function () {
        const PageInventory = new pageInventory(driver);
        const PageCart = new pageCart(driver);

        await PageInventory.loadItemList();
        await PageInventory.clickAddToCart1();
        await PageInventory.clickAddToCart2();
        await PageInventory.clickAddToCart3();
        await PageInventory.clickShoppingCart();

        await PageCart.loadCartList();
        await PageCart.clickRemove1();
        await PageCart.clickRemove2();
        await PageCart.clickRemove3();

    })
    
    it('Scenario 6: Negative - User does not input first name.', async function () {
        const PageInventory = new pageInventory(driver);
        const PageCart = new pageCart(driver);
        const PageCheckoutStepOne = new pageCheckoutStepOne(driver);

        await PageInventory.loadItemList();
        await PageInventory.clickAddToCart1();
        await PageInventory.clickAddToCart2();
        await PageInventory.clickAddToCart3();
        await PageInventory.clickShoppingCart();

        await PageCart.loadCartList();
        await PageCart.clickCheckout();

        await PageCheckoutStepOne.loadFormCheckout();
        const filePath = `${process.cwd()}${process.env.FILE_DIR}/Checkout_Information.xlsx`;
        let rowNum = 4;
        let sheetName = 'Information'
        let sheetData = excel.readRowSheet(filePath, sheetName, rowNum);
        await PageCheckoutStepOne.inputFirstname(sheetData.firstName);
        await PageCheckoutStepOne.inputLastname(sheetData.lastName);
        await PageCheckoutStepOne.inputPostalcode(sheetData.postalCode);
        await PageCheckoutStepOne.clickContinue();

        let strErrorMessage = await PageCheckoutStepOne.getErrorMessage();
        let errMessageTotal = "Error: The message is not valid!";
        expect(strErrorMessage, errMessageTotal).to.equal("Error: First Name is required");
    })

    it('Scenario 7: Negative - User does not input their last name.', async function () {
        const PageInventory = new pageInventory(driver);
        const PageCart = new pageCart(driver);
        const PageCheckoutStepOne = new pageCheckoutStepOne(driver);

        await PageInventory.loadItemList();
        await PageInventory.clickAddToCart1();
        await PageInventory.clickAddToCart2();
        await PageInventory.clickAddToCart3();
        await PageInventory.clickShoppingCart();

        await PageCart.loadCartList();
        await PageCart.clickCheckout();

        await PageCheckoutStepOne.loadFormCheckout();
        const filePath = `${process.cwd()}${process.env.FILE_DIR}/Checkout_Information.xlsx`;
        let rowNum = 5;
        let sheetName = 'Information'
        let sheetData = excel.readRowSheet(filePath, sheetName, rowNum);
        await PageCheckoutStepOne.inputFirstname(sheetData.firstName);
        await PageCheckoutStepOne.inputLastname(sheetData.lastName);
        await PageCheckoutStepOne.inputPostalcode(sheetData.postalCode);
        await PageCheckoutStepOne.clickContinue();

        let strErrorMessage = await PageCheckoutStepOne.getErrorMessage();
        let errMessageTotal = "Error: The message is not valid!";
        expect(strErrorMessage, errMessageTotal).to.equal("Error: Last Name is required");
    })

    it('Scenario 8: Negative - User does not enter postal code.', async function () {
        const PageInventory = new pageInventory(driver);
        const PageCart = new pageCart(driver);
        const PageCheckoutStepOne = new pageCheckoutStepOne(driver);

        await PageInventory.loadItemList();
        await PageInventory.clickAddToCart1();
        await PageInventory.clickAddToCart2();
        await PageInventory.clickAddToCart3();
        await PageInventory.clickShoppingCart();

        await PageCart.loadCartList();
        await PageCart.clickCheckout();

        await PageCheckoutStepOne.loadFormCheckout();
        const filePath = `${process.cwd()}${process.env.FILE_DIR}/Checkout_Information.xlsx`;
        let rowNum = 6;
        let sheetName = 'Information'
        let sheetData = excel.readRowSheet(filePath, sheetName, rowNum);
        await PageCheckoutStepOne.inputFirstname(sheetData.firstName);
        await PageCheckoutStepOne.inputLastname(sheetData.lastName);
        await PageCheckoutStepOne.inputPostalcode(sheetData.postalCode);
        await PageCheckoutStepOne.clickContinue();

        let strErrorMessage = await PageCheckoutStepOne.getErrorMessage();
        let errMessageTotal = "Error: The message is not valid!";
        expect(strErrorMessage, errMessageTotal).to.equal("Error: Postal Code is required");
    })

    function calculateTotal(subTotal, tax){
        let result = 0;
        result = parseFloat(subTotal) + parseFloat(tax);
        return result;
    }

    function calculateTax(subTotal){
        let result = 0;
        let taxRate = 0.08;
        result = (subTotal * taxRate).toFixed(2);
        return result
    }

    function calculateSubTotal(itemList) {
        let result = 0;
        itemList.forEach((item) => {
            let itemQuantity = item.quantity;
            let itemPrice = item.price.substring(1);
            let totalItem = itemQuantity * itemPrice;
            result = result + totalItem;
        });

        return result;
    }  

    afterEach(async function () {
        await driver.close();
        await driver.quit();
    })
})