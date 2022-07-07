// pages/InsuredPrice/InsuredPrice.ts
Page({

  data: {
    show:false,
    prcieData: [
      { id: 1, noticetext: '国际快递由于多国调度，存在一定比例丢失的情况！如丢失包裹，购买丢失险可获得全额赔付赔付(最高5000元)!', text: '丢失险（保价的3%）', prcie: 30.00, status: true },
      {
        id: 2, noticetext: '电子产品等容易被税的高客单价产品建议购买关税保险!英国关税起征点为0.01英镑!综合关税=货值x增值税率 + (货值 + 运费 + 货值x产品税率)x20 % +清关杂费。', text: '关税险（保价的2%）', prcie: 20.00, status: false
      },
    ]
  },
  onchange(e: any) {
    let value = e.detail.value;
    let v = value * 30 / 1000
    let result = this.data.prcieData.forEach((item: any) => {
      if (item.status) {
        // item.price = value * 30
        item.price = v
      }
      console.log(item.price);
      return item
    })
    console.log(result);
    this.setData({
        prcieData:result
    })
  },
  next(){
    this.setData({
      isshow:true
    })
    console.log(1);
    
  },
  onLoad() {

  },

  onReady() {

  },

  onShow() {

  },

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