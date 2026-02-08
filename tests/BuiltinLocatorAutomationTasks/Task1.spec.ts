import {test,expect} from "@playwright/test";

test("Task1-Click Element using getByText Locator with exact text",async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html")
const formLink=page.getByText("Form",{exact:true})
await formLink.click();
await expect(page).toHaveURL("https://senthilsmartqahub.blogspot.com/2025/01/login-page.html");
await page.waitForTimeout(3000);
})