import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material-design-icons/styles.css'
import './icons.js'
import columnSortable from 'vue-column-sortable'




import store from './store'

Vue.config.productionTip = false;
Vue.use(columnSortable)


// Bootstrap
Vue.use(BootstrapVue);

new Vue({
    el: "#app",
    data() {
        return {
            mystyles: {
                backgroundColor: "#05d"
            }
        };
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app');

