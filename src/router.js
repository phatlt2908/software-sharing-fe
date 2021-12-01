import screenConst from './constants/screenConst'

import MainLayout from '@/views/layouts/MainLayout'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/' + screenConst.HOME.path,
    content: 'Chia sẻ phần mềm, ứng dụng, games, thủ thuật,... Giúp làm chủ được thiết bị của bạn!',
  },
  {
    path: screenConst.HOME.path,
    component: () => import('@/views/screens/Home'),
    name: 'home',
    meta: {
      title: '',
      content: 'Minecraft ở đây này.',
      active: 'home',
      requireLogged: false,
      requireNotLogged: false
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
          title: 'Games',
          content: 'Tải game, download game OffLine miễn phí',
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
          content: 'Tải phần mềm văn phòng, download phần mềm văn phòng miễn phí',
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
          content: 'Tải phần mềm đồ họa, download phần mềm đồ họa miễn phí',
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
          content: 'Tải phần mềm kỹ thuật, download phần mềm kỹ thuật miễn phí',
          active: 'technique',
          breadcrumb: [screenConst.HOME, screenConst.TECHNIQUE]
        }
      },
      {
        path: screenConst.OS.path,
        component: () => import('@/views/screens/Category'),
        name: 'os',
        meta: {
          title: 'Windows, hệ điều hành, ghost',
          content: 'Hướng dẫn tải, cài đặt hệ điều hành, windows, ghost win miễn phí',
          active: 'os',
          breadcrumb: [screenConst.HOME, screenConst.OS]
        }
      },
      {
        path: screenConst.COMMON.path,
        component: () => import('@/views/screens/Category'),
        name: 'common',
        meta: {
          title: 'Ai cũng cần',
          content: 'Phần mềm cơ bản mà bất cứ máy tính nào cũng cần đến',
          active: 'common',
          breadcrumb: [screenConst.HOME, screenConst.COMMON]
        }
      }
    ]
  },
  {
    path: '/*.*',
    redirect: '/' + screenConst.HOME.path
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title + ' | Đây nè' : 'Đây nè | Minecraft'
  next()
})

export default router
