import Vue from 'vue';
import router from './routes';
import store from './store'

import App from './App.vue';

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        App,
    },
    router,
    store,
});
