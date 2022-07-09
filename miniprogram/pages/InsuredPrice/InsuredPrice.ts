
Page({
  data: {
    show: false,
    prcieData: [
      { id: 1, noticetext: '国际快递由于多国调度，存在一定比例丢失的情况！如丢失包裹，购买丢失险可获得全额赔付赔付(最高5000元)!', text: '丢失险', price: 30.00, status: false, num: 3, value: 30 },
      {
        id: 2, noticetext: '电子产品等容易被税的高客单价产品建议购买关税保险!英国关税起征点为0.01英镑!综合关税=货值x增值税率 + (货值 + 运费 + 货值x产品税率)x20 % +清关杂费。', text: '关税险', price: 20.00, status: false, num: 2, value: 30
      },
    ]
  },
  onLoad() {
    wx.setStorage({
      data: { 'insuredprice': 30 },
      key: 'priceValue',
    })
  },
  insuredprice(this: any) {
    let priceValue = wx.getStorageSync('priceValue').insuredprice;
    let result = this.data.prcieData.map((item: any) => {
      if (item.status) {
        item.price = priceValue * item.num / 100
      } else {
        if (item.id == 1) {
          item.price = 30
        } else {
          item.price = 20
        }
      }
      return item
    })
    this.setData({
      prcieData: result
    })
  },
  onchange(this: any, e: any) {
    let value = e.detail.value;
    let insuredprice = value
    wx.setStorage({
      data: { 'insuredprice': insuredprice },
      key: 'priceValue',
    })
    this.insuredprice()
  },
  onchecked(this: any, e: any) {
    let ids = e.currentTarget.dataset.id;
    let result = this.data.prcieData.map((item: any) => {
      if (item.id == ids) {
        item.status = e.detail.value
      }
      return item
    })
    this.setData({
      prcieData: result
    })
    this.insuredprice()
  },

  next() {
    this.setData({
      isshow: true
    })
  },

  //购买保险
  onClose() {
    let priceValue = wx.getStorageSync('priceValue').insuredprice;
    if(!priceValue){
     this.onLoad()
    }
    let result = this.data.prcieData.map((item: any) => {
      if (item.id == 1) {
        item.status = true
      }
      return item
    })
    this.setData({
      prcieData: result
    })
    this.insuredprice()
  }
})