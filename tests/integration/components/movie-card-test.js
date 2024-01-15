import { module, test } from 'qunit';
import { setupRenderingTest } from 'iaflix/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movie-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MovieCard />`);

    assert.dom().hasText('More Details');

    // Template block usage:
    await render(hbs`
      <MovieCard>
        template block text
      </MovieCard>
    `);

    assert.dom().hasText('More Details');
  });
});
