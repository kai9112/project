import VueRouter from 'vue-router';

import HomeContainer from './components/HomeContainer.vue';
import MemberContainer from './components/MemberContainer.vue';
import ShopCartContainer from './components/ShopCartContainer.vue';
import SearchContainer from './components/SearchContainer.vue';

var router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home' },
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcart', component: ShopCartContainer},
    {path: '/search', component: SearchContainer}
  ],
  linkActiveClass: 'mui-active'

})

export default router