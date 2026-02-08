import{test,expect} from "@playwright/test";
test("scenario2-Verify the Current Page Url", async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2024/12/playwright-topices.html");
const currentUrl= await page.url();
console.log("The current page URL is:",currentUrl);
await expect(page).toHaveURL(currentUrl);
await page.waitForTimeout(3000);
await page.close();
})