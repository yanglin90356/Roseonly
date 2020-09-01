// pages/searchItem/searchItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '',
    searchCentent:[]
  },
  // 输入框的值改变就会触发
  handleInput(e) {
    // 获取输入框的值
    let { value } = e.detail;
    // 验证是否合法
    if (!value.trim()) {
      // 如果值不合法的话直接return 不再执行
      return
    }
    if (this.data.time) {
      this.setData({
        time: clearTimeout(this.data.time)
      })
    }
    this.setData({
      time: setTimeout(() => {
        this.getSearch(value);
      }, 1000)
    })
  },
  // 请求函数
  getSearch(value) {
    let db = wx.cloud.database();
    let collect = db.collection("products");
    collect.where({
      title: {
        $regex: '.*' + value
      }
    }).get({
      success: res => {
        this.setData({
          searchCentent:res.data
        })
      }
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

  }
})