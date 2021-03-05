// pages/components/partMenu/partMenu.js
const app = getApp()
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
    top:'',
    Posted:true,
    New:false
  },

  attached(){
    this.setData({
      top:app.globalData.height
    })
    console.log("top is:",this.data.top)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    borderActive(e){
      const selNum = e.currentTarget.dataset.selected;
      if(selNum==0){
        this.setData({
          Posted:true,
          New:false
        })
      }else{
        this.setData({
          Posted:false,
          New:true
        })
      }
      this.triggerEvent('myevent',{
        Posted:this.data.Posted,
        New:this.data.New
      })
    }
  },
 
})
