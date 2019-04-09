describe('Unit test for Home page title and headers', function () {
  let page;

  before (async function () {
    page = await browser.newPage();
    await page.goto('http://localhost:3030');
  });

  after (async function () {
    await page.close();
  })

  it('Test1: should have the correct page title', async function () {
    expect(await page.title()).to.eql('Mai_Thai Kitchen');
  });

  it('Test2: should have a heading', async function () {
    const HEADING_SELECTOR = 'h1';
    let heading;

    await page.waitFor(HEADING_SELECTOR);
    heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);

    expect(heading).to.eql('Welcome to Mai_Thai Kitchen');
  });

/*  it('should have a single content section', async function () {
    const BODY_SELECTOR = '.main-content';

    await page.waitFor(BODY_SELECTOR);

    expect(await page.$$(BODY_SELECTOR)).to.have.lengthOf(1);
  });*/
});
