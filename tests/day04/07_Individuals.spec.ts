import { expect, test } from "@playwright/test";

/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name

*/

test.skip("Create Individuals",async({page})=>{
    test.setTimeout(120000);
    page.goto("https://login.salesforce.com")
    await page.locator("#username").fill("shivaa.ram25@gmail.com");
    await page.locator("#password").fill("Shivaa.125");
    await page.locator("#Login").click();
    await page.waitForLoadState("load");
    await page.locator("//*[text()='App Launcher']/ancestor::button").click();
    await page.waitForLoadState("load");
    await page.locator("lightning-button button[aria-label='View All Applications']").click();
    await page.waitForLoadState("load");
    await page.getByText("Individuals").click();
    await page.waitForLoadState("load");
    await page.locator("a[title='New']").click();
    await page.getByPlaceholder("Last Name").fill("Prasad");
    await page.locator("button[title='Save']").click();
    await page.waitForLoadState("load");
    const lName=await page.locator("//*[text()='Individual']/following-sibling::*/span").innerText();
    expect(lName).toBe("Prasad");
})

/*

Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

test("Edit Individuals",async({page})=>{
    test.setTimeout(120000);
    page.goto("https://login.salesforce.com")
    await page.locator("#username").fill("shivaa.ram25@gmail.com");
    await page.locator("#password").fill("Shivaa.125");
    await page.locator("#Login").click();
    await page.waitForLoadState("load");
    await page.locator("//*[text()='App Launcher']/ancestor::button").click();
    await page.waitForLoadState("load");
    await page.waitForTimeout(10000);
    await page.locator("lightning-button button[aria-label='View All Applications']").click();
    await page.waitForLoadState("load");
    await page.getByText("Individuals").click();
    await page.waitForLoadState("load");
    const lName="Prasad";
    await page.locator(`//a[@title='${lName}']/parent::*/parent::th/following-sibling::td//*[text()='Show Actions']`).click();
    await page.waitForLoadState("load");
    await page.locator("a[title='Edit']").click();
    await page.waitForLoadState("load");
    await page.getByPlaceholder("First Name").fill("Shivaaram");
    await page.locator("button[title='Save']").click();
    await page.waitForLoadState("load");
    await page.waitForTimeout(10000);
    const fname_inner= await page.locator(`//a[contains(text(),'${lName}')]`).innerText();
    const fname=fname_inner.split(" ");
    console.log(fname);
    expect(fname[0]).toBe("Shivaaram");
})

