import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | simditor-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('model', {'content': 'hello emberjs'});
    this.set('editor', null);
    this.set('updateEditor', (editor)=>{
      this.set('editor', editor);
    });
    await render(hbs`<SimditorEditor @value={{this.model}} @editor={{this.updateEditor}} />`);

    assert.ok(this.editor != null);
    assert.equal(this.element.querySelector('.simditor-body').innerHTML.trim(), '<p>hello emberjs</p>');
  });
});
