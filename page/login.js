import _ from "lodash";
// eslint-disable-next-line no-console
console.log("this is login");
import "iview/dist/styles/iview.css";
import Vue from "vue";

import Login from "../src/page/login/login.vue";

new Vue({
    el: "#app",
    render: h => h(Login)
}); 