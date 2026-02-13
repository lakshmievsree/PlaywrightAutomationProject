import {test,expect} from "@playwright/test";
test("Locate the element using getByLabel for ref for id",async({page})=>{
await page.goto("https://www.wikipedia.org/")
await page.getByLabel("Search Wikipedia").fill("Playwright")
await page.waitForTimeout(3000)

})