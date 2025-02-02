const DriverManager = require(process.cwd() + '/tests_explorer/drivers/driverManager')
    , pageLogin = require(process.cwd() + '/tests_explorer/pages/sauceDemo/Login.page')

/* Function login yang akan dipanggil di before di dalam describe */
async function load(browser, url) {
    let driver = DriverManager.buildDriver(browser)
    driver.manage().window().maximize()
    driver.get(url)
    
    return driver
}

async function login(driver, user, password) {
    const PageLogin = new pageLogin(driver);
    await PageLogin.loadFormLogin();
    await PageLogin.inputUsername(user);
    await PageLogin.inputPassword(password);
    await PageLogin.clickLogin();
}

module.exports = {
   load,
   login
}