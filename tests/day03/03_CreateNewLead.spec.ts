/*
1) Open http://leaftaps.com/opentaps/control/main
2) Perform the following functions
    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 
*/
import { chromium, test } from "@playwright/test";

test("create a new lead", async () => {
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });

    const browserContext = await browserInstance.newContext();

    const page = await browserContext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill('#username', 'Demosalesmanager');

    await page.fill('#password', 'crmsfa');

    await page.locator('input[type=submit]').click();

    await page.locator('text = CRM/SFA').click();
    await page.waitForLoadState("load");

    await page.locator('//a[contains(text(),"Leads")]').click();

    await page.locator('//a[contains(text(),"Create Lead")]').click();

    await page.fill('.inputBox', 'thriveoptim');

    await page.fill('#createLeadForm_firstNameLocal', 'Ram');

    await page.fill('[name = lastNameLocal]', 'Prasad');

    await page.locator('[value="Create Lead"]').click();

})