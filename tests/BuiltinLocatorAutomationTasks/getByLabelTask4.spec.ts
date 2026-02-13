import{test,expect} from "@playwright/test";
test("Enter Text in to textbox using getByLabel locator and Submit", async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/label.html")
const searchInputField = page.getByLabel("Search input for developer resources");
await searchInputField.fill("Developer Resource")
await page.getByRole('button', { name: 'Search' }).nth(1).click();
await expect(searchInputField).toHaveValue("Developer Resource")
await expect(page.getByText('You searched for: "Developer Resource"')).toBeVisible();
await page.waitForTimeout(3000);
})
