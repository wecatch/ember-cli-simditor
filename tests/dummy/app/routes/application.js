import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return {
            'one': {'content': '<h1>hello simditor</h1>'},
            'two': {'content': '<h1>哈喽世界</h1>'},
            'three': {'html': '<h1>I am html content</h1>'}
        };
    }
});