// spec.js
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

browser.waitForAngularEnabled(false);
var loginUrl, homeUrl, signup, name;

describe('Testing on HOOQ', function () {

  it('sets up initial variables', function () {
    homeUrl = browser.get('https://wooow.hooq.tv/welcome');
    signup = browser.get('https://wooow.hooq.tv/id/signup-email');
    expect(browser.getTitle()).toEqual('A million stories for a billion people - HOOQ');
  });

  it('Sign up HOOQ', function () {
    browser.getCurrentUrl(signup);
    browser.sleep(30000);
    browser.wait(function() {
    return element(by.id("email")).isPresent()});
    element(by.id('email')).clear().sendKeys('dewi.june85@gmail.com');
    browser.sleep(30000);
    browser.actions().mouseMove(element(by.id('submit-button'))).mouseMove({x: 0, y: 0}).doubleClick().perform();
    element(by.id('submit-button')).click();
    browser.sleep(30000);
    expect(browser.get('https://wooow.hooq.tv/id/signup-email-sent'));
  });
  it('Verification link', function () {
    browser.get('https://mail.google.com');
    //contains with login to google mail and get the email notification.
    expect(browser.getTitle('Confirm your email to login your HooQ'));
    element(by.id('confirmation email')).click();
    browser.wait(element.getCurrentUrl('https://woow.hooq.tv'));
    expect(browser.getTitle('I have Verified'));
  });
});


