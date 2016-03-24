import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('simditor-editor', 'Integration | Component | simditor editor', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.render(hbs`{{simditor-editor value='hello emberjs' editor=(mut editor) }}`);
  assert.notEqual(typeof this.get('editor'), 'undefined');
  assert.notEqual(this.get('editor'), null);
  assert.equal(this.$('.simditor-body').html().trim(), '<p>hello emberjs</p>');
});
