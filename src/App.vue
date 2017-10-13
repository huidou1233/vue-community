<template>
  <div id="app">
    <header class="navbar">
      <div class="navbar-inner">
        <div class="container clearfix">
          <router-link class="brand" to="/" exact>
            <img src="./assets/logo.png">
            Vue.js
          </router-link>
          <input class="search-query" type="text">
          <ul class="nav pull-right">
            <li><router-link to="/">首页</router-link></li>
            <li><a href="http://www.hubwiz.com/course/?type=Vue.js&affid=vue-js">交互教程</a></li>
            <li><a href="javascript:void(0)" @click='showModal'>微信公众号</a></li>
            <li><a href="http://doc.vue-js.com/">VUE 2.0</a></li>
            <li v-if="accesstoken"><a @click='loginout'>退出</a></li>
            <li v-else><router-link to="/login">登录</router-link></li>
          </ul>
        </div>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <div id="main">
         <div id="sidebar">
          <div class="panel">
            <div class="inner">
              <a href="http://xc.hubwiz.com/course/592ee9b2b343f27b0ae1ba99?affid=vue-js" target="_blank">
                <img src="https://user-images.githubusercontent.com/9276376/30106888-937495f2-932f-11e7-98b4-d722141e0b23.png" style="width:100%;height:45px;">
              </a>
              <a href="https://www.vue-js.com/nav.html" target="_blank">
                <img src="https://user-images.githubusercontent.com/9276376/27581837-70cf9944-5b61-11e7-8d76-72cfc3856dad.png" style="width:100%;height:45px;">
              </a>
              <a href="http://xc.hubwiz.com/course/592ee9b2b343f27b0ae1ba99?affid=vue-js" target="_blank">
                <img src="https://cloud.githubusercontent.com/assets/9276376/18077980/92747c60-6ebb-11e6-9a6c-e65bfe42d45e.png" style="width:100%;height:45px;">
              </a>
              <a href="http://weekly.vue-js.com/#/" target="_blank">
                <img src="https://user-images.githubusercontent.com/9276376/30099651-eb36c06a-9318-11e7-8987-2da1bb2b3e13.png" style="width:100%;height:45px;">
              </a>
              <a href="https://user-images.githubusercontent.com/9276376/30099651-eb36c06a-9318-11e7-8987-2da1bb2b3e13.png" target="_blank">
                <img src="https://user-images.githubusercontent.com/9276376/30099311-fd5c02f6-9317-11e7-8103-abb77c02fb40.png" style="width:100%;height:45px;">
              </a>
            </div>
          </div>
        </div>
        <div id="content">
          <keep-alive>
            <router-view v-if="$route.meta.isKeepAlive" class="view"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.isKeepAlive" class="view"></router-view>
        </div>
        
      </div>
    </transition>
    <transition name="slide-fade" >
      <div id="wechat" class="modal" v-if='isModalShow'  @click='preventModal'>
        <div class="modal-body">
          <div class="wechatbox">
            <img src="https://user-images.githubusercontent.com/9276376/30367105-de95534e-989f-11e7-8c43-039222352121.png" alt="wechat">
            <p>Vue中文社区 独家公众号，面向前端爱好者， 每日更新最有料的文章，最前沿的资讯,内容包含但不限于Vue,React,Angular,前端工程化...等各种"大保健"知识点,右上角点关注,老司机带你弯道超车,不定期更有各种福利赠送 <br><br>
              <span>👈🏼 亲,微信扫一扫奴家</span> 
            </p>
          </div>
        </div>
      </div>
    </transition>
    <transition name='backdrop-fade' mode='out-in'>
      <div  class="modal-backdrop" v-if='isModalShow' @click='hideModal'></div>
    </transition>
    <div id="backtotop" :class='{ showBack: backToTopIsShow }' @scroll='showBackToTop'>回到顶部</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isModalShow: false
    }
  },

  computed: {
    accesstoken () {
      return window.localStorage.getItem('accesstoken')
    },
    backToTopIsShow () {
      this.showBackToTop()
    }
  },
  methods: {
    loginout () {
      window.localStorage.removeItem('accesstoken')
      location.assign('/')
    },

    showModal () {
      this.isModalShow = true
    },

    hideModal () {
      this.isModalShow = false
    },
    preventModal () {
    },
    showBackToTop () {
      let scrollTop = document.body.scrollTop
      let height = document.body.height
      console.log('scrollTop', scrollTop, 'height', height)
      if (scrollTop > height / 2) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="stylus">
body
  background-color: #e1e1e1;
  font-family "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti!important
  margin 0
  line-height 20px
  color #333
  .navbar
    margin-bottom 0
    z-index 9
    width 100%
    position relative
    background #1c6132
    font-size 13px
    .navbar-inner
      background 0 0
      border-radius 0
      border 0
      box-shadow none
      width 90%
      margin auto
      padding 5px
      min-height 40px
    .container
      width 100%
      min-width 960px
      margin 0 auto
      max-width 1400px
    .brand
      width 140px
      padding 0 10px
      height 45px
      display block
      float left
      margin-left -20px
      font-size 20px
      font-weight 200
      text-shadow 0 1px 0 #fff
      color #fff
      img
        height 45px
        max-width 100%
        vertical-align middle
        border 0
    .search-query
      background #4f9639 url(../static/image/search.png) no-repeat 4px 4px
      padding 3px 5px 3px 22px
      color #666
      border 0
      margin-top 2px
      transition all .5s
      margin-bottom 0
      line-height: 1;
      margin-top 8px
      border-radius 15px
      outline none
      &:link,&:visited
        background-color #4f9639
      &:hover,&:active
        background-color #fff;
    .pull-right
      float right 
      margin-right 0
    .nav
      position relative
      left 0px
      display block
      margin 0 10px 0 0 
      list-style none
      li
        line-height 25px 
        float left
        a
          color #eee
          padding 10px 15px
          display block
          font-weight bold
          &:hover,&:active
            color white
body, input, p, textarea 
  font-size 14px
  word-break break-word
a
  text-decoration none
.clearfix:after
    clear both
    height 0
    overflow hidden
    display block
    visibility hidden
    content "."
.fade-enter-active, .fade-leave-active
  transition all .2s ease
.fade-enter, .fade-leave-active
  opacity 0
.slide-fade-enter-active 
  transition all .3s ease-in-out;
.slide-fade-leave-active
  animation move .3s ease-in-out
.slide-fade-enter
  transform translateY(-100px)
.slide-fade-leave,.slide-fade-leave-to
  transform translateY(-100px)
@keyframes move {
  to {
    transform translateY(-100px)
    animation-timing-function ease-in
  }
  from {
    transform translateY(0px)
    animation-timing-function ease-in
  }
}
.backdrop-fade-enter-active
  transition all .3s ease-in-out;
.backdrop-fade-leave-active
  transition all .3s ease-in-out;
#main
  width 90%
  max-width 1400px
  min-width 960px
  margin 15px auto
  min-height 400px
  position relative
  #sidebar
    width 290px
    font-size 14px
    float right
    margin-bottom 20px
    .panel
      margin-bottom 13px
      font-size 13px
      .inner
        line-height 2em
        padding 10px
        background-color white
        border-radius 0 0 3px 3px
  #content 
    padding 0
    margin-right 305px
.modal
  position fixed
  top 10%
  left 50%
  z-index 1000
  width 560px
  margin-left -280px
  background-color #fff
  border 1px solid rgba(0, 0, 0, .3)
  border-radius 6px
  outline 0
  box-shadow 0 3px 8px rgba(0, 0, 0, .3)
  background-clip padding-box
  .modal-body
    position relative
    max-height 400px
    padding 15px
    overflow-y auto
    .wechatbox
      display flex 
      align-items center
      justify-content space-between
      p
        flex 1
        line-height 26px
        span
          color #1db702
.hide
  display none
.modal-backdrop
  opacity .5
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  width 100%
  height 100%
  z-index 990
  background-color #000
#backtotop
  display none
  top 200px
  right 0
  width 24px
  color gray
  padding 12px 0 12px 5px
  position fixed
  cursor pointer
  text-align center
  z-index 20
  background-color white
  border-radius 12px 0 0 12px
.showBack
  display block
  top 200px
  right 0
</style>
