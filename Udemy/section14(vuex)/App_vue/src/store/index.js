// vuexに関する設定ファイル

import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';

Vue.use(Vuex);

// Vuexインスタンスをmain.jsにexport
export default new Vuex.Store({
  state: {
    message: ""
  },
  getters: {
    message: state => state.message //何も加工してなくても、データの取得方法を統一するのもアリ。
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  // 非同期処理がかける！！！
  actions: {
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    }
  },
  modules: {
    count
  }
})
