let puppeteer =require("puppeteer");
(async function(){
    let browser = await puppeteer.launch({
        headless:false,
        slowMo:150,
        defaultViewport:null,
        args:["--start-maximized"]
    });
    let newPage =await browser.newPage();
    await newPage.goto("https://www.google.com/");
    await newPage.type("input.gLFyf.gsfi","youtube");
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector(".yuRUbf > a[href='https://www.youtube.com/']",{
        visible:true
    })
    await newPage.click(".yuRUbf > a[href='https://www.youtube.com/']");
    await newPage.waitForSelector("#search-input","badshah",
    { 
        visible:true
    })
    await newPage.click("#search-input");
    await newPage.type("#search-input","badshah");
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector("a#video-title")
    let elemsArr = await newPage.$$("a#video-title")
    await elemsArr[1].click();

})();