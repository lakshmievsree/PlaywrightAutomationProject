import {test,expect} from"@playwright/test";
test("Click on Element using getByLabel Locator",async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/login-page.html");
await page.getByLabel("Username:").fill("senthilsmartqahub");
await page.getByLabel("Password:").fill("senthilsmartqahub");
await page.getByLabel("Remember Me").check();
await page.getByText("Login").click;
await page.waitForTimeout(30000)
});