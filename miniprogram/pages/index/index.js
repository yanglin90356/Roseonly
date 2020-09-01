//index.js
const app = getApp()

Page({
  data: {
    // 轮播图数组
    banner: [
      "cloud://racingblood.7261-racingblood-1302923269/Roseonly/banner/banner1.jpg",
      "cloud://racingblood.7261-racingblood-1302923269/Roseonly/banner/banner2.jpg",
      "cloud://racingblood.7261-racingblood-1302923269/Roseonly/banner/banner3.jpg"
    ],
    // 楼层1数组
    floor2: [
      {
        id: 8,
        path: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/floor_1/jdzs.jpg"
      },
      {
        id: 8,
        path: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/floor_1/jdqd.jpg"
      },
      {
        id: 9,
        path: "cloud://racingblood.7261-racingblood-1302923269/Roseonly/floor_1/hjzs.jpg"
      },
    ],
  },

  onLoad: function () {

  },

  onGetUserInfo: function (e) {

  },

  onGetOpenid: function () {

  },


})
