import Route from '@ember/routing/route';

export default class CheckOutRoute extends Route {
  model() {
    return this.modelFor('index');
}
}
