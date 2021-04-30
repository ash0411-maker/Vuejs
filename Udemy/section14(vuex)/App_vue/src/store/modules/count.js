const state = {
  count: 2
};

const getters = {
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3,
};

const mutations = {
  increment(state, number) {
    state.count += number
  },
}

const actions = {
  increment({ commit }, number) { //これだと、commitしかしてないことが分かって良いらしい
    commit("increment", number);
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
