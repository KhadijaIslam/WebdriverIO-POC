const assert = require('assert');

describe('Test Sharebar' , () => {
  it('should get the correct page title', () => {
    browser.url('https://www.businessinsider.com/apple-share-price-tuesday-september-9-2014-9');
    const title = $('.post-headline').getText();
    assert.equal(title, 'Apple Shares Fall After Announcing iPhones, Apple Pay, Apple Watch');
    browser.pause(2000);
    const fbShare = $('[data-e2e-name="share-link-facebook"]');
    fbShare.click();
    browser.pause(2000);
    //switch to FB window
    browser.switchWindow('Facebook');
    const fbTitle = browser.getTitle();
    assert.equal(fbTitle, 'Facebook');
    // switch back via title match
    browser.switchWindow('Apple Share Price Tuesday September 9 - Business Insider');
    browser.pause(2000);
    const copyLink = $('[data-e2e-name="share-link-copy-link"]');
    copyLink.click();
    const copyLinkNotif = $('[class="notify-wrapper active"]');
    const isEnabled = copyLinkNotif.isEnabled();
    console.log('The notification displayed: ' + isEnabled); // outputs: true
    //Clicking on more Share icon
    const moreShare = $('[class="share-link share-post share-more"]');
    moreShare.click();
    browser.pause(3000);
    const email = $('[data-e2e-name="share-link-email"]');
    email.click();
    browser.pause(3000);
    const emailCancelButton = $('[data-e2e-name="email-cancel"]');
    emailCancelButton.click();
    browser.pause(1000);
    const twitter = $('[data-e2e-name="share-link-twitter"]');
    twitter.click();
    browser.pause(1000);
    browser.switchWindow('Post a Tweet on Twitter');
    const twittertitle = browser.getTitle();
    assert.equal(twittertitle,'Post a Tweet on Twitter');
    browser.pause(1000);
    browser.switchWindow('Apple Share Price Tuesday September 9 - Business Insider');
    browser.pause(1000);
    const linkedIn = $('[data-e2e-name="share-link-linkedin"]');
    linkedIn.click();
    browser.pause(1000);
    browser.switchWindow('LinkedIn');
    const linkedInTitle = browser.getTitle();
    assert.equal(linkedInTitle,'LinkedIn');
    browser.pause(1000);
    browser.switchWindow('Apple Share Price Tuesday September 9 - Business Insider');
    browser.pause(2000);
    const flipboard = $('[data-e2e-name="share-link-flipboard"]');
    flipboard.click();
    browser.pause(2000);
    browser.switchWindow('Flip into magazine - logged out');
    browser.pause(2000);
    const flipboardTitle = browser.getTitle();
    assert.equal(flipboardTitle,'Flip into magazine - logged out');
    browser.pause(5000);
  });
});
