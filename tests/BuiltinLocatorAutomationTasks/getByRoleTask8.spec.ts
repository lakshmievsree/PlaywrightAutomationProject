import {test,expect} from "@playwright/test";
test("Search product using getByRole locator", async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2025/06/e-commerce.html")
await page.getByRole('searchbox',{name:'Search mobile products'}).fill("Samsung Galaxy S24")
await expect(page.getByText("Samsung Galaxy S24")).toBeVisible();
await page.waitForTimeout(3000)

})