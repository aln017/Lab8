describe('Basic user flow for SPA ', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
  });

  // test 1 is given
  it('Test1: Initial Home Page - Check for 10 Journal Entries', async () => {
    const numEntries = await page.$$eval('journal-entry', (entries) => {
      return entries.length;
    });
    expect(numEntries).toBe(10);
  });

  // test 2 is given
  /*it('Test2: Make sure <journal-entry> elements are populated', async () => {
    let allArePopulated = true;
    let data, plainValue;
    const entries = await page.$$('journal-entry');
    for (let i = 0; i < entries.length; i++) {
      data = await entries[i].getProperty('entry');
      plainValue = await data.jsonValue();
      if (plainValue.title.length == 0) { allArePopulated = false; }
      if (plainValue.date.length == 0) { allArePopulated = false; }
      if (plainValue.content.length == 0) { allArePopulated = false; }
    }
    expect(allArePopulated).toBe(true);
  }, 30000);*/

  it('Test3: Clicking first <journal-entry>, new URL should contain /#entry1', async () => {
    // implement test3: Clicking on the first journal entry should update the URL to contain “/#entry1”'
    await page.click('journal-entry');
    const url = await page.url();
    expect(url).toBe('http://127.0.0.1:5500/#entry1');

  });

  it('Test4: On first Entry page - checking page header title', async () => {
    // implement test4: Clicking on the first journal entry should update the header text to “Entry 1” 
    const header = await page.$('h1');
    const headText = await page.evaluate(value => value.textContent, header)
    expect(headText).toBe('Entry 1');

  });

  it('Test5: On first Entry page - checking <entry-page> contents', async () => {
    /*
     implement test5: Clicking on the first journal entry should contain the following contents: 
        { 
          title: 'You like jazz?',
          date: '4/25/2021',
          content: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
          image: {
            src: 'https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455',
            alt: 'bee with sunglasses'
          }
        }
      */
     const entry = await page.$('journal-entry');
     const data = await entry.getProperty('entry');
     const value = await data.jsonValue();

    const entryobj = { 
      title: 'You like jazz?',
      date: '4/25/2021',
      content: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
      image: {
        src: 'https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455',
        alt: 'bee with sunglasses'
      }
    }
     expect(value).toEqual(entryobj);

  }, 10000);

  it('Test6: On first Entry page - checking <body> element classes', async () => {
    // implement test6: Clicking on the first journal entry should update the class attribute of <body> to ‘single-entry’
    const body = await page.$('body');
    const attr = await body.getProperty('className');
    const attrName = await attr.jsonValue();
    expect(attrName).toBe('single-entry');
  });

  it('Test7: Clicking the settings icon, new URL should contain #settings', async () => {
    // implement test7: Clicking on the settings icon should update the URL to contain “/#settings”
    await page.click('img');
    const url = page.url();
    expect(url).toBe('http://127.0.0.1:5500/#settings');

  });

  it('Test8: On Settings page - checking page header title', async () => {
    // implement test8: Clicking on the settings icon should update the header to be “Settings”
    const header = await page.$('h1');
    let headText = await page.evaluate(value => value.textContent, header)
    expect(headText).toBe('Settings');
  });

  it('Test9: On Settings page - checking <body> element classes', async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    const body = await page.$('body');
    const attr = await body.getProperty('className');
    const attrName = await attr.jsonValue();
    expect(attrName).toBe('settings');
  });

  it('Test10: Clicking the back button, new URL should be /#entry1', async() => {
    // implement test10: Clicking on the back button should update the URL to contain ‘/#entry1’
    await page.goBack();
    const url = page.url();
    expect(url).toBe('http://127.0.0.1:5500/#entry1');
  });

  it('Test11: Clicking the back button, new url should be home page', async() => {
    // define and implement test11: Clicking the back button once should bring the user back to the home page
    await page.goBack();
    const url = page.url();
    expect(url).toBe('http://127.0.0.1:5500/');
  });

  it('Test12: On home page, check header title', async() => {
    // define and implement test12: When the user if on the homepage, the header title should be “Journal Entries”
    const header = await page.$('h1');
    let headText = await page.evaluate(value => value.textContent, header)
    expect(headText).toBe('Journal Entries');
  });

  it('Test13: On home page, the body element class attribute', async() => {
    // define and implement test13: On the home page the <body> element should not have any class attribute 
    const body = await page.$('body');
    const attr = await body.getProperty('className');
    const attrName = await attr.jsonValue();
    expect(attrName).toBe('');
  });

  it('Test14: On clicking second entry, url should have /#entry2', async() => {
  // define and implement test14: Verify the url is correct when clicking on the second entry(
    const entries = await page.$$('journal-entry');
    await entries[1].click();
    const url = await entries[1].url();
    expect(url).toBe('http://127.0.0.1:5500/#entry2');
  });


  // define and implement test15: Verify the title is current when clicking on the second entry


  // define and implement test16: Verify the entry page contents is correct when clicking on the second entry


  // create your own test 17

  // create your own test 18

  // create your own test 19

  // create your own test 20
  
});
