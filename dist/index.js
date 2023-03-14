import locales from "./locales";
import acceptLanguage from "accept-language";
acceptLanguage.languages(locales);
/**
 * Read data.
 * @param {string} locale
 */
let of = (locale) => {
    locale = locale.toLowerCase();
    const counties = require(`./${locale}/counties`).default;
    const zipcodes = require(`./${locale}/zipcodes`).default;
    return {
        counties,
        zipcodes,
    };
};
/**
 * Construct response format.
 * @param {Object} options
 */
let data = ({ counties, zipcodes }) => {
    return {
        counties,
        zipcodes,
    };
};
export default (locale = "*") => {
    const mLocale = acceptLanguage.get(locale);
    if (mLocale) {
        return data(of(mLocale));
    }
    else {
        throw Error("locale not supported");
    }
};
