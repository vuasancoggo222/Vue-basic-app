import { createWebHistory,createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue"
import ProductPage from "./pages/ProductPage.vue"
import NotFound from './pages/404.vue'
import AboutPage from "./pages/AboutPage.vue"
import DashboardPage from "./pages/admin/Dashboard.vue"
const routes = [
    {
        path: "/",
        component: HomePage,
        name: "home-route"
    },
    {
        path: "/home",
        redirect:'/'
    },
    {
        path: "/list",
        component: ProductPage,
        name : "list-route"
    },
    {
        path:"/about",
        component: AboutPage,
        name : "about-route"
    },
    {
        path:"/admin",
        redirect:'/admin/dashboard',
        name : "admin-route",
    },
    {
        path:"/admin/dashboard",
        name :'dashboard-route',
        component: DashboardPage
    },
   
    {
        path : "/:pathMath(.*)*",
        component : NotFound
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes,
})
export default router