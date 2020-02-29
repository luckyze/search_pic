// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:''
  },

  search() {
    wx.navigateTo({
      url: '/pages/index3/index3?value='+this.data.value,
    });
  },
  record: function (e) {
    this.data.value = e.detail.value;
  }
})