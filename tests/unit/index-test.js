import {
  toAlpha2,
  toAlpha3,
  alpha2ToAlpha3,
  alpha3ToAlpha2,
  alpha3ToNumeric,
  alpha2ToNumeric,
  getNumericCodes,
  getAlpha2Code,
  getAlpha2Codes,
  getAlpha3Codes,
  numericToAlpha3,
  numericToAlpha2,
  getNames,
  getName
} from 'ember-i18n-iso-countries';
import { module, test } from 'qunit';

module('Unit | ember-i18n-iso-countries', function() {
  test('Alpha-2 to Alpha-2 code', function(assert) {
    assert.equal(toAlpha2("SG"), "SG", 'toAlpha2 SG => SG');
  });

  test('Alpha-2 to Alpha-3 code', function(assert) {
    assert.equal(toAlpha3(true), undefined, 'toAlpha3 true => undefined');
    assert.equal(toAlpha3("XX"), undefined, 'toAlpha3 XX => undefined');
    assert.equal(toAlpha3("SG"), "SGP", 'toAlpha3 SG => SGP');
    assert.equal(alpha2ToAlpha3("SG"), "SGP", 'alpha2ToAlpha3 SG => SGP');
  });

  test('Alpha-3 to Alpha-3 code', function(assert) {
    assert.equal(toAlpha3("SGP"), "SGP", 'toAlpha2 SGP => SGP');
  });

  test('Alpha-3 to Alpha-2 code', function(assert) {
    assert.equal(toAlpha2(true), undefined, 'toAlpha2 true => undefined');
    assert.equal(toAlpha2("XXX"), undefined, 'toAlpha2 XXX => undefined');
    assert.equal(toAlpha2("DEU"), "DE", 'toAlpha2 DEU => DE');
    assert.equal(alpha3ToAlpha2("DEU"), "DE", 'alpha3ToAlpha2 DEU => DE');
  });

  test('Alpha-3 to Numeric code', function(assert) {
    assert.equal(alpha3ToNumeric("SWE"), 752, 'alpha3ToNumeric SWE => 752');
    assert.equal(alpha3ToNumeric("DJI"), 262, 'alpha3ToNumeric DJI => 262');
  });

  test('Alpha-2 to Numeric code', function(assert) {
    assert.equal(alpha2ToNumeric("SE"), 752, 'alpha2ToNumeric SE => 752');
    assert.equal(alpha2ToNumeric("DJ"), 262, 'alpha2ToNumeric DJ => 262');
  });

  test('Numeric to Alpha-2 code', function(assert) {
    assert.equal(toAlpha2("276"), "DE", "toAlpha2 '276' => DE");
    assert.equal(toAlpha2("004"), "AF", "toAlpha2 '004' => AF");
    assert.equal(toAlpha2(276), "DE", "toAlpha2 276 => DE");
    assert.equal(numericToAlpha2("276"), "DE", "numericToAlpha2 '276' => DE");
    assert.equal(numericToAlpha2("004"), "AF", "numericToAlpha2 '004' => AF");
    assert.equal(numericToAlpha2(276), "DE", "numericToAlpha2 276 => DE");
  });

  test('Numeric to Alpha-3 code', function(assert) {
    assert.equal(toAlpha3("276"), "DEU", "toAlpha3 '276' => DEU");
    assert.equal(toAlpha3("004"), "AFG", "toAlpha3 '004' => AFG");
    assert.equal(toAlpha3(276), "DEU", "toAlpha3 276 => DEU");
    assert.equal(numericToAlpha3("276"), "DEU", "numericToAlpha3 '276' => DEU");
    assert.equal(numericToAlpha3("004"), "AFG", "numericToAlpha3 '004' => AFG");
    assert.equal(numericToAlpha3(276), "DEU", "numericToAlpha3 276 => DEU");
  });

  test('getAlpha2Codes', function(assert) {
    assert.equal(Object.keys(getAlpha2Codes()).length, 249, 'length');
  });

  test('getAlpha3Codes', function(assert) {
    assert.equal(Object.keys(getAlpha3Codes()).length, 249, 'length');
  });

  test('getNumericCodes', function(assert) {
    assert.equal(Object.keys(getNumericCodes()).length, 249, 'length');
  });

  test('getAlpha2Code', function(assert) {
    assert.equal(getAlpha2Code("XXX", "de"), undefined, 'missing name');
    assert.equal(getAlpha2Code("Deutschland", "xx"), undefined, 'missing land');
  });

  test('unsupported language', function(assert) {
    const lang = "unsupported";
    assert.equal(getName("de", lang), undefined, 'get name');
    assert.equal(Object.keys(getNames(lang)).length, 0, 'get names');
  });
});
