import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MoviesRoute extends Route {
  @service store;
  @service movieData;
  async model() {
    await this.movieData.loadMovies();
    return this.store.peekAll('movie');
  }
}
