import { createRouter, createWebHistory } from 'vue-router';
import ITexperience from '@/views/ITexperience.vue';
import Index from '@/views/index.vue';
import Hobby from '@/views/hobby.vue';
import Goal from '@/views/goal.vue';
import Gallery from '@/views/gallery.vue';
import Education from '@/views/education.vue';
import Comments from '@/views/comments.vue'

const routes = [
    { path: '/', component: Index }, // Default route is Login
    { path: '/IT-Experience', component: ITexperience },
    { path: '/hobby', component: Hobby },
    { path: '/goal', component: Goal },
    { path: '/gallery', component: Gallery},
    { path:  '/education', component: Education},
    { path:  '/comments', component: Comments}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;