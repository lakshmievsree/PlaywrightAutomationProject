//Click Element Using getByText() Locator(Element with Leading/Trailing Spaces)
import {test,expect} from "@playwright/test";
test("Task2-Click Element using getByText Locator with leading/trailing spaces",async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html")
const trailingSpaceLocatorLink=page.getByText("Name and Address Form");
await trailingSpaceLocatorLink.click();
await expect(page).toHaveURL("https://senthilsmartqahub.blogspot.com/2025/05/name-address-form.html");
await page.waitForTimeout(3000);
})
