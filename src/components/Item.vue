<template>
  <li class="cell">
    <router-link to="javascript:void" class="user_avatar pull-left"><img :src="item.author.avatar_url" alt=""></router-link>
      <span class="pull-left reply_count">
      <span class="count_of_replies">{{ item.reply_count }}</span><span>/</span><span class="count_of_visits">{{ item.visit_count }}</span>
        </span>
      <router-link to="javascript:void" class="last_time pull-right">
        <img :src="item.author.avatar_url" class="user_small_avatar">
        <span class="last_active_time">{{ fromNow(item.last_reply_at) }}</span>
      </router-link>
      <div class="topic_title_wrapper">
        <span class="topiclist-tab" :class='{put_top: item.top, put_good: item.good}'>{{ getTab }}</span>
        <a class="topic_title" @click="showDetail" :class='{topic_title_a: item.top}'>{{ item.title }}</a>
      </div>
  </li>
</template>

<script>
  import moment from 'moment'
  import { tab } from '../util/filter'
  export default {
    name: 'news-item',

    props: ['item'],

    methods: {
      fromNow (time) {
        return moment(time).fromNow()
      },
      showDetail () {
        this.$router.push({path: '/topics/detail/' + this.item.id})
      }
    },
    computed: {
      getTab () {
        return tab(this.item.tab, this.item.top, this.item.good)
      }
    }
  }
</script>

<style lang="stylus">
  .cell
    padding: 10px 10px 0 10px
    font-size 14px
    position relative
    overflow hidden
    background white
    border-top 1px solid #f0f0f0
    line-height 2em
    &:nth-child(1)
      border-top 0
    &:hover
      background #f5f5f5
    .user_avatar
      img
        width 30px
        height 30px
        border-radius 3px
    .pull-left
      float left
    .reply_count
      width 76px
      display inline-block
      text-align center
      .count_of_replies
        color #9e78c0
      .count_of_visits
        color #b4b4b4
    .pull-right
      float right
    .last_time
      font-size 12px
      display inline-block
      margin-left 15px
      color #777 
      .user_small_avatar
        width 18px
        height 18px
        vertical-align middle
        border-radius 3px
        margin-right 6px
      .last_active_time
        text-align right 
        min-width 50px
        display inline-block
        white-space nowrap
    .topic_title_wrapper
      text-overflow ellipsis
      white-space nowrap
      .topiclist-tab
        background-color #e5e5e5
        color #999
        border-radius 3px
        font-size 12px
        padding 3px 4px
      .put_good
        background #369219
        padding 1px 2px
        border-radius 2px
        color #FFF
        font-size 13px
      .put_top 
        background: #369219;
        padding: 2px 4px;
        color #FFF
        border-radius 3px
        font-size 12px
      a.topic_title
        max-width 72%
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        display inline-block
        vertical-align bottom 
        font-size 16px
        line-height 30px
        color #333
        &:link
          color #333
        &:visited
          color #778087
        &:hover
          color #333
          text-decoration underline
        &:active
          color #333
          text-decoration underline
    a
      color #778087
</style>