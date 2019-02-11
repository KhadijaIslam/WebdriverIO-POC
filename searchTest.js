const { remote } = require('webdriverio');
const assert = require('assert');


(async () => {
  const browser = await remote({
      logLevel: 'error',
      path: '/',
      capabilities: {
          browserName: 'chrome'
      }
  });

    await browser.url('https://www.businessinsider.com/')

    //const notifPopUpNoThanks = await browser.$('#onesignal-popover-cancel-button')
    //await notifPopUpNoThanks.click()

    const searchElem = await browser.$('.search')
    await searchElem.click()

    const inputElem = await browser.$('.search-bar')
    await inputElem.setValue('apple')

    const submitBtn = await browser.$('.search-button')
    await submitBtn.click()

    const searchResultElem = await browser.$('.search-results-underline')

    console.log(await searchResultElem.getText())


    await browser.deleteSession()
})().catch((e) => console.error(e))
