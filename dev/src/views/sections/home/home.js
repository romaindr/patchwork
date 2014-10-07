'use strict';

var extend = require('extend'),
    section = require('base/section');

module.exports = extend(true, {}, section, {
    template: require('./home.html'),
    route: {
        id: 'home',
        transitionMode: 'outAndAfterIn',
        path: '/home'
    },
    data: {
        name: 'home'
    },
    methods: {
        insertTweens: function() {
            this.tlTransition.fromTo(this.$el, 0.7, {alpha: 0, scale: 0.5}, {alpha: 1, scale: 1, ease: Cubic.easeInOut}, 0.4);
        },
        beforeTransitionIn: function() {

        }
    },

    ready: function() {

    },

    beforeDestroy: function() {

    }
});
