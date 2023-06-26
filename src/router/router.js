import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import {create} from "axios";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import {Store} from "vuex";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/store',
        component: PostPageWithStore
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;