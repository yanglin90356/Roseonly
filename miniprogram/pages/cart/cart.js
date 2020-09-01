// pages/cart/cart.js
/** 
 * 总价格和总数量
 * 1 都需要商品被选中,我们才拿它来计算
 * 2 获取购物车数组
 * 3 遍历
 * 4 判断商品是否选中
 * 5 总价格 +=商品单价*商品数量
 * 6 总数量 +=商品数量
 * 7 把计算后的价格和数量，设置会data中的变量
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 购物车
    cart: [],
    // 全选
    allChecked: false,
    // 总价格
    totalPrice: 0,
  },
  // 商品的选中
  handeChk(e) {
    // 获取被修改商品的id
    const id = e.currentTarget.dataset.id;
    // 获取购物车数组
    let { cart } = this.data;
    // 找到被修改的商品对象
    let index = cart.findIndex(v => v._id === id);
    // 选中状态取反
    cart[index].checked = !cart[index].checked;
    // 调用封装好的setCart函数
    this.setCart(cart);
  },

  // 设置购物车状态同时重新计算底部工具栏的数据
  setCart(cart) {
    // 重新计算
    let allChecked = true;
    // 总价格和总数量
    let totalPrice = 0;
    // 循环购物车
    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.num * v.price;
      } else {
        allChecked = false
      }
    })
    // 判断数组是否为空
    allChecked = cart.length != 0 ? allChecked : false;
    this.setData({
      cart,
      totalPrice,
      allChecked
    });
    wx.setStorageSync('cart', cart);
  },
  // 商品全选
  handeAllChk() {
    // 获取data中的数据
    let { cart, allChecked } = this.data;
    // 修改值
    allChecked = !allChecked;
    // 循环修改cart数组中的商品选中状态
    cart.forEach(k => k.checked = allChecked);
    // 把修改后的值返回到data中或缓存中
    this.setCart(cart);
  },
  // 数量加减
  handeNum(e) {
    // 获取传递过来的参数
    const { operation, id } = e.currentTarget.dataset;
    // 购物车数组
    let { cart } = this.data;
    // 获取需要修改的商品的索引
    const index = cart.findIndex(v => v._id === id);
    // 判断是否要执行删除
    if (cart[index].num === 1 && operation === -1) {
      // 弹出提示
      wx.showModal({
        title: "提示",
        content: "您是否要删除这件商品",
        success: res => {
          if (res.confirm) {
            cart.splice(index, 1);
            this.setCart(cart);
          }
        }
      })
    } else {
      // 进行修改数量
      cart[index].num += operation;
      // 返回到data中和缓存中 直接调用封装好的setCart函数
      this.setCart(cart);
    }
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
    // 从缓存中获取购物车数据
    const cart = wx.getStorageSync('cart') || [];
    // 调用封装好的setCart函数
    this.setCart(cart);
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