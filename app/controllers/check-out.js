import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CheckOutController extends Controller {
  @service cart;
  get cartItems() {
    let reuslt = [];
    for(let i = 0; i< this.model.length; i++){
      let current = this.model[i];
      if(this.cart.selectedBooks.has(current.id)){
        let temp = {
          id: current.id,
          img: current.img,
          desc:current.desc,
          count: this.cart.selectedBooks.get(current.id)
        }
        reuslt.push(temp);
      }

    }
     return reuslt;
}
}
