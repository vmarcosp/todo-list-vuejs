import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import CepChecker from '../pages/CepChecker';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/cep-checker',
      component: CepChecker
    }
  ]
});
