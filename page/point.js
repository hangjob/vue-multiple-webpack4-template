import _ from "lodash";
console.log('this is Point')

import '../src/common/component/global'
import Vue from 'vue';

import Point from '../src/page/point/point.vue'

new Vue({
    el: '#app',
    render: h => h(Point),
    beforeCreate () {
        Vue.prototype.bus = this
    }
}) 