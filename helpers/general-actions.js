const testData = require("../testData.json")

module.exports = {
    assertPageResultCount: async (selector, count) => {
        const locatedElement = await $$(selector);
        await expect(locatedElement).toBeElementsArrayOfSize(count);
    }
}
