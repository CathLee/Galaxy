// pages/components/new_tabbar/newtabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {}
    },
    selected: {
      type: Number,
      value: 0
    },
    total:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached() {
      console.log(this.data.selected)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    change: function (e) {
      // 更新属性和数据的方法与更新页面数据的方法类似
      //获取当前选中的下标
      var index = e.currentTarget.dataset.selectedindex
      console.log(index)
      this.triggerEvent('tabChange', index);
      // this.setData({
      //   selected: index
      // })

    },
  }
})