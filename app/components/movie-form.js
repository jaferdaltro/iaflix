import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MovieNewComponent extends Component {
  @service movieApi;
  @service router;

  @tracked title = '';
  @tracked releaseDate = '';
  @tracked runtime = '';
  @tracked genre = '';
  @tracked parentalRating = '';
  @tracked plot = '';
  @tracked rating = 0;

  @action
  async onSubmit(event) {
    event.preventDefault();
    const data = {
      title: this.title,
      release_date: this.releaseDate,
      runtime: this.runtime,
      genre: this.genre,
      parental_rating: this.parentalRating,
      plot: this.plot,
      rating: this.rating,
    };
    try {
      const newMovie = this.movieApi.createMovie(data);
      console.log('Movie created successfully:', newMovie);
      this.router.transitionTo('movies');
    } catch (error) {
      console.error('Error creating movie:', error);
    }
  }

  get disableSubmit() {
    const { title, releaseDate } = this;
    return !(title && releaseDate);
  }
}
