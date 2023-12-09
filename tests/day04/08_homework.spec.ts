import { expect, test } from "@playwright/test";
/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/


test.skip("Create Lead", async({page})=>{
    test.setTimeout(120000)
    page.goto("https://login.salesforce.com")
    await page.locator("#username").fill("shivaa.ram25@gmail.com");
    await page.locator("#password").fill("Shivaa.125");
    await page.locator("#Login").click();
    await page.waitForLoadState("load");
    await page.locator("//*[text()='App Launcher']/ancestor::button").click();
    await page.locator("lightning-button button[aria-label='View All Applications']").click();
    await page.locator("//lightning-formatted-rich-text//*[text()='Sales']").click();
    await page.waitForLoadState("load");
    await page.locator("//a//*[text()='Leads']").click();
    //await page.locator("button[text=New]").clear();
    await page.getByText("New").click();
    await page.locator("//button[@name='salutation']").click();
    await page.locator("[title='Mr.']").click();
    await page.getByPlaceholder("Last Name").fill("Prasad");
    await page.locator("input[name='Company']").fill("MyCompany");
    await page.locator("//button[text()='Save']").click();
    await page.waitForLoadState("load");
    const lname=await page.locator("[slot='primaryField']").textContent();
    expect(lname).toBe("Mr.  Prasad");

})


/*

Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

test.skip("Edit Lead",async({page})=>{

    test.setTimeout(120000)
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel("Username").fill("Demosalesmanager");
    await page.locator("[type='password']").fill("crmsfa");
    await page.click(".decorativeSubmit");
    await page.waitForLoadState("load");
    await page.locator(".crmsfa").click();
    await page.waitForLoadState("load");
    const title=await page.title();
    const url=page.url();
    console.log(`The title of the page is ${title}`);
    console.log(`The url of the page is ${url}`);
    await page.getByRole('link' ,{name:'Leads'});
    await page.click("text=Leads");
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("input.inputBox[name='companyName']").fill("MyCompany");
    await page.locator("input.inputBox[name='firstName']").fill("MyFirstName");
    await page.locator("input.inputBox[name='lastName']").fill("MyLastName");    
    await page.selectOption("#createLeadForm_currencyUomId",{value:'AFA'});
    await page.selectOption("#createLeadForm_dataSourceId",{label:'Direct Mail'})
    await page.selectOption("#createLeadForm_industryEnumId",{value:'IND_SOFTWARE'})
    await page.selectOption("#createLeadForm_ownershipEnumId",{index:1});
    await page.locator(".smallSubmit").click();
    await page.waitForLoadState("load");
    await page.getByText("Edit").click();
    await page.waitForLoadState("load");
    await page.locator("input.inputBox[name='companyName']").fill("YourCompany");
    await page.locator("input[value='Update']").click();
    const updatedCompanynameWithCode=await page.locator("#viewLead_companyName_sp").innerText();
    const updatedCompanynameSplit=updatedCompanynameWithCode?.split(' ');
    const updatedCompanyName=updatedCompanynameSplit[0];
    expect(updatedCompanyName).toBe("YourCompany");

})