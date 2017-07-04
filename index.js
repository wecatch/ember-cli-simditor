/* eslint-env node */
'use strict';

const map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-cli-simditor',
  options: {
    nodeAssets: {
      'simple-hotkeys': {
        vendor: {
          include: [
            'lib/hotkeys.js'
          ],
          processTree(tree) {
            return map(tree, '**/*.js', (content) => `if (typeof FastBoot === 'undefined') {\n${content}\n}`);
          }
        }
      },
      'simple-module': {
        vendor: {
          include: [
            'lib/module.js'
          ],
          processTree(tree) {
            return map(tree, '**/*.js', (content) => `if (typeof FastBoot === 'undefined') {\n${content}\n}`);
          }
        }
      },
      'simple-uploader': {
        vendor: {
          include: [
            'lib/uploader.js'
          ],
          processTree(tree) {
            return map(tree, '**/*.js', (content) => `if (typeof FastBoot === 'undefined') {\n${content}\n}`);
          }
        }
      },
      simditor: {
        vendor: {
          include: [
            'lib/simditor.js',
            'styles/simditor.css'
          ],
          processTree(tree) {
            return map(tree, '**/*.js', (content) => `if (typeof FastBoot === 'undefined') {\n${content}\n}`);
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
