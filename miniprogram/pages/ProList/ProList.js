// pages/ProList/ProList.js
// 当前页码
let pagenum = 0;
// 每页返回的条数
let pageSize = 10;
// 总记录数
let total = 24;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: [
      "综合",
      "价格",
      "上新"
    ],
    active: 0,
    ProList: []
  },
  totalPages: 1,
  // 头部菜单点击
  NavClick(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({
      active: index,
    })
  },
  getPro() {
    // 因为小程序的云数据库最多只能返回20条数据,但是我们想要的是超过20条的,所以这时就需要使用云函数调用
    // 因为云函数能请求回来,但是最大不能超过100条
    wx.showLoading({
      title: '加载中',
      mask: true
    }),
      wx.cloud.database().collection('products')
        .orderBy('price', 'asc')
        .skip(pagenum * pageSize)
        .limit(pageSize)
        .get({
          success: res => {
            this.totalPages = Math.ceil(total / pageSize)
            this.setData({
              // 解构拼接数组,将请求回来的数据加入到数组后面
              ProList: [...this.data.ProList, ...res.data]
            })
            // 关闭下拉刷新的窗口
            wx.stopPullDownRefresh()
            setTimeout(()=>{
              wx.hideLoading()
            },200)
          },
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
    this.getPro()
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
    // 重置数组
    this.setData({
      ProList: []
    })
    // 重置页码
    pagenum = 0;
    // 重新调用请求数据函数
    this.getPro();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 判断还有没有下一页数据
    if (pagenum <= this.totalPages) {
      pagenum++;
      this.getPro();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})