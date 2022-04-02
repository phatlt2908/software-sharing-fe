import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import categoryConst from './constants/categoryConst';
import screenConst from './constants/screenConst';

const store = createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        category: null,
        breadcrumbs: null,
        commentUser: {
            username: null,
            email: null,
            avatar: null
        }
    },
    getters: {
    },
    mutations: {
        updateCategoryInfo(state, category) {
            state.category = category;
        },
        updateBreadcrumInfo(state, breadcrumbs) {
            state.breadcrumbs = breadcrumbs;
        },
        updateUser(state, user) {
            state.commentUser = {
                username: user.username,
                email: user.email,
                avatar: user.avatar
            }
        }
    },
    actions: {
        changeCategory({ commit }, data) {
            let category;
            let breadcrumbs;
            switch (data.categoryCode) {
                case "game":
                    category = Object.assign({}, categoryConst.GAME);
                    breadcrumbs = Object.assign([], [screenConst.HOME, screenConst.GAME]);
                    break;
                case "office":
                    category = Object.assign({}, categoryConst.OFFICE);
                    breadcrumbs = Object.assign([], [screenConst.HOME, screenConst.OFFICE]);
                    break;
                case "graphic":
                    category = Object.assign({}, categoryConst.GRAPHIC);
                    breadcrumbs = Object.assign([], [screenConst.HOME, screenConst.GRAPHIC]);
                    break;
                case "technique":
                    category = Object.assign({}, categoryConst.TECHNIQUE);
                    breadcrumbs = Object.assign([], [screenConst.HOME, screenConst.TECHNIQUE]);
                    break;
                case "os":
                    category = Object.assign({}, categoryConst.OS);
                    breadcrumbs = Object.assign([], [screenConst.HOME, screenConst.OS]);
                    break;
                case "common":
                    category = Object.assign({}, categoryConst.COMMON);
                    breadcrumbs = Object.assign([], [screenConst.HOME, screenConst.COMMON]);
                    break;
                default:
                    category = Object.assign({}, categoryConst.COMMON);
                    breadcrumbs = Object.assign([], [screenConst.HOME, screenConst.COMMON]);
                    break;
            }

            if (data.title) {
                category.title = data.title;
            }
            if (data.subtitle != null) {
                category.subtitle = data.subtitle;
            }

            if (data.subBread) {
                breadcrumbs.push({
                    path: "",
                    name: data.subBread
                })
            }

            commit('updateCategoryInfo', category);
            commit('updateBreadcrumInfo', breadcrumbs);
        },
        changeUser({ commit }, data) {
            commit('updateUser', data);
        }
    },
    modules: {
    }
})

export default store