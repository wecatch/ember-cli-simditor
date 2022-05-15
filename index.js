'use strict';

module.exports = {
  name: require('./package').name,
  included: function () {
    this.import('node_modules/simple-module/lib/module.js');
    this.import('node_modules/simple-hotkeys/lib/hotkeys.js');
    this.import('node_modules/simple-uploader/lib/uploader.js');
    this.import('node_modules/dompurify/dist/purify.js');
    this.import('node_modules/simditor/lib/simditor.js');
    this.import('node_modules/simditor/styles/simditor.css');
    return this._super.included.apply(this, arguments);
  },
};
