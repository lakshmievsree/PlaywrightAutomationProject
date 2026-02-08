import {test,expect} from "@playwright/test";
test("Locate the element using getByAltText locator",async({page})=>{
await page.goto("https://playwright.dev/")
await page.getByAltText("Outlook",{exact:true}).click()
await page.waitForTimeout(5000)
})
