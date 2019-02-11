const assert = require('assert');
//import assert from 'assert';

describe('Test homepage' , () => {
  it('should get the correct page title', () => {
    browser.url('https://www.businessinsider.com/apple-share-price-tuesday-september-9-2014-9');
   // const notifPopUpCancel = $('[id="onesignal-popover-cancel-button"]');
   //  browser.waitForElementVisible(notifPopUpCancel, 10000);
   //  browser.notifPopUpCancel.click();
    const title = $('.post-headline').getText();
    assert.equal(title, 'Apple Shares Fall After Announcing iPhones, Apple Pay, Apple Watch');
    browser.pause(2000);
    const fbShare = $('[data-e2e-name="share-link-facebook"]');
    fbShare.click();
    browser.pause(10000);
  });
});
