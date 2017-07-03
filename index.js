/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-simditor',
  options: {
    nodeAssets: {
      'simple-hotkeys': {
        vendor: {
          include: [
            'lib/hotkeys.js'
          ]
        }
      },
      'simple-module': {
        vendor: {
          include: [
            'lib/module.js'
          ]
        }
      },
      'simple-uploader': {
        vendor: {
          include: [
            'lib/uploader.js'
          ]
        }
      },
      simditor: {
        vendor: {
          include: [
            'lib/simditor.js',
            'styles/simditor.css'
          ]
        }
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/simple-module/lib/module.js');
    this.import('vendor/simple-hotkeys/lib/hotkeys.js');
    this.import('vendor/simple-uploader/lib/uploader.js');
    this.import('vendor/simditor/lib/simditor.js');
    this.import('vendor/simditor/styles/simditor.css');
  }
};
