// pages/cost/cost.ts
Page({
  data: {
    channel: '',
    boxsize: '',
    channelstatus: '',
    freightprice: '0.00',
    statusData: [
      { status: '0', price: 59, price2: 39 },
      { status: '1', price: 69, price2: 49 },
      { status: '2', price: 79, price2: 59 },
      { status: '3', price: 128, price2: 35 },
      { status: '4', price: 128, price2: 49 },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let radiostatus = wx.getStorageSync('channeltext').channeltext;
    let curindex = wx.getStorageSync('channeltext').curindex;
    // console.log(radiostatus,'r');
    this.setData({
      channel: radiostatus,
      channelstatus: curindex
    })
  },
  getinpVal(e: any) {
    let v = e.detail.value
    if (v !== '') {
      let r = e.detail.value.split(',')
      r = r.map((item: any) => {
        return Number(item);
      });
      let result = r.reduce((total: any, currentValue: any) => {
        total = Number(total)
        total *= currentValue
        return total
      })
      result = Math.ceil(result / 6000 + "");
      console.log(result);
      this.setData({
        boxsize: result
      })
      let freight = this.data.statusData.map((item: any) => {
        if (item.status == this.data.channelstatus) {
          return item.price + Number(this.data.boxsize - 1) * item.price2
        }
      }).filter((item: any) => item)
      console.log(freight, 'f');
      this.setData({
        freightprice: freight
      })
    }
  },
})