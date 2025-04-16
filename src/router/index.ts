import { createRouter, createWebHashHistory } from 'vue-router';
import { ElMessage } from 'element-plus';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/jump' },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/login/Login.vue'),
        },
        {
            path: '/jump',
            name: 'Jump',
            component: () => import('../views/jump/Jump.vue'),
        },
        {
            path: '/index',
            name: 'Index',
            component: () => import('../layout/Index.vue'),
            children: [
                {
                    path: '/city',
                    name: 'City',
                    component: () => import('../views/city/City.vue'),
                },
                {
                    path: '/country',
                    name: 'Country',
                    component: () => import('../views/county/County.vue'),
                },
            ],
        },
    ],
});

router.beforeEach((to, form, next) => {
    const token = sessionStorage.getItem('hightoken');
    const user = sessionStorage.getItem('highname');
    if ((token && user) || to.path == '/login' || to.path == '/jump') {
        next();
    } else {
        ElMessage.warning('您还未登录，请先登录');
        next('/login');
    }
});

export default router;
