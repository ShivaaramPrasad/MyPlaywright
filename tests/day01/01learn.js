
/*

1)  Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types
01*/
var firstName="Prasad";
var companyName="ThriveOptim";
var MobileNumber=9962035496;
var Automation=true;
var hasPlaywright;

console.log("firstName: ", firstName, typeof firstName);

console.log("companyName:", companyName, typeof companyName);

console.log("MobileNumber: ", MobileNumber,typeof MobileNumber);
console.log("Automation: ", Automation,typeof Automation);
console.log("hasPlaywright: ", hasPlaywright,typeof hasPlaywright);
/*
2)  Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works

    - function how to write and how to call
    - basic if condition and block variable
    - let vs var
*/
const browserName="chrome";
getBrowserVersion()

function  getBrowserVersion(browserName){
   if ( browserName ==="chrome") {
    //if ( browserName.startsWith( "chrome" ) ) {
        var browserVersion="117";
        //let browserVersion="117";

        console.log("Chrome Browser Vesrion: ",browserVersion);
}

console.log("Chrome Browser Vesrion: ",browserVersion);
}

/*
 Use new Javascript File Name: 02_Conditional.js
 
    Objective: Learn if - else and switch - case
    Create 2 functions : launchBrowser, runTests
    where,
    a) launchBrowser need to take input as browserName (string) and do not return any
        - use if, else (chrome or otherwise)
        - just print
    b) runTests need to take input as testType (string) and do not return any
        - use switch case (smoke, sanity, regression, default (smoke))
        - just do print
 
    Call that function from the javascript
 
   */

    function launchBrowser(browserName){
        if(browserName ==='chrome'){

            console.log("browserName is CHROME");
        }
        else if(browserName ==='safari'){
            console.log("browserName is safari");

        }
        else if(browserName ==='firfox'){
            console.log("browserName is firfox");

        }
        else {
            console.log("Undefined browserName");

        }
    }
function runtests(testType){
switch(testType){
    case "smoke":
    console.log("testType is SOMKE");
    break;
    case "sanity":
    console.log("testType is SANITY");
    break;
    case "regression":
    console.log("testType is REGRESSION");
    break;
    default:
    console.log("Undefined test default smoke");
    break;

}
}
launchBrowser("chrome");
runtests("smoke");
