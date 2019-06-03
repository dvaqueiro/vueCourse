import Vue from 'vue'
import App from './App.vue'
import AppHeader from './components/shared/Header.vue';
import AppFooter from './components/shared/Footer.vue';
import AppContent from './components/shared/Content.vue';

Vue.component('app-header', AppHeader);
Vue.component('app-footer', AppFooter);
Vue.component('app-content', AppContent);

new Vue({
  el: '#app',
  render: h => h(App)
})
