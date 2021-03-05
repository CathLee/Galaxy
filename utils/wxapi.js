// 对微信api promise化的公共函数

const wxapi = {
  wxapi:(wxApiName,obj)=>{
    return new Promise((resolve,reject)=>{
      wxapi[wxApiName]({
        ...obj,//这里要注意使用用法
        success:(res)=>{
          resolve(res)
        },
        fail:(err)=>{
          reject(err)
        }
      })
    })
  },
  /**
   * 以下是微信Api Promise化的特殊案例
   */
  wxsetData:(pageObj,obj)=>{
    if(pageObj&&obj){
      return new Promise((resolve,reject)=>{
        pageObj.setData(obj,resolve(obj))
      })
    }
  }
}

module.exports = {
  wxapi:wxapi
}