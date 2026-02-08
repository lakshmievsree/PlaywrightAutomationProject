import {test,expect} from"@playwright/test";
test("Click on Element using getByAltText Locator",async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2025/06/e-commerce.html");
await page.getByAltText("Samsung Galaxy S24").click();
await expect(page).toHaveTitle("SenthilSmartQAHub")
await page.waitForTimeout(3000);
})