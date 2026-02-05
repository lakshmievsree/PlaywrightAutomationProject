import test from "@playwright/test";
test("getByText locator",async({page})=>{
    await page.goto("https://www.google.com/");
    const imageTextlink =page.getByText("Images");
    await imageTextlink.click();
    await page.waitForTimeout(5000)
})
test("getByText with same text visible multiple times",async({page})=>{
await page.goto("https://playwright.dev/java/")
await page.getByText('API', { exact: true }).click();
await page.waitForTimeout(3000)
})