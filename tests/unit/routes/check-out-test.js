import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | checkOut', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:check-out');
    assert.ok(route);
  });
});
