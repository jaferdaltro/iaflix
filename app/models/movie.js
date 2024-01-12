import Model, { attr } from '@ember-data/model';

export default class MovieModel extends Model {
  @attr('string') title;
  @attr('string') release_date;
  @attr('string') runtime;
  @attr('number') genre;
  @attr('string') parental_rating;
  @attr('string') plot;
  @attr('string') rating;
}
