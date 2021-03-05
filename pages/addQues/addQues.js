// pages/addQues/addQues.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 15,
    windowHeight: '',
    tabbar: {
      "color": "#999999",
      "selectedColor": "#7788dd",
      "borderStyle": "#dcdcdc",
      "backgroundColor": "#ffffff",
      "list": [{
        "key": "add",
        "text": "新添加",
      }, {
        "key": "posted",
        "text": "已发布",
      }]
    },
    //自定义头部导航栏数据
    navbarData: {
      title: '添加题目', //导航栏 左边的标题
      showCapsule: 1
    },
    quesType: [{
      name: "选择题",
      type: 'choose'
    }, {
      name: '填空题',
      type: 'text',

    }, {
      name: '解答题',
      type: 'ask'
    }],
    hardType: [{
      name: '简单',
      type: 'easy'
    }, {
      name: '中等',
      type: 'middle'
    }, {
      name: '困难',
      type: 'hard'
    }],
    addSource: [{
        title: "九年级上学期文化常识",
        time: '2020年12月25日 14:24',
      },
      {
        title: "九年级上学期文化常识",
        time: '2020年12月25日 14:24'
      },
      {
        title: "九年级上学期文化常识",
        time: '2020年12月25日 14:24'
      },
      {
        title: "九年级上学期文化常识",
        time: '2020年12月25日 14:24'
      },
      {
        title: "九年级上学期文化常识",
        time: '2020年12月25日 14:24'
      },
      {
        title: "九年级上学期文化常识",
        time: '2020年12月25日 14:24'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          windowHeight:result.windowHeight
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
  bindViewTap(e) {
    const index = e.detail;
    const items = [{
        "pagePath": "/pages/addQues/addQues",
      },
      {
        "pagePath": "/pages/posted/posted"
      }
    ];
    const url = items[index].pagePath
    console.log(url)
    wx.navigateTo({
      url: url
    })
  },
  changeType(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      myType: type
    })
  },
  //难度导航选中状态切换
  changeHardType(e) {
    const hardType = e.currentTarget.dataset.hard;
    this.setData({
      myHardType: hardType
    })
  },
  loadMore() { // 触底加载更多
    var _this = this;
    const result = this.data.addSource;
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
    }
    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });
    setTimeout(() => {
      this.setData({
        addSource: cont
      });
      wx.hideLoading();
    }, 1500)
  },
  // 监听页面高度,显示火箭icon
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
})