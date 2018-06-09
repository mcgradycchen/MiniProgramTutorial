//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    components: [
      {
        "category": "view",
        "name": "view",
        "display_name": "View"
      }, {
        "category": "view",
        "name": "scroll-view",
        "display_name": "Scorll View"
      }, {
        "category": "view",
        "name": "swiper",
        "display_name": "Swiper"
      }, {
        "category": "view",
        "name": "movable-view",
        "display_name": "Movable View"
      }, {
        "category": "view",
        "name": "cover-view",
        "display_name": "Cover View"
      }, {
        "category": "basic",
        "name": "icon",
        "display_name": "Icon Basic"
        }, {
        "category": "basic",
        "name": "text",
        "display_name": "Text Basic"
      }, {
        "category": "basic",
        "name": "rich-text",
        "display_name": "Rich Text"
      }, {
        "category": "basic",
        "name": "progress",
        "display_name": "Progress Basic"
      }, {
        "category": "form",
        "name": "button",
        "display_name": "Button Form"
      }, {
        "category": "form",
        "name": "checkbox",
        "display_name": "Checkbox Form"
      }, {
        "category": "form",
        "name": "form",
        "display_name": "Form Form"
      }, {
        "category": "form",
        "name": "input",
        "display_name": "Input Form"
      }, {
        "category": "form",
        "name": "label",
        "display_name": "Label Form"
      }, {
        "category": "form",
        "name": "picker",
        "display_name": "Picker Form"
      }, {
        "category": "form",
        "name": "picker-view",
        "display_name": "Picker View Form"
      }, {
        "category": "form",
        "name": "radio",
        "display_name": "Radio Form"
      }, {
        "category": "form",
        "name": "slider",
        "display_name": "Slider Form"
      }, {
        "category": "form",
        "name": "switch",
        "display_name": "Switch Form"
      }
    ]
  },
  //事件处理函数
  bingNavigateComponentTap: function(event) {
    if (event 
        && event.currentTarget 
        && event.currentTarget.dataset
        && event.currentTarget.dataset.category
        && event.currentTarget.dataset.name) {
      var category = event.currentTarget.dataset.category;
      var name = event.currentTarget.dataset.name;
      wx.navigateTo({
        url: utils.formatNavigateComponentPath(category, name)
      });
    }
  },
  bindLogTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: utils.formatNavigateComponentPath('view', 'view')
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
  bindRichTextBasicTap: function() {
    wx.navigateTo({
      url: '../components/basic/rich-text/rich-text',
    })
  },
  bindProgressBasicTap: function() {
    wx.navigateTo({
      url: '../components/basic/progress/progress',
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
