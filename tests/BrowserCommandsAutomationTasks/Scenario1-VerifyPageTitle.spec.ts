import{test,expect} from '@playwright/test';
test("Scenario 1: Verify page title",async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2024/12/playwright-topices.html");
const pageTitle= await page.title();
console.log("The page title is:",pageTitle);
await expect(page).toHaveTitle(pageTitle);
await page.waitForTimeout(3000);
await page.close();
;})
