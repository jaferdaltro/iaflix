import { module, test } from 'qunit';
import { setupRenderingTest } from 'iaflix/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movie-new', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MovieNew />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <MovieNew>
        template block text
      </MovieNew>
    `);

    assert.dom().hasText('template block text');
  });
});
