import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import hljs from "highlight.js";
import handlebars from "highlight.js/lib/languages/handlebars";
import xml from "highlight.js/lib/languages/xml";
hljs.registerLanguage('handlebars', handlebars);
hljs.registerLanguage('xml', xml);

export default helper(function renderHtml(positional /*, named*/) {
  let [html, lang] = positional;
  return htmlSafe(hljs.highlight(html, {language: lang}).value);
});
