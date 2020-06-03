// 注册一个小程序实例
App({
  // 小程序初始化完成时，会执行的生命周期函数
  onLaunch: function (options) {
    // 获取用户信息
    // 异步调用 -> 数据拿到之后再进行回调的
    // wx.getUserInfo({
    //   complete: (res) => {console.log(res.userInfo.avatarUrl)},
    // })

    // setTimeout(function() {
    //   const err = new Error()

    //   throw err
    // },3000)
  },

  // 小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    // 1.判断小程序的进入场景并作出对应操作
    switch (options.scene) {
      case 1001:
        break;
      case 1011:
        break;
    }

    // 2.获取用户的信息，病区取到用户信息之后，将用户的信息传递到服务器
    wx.getUserInfo({
      complete: (res) => {console.log(res.userInfo)},
    })
  },

  onHide: function (options) {
    console.log("界面被隐藏时会执行：onHide")
  },

  onError: function (msg) {
    console.log('小程序中发生报错的时候会执行')
  },

  globalData: {
    name: 'sanpi',
    age: 18
  }
})