import{test,expect} from "@playwright/test";
test("Task3-Click the second unique element using getByText", async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2025/05/text.html")
await page.getByText("Job Application Form").nth(1).click();
await expect(page).toHaveURL("https://senthilsmartqahub.blogspot.com/2025/01/blog-post.html");
await page.waitForTimeout(3000);
})