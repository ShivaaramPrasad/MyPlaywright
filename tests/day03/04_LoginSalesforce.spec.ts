/*
Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url
*/


import { chromium, test } from "@playwright/test";

test("launch the salesforce application", async () => {

    const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });

    const browserContext = await browserInstance.newContext();

    const page = await browserContext.newPage();

    await page.goto("https://login.salesforce.com");

    await page.fill("#username", "pranavrajaroun@testleaf.com");

    test.setTimeout(40000);

    await page.fill("#password", "Automation@2023");

    await page.locator('//input[@id="Login"]').click();

    test.setTimeout(30000);

    const title = await page.title();

    console.log('the page title is + ${title}');

    const url = page.url();

    console.log('the page url is "+ ${url}');

});