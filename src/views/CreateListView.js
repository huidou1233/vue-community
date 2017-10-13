import ListView from './ListView.vue'

const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default function createListView (type) {
  console.log('camelize(type)', camelize(type))
  return {
    name: `${type}`,

    asyncData ({ store }) {
      return store.dispatch('FETCH_LIST_DATA', { tab: type })
    },

    title: camelize(type),

    render (h) {
      return h(ListView, {props: { type }})
    }
  }
}
