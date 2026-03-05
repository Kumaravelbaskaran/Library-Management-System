import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | side-Panel', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:side-panel');
    assert.ok(route);
  });
});
