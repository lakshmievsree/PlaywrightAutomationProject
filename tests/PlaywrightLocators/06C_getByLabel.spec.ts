import test from "@playwright/test";
test("Locate the element using  Label for='id' referenced input id",async({page})=>{
await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/login-page.html")
await page.getByLabel("Remember Me").check()
await page.waitForTimeout(5000)

})