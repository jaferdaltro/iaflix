import { module, test } from 'qunit';
import { setupTest } from 'iaflix/tests/helpers';

module('Unit | Service | movie-api', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:movie-api');
    assert.ok(service);
  });
});
