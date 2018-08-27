import {
  getAlpha2Code,
  getName,
  getNames,
  getAlpha2Codes,
} from 'ember-i18n-iso-countries';
import { module, test } from 'qunit';

module('Unit | EN | ember-i18n-iso-countries', function() {
  const lang = "en";

  test('get Alpha-2 code', function(assert) {
    assert.equal(getAlpha2Code("United States", lang), "US", 'nameToAlpha2 United States => US');
    assert.equal(getAlpha2Code("Brazil", lang), "BR", 'nameToAlpha2 Brazil => BR');
  });

  test('get name', function(assert) {
    assert.equal(getName("de", lang), "Germany", 'for de');
    assert.equal(getName("cl", lang), "Chile", 'for cl');
    assert.equal(getName("CL", lang), "Chile", 'for CL');
    assert.equal(getName("cy", lang), "Cyprus", 'for cy');
    assert.equal(getName("af", lang), "Afghanistan", 'for af');
  });

  test('complete (to less)', function(assert) {
    Object.keys(getAlpha2Codes()).forEach((code)=> {
      assert.notEqual(getName(code, lang), undefined, "missing entry for " + code);
    });
  });

  test('complete (too much)', function(assert) {
    Object.keys(getNames(lang)).forEach((code)=> {
      assert.notEqual(getAlpha2Codes()[code], -1, "entry for " + code + " is too much");
    });
  });
});