import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import moment from 'moment';
Vue.filter('dataFormat', function(datastr, partern = 'YYYY-MM-DD HH:mm:ss'){
  return moment(datastr).format(partern)
})

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

import { Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui';
import router from './router';

Vue.component(Header.name, Header); 
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);


import app from './App.vue';

var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app),
  router
})