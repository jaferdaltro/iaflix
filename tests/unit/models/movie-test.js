import { module, test } from 'qunit';

import { setupTest } from 'iaflix/tests/helpers';

module('Unit | Model | movie', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('movie', {});
    assert.ok(model);
  });
});
