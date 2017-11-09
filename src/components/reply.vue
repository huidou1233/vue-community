<template>
  <li class="cell" :class="{'reply_highlight': reply.ups.length > 7}">
    <div class="author_content">
      <a href="javascript:void(0)"><img :src="reply.author.avatar_url" alt=""></a>
      <div class="user_info">
        <a href="javascript:void(0)" class="dark reply_author">{{ reply.author.loginname }}</a>
        <a  href="javascript:void(0) " class="reply_time">{{ (index + 1) }}楼{{  fromNow(reply.create_at) }}</a>
      </div>
      <div class="user_action">
        <span><i class="fa up_btn fa-thumbs-o-up" :class="{'invisible': reply.ups.length == 0}" title="喜欢" @click="optionUpOrDown"></i></span>
        <span class="up-count" :class="{'hidden': reply.ups.length == 0}">{{ reply.ups.length }}</span>
        <span><i class="fa fa-reply reply2_btn"></i></span>
      </div>
    </div>
    <div class="reply_content from-amwydqqk" v-html="reply.content">
    </div>
  </li>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'comment',

    props: ['reply', 'index'],

    methods: {
      fromNow (time) {
        return moment(time).fromNow()
      },
      optionUpOrDown () {
      }
    },

    computed: {
      fetchReply () {
        return this.reply
      }
    }
  }
</script>

<style lang="stylus">
  .cell
    background-color #fff
    botder-top 1px solid #f0f0f0
    overflow hidden
    position relative
    padding 10px
    &:hover .user_action .up_btn
      visibility visible
    &:first-child
      botder-top none
    img
      width 30px
      height 30px
      border-radius 3px
    a.dark
      overflow: hidden;
      text-overflow: ellipsis;
      &:active,&:link,&:visited
        color #666
      &:hover
        color #385f8a
    .reply_author
      font-size 12px
      font-weight bold
    .reply_time
      font-size 11px
      color #08c
    .user_info
      margin-left 10px
      display inline-block
      vertical-align top
    .user_action
      float right 
      margin-left 20px
      font-size 15px
      .fa
        display inline-block
        text-rendering: auto
        color black
      .invisible
        visibility hidden
      .hidden
        display none
      .up_btn
        cursor pointer
        opacity .4
      .fa-thumbs-o-up:before
        content "\f087"
      .reply2_btn
        cursor pointer
        opacity .4
      .fa-reply:before
        content '\f112'
    .reply_content
      padding-left 50px
      color #333 
      a
        color #08c
  .cell.reply_highlight
    background-color #f4fcf0   
</style>