import EmberRouter from '@ember/routing/router';
import config from 'iaflix/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('movies', { path: '/' });
  this.route('movies/details', { path: ':movie_id' });
});
