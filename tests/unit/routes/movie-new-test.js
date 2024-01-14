import { module, test } from 'qunit';
import { setupTest } from 'iaflix/tests/helpers';

module('Unit | Route | movie-new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:movie-new');
    assert.ok(route);
  });
});
