import { chromium, firefox, test } from "@playwright/test";


test.only("To launch a browser using browser contexts", async () => {


//To launch the browser --> creates a new browser instance
//const browser = await chromium.launch({headless: false, channel: 'chrome'});
const browser = await chromium.launch({headless:false, channel:"chrome"});
//Get the new browser context
const browserContext = await browser.newContext();
const browserContext1 = await browser.newContext();


//Get a new page
const page = await browserContext.newPage();


const page1 = await browserContext1.newPage()


//Load the Url
await page.goto("http://leaftaps.com/opentaps/control/main");
 page1.goto("https://leafground.com/alert.xhtml");
await page.locator("#username").fill("Demosalsemanger");
const UserName = page.locator("#username");
UserName.fill("Demosalsemanger");
await page.fill("#username","Demosalsemanger");
await page.locator(".inputLogin").nth(1).fill("crmfa");


await page.waitForTimeout(10000);


})

/*
To find id  ->  #idAttributeValue
TO find class -> .classAttributeValue
TO find attribute -> [attribute='attributeValue']
TO find element using text text = textValue
TO find element using text a:has-text('textValue')

TO find text of element with tag and attribute   tagName[attribute="attributeValue"]
Multiple match -> page.locator("[attribute='attributeValue']").nth(1);


To find an element where  attributeValue starts with a particular string in a attribute of element --> tagname[attribute^='attributeValue']
To find an element where attributeValue ends with a particular string in a attribute of element  --> tagname[attribute$='attributeValue']
To find an element where attributeValue containes a particular string in a attribute of element --> tagname[attribute"='attributeValue']

Paylwright locator



*/