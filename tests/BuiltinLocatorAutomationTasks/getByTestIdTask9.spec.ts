import{test,expect} from '@playwright/test';
test("Click on element using getByTestId locator",async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/name-address-form.html");
const inputValue= page.getByTestId("username")
await inputValue.fill("TestUser");
await expect(inputValue).toHaveValue("TestUser");
await page.waitForTimeout(3000);
});