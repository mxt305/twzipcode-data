import locales from "./locales"
import acceptLanguage from "accept-language"
import { TwZipcodeData } from "./type";

acceptLanguage.languages(locales);

/**
 * Read data.
 * @param {string} locale
 */
let of = (locale: string): TwZipcodeData => {
  locale = locale.toLowerCase();
  const counties = require(`./${locale}/counties`).default
  const zipcodes = require(`./${locale}/zipcodes`).default

  return {
    counties,
    zipcodes,
  }
}

/**
 * Construct response format.
 * @param {Object} options
 */
let data = ({ counties, zipcodes }:TwZipcodeData) => {
  return {
    counties,
    zipcodes,
  }
}

export default (locale = "*") => {
  const mLocale = acceptLanguage.get(locale)
  if(mLocale){
    return data(of(mLocale))
  } else {
    throw Error("locale not supported")
  }
};
