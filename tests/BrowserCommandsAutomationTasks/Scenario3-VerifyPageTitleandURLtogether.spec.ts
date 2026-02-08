import{test,expect} from "@playwright/test";
test("scenario3-verify the page title and URL together", async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2024/12/playwright-topices.html");
await expect(page).toHaveTitle("Playwright Online Course topics");
await expect(page).toHaveURL("https://senthilsmartqahub.blogspot.com/2024/12/playwright-topices.html");
await page.waitForTimeout(3000);
await page.close(); 

})
