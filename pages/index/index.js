// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    styleBorder:'',
    styleBorderTwo:'',
    styleBorderThree:'',
    styleBorderFour:'',
    fontColor:'',
    fontColorTwo:'',
    fontColorThree:'',  tabbar: {
      "color": "#999999",
      "selectedColor": "#7788dd",
      "borderStyle": "#dcdcdc",
      "backgroundColor": "#ffffff",
      "list": [{
        "key": "home",
        "text": "分区",
        "iconPath": "/pages/index/image/index.png",
        "selectedIconPath": "/pages/index/image/indexhl.png",
      }, {
        "key": "userinfo",
        "text": "我的",
        "iconPath": "/pages/index/image/userinfo.png",
        "selectedIconPath": "/pages/index/image/userinfohl.png"
      }]
    },
    fontColorFour:'',
    iconSrcOne:'./image/studyicon.png',
    iconSrcTwo:'./image/homework.png',
    iconSrcThree:'./image/test.png',
    iconSrcFour:'./image/circle.png',
  
    // 自定义头部导航栏数据
    navbarData: {
      title: '银河教育', //导航栏 左边的标题
      showCapsule:0
    },
    height: app.globalData.height * 2 + 20,
    hideLoading:false
  },
  // 底部导航跳转
  bindViewTap(e) {
    const index = e.detail;
    const items = [
    {
      "pagePath": "../index/index",
    }, 
    {
      "pagePath": "../userinfo/userinfo"
    }];
    const url = items[index].pagePath
    console.log(url)
    wx.switchTab({
      url: url
    })
  },
  onLoad() {
    this.setData({
      hideLoading: true,
  })
  },
  // 实现点击模块时，动态更新css
  changeStyle(){
    this.setData({
      styleBorder:'border:solid 6rpx #ffffff;',
      styleBorderTop:'border:solid 6rpx #ffffff;border-width:6rpx 6rpx 0 6rpx;',
      fontColor:'color:#7ecef4',
      iconSrcOne:'./image/studyiconhl.png',
    })
    this.pageToStudy()
  },
  changeStyleTwo(){
    this.setData({
      styleBorderTwo:'border:solid 6rpx #ffffff;',
      styleBorderTopTwo:'border:solid 6rpx #ffffff;border-width:6rpx 6rpx 0 6rpx;',
      fontColorTwo:'color:#7ecef4',
      iconSrcTwo:'./image/homeworkhl.png',
    })
    this.pageToHomework()
  },
  changeStyleThree(){
    this.setData({
      styleBorderThree:'border:solid 6rpx #ffffff;',
      styleBorderTopThree:'border:solid 6rpx #ffffff;border-width:6rpx 6rpx 0 6rpx;',
      fontColorThree:'color:#7ecef4',
      iconSrcThree:'./image/testhl.png',
    }),
    this.pageToTest()
  },
  changeStyleFour(){
    this.setData({
      styleBorderFour:'border:solid 6rpx #ffffff;',
      styleBorderTopFour:'border:solid 6rpx #ffffff;border-width:6rpx 6rpx 0 6rpx;',
      fontColorFour:'color:#7ecef4',
      iconSrcFour:'./image/circlehl.png',
    }),
    this.pageToQuestion()
  },
  // 实现点击时，navigation跳转到相应的页面
  pageToQuestion(){
    wx.navigateTo({
      url: '../question/question',
    })
  },
  pageToStudy(){
    wx.navigateTo({
      url: '../study/study',
    })
  },
  pageToHomework(){
    wx.navigateTo({
      url: '../homework/homework',
    })
  },
  pageToTest(){
    wx.navigateTo({
      url: '../mytest/test',
    })
  }
})