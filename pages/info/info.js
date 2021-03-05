// pages/info/info.js
const app = getApp()

import{
  wxapi,
  wxsetData
}from "../../utils/wxapi.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      title: '个人信息', //导航栏 左边的标题
      showCapsule: 1
    },
    nameVal: '方城'
  },


  changenameValue(e) {
    // 双向绑定input值
    var that = this;
    that.setData({
      nameVal: e.detail.value,
    })
  },
  changesexValue(e) {
    // 双向绑定input值
    var that = this;
    that.setData({
      sexVal: e.detail.value,
    })
  },
  changeschoolValue(e) {
    // 双向绑定input值
    var that = this;
    that.setData({
      schoolVal: e.detail.value,
    })
  },

  changegradeValue(e) {
    // 双向绑定input值
    var that = this;
    that.setData({
      gradeVal: e.detail.value,
    })
  },
  changetelValue(e) {
    // 双向绑定input值
    var that = this;
    that.setData({
      telVal: e.detail.value,
    })
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
  /**
   * 保存所填写的表单，并进行提交
   */
  saveInfo() {
    var that = this;
    wxapi('request',{
      "url":"url",
      "method":"POST",
      "header": {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      "data":{
        "name":that.data.nameVal,
        "sex":that.data.sexVal,
        "school":that.data.school,
        "grade":that.data.grade,
        "tel":that.data.tel
      }
    }).then((res)=>{
      if(res.data.status === "200"){
        console.log(res)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
})