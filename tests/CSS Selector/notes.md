1. Tag Name + Attribute Selector
tagname[attribute="value"]
HTML Code:
<input type="text" placeholder="Enter username">
Playwright
await page.locator('input[placeholder="Enter username"]');
Important:
Always use double quotes inside CSS when the outer string is single-quoted (or vice-versa).

2. ID Attribute Selector
Syntax
#idValue
HTML Code
<input type="text" id="username">
Playwright Code
await page.locator('#username');

3. Class Attribute Selector
Syntax
.classValue
HTML  Code
<input type="text" class="username">
Playwright Code
await page.locator('.username');

4. Multiple Attribute Selector

When one attribute is not enough.
Syntax:
tag[attribute="value"][attribute="value"]
HTML Code:
<input type="text" name="username" placeholder="Enter username">
Playwright Code:
await page.locator('input[name="username"][placeholder="Enter username"]');

5. Partial Attribute Matching
a) Starts With ^=
Syntax
tag[attribute^="value"]

b) Ends With $=
Syntax
tag[attribute$="value"]
c) Contains *=
Syntax
tag[attribute*="value"]

HTML Code:
<input type="text" id="user_name_123">
Playwright Code:
await page.locator('input[id^="user"]');
await page.locator('input[id$="123"]');
await page.locator('input[id*="name"]');

6. Child and Descendant Selectors
a) Direct Child Selector (>)
Selects only immediate children.
Syntax
parent > child
HTML Code:
<div>
  <input type="text">   <!--Identified-->
  <h1>
    <input>            <!-- NOT Consider -->
  </h1>
</div>
Playwright Code:
await page.locator('div > input');

b) Descendant Selector (space)
Selects any level inside parent.
Syntax:
parent child
HTML Code:
<div>
  <input type="text">   <!-- selected -->
  <h1>
    <input>            <!-- selected -->
  </h1>
</div>

Playwright Code:
await page.locator('div input');

7. Sibling Selectors
a) Immediate Sibling Selector (+)
Selects the next immediate sibling only.
Syntax
element1 + element2
HTML
<form>
  <h1>Username</h1>
  <input type="text">     <!-- selected -->
  <button>Submit</button>
</form>
Playwright Code:
await page.locator('h1 + input');

b) General Sibling Selector (~)
Selects all matching siblings after the element.
Syntax
element1 ~ element2
HTML
<form>
  <h1>Menu</h1>
  <a>Home</a>
  <a>About</a>
  <a>Contact</a>
</form>
Playwright Code:
await page.locator('h1 ~ a');

1. Attribute Selector

test("Attribute selector", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.locator('[name=email]').fill("playwright@gmail.com");
  await page.waitForTimeout(4000);
});
    
Explanation: Selects any element with the attribute name="email". Attribute selectors are useful when elements lack IDs or class names but have unique attribute values.

2. Text Selector

test("Text selector", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.locator('text=Log in').first().click();
  await page.waitForTimeout(4000);
});
    
Explanation: Targets elements by their visible text content, here clicking the first element containing "Log in". This is useful for buttons or links identified by text.