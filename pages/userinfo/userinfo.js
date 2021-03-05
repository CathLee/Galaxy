// userinfo.js
const app = getApp()  

Page({
  data: {
    userinfo: [],
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
    navbarData: {
      title: '银河教育', //导航栏 左边的标题
      showCapsule: 0
    },
    height: app.globalData.height * 2 + 20,
    isLogin: true
  },

  // 生命周期函数，监听页面加载
  onLoad() {
    var that = this;

    /**
     * 由于url暂未确定所以无法获取相应的res参数
     */
    app.pageOnLoadInit(that).then((res)=>{
      console.log("这里的res为：",res)
    })
    

    // wx.getSetting({
    //   success: res => {
    //     console.log(res);
    //     if (!res.authSetting['scope.record']) {
    //       wx.authorize({
    //         scope: 'scope.record',
    //         success() {
    //           that.setData({
    //             isLogin: true
    //           })
    //         },
    //         fail() {
    //           that.setData({
    //             isLogin: false
    //           })
    //         }
    //       })
    //     }
    //     wx.openSetting({
    //       success: res => {
    //         res.authSetting = {
    //           "scope.userInfo": true,
    //           "scope.userLocation": true
    //         }
    //       }
    //     })
    //   }
    // })
  },

  /**
   * 底部导航栏跳转
  */
  bindViewTap(e) {
    const index = e.detail;
    const items = [{
        "pagePath": "../index/index",
      },
      {
        "pagePath": "../userinfo/userinfo"
      }
    ];
    const url = items[index].pagePath
    console.log(url)

    wx.switchTab({
      url: url
    })
  },
  // login() {
  //   const _this = this;
  //   wx.login({
  //     success: res => {
  //       console.log(res);
  //       // 发送code换取openid|sessionKey|unionId
  //       let encryptedData = wx.getStorageSync('encryptedData');
  //       let iv = wx.getStorageSync('iv');
  //       let code = res.code;
  //       wx.getUserInfo({
  //         success: function (res) {
  //           let encryptedData = res.encryptedData;
  //           let iv = res.iv
  //           _this.setData({
  //             encryptedData: encryptedData,
  //             iv: iv
  //           })
  //           console.log(iv, encryptedData)
  //           //发送请求
  //           wx.request({
  //             url: 'url',
  //           })
  //         }
  //       })
  //     }
  //   })
  // },

  
  /**
   * 跳转到注册页面
   */
  gotoReg() {
    wx.navigateTo({
      url: '../register/register',
    })
  },
  /**
   * 跳转到班级圈页面
   */
  gotoClass() {
    wx.navigateTo({
      url: '../myclass/myclass',
    })
  },
  /**
   * 跳转到修改个人信息页面
   */
  gotoInfo() {
    wx.navigateTo({
      url: '../info/info',
    })
  },
  /**
   * 跳转到课时统计页面
   */
  gotoKeShi(){
    wx.navigateTo({
      url: '../keshi/keshi',
    })
  },
  /**
   * 跳转到问题反馈页面
   */
  gotoReback(){
    wx.navigateTo({
      url: '../reback/reback',
    })
  },
  /**
   * 跳转到个人收件箱页面
   */
  gotoMessage(){
    wx.navigateTo({
      url: '../message/message',
    })
  }
})