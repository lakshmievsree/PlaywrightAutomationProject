XPath (XML Path Language)
XPath is used to locate elements in HTML DOM.

There are 2 types:
1. Absolute XPath
starts from the root node(/html) and follows the complete DOM path to specific element.
/html/body/div[1]/div[2]/div/h1/a - not recommanded bz if DOM Structure changes so this xpath will not work

2. Relative XPath 
Starts with //
More flexible
Used mostly in automation (Playwright, Selenium)
1. XPath using Attribute
Syntax:
//tagname[@attribute='value']
Example HTML:
<input type='text' placeholder='username'>

Playwright Code:
await page.locator("//input[@placeholder='username']")
Finds input using attribute value

2. XPath using Text
Syntax:
 //tagname[text()='text']

Example:
<a>Gmail</a>

Playwright Code:
//await page.locator('//a[text()="Gmail"]')

II. XPath Functions
--------------------------
These are very important 

1️. contains()
Used for partial matching

1a. Attribute with contains()
Syntax:
 //tagname[contains(@attribute,'value')]

Example:
<input type='text' placeholder='Enter username'>

Playwright Code:
await page.locator("//input[contains(@placeholder,'username')]")
Matches even if full text is "Enter username"

2a. Text with contains()
Syntax:
//tagname[contains(text(),'text')]

Example:
<button>login</button>

Playwright Code:
await page.locator("//button[contains(text(),'login')]")

2. starts-with()
Used when attribute value starts with something.

Syntax:
//tagname[starts-with(@attribute,'value')]
Example:
<input type='text' id='user_123'>

Playwright Code:
await page.locator("//input[starts-with(@id,'user')]")

Good when dynamic IDs like user_123, user_456

3️. normalize-space()
Used to remove extra spaces before/after text.
Example:
<button>       Log in     </button>
Syntax:
 //tagname[normalize-space()='Text']

Playwright Code:
await page.locator("//button[normalize-space()='Log in'])
This is invalid:

await page.locator("//button[normalize-space()='Log']")


Because full text is "Log in"

Better way:

await page.locator("//button[contains(text(),'Log')]")

4. last()
Used to get last element from matching list.
Syntax:
(//tagname[@attribute='value'])[last()]

Example:
<input class='user'>
<input class='user'>
<input class='user'>

Playwright Code:
await page.locator("(//input[@class='user'])[last()]")

5️. position()

Position starts from 1 (not 0)

Example:
await page.locator("(//input[@class='user'])[position()=2]")

Selects second element