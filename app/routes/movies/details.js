import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MoviesDetailsRoute extends Route {
  @service store;
  @service movieData;
  async model(params) {
    await this.movieData.loadMovies();
    return this.store.peekRecord('movie', params.movie_id);
  }
}
