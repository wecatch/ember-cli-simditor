import Ember from 'ember';
import layout from '../templates/components/simditor-editor';

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
    defaultImage: 'assets/passed.png',
    placeholder: 'Type something here',
    didInsertElement(){
        let self = this;
        let options = {
            textarea: self.$('textarea'),
            upload: self.upload,
            tabIndent: self.tabIndent,
            toolbar: self.toolbar,
            toolbarFloat: self.toolbarFloat,
            toolbarFloatOffset: self.toolbarFloatOffset,
            toolbarHidden: self.toolbarHidden,
            pasteImage: self.pasteImage,
            cleanPaste: self.cleanPaste,
            defaultImage: self.defaultImage,
            placeholder: self.placeholder,
            params: self.params || {}
        }

        let editor = new Simditor(options);
        if(typeof this.value === 'string'){
            editor.setValue(this.value);
        }

        editor.on('valuechanged', (e)=>{
            if(typeof this.attrs.onValuechanged == 'function'){
                this.attrs.onValuechanged(e, editor);
            }

            if(typeof this.attrs.update == 'function'){
                this.attrs.update(editor.getValue());
            }
        });

        editor.on('selectionchanged', (e)=>{
            if(typeof this.attrs.onSelectionchanged == 'function'){
                this.attrs.onSelectionchanged(e, editor);
            }
        });

        editor.on('decorate', (e, el)=>{
            if(typeof this.attrs.onDecorate == 'function'){
                this.attrs.onDecorate(e, el, editor);
            }
        });

        editor.on('undecorate', (e, el)=>{
            if(typeof this.attrs.onUndecorate == 'function'){
                this.attrs.onUndecorate(e, el, editor);
            }
        });

        editor.on('pasting', (e, pasteContent)=>{
            if(typeof this.attrs.onPasting == 'function'){
                return this.attrs.onPasting(e, pasteContent, editor);
            }
        });

        editor.on('focus', (e)=>{
            if(typeof this.attrs.onFocus == 'function'){
                this.attrs.onFocus(e, editor);
            }
        });

        editor.on('blur', (e)=>{
            if(typeof this.attrs.onBlur == 'function'){
                this.attrs.onBlur(e, editor);
            }
        });

        editor.on('destroy', (e)=>{
            if(typeof this.attrs.onDestroy == 'function'){
                this.attrs.onDestroy(e, editor);
            }
        });

        Ember.run.scheduleOnce('afterRender', this, function(editor){
            if(this.attrs.editor){
                this.attrs.editor.update(editor);
            }
        }, editor);
    },
    willDestroy(){
        this._super(...arguments);
        this && this.get('editor') && this.get('editor').destroy();
    }
});
