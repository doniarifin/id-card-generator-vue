import { createRouter, createWebHistory } from 'vue-router';
import UserInput from '@/components/UserInput.vue';
import GeneratedCard from '@/components/GeneratedCard.vue';
import NotFoundPage from '@/components/404NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'UserInput',
    component: UserInput
  },
  {
    path: '/generated-card',
    name: 'GeneratedCard',
    component: GeneratedCard,
    props: true 
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (from.name === null && to.name !== 'UserInput') {
    next({ name: 'UserInput' });
  } else {
    next();
  }
});

export default router;