import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import categoryConst from './constants/categoryConst';

const store = createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        category: null
    },
    getters: {
    },
    mutations: {
        updateCategoryInfo(state, category) {
            state.category = category;
        }
    },
    actions: {
        changeCategory({ commit }, data) {
            let category;
            switch (data.categoryCode) {
                case "game":
                    category = Object.assign({}, categoryConst.GAME);
                    break;
                case "office":
                    category = Object.assign({}, categoryConst.OFFICE);
                    break;
                case "graphic":
                    category = Object.assign({}, categoryConst.GRAPHIC);
                    break;
                case "technique":
                    category = Object.assign({}, categoryConst.TECHNIQUE);
                    break;
                case "os":
                    category = Object.assign({}, categoryConst.OS);
                    break;
                case "common":
                    category = Object.assign({}, categoryConst.COMMON);
                    break;
                default:
                    category = Object.assign({}, categoryConst.COMMON);
                    break;
            }

            if (data.title) {
                category.title = data.title;
            }
            if (data.subtitle != null) {
                category.subtitle = data.subtitle;
            }

            commit('updateCategoryInfo', category);
        }
    },
    modules: {
    }
})

export default store