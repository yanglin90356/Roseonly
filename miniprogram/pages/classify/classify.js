// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单数组
    leftMenu: [
      "新品活动",
      "爱礼推荐",
      "鲜花玫瑰",
      "永生玫瑰",
      "玫瑰珠宝",
      "玫瑰家居",
      "高端定制",
      "全部商品"
    ],
    active: 0,
    floor1: [
      {
        title: "当月星座",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15979996707964398.png"
      },
      {
        title: "新品速递",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15985195735742095.png"
      },
    ],
    floor2: [
      {
        title: "告白",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15979996707702805.png",
      },
      {
        title: "明星同款",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15844308882232370.png",
      },
      {
        title: "生日",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15211044042535880.png",
      },
      {
        title: "求婚",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15258369919411648.png",
      },
    ],
    floor3: [
      {
        title: "星座经典",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15980021022169801.png"
      },
      {
        title: "经典永续",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15530544241619956.png"
      },
      {
        title: "恒久真爱",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15022686924219170.png"
      },
    ],
    floor4: [
      {
        title: "玫瑰公仔",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15844308882232370.png"
      },
      {
        title: "星座经典",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15979996708059663.png"
      },
      {
        title: "音乐",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15928165399678857.png"
      },
      {
        title: "经典永续",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15553184320318580.png"
      },
      {
        title: "全世爱",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/14791766983822370.png"
      },
    ],
    floor5: [
      {
        title: "星座经典",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/14709032002384062.png"
      },
      {
        title: "生辰石",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15226395620008512.png"
      },
      {
        title: "项链",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15532472772706528.png"
      },
      {
        title: "手镯",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/14848101969488012.png"
      },
      {
        title: "手链",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15205613409466704.png"
      },
      {
        title: "戒指",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/14371154165835766.png"
      },
    ],
    floor6: [
      {
        title: "礼品",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15565357968569055.png"
      },
      {
        title: "散香",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15915846787744001.png"
      },
      {
        title: "蜡烛",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15915858724039813.png"
      },
      {
        title: "星座经典",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15979996707796846.png"
      },
    ],
    floor7: [
      {
        title: "玫瑰公仔",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15933265274579453.png"
      }
    ],
    floor8: [
      {
        title: "全部商品",
        url: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/categroy/15022686924219170.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 左侧菜单点击
  leftClick(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({
      active: index,
      status: e.currentTarget.dataset.index 
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