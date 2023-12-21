import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import MainPage from "@/pages/MainPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import SinglePostPage from "@/pages/SinglePostPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: SinglePostPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;