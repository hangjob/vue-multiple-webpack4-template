
import Vue from 'vue';
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import News from '../src/page/news/news.vue'
Vue.use(iView)

//状态管理
import store from '../src/store/index';

new Vue({
    el: '#app',
    store,
    render: h => h(News)
}) 