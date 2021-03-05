
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: app.globalData.height * 2 + 20,
    height: app.globalData.height * 2 + 80,
    windowHeight:'',
    scrollTop: 15,
    Posted:true,
    New:false,
    class:'选择发布的班级编号',
    optionShow:false,//是否展示下拉菜单
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
      title: '课时统计', //导航栏 左边的标题
      showCapsule: 1
 },
   
    
    //作业资源
    doneClass: [{
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24'
    }, {
      title: '九年级下学期文化常识',
      time: '2020年12月25日 14:24'
    },],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 动态设置屏幕高度
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          windowHeight:result.windowHeight
        })
      },
    })

    // 预加载doneclass
      
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
  onPullDownRefresh() {
    console.log("下啦啦啦啦")
  },
  refresh() { // 函数式触发开始下拉刷新。如可以绑定按钮点击事件来触发下拉刷新
    wx.startPullDownRefresh({
      success(errMsg) {
        console.log('开始下拉刷新', errMsg)
      },
      complete() {
        console.log('下拉刷新完毕')
      }
    })
  },
  
  //科目导航选中状态切换
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
  // 监听页面高度,显示火箭icon
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
  // 发布/添加导航切换
  menuChange(e){
    this.setData({
      New:e.detail.New,
      Posted:e.detail.Posted
    })
  },
  

  // 获取百度access_token

  // 这里尚未完成，未注册小程序，域名不合法
  getBaiduToken(){
    var apikey = "5OkdBC9pUmlkYS6EFMF6riWI";
    var seckey = "gfkR4MilOG0xLmYf3qtXnSfrSGPqD3yy"
    var tokenUrl = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${apiKey}&client_secret=${secKey}` ";
    var _this = this;
    wx.request({
      url: tokenUrl,
      method:'POST',
      dataType:'json',
      header:{            
        'content-type': 'application/json; charset-UTF-8'        
      },
      success:function(res){
        console.log("百度token获取成功:",res);
      },
      fail:function(err){
        console.log("错误信息是:",err);
      }

    })
  },

  //上传本地图片
  uploadLocal(){
    this.getBaiduToken();
  },
  showOption(e){
    console.log(e)
    var _this = this;
    if(e.currentTarget.dataset.target == 'self'){
      _this.setData({
        optionShow:!_this.data.optionShow
      })
    }
  },
  changeClass(e){
    var _this = this;
    var chooseClass = e.currentTarget.dataset.class;
    _this.setData({
      class:chooseClass
    })
  },
  // 跳转到添加题目页
  continueAdd(){
    wx.navigateTo({
      url: '/pages/addQues/addQues',
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
})