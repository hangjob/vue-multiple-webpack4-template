import Vue from "vue";

import Ftrem from "../src/page/ftrem/ftrem.vue";
import "../util/setrem";
// eslint-disable-next-line no-console
console.log("@");
new Vue({
    el: "#app",
    render: h => h(Ftrem)
}); 