import {
  getName,
  getAlpha2Codes,
  getNames
} from 'ember-i18n-iso-countries';
import { module, test } from 'qunit';

module('Unit | DE | ember-i18n-iso-countries');

const lang = 'de';

test('get name', function(assert) {
  assert.equal(getName("de", lang), "Deutschland", 'for de');
  assert.equal(getName("cl", lang), "Chile", 'for cl');
  assert.equal(getName("CL", lang), "Chile", 'for CL');
  assert.equal(getName("cy", lang), "Zypern", 'for cy');
  assert.equal(getName("af", lang), "Afghanistan", 'for af');
});

test('complete (to less)', function(assert) {
  Object.keys(getAlpha2Codes()).forEach(function(code) {
    assert.notEqual(getName(code, lang), undefined, "missing entry for " + code);
  });
});

test('complete (too much)', function(assert) {
  Object.keys(getNames(lang)).forEach(function(code) {
    assert.notEqual(getAlpha2Codes()[code], -1, "entry for " + code + " is too much");
  });
});