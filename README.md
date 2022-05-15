# Ember-cli-simditor

[![Build Status](https://github.com/wecatch/ember-cli-simditor/actions/workflows/ci.yml/badge.svg)
[![Downloads](https://img.shields.io/npm/dt/ember-cli-simditor.svg)](https://www.npmjs.com/package/ember-cli-simditor)
[![Version](https://img.shields.io/npm/v/ember-cli-simditor.svg)](https://www.npmjs.com/package/ember-cli-simditor)

Ember component wrapper for [simditor](https://github.com/mycolorway/simditor).

# Changes

## 1.0.0

- Upgrade Ember to 3.85
- Use native class rewrite addon
- Lock simditor dependence

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
<SimditorEditor
  @value={{get this.model 'one'}}
  @update={{fn (mut this.model.one.content)}}
  @editor={{fn (mut this.editor)}}
  @toolbar={{this.toolbar}}
  @onValuechanged={{this.valuechanged}}
/>
```

You must wrap content in one object, that means model object must have one property called `content` for component to render, visit [issue 6](https://github.com/wecatch/ember-cli-simditor/issues/6) for why.

By default the content property name is `content`, you can custome the property name with `name` argument


```
<SimditorEditor 
  @value={{this.model}}
  @update={{fn (mut this.model.html)}}
  @editor={{fn (mut this.editor)}}
  @toolbar={{this.toolbar}}
  @onValuechanged={{this.valuechanged}}
  @name='html'/>
```

## Locale

English by default

```
<SimditorEditor />
```

Chinese

```
<SimditorEditor locale='zh-CN'/>
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

