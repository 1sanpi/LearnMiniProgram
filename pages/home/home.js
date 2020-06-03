// home/home.js
// getApp()可以获取App()产生的实例对象
const app = getApp()

const name = app.globalData.name;
const age = app.globalData.age;

// 注册一个页面
Page({
  // -------------- 2.初始化数据 -------------------------
  data: {
    name: name,
    age: age,
    students:[
      {id:110,name:'kobe',age:30},
      {id:110,name:'james',age:28},
      {id:110,name:'curry',age:26},
      {id:110,name:'sanpi',age:18}
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误的做法：界面是不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2. this.setData()才能对数据进行双向绑定
    this.setData({
      counter: this.data.counter + 1
    })
  },

  // ---------------- 3.监听wxml中的相关的一些事件 -------------
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },

  // ---------------- 4.监听其他事件 ------------------------
  // 监听页面的滚动
  onPageScroll(obj) {
    // console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到了底部')
  },
  // 监听页面下拉事件
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  },

  // ---------------- 1.监听页面的生命周期函数 ----------------
  // 页面被加载出来
  onload() {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
      }
    })
  },
  // 页面显示出来时
  onShow() {

  },
  // 页面初次渲染完成时
  onReady() {

  },
  // 页面隐藏时
  onHide() {

  },
  // 页面要被销毁时
  onUnload() {
  }
})

// 编程范式：
// 1.命令式编程: 原生操作DOM
// 2.声明式编程: Vue/React/Angular