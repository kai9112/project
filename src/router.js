import VueRouter from 'vue-router';

import HomeContainer from './components/HomeContainer.vue';
import MemberContainer from './components/MemberContainer.vue';
import ShopCartContainer from './components/ShopCartContainer.vue';
import SearchContainer from './components/SearchContainer.vue';
import NewsList from './components/NewsList.vue';
import NewsInfo from './components/NewsInfo.vue';
import photoList from './components/photo/photoList.vue';

var router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home' },
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcart', component: ShopCartContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newsList',component: NewsList},
    {path: '/home/photoList',component: photoList},
    {path: '/home/newsInfo/:id',component: NewsInfo}
  ],
  linkActiveClass: 'mui-active'

})

export default router