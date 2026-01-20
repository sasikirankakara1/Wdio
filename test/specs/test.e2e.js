import { browser } from "@wdio/globals";
describe('launch',()=>{
    beforeEach(()=>{
        browser.navigateTo("https://www.google.com")
    })
    it.only('usage',async()=>{
        console.log("Title:",await browser.getTitle())
        await browser.maximizeWindow()
        await browser.pause(500)
    })
})