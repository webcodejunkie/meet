import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  jest.setTimeout(50000);
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  // 1st Scenario START

  test('An event element is collasped by default', async () => {
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .show-details');
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeDefined();
  });

  test('User can collaspe an event to hide its details', async () => {
    await page.click('.event .show-details');
    const eventDetails = await page.$('.event .event-description');
    expect(eventDetails).toBeNull();
  });

  // —END
});