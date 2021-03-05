// pages/components/time.js
const util = require("../../../utils/util")
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true //支持组件定义的时候提供slot选项
  },

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    multiArray: [], //月和日从1开始
    nowDate: [], //设置当前时间(月和日从0开始),
    time:'输入最晚提交时间'
  },
  // 组件被触发时
  lifetimes: {
    attached() {
      const date = new Date(); //获取当前时间
      const nowYear = date.getFullYear();
      const nowMonth = date.getMonth();
      const nowDay = date.getDate();
      const nowHour = date.getHours();
      const nowMinute = date.getMinutes();
      var _this = this;
      //默认弹出组件时选中的时间为当前时间
      _this.setData({
        nowDate: [nowYear, nowMonth, nowDay - 1, nowHour, nowMinute]
      })
      // console.log(nowYear)
      //获取年份
      const years = [];
      for (let i = date.getFullYear(); i <= date.getFullYear() + 5; i++) {
        years.push({
          title: i + "年",
          value: i
        })
      }
      //获取月份
      const months = [];
      for (let i = 1; i <= 12; i++) {
        i = util.subTen(i)
        months.push({
          title: i + "月",
          value: +i
        })
      }
      // 获取日期
      const days = [];
      for (let i = 1; i <= 31; i++) {
        i = util.subTen(i);
        days.push({
          title: i + "日",
          value: +i
        });
      }

      //获取小时
      const hours = [];
      for (let i = 0; i < 24; i++) {
        i = util.subTen(i);
        hours.push({
          title: i + "时",
          value: +i
        });
      }
      // 获取分钟
      const minutes = [];
      for (let i = 0; i < 60; i++) {
        i = util.subTen(i)
        minutes.push({
          title: i + '分',
          value: +i
        })
      }
      _this.setData({
        multiArray: [years, months, days, hours, minutes]
      })
      console.log(_this.data.multiArray)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

    // 获取当前选择的时间
    _bindMultiPickerChange: function (e) {
      let indexs = e.detail.value;
      let year = this.data.multiArray[0][indexs[0]].value;
      let month = this.data.multiArray[1][indexs[1]].value
      let day = this.data.multiArray[2][indexs[2]].value
      let hour = this.data.multiArray[3][indexs[3]].value
      let min = this.data.multiArray[4][indexs[4]].value
      console.log('选择的时间为：', year, month, day, hour, min)
      this.setData({
        time:year+'-'+month+'-'+day+'-'+hour+'-'+min
      })
      this.triggerEvent("bindMultiPickerChange", [year, month, day, hour, min])
    },

    // 根据年份和月份计算每个月多少天并更新日期时间选择器
    _bindMultiPickerColumnChange: function (e) {
      let _this = this;
      let changeTarget = e.detail.column;
      let changeIndex = e.detail.value
      let year = _this.data.currentYear || this.data.nowDate[0]
      let month = this.data.currentMonth || this.data.nowDate[1] + 1
      if (changeTarget == 0) {
        year = _this.data.multiArray[changeTarget][changeIndex].value;
        _this.setData({
          currentYear: year
        })
      }
      if (changeTarget == 1) {
        month = this.data.multiArray[changeTarget][changeIndex].value
        this.setData({
          currentMonth: month
        })
      }

      /**
       * 当Date做为构造函数调用并传入多个参数时，若是数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。
       * 好比 new Date(2013, 13, 1)等于new Date(2014, 1, 1)，它们都表示日期2014-02-01（注意月份是从0开始的）
       * new Date(2019, 10, 0).getDate() 等于2019-10-31日 实际上获取的是2019-10月的最后一天
       */
      if (changeTarget == 0 || changeTarget == 1) {
        let date = new Date(year, month, 0);
        let days = date.getDate(); //获取改月份有多少天
        let multiArray = this.data.multiArray;

        let mulitDays = [];
        for (let i = 1; i <= days; i++) {
          i = util.subTen(i);
          mulitDays.push({
            title: i + "日",
            value: +i
          });
        }

      }

    },
    _bindCancel: function (e) {
      this.triggerEvent('bindCancel')
    }

  }
})