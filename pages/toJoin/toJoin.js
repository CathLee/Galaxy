// pages/toJoin/toJoin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: '加入班级圈', //导航栏 左边的标题
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
    classList:[
      {
        title:"九年级(1)班",
        teacher:"周杰伦"
      },
      {
        title:"九年级(1)班",
        teacher:"周杰伦"
      },
      {
        title:"九年级(1)班",
        teacher:"周杰伦"
      },
      {
        title:"九年级(1)班",
        teacher:"周杰伦"
      },
      {
        title:"九年级(1)班",
        teacher:"周杰伦"
      }
    ],
    popup:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.request()
  },
  // 获取classlist
  request(){
    wx.request({
      url: 'url',
      success:res=>{
        this.setData({
          classList:res.data
        })
      }
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
  // 隐藏对话框
  hidePopup(flag = true) {
    this.setData({
        "popup": flag
    });
  },
  // 回到班级圈主页面
  backToMenu(){
    wx.navigateTo({
      url: '../myclass/myclass',
    })
  },
  // 提交申请
  apply(){
    let that = this
    that.hidePopup(false);
    // 三秒钟后跳转到主界面
    setTimeout(()=>{
      that.backToMenu()
    },3000)
    wx.request({
      url: 'url',
      data:list,
      method:'POST',
      success(res){
        
      }
    })
  }
})