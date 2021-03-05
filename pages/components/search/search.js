// pages/components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchVal:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeAndSend(e){
      let that = this;
      that.setData({
        searchVal:e.detail.value
      })
      that.triggerEvent('search',that.data.searchVal);
    }
  }
})
