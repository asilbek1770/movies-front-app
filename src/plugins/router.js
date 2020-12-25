import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "@/pages/About";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Home from "@/pages/Home";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component : Home},
        {path: '/about', component : About},
        {path: '/login', component : Login},
        {path: '/signup', component : SignUp},
    ]
})