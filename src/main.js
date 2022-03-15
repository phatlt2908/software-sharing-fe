import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag from "vue-gtag";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

require('@/assets/scss/main.scss');
require('@/plugins/fontawesome.js');

import store from './store';

const vueApp = createApp(App);
vueApp.use(VueSweetalert2);
vueApp.use(router);
vueApp.use(store);
vueApp.use(VueGtag, {
    config: { id: "G-K099QQT9WT" }
});
vueApp.component("font-awesome-icon", FontAwesomeIcon);

vueApp.mount('#app');

// Global use api
// If want to use api in global (dont need to import in per file)
// vueApp.config.globalProperties.api=api
