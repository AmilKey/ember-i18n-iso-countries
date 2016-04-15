import { CODES } from './codes';
import DE from './langs/de';
import EN from './langs/en';
import ES from './langs/es';
import FI from './langs/fi';
import FR from './langs/fr';
import NL from './langs/nl';
import PT from './langs/pt';
import SV from './langs/sv';

const langs = {
  "de" : DE,
  "en" : EN,
  "fr" : FR,
  "nl" : NL,
  "sv" : SV,
  "es" : ES,
  "pt" : PT,
  "fi" : FI
};


/*
 * All codes map to ISO 3166-1 alpha-2
 */
const alpha2 = {};
const alpha3 = {};
const numeric = {};
const invertedNumeric = {};

CODES.forEach((codeInformation)=> {
  const s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3[s[1]] = s[0];
  numeric[parseInt(s[2], 10)] = s[0];
  invertedNumeric[s[0]] = parseInt(s[2], 10);
});

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
export function alpha3ToAlpha2(code) {
  return alpha3[code];
}

/*
 * @param code Alpha-2 code
 * @return Alpha-3 code or undefined
 */
export function alpha2ToAlpha3(code) {
  return alpha2[code];
}

/*
 * @param code Alpha-3 code
 * @return Numeric code or undefined
 */
export function alpha3ToNumeric(code) {
  return invertedNumeric[alpha3ToAlpha2(code)];
}

/*
 * @param code Alpha-2 code
 * @return Numeric code or undefined
 */
export function alpha2ToNumeric(code) {
  return invertedNumeric[code];
}

/*
 * @param code Numeric code
 * @return Alpha-3 code or undefined
 */
export function numericToAlpha3(code) {
  return alpha2ToAlpha3(numeric[parseInt(code, 10)]);
}

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
export function numericToAlpha2(code) {
  return numeric[parseInt(code, 10)];
}

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-3
 */
export function toAlpha3(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha3(code);
    }
    if(code.length === 2) {
      return alpha2ToAlpha3(code.toUpperCase());
    }
    if (code.length === 3) {
      return code.toUpperCase();
    }
  }
  if (typeof code === "number") {
    return numericToAlpha3(code);
  }
  return undefined;
}

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-2
 */
export function toAlpha2(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha2(code);
    }
    if (code.length === 2) {
      return code.toUpperCase();
    }
    if(code.length === 3) {
      return alpha3ToAlpha2(code.toUpperCase());
    }
  }
  if (typeof code === "number") {
    return numericToAlpha2(code);
  }
  return undefined;
}

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @param lang language for country name
 * @return name or undefined
 */
export function getName(code, lang) {
  try {
    const l = langs[lang.toLowerCase()];
    return l[toAlpha2(code)];
  } catch (err) {
    return undefined;
  }
}

/*
 * @param lang language for country name
 * @return hash
 */
export function getNames(lang) {
  return langs[lang.toLowerCase()] || {};
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
export function getAlpha2Code(name, lang) {
  try {
    let p;
    const codenames = langs[lang.toLowerCase()];
    for (p in codenames) {
      if (codenames.hasOwnProperty(p)) {
        if (codenames[p].toLowerCase() === name.toLowerCase()) {
          return p;
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

/*
 * @return hash (alpha-2 => alpha-3)
 */
export function getAlpha2Codes() {
  return alpha2;
}

/*
 * @return hash (alpha-3 => alpha-2)
 */
export function getAlpha3Codes() {
  return alpha3;
}

/*
 * @return hash (numeric => alpha-2)
 */
export function getNumericCodes() {
  return numeric;
}