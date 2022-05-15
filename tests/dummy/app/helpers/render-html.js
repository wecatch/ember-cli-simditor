import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function renderHtml(positional /*, named*/) {
  let [html] = positional;
  return htmlSafe(html);
});
