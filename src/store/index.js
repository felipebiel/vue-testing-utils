import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    user: {},
};
export const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
};
export const actions = {
    storeUser({ commit }, payload) {
        commit('SET_USER', payload);
    },
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
});
