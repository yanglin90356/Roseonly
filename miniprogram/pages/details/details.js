// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    banner: [],
    // 详情图
    xqImg: [],
    title: "",
    price: "",
    details: [],
  },
  // 点击加入购物车
  addCart() {
    // 获取缓存中的购物车数组
    let cart = wx.getStorageSync('cart') || [];
    // 判断商品是否存在于购物车数组中
    let index = cart.findIndex(v => v._id === this.data.details._id);
    if (index === -1) {
      // 表示不存在 第一次添加
      this.data.details.num = 1;
      this.data.details.checked = true;
      cart.push(this.data.details);
    } else {
      // 已存在购物车 执行 num++
      cart[index].num++;
    }
    // 把购物车重新添加回缓存中
    wx.setStorageSync('cart', cart)
    // 弹出提示
    wx.showToast({
      title: '加入成功',
      icon: "success",
      // 防止用户重复点击加入购物车按钮
      mask: true
    })
  },
  // 点击商品轮播图放大预览
  handlePrevewImg(e) {
    // 创建要预览的图片数组
    let urls = this.data.banner.map(v => v)
    // 接收传递过来的图片url
    let current = e.currentTarget.dataset.index;
    wx.previewImage({
      current: urls[current],
      urls
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    let db = wx.cloud.database();
    let collect = db.collection("products");
    collect.doc(id).get({
      complete: res => {
        this.setData({
          details: res.data,
          banner: res.data.images,
          xqImg: res.data.xqy,
          title: res.data.title,
          price: res.data.price
        })
      },
    })
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