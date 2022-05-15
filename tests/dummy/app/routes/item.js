import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  model(params) {
    return {
      1: { content: 'hello item 1' },
      2: { content: 'hello item 2' },
    }[params.id];
  }
}
