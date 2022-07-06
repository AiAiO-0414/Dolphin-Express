// pages/order/order.ts
Page({
  data: {
    active: 0,
    ordernum: '202207062104200302244',
    tabstatus: [
      { status: "all", title: "全部" },
      { status: "0", title: "待支付" },
      { status: "1", title: "已支付" },
      { status: "2", title: "已完成" },
    ],
    cardata: [
      { id: 1, TargetCity: '美国', statusText: '待入仓', status: "1", },
      { id: 2, TargetCity: '英国', statusText: '待拣货', status: "2", },
      { id: 3, TargetCity: '丹麦', statusText: '待出仓', status: "1", },
      { id: 4, TargetCity: '法国', statusText: '待支付', status: "0", },
      { id: 5, TargetCity: '德国', statusText: '待支付', status: "0", },
      { id: 6, TargetCity: '荷兰', statusText: '待入仓', status: "1", },
      { id: 7, TargetCity: '荷兰', statusText: '已出仓', status: "3", },
    ],
    // payData:[
    //   { id: 4, TargetCity: '法国', statusText: '待支付' },
    //   { id: 5, TargetCity: '德国', statusText: '待支付' },
    // ],
    // warehousedData:[
    //   { id: 1, TargetCity: '美国', statusText: '待入仓' },
    //   { id: 6, TargetCity: '荷兰', statusText: '待入仓' },
    // ]
  },

  onChange(event: any) {
    console.log(event);
    let result = this.data.cardata.filter((item: any) => {
      if (item.status == event.detail.name) {
        return item
      }
    })
    console.log(result);
    this.setData({
      cardata:result
    })
    // if(event.name == this.setData.){}
  },
  copyorder() {
    wx.setClipboardData({
      data: this.data.ordernum,
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },
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