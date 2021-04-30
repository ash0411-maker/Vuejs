// vuexに関する設定ファイル

import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import getters from './getters';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

// Vuexインスタンスをmain.jsにexport
export default new Vuex.Store({
  state: {
    message: ""
  },
  getters: {
    //何も加工してなくても、データの取得方法を統一するのもアリ。
  },
  mutations: {

  },
  // 非同期処理がかける！！！
  actions: {

  },
  getters,
  mutations,
  actions,
  modules: {
    count
  }
})
