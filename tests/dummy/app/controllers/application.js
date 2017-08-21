import Ember from 'ember';

const { Logger } = Ember;

export default Ember.Controller.extend({
  actions: {
    setValue(){
      this.get('editor').setValue('<h1>hello simditor</h1>');
    },
    getValue(){
      window.alert(this.get('editor').getValue());
    },
    sync(){
      window.alert(this.get('editor').sync());
    },
    focus(){
      this.get('editor').focus();
    },
    blur(){
      this.get('editor').blur();
    },
    hidePopover(){
      this.get('editor').hidePopover();
    },
    valuechanged(e, editor){
      Logger.log('valuechanged event: ' + editor.getValue());
    }
  },
  toolbar: [
    'title',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'fontScale',
    'color',
    'ol',             // ordered list
    'ul',            // unordered list
    'blockquote',
    'code',           // code block
    'table',
    'link',
    'image',
    'hr',             // horizontal ruler
    'indent',
    'outdent',
    'alignment',
  ]
});
