// pages/toSource/toSource.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0, //左侧导航index
    myType: 'choose', //题型导航index
    myHardType: '', //难度导航index
    top: app.globalData.height * 2 + 20,
    height: app.globalData.height * 2 + 80,
    windowHeight:'',
    scrollTop: 0,
    //自定义底部导航栏数据
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
    //自定义头部导航栏数据
    navbarData: {
      title: '班级圈管理', //导航栏 左边的标题
      showCapsule: 1
    },
    //科目导航数据
    subList: [{
        name: "语文",
      },
      {
        name: "数学",
      },
      {
        name: "英语",
      },
      {
        name: "政治",
      },
      {
        name: "历史",
      },
      {
        name: "地理",
      },
      {
        name: "物理",
      },
      {
        name: "化学",
      },
      {
        name: "生物",
      },
      {
        name: "其他",
      }
    ],
    
    //文件夹资源
    sourceList: [{
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24',
      id:'01'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24',
      id:'02'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24',
      id:'03'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24',
      id:'04'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24',
      id:'05'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24',
      id:'05'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24',
      id:'06'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24',
      id:'07'
    },],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          windowHeight:result.windowHeight
        })
      },
    })
    // 获取资源列表
    this.request();

  },
  // 获取sourceList资源
  request(){
    wx.request({
      url: 'url',
      success:res=>{
        this.setData({
          sourceList:res.data
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
  changeActive: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      flag: index
    })
    // 根据flag的值进行相应类别资源的获取,这里未完成
    switch(flag){
      case 0:fetch('url').then(function(res){

      });break;
    }
  },
  loadMore() { // 触底加载更多
    var _this = this;
    if(_this.data.Posted == true){
      const result = this.data.sourceList;
    const resArr = []
    //这里可以使用自己的ajax
    for (let i = 0; i < 10; i++) {
      resArr.push(i);
    };
    var cont = result.concat(resArr);//合并请求的数据
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
          sourceList: cont
        });
        wx.hideLoading();
      }, 1500)
    }
    }
  },
  scrollToUpper(e){
    var _this = this;
    if(_this.data.Posted){
      console.log(e)
    let t =  e.detail.scrollTop;
    // console.log("页面高度为",t)
    if (t > 100 && !this.data.floorstatus) {
    	// 避免重复setData
    	this.setData({
	       floorstatus: true
	    });
    } 
    
   	if(t <= 100 && this.data.floorstatus){
  	  this.setData({
        floorstatus: false
      });
   	}
    }
  },
  goTop: function (e) {  // 一键回到顶部
    this.setData({
      scrollTop: this.data.scrollTop = 0
    });
  },
  menuChange(e){
    this.setData({
      New:e.detail.New,
      Posted:e.detail.Posted
    })
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
  // 新添加文件
  tonewFile(e){
    let fileId = e.currentTarget.dataset.id;
    console.log(fileId)
    wx.navigateTo({
      url: '../fileDetail/fileDetail?id='+fileId,
      
    })
  }
})