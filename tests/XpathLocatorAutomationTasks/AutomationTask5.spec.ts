import {test,expect} from '@playwright/test';
test("Automate Clicking Buttons Using XPath Position", async({page})=>{
    await page.goto("https://senthilsmartqahub.blogspot.com/2026/01/button-click-example.html");
    await page.locator("(//button[@class='btn'])[position()=1]").click();
    await page.locator("(//button[@class='btn'])[last()]").click();
    await page.locator("(//button[@class='btn'])[position()=2]").click();
    await page.locator("(//button[@class='btn'])[position()=3]").click();
    await expect(page.locator("//p[@id='output']")).toHaveText("Button 3 clicked");
    await page.waitForTimeout(3000);
    
})