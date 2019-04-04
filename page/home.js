// 多页面配置
import _ from "lodash";
import '../src/style/less.less'
// import '../src/style/css.css'
console.log(_.chunk(['a', 'b', 'c', 'd'], 2,2))
console.log('------------this is home 22222200----------')


import Vue from 'vue';

import Home from '../src/page/home/home.vue'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

//状态管理
import state from '../src/store/index';

Vue.use(iView);

new Vue({
    el: '#app',
    state,
    render: h => h(Home)
})