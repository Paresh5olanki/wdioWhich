const review = require("../../pageObject/reviewsTelevisionPage.js");
const testData = require("../../testData.json")

describe('which? television review', async () => {
  beforeEach(async () => {
    await browser.url(review.televisionReviewUrl);
    expect(browser).toHaveTitle(review.pageTitle);
  });

  it('Should see correct search results', async () => {
    const searchResults = await $$(review.elements.searchResults);
    await expect(searchResults).toBeElementsArrayOfSize(testData.searchResultCount);
  })

  it('Best Buy filter should show user incentives to join', async () => {
    const bestBuyFilterAccordion = await $(review.elements.bestBuyFilterAccordionDesktop);
    await bestBuyFilterAccordion.scrollIntoView();
    await bestBuyFilterAccordion.click();

    const tryWhichBtn = await $(review.elements.signUpModal.tryWhichBtn);
    await expect(tryWhichBtn).toBePresent();

    const memberRecommendation = await $(review.elements.signUpModal.memberRecommendation);
    await expect(memberRecommendation).toHaveText(review.elements.signUpModal.memberRecommendationTxt);

    const signUpModal = await $(review.elements.signUpModal.locator);
    await expect(signUpModal).toBePresent();
  })

  it('Should have 4 category headings', async () => {
    const categoryHeader = await $$(review.elements.categoryHeader);
    await expect(categoryHeader).toHaveChildren(testData.categoryHeaderCount);
  })

  // it('Should show correct page when clicking on a result', async () => {
  // })

  // it('Shoud show correct results when using filter options', async () => {
  // })
});