# Ember-cli-simditor

[![Build Status](https://travis-ci.org/wecatch/ember-cli-simditor.svg?branch=master)](https://travis-ci.org/wecatch/ember-cli-simditor)
[![Downloads](https://img.shields.io/npm/dt/ember-cli-simditor.svg)](https://www.npmjs.com/package/ember-cli-simditor)
[![Version](https://img.shields.io/npm/v/ember-cli-simditor.svg)](https://www.npmjs.com/package/ember-cli-simditor)

Ember component wrapper for [simditor](https://github.com/mycolorway/simditor).

# Changes

## 0.0.7

Different from previous version, you must wrap content in object. See [issue 6](https://github.com/wecatch/ember-cli-simditor/issues/6) for why.

# Getting Started

## Installation

In your ember-cli project, install this addon from npm 

```
ember install ember-cli-simditor
```

or install the latest version from github

```
ember install git+https://github.com/wecatch/ember-cli-simditor
```


## Usage

```
{{simditor-editor value=model update=(action (mut model.content)) editor=(mut editor) onValuechanged=(action "valuechanged") }}
```

You must wrap content in one object, that means model object must have one property called `content` for component to render, visit [issue 6](https://github.com/wecatch/ember-cli-simditor/issues/6) for why.

By default the content property name is `content`, you can custome the property name with `name` argument


```
{{simditor-editor value=model update=(action (mut model.html)) editor=(mut editor) onValuechanged=(action "valuechanged") name='html' }}
```

## Locale

English by default

```
{{simditor-editor update=(action (mut model.content)) editor=(mut editor) }}
```

Chinese

```
{{simditor-editor update=(action (mut model.content)) editor=(mut editor) locale='zh-CN' }}
```


## API

- [Options](http://simditor.tower.im/docs/doc-config.html)
- [Methods](http://simditor.tower.im/docs/doc-method.html)
- [Events](http://simditor.tower.im/docs/doc-event.html)


In this addon , `on` prefix must be used for all events name. For sample, valuechanged => OnValuechanged.

- valuechanged => onValuechanged
- selectionchanged => onSelectionchanged
- decorate => onDecorate
- undecorate = > onUndecorate
- pasting => onPasting
- blur => onBlur
- destroy => onDestroy


## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

