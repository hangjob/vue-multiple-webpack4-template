import _ from "lodash";
console.log('this is login')

import Vue from 'vue';

import Login from '../src/page/login/login.vue'

new Vue({
    el: '#app',
    render: h => h(Login)
}) 