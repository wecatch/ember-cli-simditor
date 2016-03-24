# Ember-cli-simditor

[![Build Status](https://travis-ci.org/wecatch/ember-cli-simditor.svg?branch=master)](https://travis-ci.org/wecatch/ember-cli-simditor)

Ember component wrapper for [simditor](https://github.com/mycolorway/simditor).


# Getting Started

## Installation

In your ember-cli project, install this addon from npm 

```
ember install ember-cli-simditor --save-dev

```

or install the latest version from github

```
ember install git+https://github.com/wecatch/ember-cli-simditor --save-dev

```


## Usage

```
    {{simditor-editor update=(action (mut value)) editor=(mut editor) }}

```

## API

- [Options](http://simditor.tower.im/docs/doc-config.html)
- [Methods](http://simditor.tower.im/docs/doc-method.html)
- [Events](http://simditor.tower.im/docs/doc-event.html)
> In this addon , `on` prefix must be used for all events name. For sample, valuechanged => OnValuechanged

### 

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

