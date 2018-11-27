const assert = require('assert');

const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

describe('Login Admin', function() {
    let driver;

    before(function() {
        driver = new Builder().forBrowser('firefox').build();
        driver.manage().setTimeouts({implicit: 15000/*, pageLoad: 30000, script:15000*/});
    });

    it ('login', async function() {
       await driver.get('https://www.appsgeyser.com/create/start/popular');
       await driver.findElement(By.css('a[title="Create an Messenger app"]')).click();
       await driver.findElement(By.css('div.next-button')).click();
       let arrNext = await driver.findElements(By.css('div.next-button'));
       await driver.arrNext[1].click();

    });
    //after(async function() {driver.quit();});
});