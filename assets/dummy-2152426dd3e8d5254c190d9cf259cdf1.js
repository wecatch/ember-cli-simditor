"use strict"
define("dummy/app",["exports","@ember/application","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,o,r){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class l extends t.default{constructor(){super(...arguments),i(this,"modulePrefix",r.default.modulePrefix),i(this,"podModulePrefix",r.default.podModulePrefix),i(this,"Resolver",n.default)}}e.default=l,(0,o.default)(l,r.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/simditor-editor",["exports","ember-cli-simditor/components/simditor-editor"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/controllers/application",["exports","@ember/controller","@ember/object"],(function(e,t,n){var o
function r(e,t,n,o,r){var i={}
return Object.keys(o).forEach((function(e){i[e]=o[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,o){return o(e,t,n)||n}),i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let i=(o=class extends t.default{constructor(){var e,t,n
super(...arguments),n=["title","bold","italic","underline","strikethrough","fontScale","color","ol","ul","blockquote","code","table","link","image","hr","indent","outdent","alignment"],(t="toolbar")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,this.editor=null}setValue(){this.editor.setValue("<h1>hello simditor</h1>")}getValue(){window.alert(this.editor.getValue())}sync(){window.alert(this.editor.sync())}focus(){this.editor.focus()}blur(){this.editor.blur()}hidePopover(){this.editor.hidePopover()}valuechanged(e,t){console.log("valuechanged event: "+t.getValue())}},r(o.prototype,"setValue",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"setValue"),o.prototype),r(o.prototype,"getValue",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"getValue"),o.prototype),r(o.prototype,"sync",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"sync"),o.prototype),r(o.prototype,"focus",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"focus"),o.prototype),r(o.prototype,"blur",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"blur"),o.prototype),r(o.prototype,"hidePopover",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"hidePopover"),o.prototype),r(o.prototype,"valuechanged",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"valuechanged"),o.prototype),o)
e.default=i})),define("dummy/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/helpers/render-html",["exports","@ember/component/helper","@ember/template","highlight.js","highlight.js/lib/languages/handlebars","highlight.js/lib/languages/xml"],(function(e,t,n,o,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o.default.registerLanguage("handlebars",r.default),o.default.registerLanguage("xml",i.default)
var l=(0,t.helper)((function(e){let[t,r]=e
return(0,n.htmlSafe)(o.default.highlight(t,{language:r}).value)}))
e.default=l})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=n})),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],(function(e,t,n){function o(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var o
if("undefined"!=typeof window)o=window
else if("undefined"!=typeof global)o=global
else{if("undefined"==typeof self)return
o=self}var r,i=n.default.exportApplicationGlobal
r="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),o[r]||(o[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=o
var r={name:"export-application-global",initialize:o}
e.default=r})),define("dummy/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/router",["exports","@ember/routing/router","dummy/config/environment"],(function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{constructor(){super(...arguments),o(this,"location",n.default.locationType),o(this,"rootURL",n.default.rootURL)}}e.default=r,r.map((function(){this.route("item")}))})),define("dummy/routes/application",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{model(){return{one:{content:"<h1>hello simditor</h1>"},two:{content:"<h1>哈喽世界</h1>"},three:{html:"<h1>I am html content</h1>"}}}}e.default=n})),define("dummy/routes/item",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{model(e){return{1:{content:"hello item 1"},2:{content:"hello item 2"}}[e.id]}}e.default=n})),define("dummy/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"xR9VzI+w",block:'[[[10,0],[14,0,"desc"],[12],[1,"\\n  "],[10,"h1"],[12],[1,"ember-cli-simditor\\n    "],[10,3],[14,6,"https://travis-ci.org/wecatch/ember-cli-simditor"],[12],[1,"\\n      "],[10,"img"],[14,"src","https://travis-ci.org/wecatch/ember-cli-simditor.svg?branch=master"],[14,"alt","cli"],[12],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,2],[12],[1,"\\n    Ember component wrapper for simditor editor.\\n  "],[13],[1,"\\n  "],[10,3],[14,6,"https://github.com/wecatch/ember-cli-simditor"],[12],[1,"Github"],[13],[1,"\\n  "],[10,3],[14,6,"http://wecatch.me"],[12],[1,"Wecatch"],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"code"],[12],[1,"\\n  "],[10,"h1"],[12],[1,"How to use"],[13],[1,"\\n  "],[10,2],[12],[1,"All simditor options and method support "],[10,3],[14,6,"https://simditor.tower.im/docs/doc-usage.html"],[12],[1,"Usage Doc"],[13],[1," "],[13],[1,"\\n  "],[10,2],[12],[1,"Event support with \'on\' prefix like \'onValuechanged\' == \'valuechanged\'"],[13],[1,"\\n  "],[10,2],[12],[1,"ApplicationController.js"],[13],[1,"\\n  "],[10,"pre"],[12],[1,"    "],[10,"code"],[14,0,"language-javascript"],[12],[1,"\\n      "],[1,[28,[35,0],["\\nimport Controller from \'@ember/controller\';\\nimport { action, get } from \'@ember/object\';\\n\\nexport default class ApplicationController extends Controller {\\n  constructor() {\\n    super(...arguments);\\n    this.editor = null;\\n  }\\n\\n  @action\\n  setValue() {\\n    this.editor.setValue(\'<h1>hello simditor</h1>\');\\n  }\\n\\n  @action\\n  getValue() {\\n    window.alert(this.editor.getValue());\\n  }\\n  @action\\n  sync() {\\n    window.alert(this.editor.sync());\\n  }\\n  @action\\n  focus() {\\n    this.editor.focus();\\n  }\\n  @action\\n  blur() {\\n    this.editor.blur();\\n  }\\n  @action\\n  hidePopover() {\\n    this.editor.hidePopover();\\n  }\\n  @action\\n  valuechanged(e, editor) {\\n    console.log(\'valuechanged event: \' + editor.getValue());\\n  }\\n\\n  toolbar = [\\n    \'title\',\\n    \'bold\',\\n    \'italic\',\\n    \'underline\',\\n    \'strikethrough\',\\n    \'fontScale\',\\n    \'color\',\\n    \'ol\', // ordered list\\n    \'ul\', // unordered list\\n    \'blockquote\',\\n    \'code\', // code block\\n    \'table\',\\n    \'link\',\\n    \'image\',\\n    \'hr\', // horizontal ruler\\n    \'indent\',\\n    \'outdent\',\\n    \'alignment\',\\n  ];\\n}\\n      ","javascript"],null]],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,2],[12],[1,"application.hbs"],[13],[1,"\\n  "],[10,"pre"],[12],[1,"    "],[10,"code"],[14,0,"language-handlebars"],[12],[1,"\\n      "],[1,[28,[35,0],["\\n<SimditorEditor @value={{get this.model \'one\'}} @update={{fn (mut this.model.one.content)}} @editor={{fn (mut this.editor)}} @toolbar={{this.toolbar}} @onValuechanged={{this.valuechanged}} ></SimditorEditor>\\n","handlebars"],null]],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,2],[12],[1,"\\n    "],[10,"strong"],[12],[1,"Model object must have one property called content for SimditorEditor component torender."],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[12],[1,"\\n  "],[10,"h1"],[12],[1,"Editor methods"],[13],[1,"\\n  "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["setValue"]]],null],[12],[1,"setValue"],[13],[1,"\\n  "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["getValue"]]],null],[12],[1,"getValue"],[13],[1,"\\n  "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["sync"]]],null],[12],[1,"sync"],[13],[1,"\\n  "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["focus"]]],null],[12],[1,"focus"],[13],[1,"\\n  "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["blur"]]],null],[12],[1,"blur"],[13],[1,"\\n  "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["hidePopover"]]],null],[12],[1,"hidePopover"],[13],[1,"\\n"],[13],[1,"\\n"],[10,"br"],[12],[13],[1,"\\n"],[10,"h1"],[12],[1,"Editor"],[13],[1,"\\n"],[8,[39,2],null,[["@value","@update","@editor","@toolbar","@onValuechanged"],[[28,[37,3],[[30,0,["model"]],"one"],null],[28,[37,4],[[28,[37,5],[[30,0,["model","one","content"]]],null]],null],[28,[37,4],[[28,[37,5],[[30,0,["editor"]]],null]],null],[30,0,["toolbar"]],[30,0,["valuechanged"]]]],null],[1,"\\n"],[10,0],[12],[1,"\\n  "],[10,"h1"],[12],[1,"Html content"],[13],[1,"\\n  "],[1,[30,0,["model","one","content"]]],[1,"\\n"],[13],[1,"\\n\\n\\n"],[10,"h1"],[12],[1,"\\n    Locale\\n"],[13],[1,"\\n"],[10,0],[14,0,"code"],[12],[1,"\\n    "],[10,2],[12],[1,"locale only support "],[10,"em"],[12],[1,"en-US"],[13],[1,"(English) and "],[10,"em"],[12],[1,"zh-CN"],[13],[1,"(Chinese)"],[13],[1,"\\n    "],[10,"pre"],[12],[1,"          "],[10,"code"],[14,0,"language-handlebars"],[12],[1,"\\n      "],[1,[28,[35,0],["\\n<SimditorEditor @value={{get this.model \'two\'}} @locale=\'zh-CN\' @toolbar={{this.toolbar}}></SimditorEditor>\\n","handlebars"],null]],[1,"\\n    "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"],[8,[39,2],null,[["@value","@locale"],[[28,[37,3],[[30,0,["model"]],"two"],null],"zh-CN"]],[["default"],[[[],[]]]]],[1,"\\n\\n"],[10,"h1"],[12],[1,"\\n    Custome content property name\\n"],[13],[1,"\\n"],[10,0],[14,0,"code"],[12],[1,"\\n        "],[10,"pre"],[12],[1,"          "],[10,"code"],[14,0,"language-handlebars"],[12],[1,"\\n      "],[1,[28,[35,0],["\\n<SimditorEditor @value={{get model \'three\'}} @name=\'html\' @update={{fn (mut model.three.html}} ></SimditorEditor>\\n","handlebars"],null]],[1,"\\n    "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"],[8,[39,2],null,[["@value","@name","@update"],[[28,[37,3],[[30,0,["model"]],"three"],null],"html",[28,[37,4],[[28,[37,5],[[30,1,["three","html"]]],null]],null]]],[["default"],[[[],[]]]]]],["@model"],false,["render-html","on","simditor-editor","get","fn","mut"]]',moduleName:"dummy/templates/application.hbs",isStrictMode:!1})
e.default=n})),define("dummy/templates/item",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"yudcR7J9",block:'[[[1,[28,[35,0],["Item"],null]],[1,"\\n"],[8,[39,1],[[24,"2",""]],[["@route"],["item"]],[["default"],[[[[1,"2"]],[]]]]],[1,"\\n"],[8,[39,1],[[24,"1",""]],[["@route"],["item"]],[["default"],[[[[1,"1"]],[]]]]],[1,"\\n"],[8,[39,2],null,[["@value","@update"],[[30,0,["model"]],[28,[37,3],[[28,[37,4],[[30,0,["model","content"]]],null]],null]]],[["default"],[[[],[]]]]],[1,"\\n"],[1,[30,0,["model","content"]]]],[],false,["page-title","link-to","simditor-editor","fn","mut"]]',moduleName:"dummy/templates/item.hbs",isStrictMode:!1})
e.default=n})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})