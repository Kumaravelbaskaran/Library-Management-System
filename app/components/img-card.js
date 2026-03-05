import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class imgCardComponent extends Component{
  @service cart;

  get isSelected() {
    return this.cart.isSelectedinMap(this.args.book.id);
  }
  get count() {
    return this.cart.count(this.args.book.id);
  }

}

