import screenConst from './constants/screenConst';

import MainLayout from '@/views/layouts/MainLayout';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: screenConst.HOME.path,
    content: 'Chia sẻ phần mềm, ứng dụng, games, thủ thuật,... Giúp làm chủ được thiết bị của bạn!',
  },
  {
    path: screenConst.HOME.path,
    component: () => import('@/views/screens/Home'),
    name: 'home',
    meta: {
      title: '',
      content: 'Phần mềm ở đây nè.',
      active: 'home',
      requireLogged: false,
      requireNotLogged: false
    }
  },
  {
    path: screenConst.NOT_FOUND.path,
    component: () => import('@/views/screens/404'),
    name: '404',
    meta: {
      title: 'Not found'
    }
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: screenConst.GAME.path,
        component: () => import('@/views/screens/Category'),
        name: 'game',
        meta: {
          title: 'Game',
          active: 'game',
          breadcrumb: [screenConst.HOME, screenConst.GAME]
        }
      },
      {
        path: screenConst.OFFICE.path,
        component: () => import('@/views/screens/Category'),
        name: 'office',
        meta: {
          title: 'Phần mềm văn phòng',
          active: 'office',
          breadcrumb: [screenConst.HOME, screenConst.OFFICE]
        }
      },
      {
        path: screenConst.GRAPHIC.path,
        component: () => import('@/views/screens/Category'),
        name: 'graphic',
        meta: {
          title: 'Phần mềm đồ họa',
          active: 'graphic',
          breadcrumb: [screenConst.HOME, screenConst.GRAPHIC]
        }
      },
      {
        path: screenConst.TECHNIQUE.path,
        component: () => import('@/views/screens/Category'),
        name: 'technique',
        meta: {
          title: 'Phần mềm kỹ thuật',
          active: 'technique',
          breadcrumb: [screenConst.HOME, screenConst.TECHNIQUE]
        }
      },
      {
        path: screenConst.OS.path,
        component: () => import('@/views/screens/Category'),
        name: 'os',
        meta: {
          title: 'Hệ điều hành',
          active: 'os',
          breadcrumb: [screenConst.HOME, screenConst.OS]
        }
      },
      {
        path: screenConst.COMMON.path,
        component: () => import('@/views/screens/Category'),
        name: 'common',
        meta: {
          title: 'Ai cũng cần và thủ thuật',
          active: 'common',
          breadcrumb: [screenConst.HOME, screenConst.COMMON]
        }
      },
      {
        path: screenConst.DETAIL.path,
        component: () => import('@/views/screens/PostDetail'),
        name: 'postDetail',
        meta: {
          title: 'Bài viết',
          subtitle: "",
          content: 'Phần mềm cơ bản mà bất cứ máy tính nào cũng cần đến',
          color: "bd-is-black",
          icon: "download",
          active: 'common',
          breadcrumb: [screenConst.HOME, screenConst.COMMON]
        }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: screenConst.HOME.path
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash
      };
    }
    return { top: 0 };
  },
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? 'Đây nè | ' + to.meta.title : 'Đây nè | Chia sẻ phần mềm'
  next()
})

export default router
