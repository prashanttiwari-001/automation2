let puppeteer = require("puppeteer");
(async function(){
    let browser =await puppeteer.launch({
        headless: false,
        slowMo:100,
        defaultViewport:null,
        args:["--start-maximized"]
    });
    let newPage = await browser.newPage();
    await newPage.goto("https://www.google.com/");

    await newPage.type("input.gLFyf.gsfi","collegedunia");
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector(".yuRUbf>a[href='https://collegedunia.com/']",{
        visible:true
    })
    await newPage.click(".yuRUbf>a[href='https://collegedunia.com/']");
    await newPage.waitForSelector(".select-box-link.d-block.w-100.border-0.bg-transparent" ,
    {  visible:true
    })
    let elemsArr = await newPage.$$(".select-box-link.d-block.w-100.border-0.bg-transparent")
    await elemsArr[0].click();
    await newPage.waitForSelector("a.select-box",{
        visible:true
    })
    let citiesArr = await newPage.$$("a.select-box");
    await citiesArr[1].click();
    // console.log("script executed");
}());