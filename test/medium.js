const {webdriver, Builder, By, Key, until} = require('selenium-webdriver'),
    test = require('selenium-webdriver/testing'),
    assert = require('assert');

describe('PortfolioTestsAsyncAwait', function() {
    before(async function () {
        //driver = await new Builder().usingServer('http://localhost:4444/wd/hub').forBrowser('chrome').build();
        driver = await new Builder().usingServer('http://localhost:4444/wd/hub').forBrowser('chrome').build();
        await driver.get("https://www.google.com");
    });

    it('01 Drums Access Await', async function () {

            this.timeout(5000);
            //const drumsLink = await driver.findElement(By.xpath('/html/body/div[2]/div[1]'));
            //await drumsLink.click();

            const pageTitle = await driver.getTitle();
            await assert.equal(pageTitle, "Google");
        }
    )
    after(async function() { await driver.quit()});
});