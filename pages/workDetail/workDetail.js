// pages/workDetail/workDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    //自定义头部导航栏数据
    navbarData: {
      title: '作业详情', //导航栏 左边的标题
      showCapsule: 1
    },
    windowHeight: '',
    popup: true,
    items: [{
        value: '1',
        name: '高三10班'
      },
      {
        value: '2',
        name: '高三10班',
        checked: 'true'
      },
      {
        value: '3',
        name: '高三10班'
      },
      {
        value: '4',
        name: '高三10班'
      },
      {
        value: '5',
        name: '高三10班'
      },
      {
        value: '6',
        name: '高三10班'
      },
      {
        value: '7',
        name: '高三10班'
      },
      {
        value: '7',
        name: '高三10班'
      },{
        value: '7',
        name: '高三10班'
      },{
        value: '7',
        name: '高三10班'
      },{
        value: '7',
        name: '高三10班'
      },{
        value: '7',
        name: '高三10班'
      },{
        value: '7',
        name: '高三10班'
      },
    ]
  },

  /* 隐藏弹窗 */
  hidePopup(flag = true) {
    this.setData({
      "popup": flag
    });
  },
  // 弹出选择框
  subClass(e) {
    var that = this;
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
    /* 显示弹窗 */
    that.hidePopup(false);
    wx.request({
      url: 'url',
      data: list,
      method: 'POST',
      success(res) {

      }
    })
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
  gotoHomeworkDetail() {
    wx.navigateTo({
      url: '../questionDetail/questionDetail',
    })
  },
  gotoCompletion() {
    wx.navigateTo({
      url: '../completion/completion',
    })
  },
  gotoCorrect() {
    wx.navigateTo({
      url: '../gotoCorrect/gotoCorrect',
    })
  },
  cancelModal(){
    this.setData({
      popup:true
    })
  }
})