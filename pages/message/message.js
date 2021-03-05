// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: '信息管理', //导航栏 左边的标题
      showCapsule: 1
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
    mesList: [{
        info: '您的班级申请已通过',
        time: '2020年12月25日 15:23',
        count: 0
      },
      {
        info: '您的班级申请已通过',
        time: '2020年12月25日 15:23',
        count: 0
      }, {
        info: '您的班级申请已通过',
        time: '2020年12月25日 15:23',
        count: 0
      }, {
        info: '您的班级申请已通过',
        time: '2020年12月25日 15:23',
        count: 0
      }, {
        info: '您的班级申请已通过',
        time: '2020年12月25日 15:23',
        count: 0
      }, {
        info: '您的班级申请已通过',
        time: '2020年12月25日 15:23',
        count: 0
      }, {
        info: '您的班级申请已通过',
        time: '2020年12月25日 15:23',
        count: 0
      }, {
        info: '您的班级申请已通过',
        time: '2020年12月25日 15:23',
        count: 0
      },
    ],
    bgc: "#efefef",
    flag: 0
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
  showDetail(e) {
    let index = e.currentTarget.dataset.index;
    let count = e.currentTarget.dataset.count;
    this.data.mesList[index].count++
    if (this.data.mesList[index].count>0) {
      wx.showModal({
        title: e.currentTarget.dataset.title,
      
      })
    }
    console.log(count)
  }
})