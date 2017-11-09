import {
  fetchTopicsItems,
  fetchTopicsById
} from '../api'

export default {

  FETCH_LIST_DATA: ({ commit, dispatch, state }, { tab, page }) => {
    console.log('FETCH_LIST_DATA tab', tab)
    // return fetchTopicsItems()
    //     .then(response => commit('SET_ITEMS', { response }))
    //     .then(() => dispatch('ENSURE_ACTIVE_ITEMS'), {
    //       tab: tab
    //     })
    return fetchTopicsItems(tab, page).then(response => commit('SET_ITEMS', { response }))
  },

  ENSURE_ACTIVE_ITEMS: ({ dispatch }, { tab }) => {
    console.log('ENSURE_ACTIVE_ITEMS tab', tab)
    return dispatch('FETCH_ITEMS', {tab: tab})
  },

  FETCH_ITEMS: ({ commit, state }, {tab}) => {
    console.log('FETCH_ITEMS', tab)
    if (typeof tab === 'object') {
      return fetchTopicsItems(tab.tab, tab.page).then(response => commit('SET_ITEMS', { response }))
    } else {
      return fetchTopicsItems(tab).then(response => commit('SET_ITEMS', { response }))
    }
  },

  FETCH_ITEM: ({ commit }, { id }) => {
    return fetchTopicsById(id).then(response => commit('SET_DETAIL', {response}))
  },
  FETCH_TOTAL: ({ commit }, { tab }) => {
    console.log('FETCH_TOTAL', tab)
    if (tab === '' || tab === 'all') {
      commit('SET_TOTAL', 910)
    } else if (tab === 'good') {
      commit('SET_TOTAL', 25)
    } else if (tab === 'weex') {
      commit('SET_TOTAL', 10)
    } else if (tab === 'share') {
      commit('SET_TOTAL', 220)
    } else if (tab === 'ask') {
      commit('SET_TOTAL', 670)
    } else if (tab === 'job') {
      commit('SET_TOTAL', 40)
    }
  }
}
