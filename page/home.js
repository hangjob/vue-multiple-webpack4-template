// 多页面配置
import _ from "lodash";
import '../src/style/less.less'
// import '../src/style/css.css'
console.log(_.chunk(['a', 'b', 'c', 'd'], 2,2))
console.log('------------this is home 22222200----------')


import Vue from 'vue';

import Home from '../src/page/home/home.vue'

new Vue({
    el: '#app',
    render: h => h(Home)
})