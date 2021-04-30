// vuexに関する設定ファイル

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Vuexインスタンスをmain.jsにexport
export default new Vuex.Store({
  state: {
    count: 2,
    message: ""
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    message: state => state.message //何も加工してなくても、データの取得方法を統一するのもアリ。
  },
  mutations: {
    increment(state, number) {
      state.count += number
    },
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  // 非同期処理がかける！！！
  actions: {
    increment({ commit }, number) { //これだと、commitしかしてないことが分かって良いらしい
      commit("increment", number);
    },
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    }
  }
})
