import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class CartService extends Service {
  @tracked selectedBooks = new Map();
   @action
    insertBook(id) {
      let updated = new Map(this.selectedBooks);
      if (updated.has(id)) {
        updated.set(id, updated.get(id) + 1);
      } else {
        updated.set(id, 1);
      }
      this.selectedBooks = updated;
      console.log(this.selectedBooks);
    }
    removeBook = (id) => {
    let updated = new Map(this.selectedBooks);
    updated.set(id, updated.get(id) - 1);

    this.selectedBooks = updated;
  };
    isSelectedinMap(id) {
    return this.selectedBooks.has(id) && this.selectedBooks.get(id) > 0;
  }

  count(id) {
    return this.selectedBooks.get(id) || 0;
  }

}
