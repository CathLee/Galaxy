// pages/toModify/toModify.js

import{
  wxapi,
  wxsetData
}from "../../utils/wxapi.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 15,
    windowHeight: '',
    navbarData: {
      title: '修改班级圈', //导航栏 左边的标题
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
    myclassList: [{
        title: "物理强化一班",
        id: "864886"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      },
      {
        title: "物理强化三班",
        id: "468264"
      }
    ],
    popup:true,
    classId:'',//班级圈id号
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
  /**
   * 一定页面高度时显示小火箭icon
   */
  scrollToUpper(e) {
    var _this = this;
      console.log(e)
      let t = e.detail.scrollTop;
      // console.log("页面高度为",t)
      if (t > 100 && !this.data.floorstatus) {
        // 避免重复setData
        this.setData({
          floorstatus: true
        });
      }

      if (t <= 100 && this.data.floorstatus) {
        this.setData({
          floorstatus: false
        });
      }
  },

  goTop: function (e) { // 一键回到顶部
    this.setData({
      scrollTop: this.data.scrollTop = 0
    });
  },
  loadMore() { // 触底加载更多
    var _this = this;
    
      const result = this.data.myclassList;
      const resArr = []
      //这里可以使用自己的ajax
      for (let i = 0; i < 10; i++) {
        resArr.push(i);
      };
      var cont = result.concat(resArr); //合并请求的数据
      console.log(resArr.length);
      if (cont.length >= 50) {
        wx.showToast({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
          title: '我也是有底线的',
          icon: 'success',
          duration: 300
        });
        return false;
      } else {
        wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
          title: '加载中',
          icon: 'loading',
        });
        setTimeout(() => {
          this.setData({
            myclassList: cont
          });
          wx.hideLoading();
        }, 1500)
      }
    
  },

  // 点击跳转到修改班级名页面
  nameChange(){
    wx.navigateTo({
      url:'../classNameChange/nameChange',
    })
  },
  /* 隐藏弹窗 */
  hidePopup(flag = true) {
    this.setData({
      "popup": flag
    });
  },
  /**
   * 显示是否解散的warning,并设置所解散的班级号
   */
  showDialog(e){
    this.setData({
      "popup":false,
      "classId":e.currentTarget.dataset.classId
    })
  },
  /**
   * 解散班级圈
   */
  disBand(){
    var that = this;
    return new Promise((resolve,reject)=>{
     return wxapi('request',{
        "data": that.data.classId,
        "url":"url",
        'header': {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }).then((res)=>{
        console.log(res)
      }).catch((error)=>{
        console.log(error)
      })
    })
  }
})