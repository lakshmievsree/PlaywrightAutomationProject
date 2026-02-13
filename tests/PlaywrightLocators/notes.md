
Playwright Locators
===================

A locator is a function used to find and interact with webelement such as button, inputfileds, links, images, etc

Playwright locators are auto-waiting

Built-in playwright locators
============================
 
 1. getByText()
       used to locate the element using visible text content
       it can locate complete text content or partial text content by default
        To find complete alt text we use exact property
 2. getByPlaceholder()
        used to locate the input element using placeholder attribute
 3. getByAltText()
      used to locate the element using the alt attribute (image)
       it can locate complete alt text or partial alt text by default
       To find complete alt text we use exact property
 4. getByLabel()
       Used to locate the element using 
       1. aria-label attribute
       2. We can use label text when element html Label for='id" reference input id 
       3. We can use label text when Wrapped label element present in <label> tag
 5. getByTitle()
      used to locate the element using title attribute
      title attribute used in tooltip when you mouse hover on the element
 6. getByRole()   
        
       page.getByRole(Aria Role,{name:'accessiable name'})
 7. getByTestID
        used to locate the element using data-testid attribute

===========                   