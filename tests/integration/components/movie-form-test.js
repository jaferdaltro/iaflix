import { module, test } from 'qunit';
import { setupRenderingTest } from 'iaflix/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movie-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MovieForm />`);

    assert
      .dom()
      .hasText(
        'Create Movie Title Genre Release Date Runtime(e.g., 30 min) Parental Rating Create Movie',
      );

    // Template block usage:
    await render(hbs`
      <MovieForm>
        template block text
      </MovieForm>
    `);

    assert
      .dom()
      .hasText(
        'Create Movie Title Genre Release Date Runtime(e.g., 30 min) Parental Rating Create Movie',
      );
  });
});
