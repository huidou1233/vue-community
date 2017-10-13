<template>
  <div class="panel">
    <div class="header">
      <ul class="breadcrumb">
        <li>
          <router-link to="/">主页</router-link>
          <span class="divider">/</span>
        </li>
        <li>登录</li>
      </ul>
    </div>
    <div class="inner">
      <div class="div-horizontal">
        <div class="control-group">
          <label for="accesstoken" class="fl control-label">accesstoken</label>
          <div class="controls">
            <input id="accesstoken" v-model="accesstoken" class="input-xlarge" type="password">
          </div>
        </div>
        <div class="div-actions">
          <input type="button" @click="login" value="登录">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        accesstoken: ''
      }
    },
    methods: {
      login () {
        this.$store.dispatch('FETCH_LOGIN', {
          accesstoken: this.accesstoken
        }).then(() => {
          let accesstokenG = this.$store.getters.accesstoken
          var exp = new Date()
          exp.setTime(exp.getTime() + 60 * 24 * 60 * 60 * 1000)
          document.cookie = 'accesstoken=' + accesstokenG + ';expires=' + exp.toUTCString() + ';path=/'
          var accesstokenStorage = window.localStorage
          accesstokenStorage.setItem('accesstoken', accesstokenG)
          location.assign('/')
        })
      }
    }
  }
</script>
<style lang="stylus">
  .panel
    .header
      padding 10px
      background-color #F6F6F6;
      border-radius 3px 3px 0 0;
      .breadcrumb
        padding: 0;
        margin: 0;
        border: 0;
        background: 0 0;
        box-shadow: none;
        a
          color #369219
        li
          display inline-block
        .divider
          padding: 0 5px;
          color: #ccc;
    .inner
      padding 10px
      background-color #FFF
      border-radius 0 0 3px 3px
      .div-horizontal
        margin-top 40px
        .control-group
          margin-bottom 20px
          .control-label
            width 160px
            text-align right 
            margin-top 5px
          .controls
            margin-left 180px
            .input-xlarge
              border 1px solid #ccc
              box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
              transition: border linear .2s,box-shadow linear .2s;
              width: 270px;
              outline none
              padding 4px 6px
              border-radius 4px
            input:-webkit-autofill
              background-color: rgb(250, 255, 189);
              background-image: none;
              color: rgb(0, 0, 0);
        .div-actions
          padding-left 180px
          max-height 40px
          padding: 19px 20px 20px;
          margin 20px 0 40px 160px
          input[type='button']
            width 270px
            border none
            padding 5px 10px
            font-size: 14px;
            background-color #3374de
            color white
            outline none
            cursor pointer
            &:link, &:visited
              background-color #3374de
            &:hover, &:active
              background-color #05c
</style>