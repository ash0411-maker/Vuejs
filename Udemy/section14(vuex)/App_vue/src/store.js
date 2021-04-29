// vuexに関する設定ファイル

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Vuexインスタンスをmain.jsにexport
export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    doubleCounter: state => state.count * 2
  }
})
