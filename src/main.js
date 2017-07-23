import Vue from 'vue';
import router from './router';
import Buefy from 'buefy';
import App from './App';

Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<App/>`,
  components: {
    App
  }
});
