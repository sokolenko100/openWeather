const getLocales = jest.fn().mockImplementation(() => [{ languageCode: 'en' }]);
const findBestAvailableLanguage = jest.fn().mockImplementation(() => ({ languageTag: 'en-En' }));

export { getLocales, findBestAvailableLanguage };
