<template>
  <div class="list">
    <Menu mode="horizontal" :activeName="type" @on-select="changeTab">
      <MenuItem name="all">全部</MenuItem>
      <MenuItem name="good">精华</MenuItem>
      <MenuItem name="weex">weex</MenuItem>
      <MenuItem name="share">分享</MenuItem>
      <MenuItem name="ask">问答</MenuItem>
      <MenuItem name="job">招聘</MenuItem>
    </Menu>
    <ul name="item">
      <item v-for="item in displayedItems"  :item="item"></item>
    </ul>
    <div class="pagination">
      <Page :total="this.total || 910" :current="currentPage" show-elevator show-total @on-change="change" :page-size="26">
      </Page>
    </div>
  </div>
</template>

<script>

import Item from '../components/Item.vue'
export default {
  name: 'list-view',

  components: {
    Item
  },

  props: {
    type: String
  },

  data () {
    return {
      displayedItems: [],
      total: '',
      currentTab: ''
    }
  },

  beforeMount (to, from) {
    this.loadItems()
  },

  computed: {
    currentPage () {
      let page = Number(sessionStorage.getItem('page'))
      return page || 1
    }
  },

  methods: {
    loadItems () {
      let currentPage = sessionStorage.getItem('page') || 1
      this.$store.dispatch('FETCH_LIST_DATA', {tab: this.type, page: currentPage}).then(() => {
        this.displayedItems = this.$store.getters.items.data
        var tab = this.type
        if (tab === '' || tab === 'all') {
          this.total = 910
        } else if (tab === 'good') {
          this.total = 25
        } else if (tab === 'weex') {
          this.total = 10
        } else if (tab === 'share') {
          this.total = 220
        } else if (tab === 'ask') {
          this.total = 670
        } else if (tab === 'job') {
          this.total = 40
        }
        this.currentTab = 1
      })
    },
    changeTab (name) {
      sessionStorage.setItem('page', '1')
      this.$router.push({name: name})
    },
    change (page) {
      sessionStorage.setItem('page', page)
      this.$store.dispatch('FETCH_LIST_DATA', {tab: this.type || 'all', page: page}).then(() => {
        this.displayedItems = this.$store.getters.items.data
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate', to, from)
  },
  watch: {
    '$route' (to, from) {
      console.log('$route', to, from)
    }
  }
}
</script>

<style lang="stylus">
  .list
    background-color white
    .header
      padding: 10px
      background-color #f6f6f6
      border-radius 3px 3px 0 0 
      a
        color #369219
        margin 0px 10px
        padding 0px 4px
        line-height 22px
        display inline-block
        &:hover
          border-bottom-width 0
          border-bottom-color #F6F6F6
          color #005580
      a.active,a.active:hover
          background-color #369219
          color #fff
          border-radius 3px
    .ivu-menu-light.ivu-menu-horizontal
      background #F6F6F6
      border-radius  3px 3px 0 0 
      height 40px
      line-height 40px
      .ivu-menu-item
        color #369219
        margin 9px 10px
        padding 0px 4px
        height 22px
        line-height 22px
      .ivu-menu-item:hover,.ivu-menu-item-active
        border-bottom-width 0 !important
        border-bottom-color #F6F6F6
        color #005580
      .ivu-menu-item-active,.ivu-menu-item-active:hover
        background-color #369219
        color #fff
        border-radius 3px
  
  .pagination
    padding 10px
</style>