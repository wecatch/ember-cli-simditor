import Controller from '@ember/controller';
import { action, get } from '@ember/object';

export default class ApplicationController extends Controller {
  constructor() {
    super(...arguments);
    this.editor = null;
  }

  @action
  setValue() {
    this.editor.setValue('<h1>hello simditor</h1>');
  }

  @action
  getValue() {
    window.alert(this.editor.getValue());
  }
  @action
  sync() {
    window.alert(this.editor.sync());
  }
  @action
  focus() {
    this.editor.focus();
  }
  @action
  blur() {
    this.editor.blur();
  }
  @action
  hidePopover() {
    this.editor.hidePopover();
  }
  @action
  valuechanged(e, editor) {
    console.log('valuechanged event: ' + editor.getValue());
  }

  toolbar = [
    'title',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'fontScale',
    'color',
    'ol', // ordered list
    'ul', // unordered list
    'blockquote',
    'code', // code block
    'table',
    'link',
    'image',
    'hr', // horizontal ruler
    'indent',
    'outdent',
    'alignment',
  ];
}
