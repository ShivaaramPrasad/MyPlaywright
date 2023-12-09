//import { chromium, test } from "@playwright/test";
import { chromium, firefox, test } from "@playwright/test";
import { channel } from "diagnostics_channel";

test("To launch a browser", async()=>{

// Create New browser instance 
//const browser =await chromium.launch({headless: false, channel: "msedge"});
//const browser1 =await firefox.launch({headless: false});

const browser =await chromium.launch({headless: false});

// Get the new browser constext
 const browserContext = await browser.newContext();

 // Get a new page 

  const page = await browserContext.newPage();

  await page.goto("https://google.com");
  //Load the Url
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.goto("https://leafground.com/alert.xhtml");


  page.waitForTimeout(50000);
})


test("To launch a firefox browser", async () => {


//To launch the browser --> creates a new browser instance
//const browser = await chromium.launch({headless: false, channel: 'chrome'});
const browser = await firefox.launch({headless:false});
//Get the new browser context
const browserContext = await browser.newContext();

//Get a new page
const page = await browserContext.newPage();


//Load the Url
await page.goto("http://leaftaps.com/opentaps/control/main");


await page.waitForTimeout(10000);


})
test.only("To launch a browser using browser contexts", async () => {


//To launch the browser --> creates a new browser instance
//const browser = await chromium.launch({headless: false, channel: 'chrome'});
const browser = await chromium.launch({headless:false, channel:"chrome"});
//Get the new browser context
const browserContext = await browser.newContext();
const browserContext1 = await browser.newContext();


//Get a new page
const page = await browserContext.newPage();

//Load the Url
await page.goto("https://login.salesforce.com");
await page.waitForTimeout(10000);


})    
