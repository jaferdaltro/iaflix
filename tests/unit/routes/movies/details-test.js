import { module, test } from 'qunit';
import { setupTest } from 'iaflix/tests/helpers';

module('Unit | Route | movies/details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:movies/details');
    assert.ok(route);
  });
});