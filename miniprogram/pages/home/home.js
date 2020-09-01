// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    item1:[
      {
        hed:0.00,
        name:"余额"
      },
      {
        hed:500,
        name:"积分"
      },
      {
        hed:0.00,
        name:"卡"
      },
      {
        hed:0.00,
        name:"优惠券/码"
      },
      {
        hed:0.00,
        name:"零钱"
      }
    ],
    // 订单状态
    orderStarus:[
      {
        path:'cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/待付款.png',
        title:"待付款"
      },
      {
        path:'cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/待收货.png',
        title:"待发货"
      },
      {
        path:'cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/收货地址.png',
        title:"待收货"
      },
      {
        path:'cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/评价 (1).png',
        title:"评价"
      },
      {
        path:'cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/退款.png',
        title:"退款/售后"
      },
    ],
    // 三层
    threeLayers:[
      {
        text:"任务中心",
        url:"cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/任务.png"
      },
      {
        text:"购物车",
        url:"cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/Cart.png"
      },
      {
        text:"收货地址",
        url:"cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/收货地址.png"
      },
      {
        text:"拨打商家电话",
        url:"cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/电话.png"
      },
      {
        text:"客服聊天",
        url:"cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/客服.png"
      },
      {
        text:"赠品",
        url:"cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/赠品.png"
      },
      {
        text:"个人信息",
        url:"cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/个人.png"
      },
      {
        text:"账号设置",
        url:"cloud://racingblood.7261-racingblood-1302923269/Roseonly/个人中心icon/设 置字段.png"
      },
    ]
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