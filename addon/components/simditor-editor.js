/* global Simditor */
import Component from '@glimmer/component';
import { action, get } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default class SimditorEditorComponent extends Component {
  upload = false;
  tabIndent = true;
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
  toolbarFloat = true;
  toolbarFloatOffset = 0;
  toolbarHidden = false;
  pasteImage = false;
  cleanPaste = false;
  defaultImage = 'assets/passed.png';
  placeholder = 'Type something here';
  locale = 'en-US';
  _editor = null;
  name = 'content';

  @action
  focus(element) {
    Simditor.locale = this.args.locale ? this.args.locale : this.locale;

    let options = {
      upload: this.args.upload ? this.args.upload : this.upload,
      tabIndent: this.args.tabIndent ? this.args.tabIndent : this.tabIndent,
      toolbar: this.args.toolbar ? this.args.toolbar : this.toolbar,
      toolbarFloat: this.args.toolbarFloat
        ? this.args.toolbarFloat
        : this.toolbarFloat,
      toolbarFloatOffset: this.args.toolbarFloatOffset
        ? this.args.toolbarFloatOffset
        : this.toolbarFloatOffset,
      toolbarHidden: this.args.toolbarHidden
        ? this.args.toolbarHidden
        : this.toolbarHidden,
      pasteImage: this.args.pasteImage ? this.args.pasteImage : this.pasteImage,
      cleanPaste: this.args.cleanPaste ? this.args.cleanPaste : this.cleanPaste,
      defaultImage: this.args.defaultImage
        ? this.args.defaultImage
        : this.defaultImage,
      placeholder: this.args.placeholder
        ? this.args.placeholder
        : this.placeholder,
    };

    options.textarea = element;
    let editor = new Simditor(options);

    if (this.args.value) {
      editor.setValue(
        get(this.args.value, this.args.name ? this.args.name : this.name)
      );
    }

    this._editor = editor;

    editor.on('valuechanged', (e) => {
      if (typeof this.args.onValuechanged === 'function') {
        this.args.onValuechanged(e, editor);
      }

      if (typeof this.args.update === 'function') {
        this.args.update(editor.getValue());
      }
    });

    editor.on('selectionchanged', (e) => {
      if (typeof this.args.onSelectionchanged === 'function') {
        this.args.onSelectionchanged(e, editor);
      }
    });

    editor.on('decorate', (e, el) => {
      if (typeof this.args.onDecorate === 'function') {
        this.args.onDecorate(e, el, editor);
      }
    });

    editor.on('undecorate', (e, el) => {
      if (typeof this.args.onUndecorate === 'function') {
        this.args.onUndecorate(e, el, editor);
      }
    });

    editor.on('pasting', (e, pasteContent) => {
      if (typeof this.args.onPasting === 'function') {
        return this.args.onPasting(e, pasteContent, editor);
      }
    });

    editor.on('focus', (e) => {
      if (typeof this.args.onFocus === 'function') {
        this.args.onFocus(e, editor);
      }
    });

    editor.on('blur', (e) => {
      if (typeof this.args.onBlur === 'function') {
        this.args.onBlur(e, editor);
      }
    });

    editor.on('destroy', (e) => {
      if (typeof this.args.onDestroy === 'function') {
        this.args.onDestroy(e, editor);
      }
    });

    scheduleOnce('afterRender', this, this.deferredWork, editor);
  }

  deferredWork(editor) {
    this.args.editor(editor);
  }

  @action
  willDestroyEditor() {
    if (this._editor) {
      this._editor.destroy();
    }
  }
}
