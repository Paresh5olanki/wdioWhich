const review = require("../../pageObject/reviewsTelevisionPage.js");
const testData = require("../../testData.json")
const general = require("../../helpers/general-actions.js")

describe('which? television review', async () => {
  beforeEach(async () => {
    await browser.url(review.televisionReviewUrl);
    expect(browser).toHaveTitle(review.pageTitle);
  });

  it('Should see correct search results', async () => {
    await general.assertPageResultCount(
      review.elements.searchResults,
      testData.searchResultCount)
  })

  it('Best Buy filter should show user incentives to join', async () => {
    await review.clickFilterAccordion(review.elements.bestBuyFilterDesktop)
    await review.assertFilterSignUpModal()
  })

  it('Should have 4 category headings', async () => {
    const categoryHeader = await $$(review.elements.categoryHeader);
    await expect(categoryHeader).toHaveChildren(testData.categoryHeaderCount);
  })

  // ADDITIONAL TESTS
  // it('Should show correct page when clicking on a result', async () => {
  // })

  // it('Shoud show correct results when using filter options', async () => {
  // })
});