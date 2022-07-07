// Components/orderlist/orderDataDetail/orderDataDetail.ts
Component({
  properties: {

  },
  data: {
    imgList: ["/assets/images/box.png", "/assets/images/box.png", "/assets/images/box.png"],
    billdata: [
      { id: 1, billnum: '包裹一', billattribute: '普通货物', billsize: '12*5*5 CM', billkg: '1.25KG', billmethod: '实际重量', billprice: '125',img:'/assets/images/box.png' },
      { id: 2, billnum: '包裹二', billattribute: '电子产品', billsize: '12*4*4 CM', billkg: '1.75KG', billmethod: '实际重量', billprice: '125',img:'/assets/images/box.png' },
    ]
  },


  methods: {
    preview(this: any, event: any) {
      // console.log(event.currentTarget.dataset.index)
      // let currentUrl = event.currentTarget.dataset.index
      wx.previewImage({
        // current: this.data.imgList[0],
        urls: this.data.imgList, // 需要预览的图片http链接列表
        success: function (res) {
          console.log(res, 's');
        },
        fail: function (res) {
          console.log(res, 'r');

        }
      })
    }
  }
})
