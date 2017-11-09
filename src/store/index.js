import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  limit: 20,
  activeType: null,
  topicsLists: {},
  topicDetail: {}
}

export function createStore () {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}
