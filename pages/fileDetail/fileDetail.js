// pages/fileDetail/fileDetail.js
Page({
  fileId:'',
  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: '文件夹详情', //导航栏 左边的标题
      showCapsule:1
    },
    sourceList:[
      
    {
      title:"九年级下学期文化常识",
      time:"2020年12月25日",
      id:'01'
    },
    {
      title:"九年级下学期文化常识",
      time:"2020年12月25日"
    },
    {
      title:"九年级下学期文化常识",
      time:"2020年12月25日"
    }  
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      fileId:options.id
    })
    // 页面加载前获取sourceList资源
    this.request();
  },

  request(){
    const that = this;

    wx.request({
      url: 'url',
      success:res=>{
        that.setData({
          sourceList:res.data
        })
      }
    })
  },
  // 删除选定的资源
  deleteSource(e){
    console.log(e)
    let myId = e.currentTarget.dataset.myId;
    const myData = {
      id:myId
    }
    wx.request({
      url: 'url',
      data:myData,
      method:"POST",
      success:res=>{
      //  到时候再观察是否成功
      console.log("该资料已删除") 
      },
      fail(err){
        console.log("错误信息为：",err.message);
      }

    })
  },
  // 删除文件夹
  deleteFile(){
    let that = this;
    const file = {
      id:that.data.myId
    }
    if(that.data.myId != undefined){
      // 如果当前所进入的页面，不存在fileId，则代表该页面不支持删除文件
      wx.request({
        url: 'url',
        data:file,
        success:res=>{
          console.log("删除成功");
        },
        fail:err=>{
          console.log("错误信息为："+err.message);
        }
      })
    }else{
      console.log("该页面不支持删除当前文件夹")
    }
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

  }
})