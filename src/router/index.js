import { createWebHistory, createRouter } from "vue-router"
import ProductList from "../components/ProductList.vue"
import ProductDetails from "../components/ProductDetails.vue"

const routes = [
    {
        path: "/",
        component: ProductList,
        name: "home"
    },
    {
        path: "/product/:id",
        component: ProductDetails,
        name: "product-details"
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

