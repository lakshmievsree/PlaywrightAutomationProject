import test,{expect} from "@playwright/test";

test("Open Google application",async({page})=>{
    await page.goto("https://www.google.com/");
    const title = await page.title();
    console.log("title of the page is:",title);
    const expectedTitle = "Google";
    await expect(title).toBe(expectedTitle);
    
    //To fetch url of the page
    const url:string= await page.url();
    console.log("url of the page is:",url);
})