// pages/toNew/toNew.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: '创建班级圈', //导航栏 左边的标题
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
    newVal:'',
    popup: true,
    imgSrc:"./image/success.png",
    titleStatu:"提交成功",
    reBackMsg:"班级群号为:",
    hideLoading: false,
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
  changeValue(e){
    // 双向绑定input值
    var that = this;
    that.setData({
      newVal:e.detail.value
    })
    console.log(that.data.newVal)
  },
    /* 隐藏弹窗 */
    hidePopup(flag = true) {
      this.setData({
          "popup": flag
      });
    },
  

  /** 
  提交创建班级的群名，并生成群号
  进行弹窗提示 
  **/
  subName(){
    let that = this;
    const list ={
      name: that.data.newVal
    }
    /* 显示弹窗 */
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
  },
  backToMenu(){
    wx.navigateTo({
      url: '../myclass/myclass',
    })
  }

})