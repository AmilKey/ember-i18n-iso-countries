import {
  getName,
  getAlpha2Codes,
  getNames
} from 'ember-i18n-iso-countries';
import { module, test } from 'qunit';

module('Unit | FI | ember-i18n-iso-countries', function() {
  const lang = 'fi';

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
});
