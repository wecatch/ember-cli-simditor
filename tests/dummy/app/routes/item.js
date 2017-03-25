import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return {
            '1': {'content': 'hello item 1'},
            '2': {'content': 'hello item 2'}
        }[params.id];
    }
});