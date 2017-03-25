import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return {
            'one': {'content': '<h1>hello simditor</h1>'},
            'two': {'content': '<h1>哈喽世界</h1>'}
        };
    }
});