import {test,expect} from '@playwright/test';
test("Click the Link Element using normalised-space function",async ({page})=>{
    await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html");
    await page.locator("//a[normalize-space()='Name and Address Form']").click();
    await expect(page.getByRole('heading',{name:'Name & Address Form'})).toBeVisible();
    await page.waitForTimeout(3000);


})
