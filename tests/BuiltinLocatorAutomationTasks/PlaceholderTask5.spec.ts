import {test,expect} from "@playwright/test";
test("Task5-Fill Login form using getByPlaceholder locator",async({page})=>{
    
    await page.goto("https://senthilsmartqahub.blogspot.com/2025/01/login-page.html");
    await page.getByPlaceholder("Enter your username").fill("demo");
    await page.getByPlaceholder("Enter your password").fill("demo");
    await page.getByTestId("loginButton").click()
    await expect(page).toHaveURL("https://www.youtube.com/@SenthilSmartQAHub")
})