import screenConst from './constants/screenConst'

import MainLayout from '@/views/layouts/MainLayout'

import { createRouter, createWebHistory } from 'vue-router'

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
          subtitle: "Tải game miễn phí",
          content: 'Tải game, download game OffLine miễn phí',
          color: "bd-is-game",
          icon: "gamepad",
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
          subtitle: "Tải phần mềm văn phòng, word, excel, powerpoint, PDF miễn phí",
          content: 'Tải phần mềm văn phòng, download phần mềm văn phòng miễn phí',
          color: "bd-is-office",
          icon: "print",
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
          subtitle: "Phần mềm chỉnh sửa ảnh, video miễn phí",
          content: 'Tải phần mềm đồ họa, download phần mềm đồ họa miễn phí',
          color: "bd-is-success",
          icon: "paint-brush",
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
          subtitle: "Phần mềm kỹ thuật, xây dựng, dựng 2D, 3D miễn phí",
          content: 'Tải phần mềm kỹ thuật, download phần mềm kỹ thuật miễn phí',
          color: "bd-is-tech",
          icon: "drafting-compass",
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
          subtitle: "Tải Win, hướng dẫn cài Win, Ghost Win và nhiều hơn nữa",
          content: 'Hướng dẫn tải, cài đặt hệ điều hành, windows, ghost win miễn phí',
          color: "bd-is-link",
          icon: ['fab', 'windows'],
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
          subtitle: "Tất cả các phần mềm cơ bản mà bất cứ máy tính nào cũng cần đến",
          content: 'Phần mềm cơ bản mà bất cứ máy tính nào cũng cần đến',
          color: "bd-is-black",
          icon: "file-archive",
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
  document.title = to.meta.title ? to.meta.title + ' | Đây nè' : 'Đây nè | Software'
  next()
})

export default router
