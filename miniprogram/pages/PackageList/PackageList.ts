// pages/PackageList/PackageList.ts
Page({
  data: {
    PackageText: [
      { title: '全部包裹', event: '查看您的全部包裹' },
      { title: '退回包裹', event: '退回给商家或仓库处理' },
      { title: '异常包裹', event: '违禁品' },
      { title: '入库包裹', event: '已入库的包裹' },
    ],
    stepsData: [
      { id: 1, text: '待处理', num: 3, height: 60 },
      { id: 2, text: '待入仓', num: 6, height: 80 },
      { id: 3, text: '待出仓', num: 7, height: 120 },
      { id: 4, text: '待收货', num: 8, height: 60 },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})