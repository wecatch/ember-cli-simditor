/* global Simditor */
import Ember from 'ember';
import layout from '../templates/components/simditor-editor';

const { get, run, merge, getProperties } = Ember;

export default Ember.Component.extend({
    layout,
    upload: false,
    tabIndent: true,
    toolbar: true,
    toolbarFloat: true,
    toolbarFloatOffset: 0,
    toolbarHidden: false,
    pasteImage: false,
    cleanPaste: false,
    params: {},
    defaultImage: 'assets/passed.png',
    placeholder: 'Type something here',
    locale: 'en-US',
    _editor: null,
    name: 'content',

    didReceiveAttrs(){
      let editor = this.get('_editor');
      let value = this.attrs.value.value;
      let propName = this.get('name');
      if(editor && value){
        if(editor.getValue() !== get(value, propName)){
          editor.setValue(get(value, propName));
        }
      }
    },

    didInsertElement(){
        Simditor.locale = this.get('locale');
        let options = merge(
          {
            textarea: this.$('textarea'),
          },
          getProperties(
            this,
            'upload',
            'tabIndent',
            'toolbar',
            'toolbarFloat',
            'toolbarFloatOffset',
            'toolbarHidden',
            'pasteImage',
            'cleanPaste',
            'defaultImage',
            'placeholder'
          )
        );

        let editor = new Simditor(options);
        let value = get(this, 'value');
        if(value){
          let content = get(value, this.get('name'));
          editor.setValue(content);
        }

        this.set('_editor', editor);

        editor.on('valuechanged', (e)=>{
          if(typeof this.attrs.onValuechanged === 'function'){
            this.attrs.onValuechanged(e, editor);
          }

          if(typeof this.attrs.update === 'function'){
            this.attrs.update(editor.getValue());
          }
        });

        editor.on('selectionchanged', (e)=>{
            if(typeof this.attrs.onSelectionchanged === 'function'){
                this.attrs.onSelectionchanged(e, editor);
            }
        });

        editor.on('decorate', (e, el)=>{
            if(typeof this.attrs.onDecorate === 'function'){
                this.attrs.onDecorate(e, el, editor);
            }
        });

        editor.on('undecorate', (e, el)=>{
            if(typeof this.attrs.onUndecorate === 'function'){
                this.attrs.onUndecorate(e, el, editor);
            }
        });

        editor.on('pasting', (e, pasteContent)=>{
            if(typeof this.attrs.onPasting === 'function'){
                return this.attrs.onPasting(e, pasteContent, editor);
            }
        });

        editor.on('focus', (e)=>{
            if(typeof this.attrs.onFocus === 'function'){
                this.attrs.onFocus(e, editor);
            }
        });

        editor.on('blur', (e)=>{
            if(typeof this.attrs.onBlur === 'function'){
                this.attrs.onBlur(e, editor);
            }
        });

        editor.on('destroy', (e)=>{
            if(typeof this.attrs.onDestroy === 'function'){
                this.attrs.onDestroy(e, editor);
            }
        });

        run.scheduleOnce('afterRender', this, function(editor){
            if(this.attrs.editor){
                this.attrs.editor.update(editor);
            }
        }, editor);
    },

    willDestroy(){
      let editor = this.get('editor');
      if(editor){
        editor.destroy();
      }
      this._super(...arguments);
    }
});
