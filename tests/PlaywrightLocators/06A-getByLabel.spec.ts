import {test,expect} from "@playwright/test";
test("Locate the element using getByLabel by using aria-label attribute",async({page})=>{
await page.goto("https://playwright.dev/")
await page.getByLabel("GitHub repository").click();
await page.waitForTimeout(3000)

})