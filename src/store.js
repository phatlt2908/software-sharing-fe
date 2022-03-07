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
                    category = categoryConst.GAME;
                    break;
                case "office":
                    category = categoryConst.OFFICE;
                    break;
                case "graphic":
                    category = categoryConst.GRAPHIC;
                    break;
                case "technique":
                    category = categoryConst.TECHNIQUE;
                    break;
                case "os":
                    category = categoryConst.OS;
                    break;
                case "common":
                    category = categoryConst.COMMON;
                    break;
                default:
                    category = categoryConst.COMMON;
                    break;
            }

            if (data.title) {
                category.title = data.title;
            }
            if (data.subtitle) {
                category.subtitle = data.subtitle;
            }

            commit('updateCategoryInfo', category);
        }
    },
    modules: {
    }
})

export default store