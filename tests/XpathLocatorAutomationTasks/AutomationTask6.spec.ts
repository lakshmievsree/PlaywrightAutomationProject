import {test,expect} from '@playwright/test';
test("Click the Link Element using contains function",async ({page})=>{
    await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html");
    await page.locator("//a[contains((text()),'Doctor Appointment Form')]").click();
    await expect(page.getByRole('heading',{name:'Doctor Appointment Form'}).nth(1)).toBeVisible();
    await page.waitForTimeout(3000);
})

