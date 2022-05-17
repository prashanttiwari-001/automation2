let puppeteer = require("puppeteer");
(async function(){
    let browser =await puppeteer.launch({
        headless: false

    });
    let newPage = await browser.newPage();
    await newPage.goto("https://www.google.com/");

    await newPage.type("input.gLFyf.gsfi","Pepcoding");
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector(".yuRUbf>a[href='https://www.pepcoding.com/']",{
        visible:true
    })
    await newPage.click(".yuRUbf>a[href='https://www.pepcoding.com/']");
    console.log("script executed");
}());