# Ember-i18n-iso-countries
Ember.js Addon Wrapper for the [i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries).

i18n for ISO 3166-1 country codes. We support Alpha-2, Alpha-3 and Numeric codes from http://en.wikipedia.org/wiki/ISO_3166-1#Officially_assigned_code_elements

## Code to Country

### Get the name of a country by it's ISO 3166-1 Alpha-2, Alpha-3 or Numeric code

`````javascript
import { getName } from 'ember-i18n-iso-countries';
console.log("US (Alpha-2) => " + getName("US", "en")); // United States
console.log("US (Alpha-2) => " + getName("US", "de")); // Vereinigte Staaten von Amerika
console.log("USA (Alpha-3) => " + getName("USA", "en")); // United States
console.log("USA (Numeric) => " + getName("840", "en")); // United States
`````

### Get all names by their ISO 3166-1 Alpha-2 code

`````javascript
import { getNames } from 'ember-i18n-iso-countries';
console.log(getNames("en")); // { 'AF': 'Afghanistan', 'AL': 'Albania', [...], 'ZM': 'Zambia', 'ZW': 'Zimbabwe' }
`````

### Supported languages

* `en`: english
* `de`: german
* `nl`: dutch
* `fr`: french
* `sv`: swedish
* `es`: spanish
* `pt`: portuguese
* `fi`: finnish

### Country to Code

`````javascript
import { getAlpha2Code } from 'ember-i18n-iso-countries';
console.log("United States => " + getAlpha2Code('United States', 'en')); // US
`````

## Codes

### Convert Alpha-3 to Alpha-2 code

`````javascript
import { alpha3ToAlpha2 } from 'ember-i18n-iso-countries';
console.log("USA (Alpha-3) => " + alpha3ToAlpha2("USA") + " (Alpha-2)"); // United States
`````

### Convert Numeric to Alpha-2 code

`````javascript
import { numericToAlpha2 } from 'ember-i18n-iso-countries';
console.log("840 (Numeric) => " + numericToAlpha2("840") + " (Alpha-2)"); // United States
`````

### Convert Alpha-2 to Alpha-3 coe
`````javascript
import { alpha2ToAlpha3 } from 'ember-i18n-iso-countries';
console.log("DE (Alpha-2) => " + alpha2ToAlpha3("DE") + " (Alpha-3)"); // Germany
`````

### Convert Numeric to Alpha-3 code

`````javascript
import { numericToAlpha3 } from 'ember-i18n-iso-countries';
console.log("840 (Numeric) => " + numericToAlpha3("840") + " (Alpha-3)"); // United States
`````

### Convert Alpha-3 to Numeric code

`````javascript
import { alpha3ToNumeric } from 'ember-i18n-iso-countries';
console.log(alpha3ToNumeric("SWE")); // 752
`````

### Convert Alpha-2 to Numeric code

`````javascript
import { alpha2ToNumeric } from 'ember-i18n-iso-countries';
console.log(alpha2ToNumeric("SE")); // 752
`````

### Get all Alpha-2 codes

`````javascript
import { getAlpha2Codes } from 'ember-i18n-iso-countries';
console.log(getAlpha2Codes()); // { 'AF': 'AFG', 'AX': 'ALA', [...], 'ZM': 'ZMB', 'ZW': 'ZWE' }
`````

### Get all Alpha-3 codes

`````javascript
import { getAlpha3Codes } from 'ember-i18n-iso-countries';
console.log(getAlpha3Codes()); // { 'AFG': 'AF', 'ALA': 'AX', [...], 'ZMB': 'ZM', 'ZWE': 'ZW' }
`````

### Get all Numeric codes

`````javascript
import { getNumericCodes } from 'ember-i18n-iso-countries';
console.log(getNumericCodes()); // { '4': 'AF', '8': 'AL', [...], '887': 'YE', '894': 'ZM' }
`````
