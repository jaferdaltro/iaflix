import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @action
  handleInput(event) {
    console.log(event);
    this.args.onSearch(event.target.value);
  }

  @action
  handleSearch() {
    this.args.onSearch();
  }
}
