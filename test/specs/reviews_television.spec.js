const review = require("../../pageObject/reviews.js");

describe('which? television review', async () => {
    beforeEach(async  () => {
        await browser.url(review.url)
        expect(browser).toHaveTitle(review.pageTitle)
      });

    it('Should see 10 search results', async () => {
        const search = await $(review.elements.searchResults);
        expect(search).toBeDisplayed();
        const searchResults = await $$(review.elements.searchResultsCount);
        expect(searchResults).toBeElementsArrayOfSize(10);
      })

    it.only('Best Buy filter should be disabled and promote joining', async () => {
        const bestBuyFilter = await $('[data-testid="accordion-item"]');
        browser.elementClick(bestBuyFilter)
        await bestBuyFilter.scrollIntoView();
        await bestBuyFilter.click();

        const tryWhich = await $('[data-which-id="filters-CTA"]');
        expect(tryWhich).toBeDisplayed()

        const recommend = await $('[data-which-id="test-results-description"]')
        expect(recommend).toHaveText('Member exclusive recommendations based on our independent lab test results')

        const signUp = await $('[data-which-id="sign-up-cta"]')
        expect(signUp).toBeDisplayed()
      })

});