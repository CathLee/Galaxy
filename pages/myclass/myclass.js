// pages/myclass/myclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: '班级圈管理', //导航栏 左边的标题
      showCapsule:1
    },
    tabbar: {
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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
  toNewClass(){
    wx.navigateTo({
      url: '../toNew/toNew',
    })
  },
  toJoinClass(){
    wx.navigateTo({
      url: '../toJoin/toJoin',
    })
  },
  toModifyClass(){
    wx.navigateTo({
      url: '../toModify/toModify',
    })
  },
  toSourceClass(){
    wx.navigateTo({
      url: '../toSource/toSource',
    })
  }
})