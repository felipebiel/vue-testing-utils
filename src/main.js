import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import store from './store';
import '@/scss/core.scss';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app');
