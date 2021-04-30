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
    doubleCount: state => state.count * 2
  }
})
