// app.js
import {
  wxapi,
  wxsetData
} from './utils/wxapi.js';



App({

  /**
   * [exeLogin 执行登录流程]
   * @param  {[string]} loginKey  自定义登录态信息缓存的key
   * @param  {[string]} timeout   调用wx.login的超时时间
   * @return {[Promise]}          返回一个Promise对象
   */
  exelogin: (loginKey, timeout = 3000) => {
    var that = this;
    return new Promise((resolve, reject) => {
      wxapi('login', {
        "timeout": timeout
      }).then((res) => {
        return wxapi('request', {
          "method": "POST",
          // url登录换取特定openid的接口待定
          "url": "",
          'header': {
            'Content-type': 'application/x-www-form-urlencoded',
          },
          'data': {
            'code': res.code,
            'platform': 'miniwechat',
          }
        }).then((res) => {
          //当服务器内部错误500(或者其它目前我未知的情况)时，wx.request还是会执行success回调，所以这里还增加一层服务器返回的状态码的判断
          if (res.statusCode === 200 && res.data.code === 1) {
            //获取到自定义登录态信息后存入缓存，由于我们无需在意缓存是否成功(前面代码有相应的处理逻辑)，所以这里设置缓存可以由它异步执行即可
            wxapi('setStorage', {
              'key': loginKey,
              'data': res.data.data.userInfo
            });
            //userInfo里面包含有用户昵称、头像、性别等信息，以及自定义登录态的token
            resolve(res.data.data.userInfo);
          } else {
            return Promise.reject({
              'errMsg': (res.data.msg ? 'ServerApi error:' + res.data.msg : 'Fail to network request!') + ' Please feedback to manager and close the miniprogram manually.'
            });
          }
        })
      }).catch((error) => {
        reject(error);
      })
    })
  },
  /**
   * [getLoginInfo 获得自定义登录态信息]
   * @param  {[string]]} loginKey [缓存的key值]
   * @return {[Promise]}          返回一个Promise对象
   */
  getLoginInfo: (loginKey = 'loginInfo') => {
    var that = this
    return new Promise((resolve, reject) => {
      wxapi('checkSession').then(function () {
        //登录态有效，从缓存中读取
        return wxapi('getStorage', {
          'key': loginKey
        }).then((res) => {
          //获取loginKey缓存成功
          if (res.data) {
            //缓存获取成功，并且值有效
            return Promise.resolve(res.data);
          } else {
            //缓存获取成功，但值无效，重新登录
            return that.exeLogin(loginKey, 3000);
          }
        }, function () {
          //获取loginKey缓存失败，重新登录
          return that.exeLogin(loginKey, 3000);
        });
      }, function () {
        //登录态失效，重新调用登录
        return that.exeLogin(loginKey, 3000);
      }).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  onLaunch(options) {


    // 展示本地存储能力
    const userInfo = wx.getStorageSync('userInfo') || []
    userInfo.unshift(Date.now())
    wx.setStorageSync('userInfo', userInfo)
    // 判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      this.globalData.share = true
    } else {
      this.globalData.share = false
    };
    //获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    //这个最初我是在组件中获取，但是出现了一个问题，当第一次进入小程序时导航栏会把
    //页面内容盖住一部分,当打开调试重新进入时就没有问题，这个问题弄得我是莫名其妙
    //虽然最后解决了，但是花费了不少时间
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
      }
    })


    // 获取登录态信息
    var that = this;

    this.getLoginInfo().then((res) => {
      if (res.token && (typeof res !== 'undefined')) {
        wxapi['getSetting'].then((setting) => {
          that.globalData.logined = true;
          that.globalData.userInfo = res;
          that.globalData.authsetting = setting.authsetting;
          //执行页面定义的回调方法
          (that.loginedCb && typeof (that.loginedCb) === 'function') && that.loginedCb();
        }, (error) => {
          reject(error)
        })
      } else {
        return Promise.reject({
          errMsg: "LoginInfo miss token"
        })
      }
    }).catch((error) => {
      wx.showModal({
        title: "Error",
        content: error.errMsg
      });
      return false;
    })



  },
  /**
   * 获取小程序注册时返回的自定义登录态信息（小程序页面中调用）
   * 主要是解决pageObj.onLoad 之后app.onLaunch()才返回数据的问题
   */
  pageGetLoginInfo: (pageObj) => {
    var _this = this;
    return new Promise((resolve, reject) => {
      // console.log(_this.globalData.logined);
      if (_this.globalData.logined == true) {
        wxsetData(pageObj, {
          'logined': _this.globalData.logined,
          'authsetting': _this.globalData.authsetting,
          'userInfo': _this.globalData.userInfo
        }).then(function (data) {
          //执行pageObj.onShow的回调方法
          (pageObj.authorizedCb && typeof (pageObj.authorizedCb) === 'function') && pageObj.authorizedCb(data);
          resolve(data);
        });

      } else {
        /**
         * 小程序注册时，登录并发起网络请求，请求可能会在 pageObj.onLoad 之后才返回数据
         * 这里加入loginedCb回调函数来预防，回调方法会在接收到请求后台返回的数据后执行，详看app.onLaunch()
         */
        _this.loginedCb = () => {
          wxsetData(pageObj, {
            'logined': _this.globalData.logined,
            'authsetting': _this.globalData.authsetting,
            'userInfo': _this.globalData.userInfo
          }).then(function (data) {
            //执行pageObj.onShow的回调方法
            (pageObj.authorizedCb && typeof (pageObj.authorizedCb) === 'function') && pageObj.authorizedCb(data);
            resolve(data);
          });
        }
      }
    });

  },

  /**
   * 封装小程序页面的公共方法
   * 在小程序页面onLoad里调用
   * @param {Object}  pageObj   小程序页面对象Page
   * @param {Boolean} needAuth  是否检验用户授权(scope.userInfo),如果未授权则跳转到注册页面...
   * @return {Object}           返回Promise对象，resolve方法执行验证登录成功后且不检验授权(特指scope.userInfo)的回调函数，reject方法是验证登录失败后的回调
   */
  pageOnLoadInit: (pageObj, needAuth = false) => {
    var that = this;

    return new Promise((resolve, reject) => {
      that.pageGetLoginInfo(pageObj).then((res) => {
        console.log(res.data.logined)
        if (that.globalData.logined === true) {
          // 登录成功无需授权
          resolve(res)
          if (needAuth) {
            if (res.authsetting['scope.userInfo'] === false || (res.authsetting['scope.userInfo'] === 'undefined')) {
              wx.navigateTo({
                url: 'pages/register/register',
              })
            }
          }
        } else {
          reject({
            errMsg: "Fail to login.Please feedback to manager"
          })
        }
      })
    })
  },
  /**
   * [exeAuth 执行用户授权流程]
   * @param  {[string]} loginKey  自定义登录态信息缓存的key
   * @param  {[Object]} data      wx.getUserInfo接口返回的数据结构一致
   * @return {[Promise]}          返回一个Promise对象
   */
  exeAuth: (loginKey, data) => {
    return new Promise((resolve,reject)=>{
      wxapi('request',{
        'method': 'POST',
        'url': _this.gData.api.request + '/api/User/thirdauth',
        'header': {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        'data': {
          'platform': 'miniwechat',
          'token': _this.gData.userinfo.token,
          'encryptedData': data.encryptedData,
          'iv': data.iv,
        }
      }).then((res)=>{
        //当服务器内部错误500(或者其它目前我未知的情况)时，wx.request还是会执行success回调，所以这里还增加一层服务器返回的状态码的判断
        if (res.statusCode === 200 && res.data.code === 1) {
          //更新app.gData中的数据
          _this.globalData.authsetting['scope.userInfo'] = true;
          _this.globalData.userinfo = res.data.data.userinfo;

          //更新自定义登录态的缓存数据，防止再次进入小程序时读取到旧的缓存数据，这里让它异步执行即可，
          //倘若异步执行的结果失败，直接清除自定义登录态缓存，再次进入小程序时系统会自动重新登录生成新的'
          wxapi('setStorage',{
            'key': loginKey,
            'data': res.data.data.userinfo
          }).catch((res)=>{
            console.warn(error.errMsg);
            wxapi('removeStorage', {
              'key': loginKey
            });
          })
          resolve(res.data.data.userinfo);
        }else{
          return Promise.reject({
            'errMsg': res.data.msg ? 'ServerApi error:' + res.data.msg : 'Fail to network request!'
          });
        }
      })
    }).catch((error)=>{
      reject(error)
    })
  },


  globalData: {
    userInfo: null,
    share: false, // 分享默认为false
    height: 0,
    logined: false,
    authsetting: null
  }
})