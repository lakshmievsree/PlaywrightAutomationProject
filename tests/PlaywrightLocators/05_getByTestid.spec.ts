import test from "@playwright/test";
test("Locate the element using data-TestId attribute",async({page})=>{
await page.goto("https://www.facebook.com")
await page.getByTestId("royal-email").fill("Demo@gmail.com")
await page.waitForTimeout(5000)
})