import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductList from "@/pages/ProductList";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/product-list', component : ProductList},
    ]
})