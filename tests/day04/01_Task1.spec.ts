/*# Classrom:1 CSS & Playwright Selectors

1. Launch the browser
2. Load the URL "http://leaftaps.com/opentaps/control/main"
3. Enter the username using getByLabel
4. Enter the password using attribute
5. Click the login button using class name
6. Get the text of CRM/SFA and click the CRM/SFA using getByText
7.Print the page title and the url
8. Click Leads
9. Click Create Lead using text 
10. Fill all the mandatory fields
11. Click Submit button using class name
12. Print the status of the lead
*/

import { chromium, test } from "@playwright/test";

test("create a new lead", async () => {
    //1. Launch the browser
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });

    const browserContext = await browserInstance.newContext();

    const page = await browserContext.newPage();

   // 2. Load the URL "http://leaftaps.com/opentaps/control/main"

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //3. Enter the username using getByLabel

    await page.getByLabel('username').fill('Demosalesmanager');
//4. Enter the password using attribute

    await page.getByLabel('password').fill('crmsfa');

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