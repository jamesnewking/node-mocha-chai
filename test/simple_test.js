const assert = require('assert');
const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const expect = require('chai');

var driver;

describe( 'Google Search', () => {
    before(async () => {
        //this.timeout(2000);
        driver =await new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(webdriver.Capabilities.chrome()).build();
        await driver.get('https://www.google.com');


    } );

    after(async () => {
        await driver.quit();

    });

    it('should see this expected title value',async () => {
        //this.timeout(2000);
        let pageTitle = await driver.getTitle();
        await assert.equal(pageTitle, 'Google');

    })

});

