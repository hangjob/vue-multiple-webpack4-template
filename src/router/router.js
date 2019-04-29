
import Vue from "vue";
import VueRouter from "vue-router";


import ViewsA from "../page/views/views-a.vue";

Vue.use(VueRouter);
export default new VueRouter({
    mode: "hash",
    base: __dirname, //比如设置 base: test 路由链接解析后 test/#/views-b
    routes:[
        {
            path: "/", 
            name: "/", 
            component: ViewsA,
            meta:{
                title:"测试2"
            }
        },
        {
            path: "/views-b", 
            name: "views-b", 
            component: function(resolve){
                require(["../page/views/views-b.vue"],resolve);
            },
            meta:{
                title:"测试3"
            }
        },
        {
            path:"/404",
            name: "404", 
            component: resolve=> require(["../page/views/views-404.vue"],resolve),
            meta: { title: "404页面" }
        }
    ]
});