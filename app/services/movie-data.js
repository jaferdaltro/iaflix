import Service, { inject as service } from '@ember/service';

export default class MovieDataService extends Service {
  @service store;

  async loadMovies() {
    let response = await fetch(`http://localhost:3000/api/v1/movies`);
    let data = await response.json();

    const addMovieStore = (movie) => {
      let existingMovie = this.store.peekRecord('movie', movie.id);
      if (!existingMovie) {
        return this.store.createRecord('movie', {
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          runtime: movie.runtime,
          genre: movie.genre,
          parental_rating: movie.parental_rating,
          plot: movie.plot,
          rating: movie.rating,
        });
      } else {
        return existingMovie;
      }
    };
    return data.map(addMovieStore);
  }
}
