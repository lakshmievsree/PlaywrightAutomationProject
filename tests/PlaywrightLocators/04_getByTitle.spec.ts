import {test,expect} from "@playwright/test";
test("Locate the element using getByTitle locator",async({page})=>{
await page.goto("https://en.wikipedia.org/wiki/Main_Page");
await page.getByTitle("Wikipedia").click();
await page.waitForTimeout(3000);
})