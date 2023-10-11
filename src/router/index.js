import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShareHomeView from '../viewsShare/ShareHomeView.vue';
import ItemsView from '../views/ItemsView.vue';
import InvestmentView from '../views/InvestmentView.vue';
import GlobalChatView from '../views/GlobalChatView.vue';
import PublishView from '../views/PublishView.vue';
import MetamaskView from '../views/MetamaskView.vue';
import Vue from 'vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/share',
    name: 'sharehome',
    component: ShareHomeView,
    meta: {
      hideHeader: true,
      hideFooter: true,
    }

  },
  {
    path: '/items',
    name: 'itemsview',
    component: ItemsView,
    meta: {
      hideHeader: true,
      hideFooter: true,
    }
  },
  {
    path: '/investment',
    name: 'investmentview',
    component: InvestmentView,
    meta: {
      hideHeader: true,
      hideFooter: true,
    }
  },
  {
    path: '/globalchat',
    name: 'globalchatview',
    component: GlobalChatView,
    meta: {
      hideHeader: true,
      hideFooter: true,
    }
  },
  {
    path: '/publish',
    name: 'publishview',
    component: PublishView,
    meta: {
      hideHeader: true,
      hideFooter: true,
    }
  },
  {
    path: '/metamask',
    name: 'metamaskview',
    component: MetamaskView,
    meta: {
      hideHeader: true,
      hideFooter: true,
    }
  },

];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
