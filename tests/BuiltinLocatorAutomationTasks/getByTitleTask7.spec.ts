import {test,expect} from "@playwright/test";
test("Click on element using getByTitle locator",async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2025/04/imageclick.html");
await page.getByTitle("Online Mobile Store").nth(1).click();
await expect(page).toHaveTitle("E-Commerce");
await page.waitForTimeout(3000);
})