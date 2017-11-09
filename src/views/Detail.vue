<template>
  <div class="detail-container" >
    <div class="content">
      <div class="header">
        <h3>{{ item.title }}</h3>
        <div class="change">
          <span> 发布于{{ fromNow(item.create_at) }}</span>
          <span> 作者 {{ item.author.loginname }}</span>
          <span> {{ item.visit_count }}次浏览</span>
          <span> 来自 {{ getTab }}</span>
        </div>
      </div>
      <div class="inner topic_content" v-html='item.content'></div>
    </div>
    <div class="reply">
      <div class="reply-header"><span class="col_fade">{{ replyLength }}回复</span></div>
      <ul name="reply">
        <reply v-for="(reply, index) in item.replies" :index="index" :reply="reply"></reply>
      </ul>
    </div>
  </div>
</template>

<script>
  import { tab } from '../util/filter'
  import moment from 'moment'
  import Reply from '../components/reply.vue'
  export default {
    data () {
      return {
        id: this.$route.params.id,
        item: {}
      }
    },

    components: {
      Reply
    },

    props: {
      reply: Object,
      index: Number
    },

    beforeMount () {
      this.topicDetail(this.id)
    },

    methods: {
      topicDetail (id) {
        this.$store.dispatch('FETCH_ITEM', {
          id: id
        }).then(() => {
          this.item = this.$store.getters.item.data
          console.log(this.item)
        })
      },
      fromNow (time) {
        return moment(time).fromNow()
      }
    },
    computed: {
      getTab () {
        return tab(this.item.tab)
      },
      replyLength () {
        return this.item.replies.length
      }
    }
  }
</script>

<style lang="stylus">
 .detail-container
   .content
      background-color white 
      .header
        padding 10px
        h3
          font-size 22px
          margin: 8px 0
          color #333
      .change
        color #838383
        font-size 12px
        span
          &:before
            content: '•'
      .inner
        padding 0 10px 10px
        border-top 1px solid #e5e5e5
      .topic_content
        margin 0 10px
        padding 10px
        img
          height auto
          max-width 100%
          border 0
        h2,h1
          font-size 26px
          margin: 30px 0 15px;
          line-height 40px
          border-bottom: 1px solid #eee;
        p
          line-height 1.8
      .markdown-text li
        margin 0 0 10px 25px
        list-style-type disc
        line-height 2em
        li
          list-style-type circle
   .reply
     margin-top 13px
     .reply-header
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      .col_fade
        color #1c6132
        font-size 14px

</style>