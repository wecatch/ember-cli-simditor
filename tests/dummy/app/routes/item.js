import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return {
            '1': {'text': 'hello item 1'},
            '2': {'text': 'hello item 2'}
        }[params.id];
    }
});