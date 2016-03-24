/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-simditor',
  included: function(app){
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this._super.included(app);
    app.import(app.bowerDirectory+'/simple-module/lib/module.js');
    app.import(app.bowerDirectory+'/simple-hotkeys/lib/hotkeys.js');
    app.import(app.bowerDirectory+'/simple-uploader/lib/uploader.js');
    app.import(app.bowerDirectory+'/simditor/lib/simditor.js');
    app.import(app.bowerDirectory+'/simditor/styles/simditor.css');
  }
};
