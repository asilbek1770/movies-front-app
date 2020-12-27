import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductList from "@/pages/ProductList";
import Home from "@/pages/Home";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/product-list', component : ProductList},
        { path: '/', component : Home},
    ]
})