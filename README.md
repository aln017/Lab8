# Lab8_Starter
Allison Ngo

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1) Within a Github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because a messaging feature would cause interactions with the application as a whole and we cannot test it as its own isolated unit. Other features of the app may affect how the messaging feature functions.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   
Yes, because any other interactios between components on the application would not affect the max message length. Therefore, we are able to test it independently of every other feature on the app.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

If we set headless to true, there would be no popup browser that shows puppeteer navigating through it as it would if it were set to false. Since there is no popup UI browser, we cannot see how or in what order puppeteer is navigating and carrying out our tests.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

We would use beforeEach instead in order to repeatedly set the settings page as our start for each test. The page's go to function would also pass in http://127.0.0.1:5500/#settings as the argument rather than the home page. By doing so, before each test case, the page will automatically go to the settings page to be used as the starting point.

