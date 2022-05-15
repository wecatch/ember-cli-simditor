import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return {
      one: { content: '<h1>hello simditor</h1>' },
      two: { content: '<h1>哈喽世界</h1>' },
      three: { html: '<h1>I am html content</h1>' },
    };
  }
}
