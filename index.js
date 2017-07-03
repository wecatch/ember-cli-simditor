/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-simditor',
  options: {
    nodeAssets: {
      'simple-hotkeys': {
        vendor: {
          include: [
            'lib/hotkeys.js'
          ],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      },
      'simple-module': {
        vendor: {
          include: [
            'lib/module.js'
          ],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      },
      'simple-uploader': {
        vendor: {
          include: [
            'lib/uploader.js'
          ],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      },
      simditor: {
        vendor: {
          include: [
            'lib/simditor.js',
            'styles/simditor.css'
          ],
          processTree(input) {
            return fastbootTransform(input);
          }
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
