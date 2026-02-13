import {test,expect} from '@playwright/test';
test('Automation Task 1', async ({page}) => {
await page.goto('https://senthilsmartqahub.blogspot.com/2026/01/information-form.html');
await page.locator('#userName').fill('demoUser');
await page.locator('input[name="userEmail"]').fill('demouser@gmail.com');
await page.locator('.userPhone').fill('1234567890');
const submitButton = page.getByText('Submit',{exact: true});
await submitButton.click();
await expect(page.locator('#success-message')).toHaveText('Form submitted successfully!');
await page.waitForTimeout(2000);
})