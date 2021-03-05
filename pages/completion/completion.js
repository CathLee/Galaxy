// pages/completion/completion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: '完成度详情', //导航栏 左边的标题
      showCapsule: 1
    },
    windowHeight: '',
    doneList: [{
      comp: '100',
      name: "高三十三班鱿鱼须"
    }, {
      comp: '100',
      name: "高三十班鱿鱼"
    }, {
      comp: '100',
      name: "高三三班鱼须"
    }],
    notDoneList: [{
      comp: '100',
      name: "高三十三班鱿鱼须"
    }, {
      comp: '100',
      name: "高三十班鱿鱼"
    }, {
      comp: '100',
      name: "高三三班鱼须"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          windowHeight: result.windowHeight
        })
      },
    })
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
  gotoCorrect(){
    wx.navigateTo({
      url: '../gotoCorrect/gotoCorrect',
    })
  }
})