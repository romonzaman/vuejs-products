# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).



/* router/index.js */

import { createWebHistory, createRouter } from "vue-router"
import Home from "../components/Home.vue"
import UserProfile from "../components/UserProfile.vue"

const routes = [
    {
        path: "/",
        component: Home,
        name: 'Home'
    },
    {
        path: "/user/:username",
        component: UserProfile,
        name: 'UserProfile'
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

/* main.js */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'

createApp(App).use(router).mount('#app')


/* App.vue */

<script setup>
</script>


<template>
  <div class="flex justify-center items-center bg-blue-700 text-white p-5">
    
    <router-link :to="{ name: 'Home', params: {} }">
        <h1 class="m-10">Home</h1>
    </router-link>
    
    <router-link :to="{ name: 'UserProfile', params: { username: 'romon' } }">User Profile</router-link>

  </div>
  <div class="m-10 flex justify-center items-center">
    <router-view />
  </div>
</template>

<style scoped></style>


/* components/Home.vue */

<script setup>
</script>


<template>
    <div>
        <span class="text-2xl font-bold">
            Home Page
        </span>

        <div class="text-xs mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Massa placerat duis ultricies lacus
            sed turpis tincidunt id. Sapien faucibus et molestie ac feugiat. Eget nulla facilisi etiam dignissim diam quis
            enim lobortis scelerisque. Lectus magna fringilla urna porttitor. Mattis enim ut tellus elementum sagittis. Eget
            est lorem ipsum dolor sit. Posuere morbi leo urna molestie at elementum eu facilisis. Euismod in pellentesque
            massa placerat duis ultricies lacus sed turpis. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar
            proin. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Laoreet suspendisse interdum consectetur
            libero id faucibus nisl tincidunt eget. Risus sed vulputate odio ut enim blandit volutpat maecenas. Tortor at
            auctor urna nunc id. Sed risus pretium quam vulputate. Semper quis lectus nulla at volutpat diam ut venenatis.

            Mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc. Tincidunt id
            aliquet risus feugiat in ante metus dictum at. Dolor sed viverra ipsum nunc. Commodo odio aenean sed adipiscing
            diam donec. Viverra tellus in hac habitasse platea dictumst. Eu feugiat pretium nibh ipsum consequat nisl.
            Tellus in hac habitasse platea dictumst. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Velit
            ut tortor pretium viverra suspendisse potenti nullam ac. Consequat ac felis donec et odio pellentesque diam
            volutpat commodo. Ipsum suspendisse ultrices gravida dictum fusce. Rhoncus dolor purus non enim. Fringilla urna
            porttitor rhoncus dolor purus. Et magnis dis parturient montes. Elementum integer enim neque volutpat ac
            tincidunt vitae semper quis. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Amet consectetur
            adipiscing elit duis tristique sollicitudin nibh. Tellus elementum sagittis vitae et leo duis. Amet porttitor
            eget dolor morbi.

        </div>
    </div>
</template>

<style scoped></style>


/* components/UserProfile.vue */

<script setup>
</script>


<template>
    <div>
        <span class="text-2xl font-bold">
            User Profile
        </span>
        <div class="mt-10">
            ac feugiat. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Lectus magna fringilla urna
            porttitor. Mattis enim ut tellus elementum sagittis. Eget est lorem ipsum dolor sit. Posuere morbi leo urna
            molestie at elementum eu facilisis. Euismod in pellentesque ma
        </div>
    </div>
</template>

<style scoped></style>
