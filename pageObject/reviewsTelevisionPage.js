module.exports = {
    televisionReviewUrl: 'https://www.which.co.uk/reviews/televisions',
    pageTitle: 'https://www.which.co.uk/reviews/televisions',
    elements: {
        searchResults: '[data-test-element=product-list] li[itemprop="itemListElement"]',
        bestBuyFilterDesktop: '[data-which-id="desktop-and-tablet-filters"] section[data-testid="accordion-item"]',
        categoryHeader: '[data-test-element="tabs-container"] ul[data-test-element="tab"]',
        signUpModal: {
            locator: '[data-which-id="sign-up-cta"]',
            tryWhichBtn: '[data-which-id="filters-CTA"]',
            memberRecommendation: '[data-which-id="desktop-and-tablet-filters"] p[data-which-id="test-results-description"]',
            memberRecommendationTxt: 'Member exclusive recommendations based on our independent lab test results'
        }
    },

    clickFilterAccordion: async (selector) => {
        const filter = await $(selector);
        await filter.scrollIntoView();
        await filter.click();
    },

    assertFilterSignUpModal: async function() {
        const tryWhichBtn = await $(this.elements.signUpModal.tryWhichBtn);
        await expect(tryWhichBtn).toBePresent();
        const memberRecommendation = await $(this.elements.signUpModal.memberRecommendation);
        await expect(memberRecommendation).toHaveText(this.elements.signUpModal.memberRecommendationTxt);
        const signUpModal = await $(this.elements.signUpModal.locator);
        await expect(signUpModal).toBePresent();
    }
}