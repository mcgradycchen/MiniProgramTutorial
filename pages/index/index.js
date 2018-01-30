//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindLogTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../components/view/view/view'
    })
  },
  bindSwiperTap: function() {
    wx.navigateTo({
      url: '../components/view/swiper/swiper',
    })
  },
  bindScrollViewTap: function() {
    wx.navigateTo({
      url: '../components/view/scroll-view/scroll-view',
    })
  },
  bindMovableViewTap: function() {
    wx.navigateTo({
      url: '../components/view/movable-view/movable-view',
    })
  },
  bindCoverViewTap: function() {
    wx.navigateTo({
      url: '../components/view/cover-view/cover-view',
    })
  },
  bindIconBasicTap: function() {
    wx.navigateTo({
      url: '../components/basic/icon/icon',
    })
  },
  bindTextBasicTap: function() {
    wx.navigateTo({
      url: '../components/basic/text/text',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
