import {test,expect} from "@playwright/test";
test("Locate the element using getByPlaceholder locator",async({page})=>{
await page.goto("https://www.amazon.com/");
await page.getByPlaceholder("Search Amazon").fill("laptop");
await page.waitForTimeout(1000);
})