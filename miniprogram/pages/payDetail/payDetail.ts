// pages/payDetail/payDetail.ts
Page({
  data: {
    paydata: [
      { title: '订单号', value: '20220509140712345678' },
      { title: '转运线路', value: '中国-美国' },
      { title: '预选渠道', value: '普通货物' },
      { title: '货物属性', value: '普通货物' },
      { title: '转运费', value: '￥138.00' },
      { title: '附加费', value: '￥38.00' },
      { title: '丢失险', value: '￥0.00' },
      { title: '关税险', value: '￥0.00' },
    ],
    show: false,
    checked: false,
    time: 10 * 1000,
    timeData: {},
    isdisabled: true,
    timedisabled: true
  },

  onTime(e: any) {
    this.setData({
      timeData: e.detail,
    });
  },

  onfinish() {
    this.setData({
      timedisabled: false,
      timeData: '',
    })
  },
  onChange(event: any) {
    this.setData({
      checked: event.detail,
    });
    if (this.data.checked) {
      this.setData({
        show: true
      })
    //   const { windowHeight } = wx.getSystemInfoSync()
    //   const query = wx.createSelectorQuery()
    //   query.select('.btn').boundingClientRect()
    //   query.exec(rect => {
    //     const { top, height } = rect[0]
    //   if ((top < windowHeight) && (top + height > 0)) {
    //     console.log('元素在可视区域出现')
    //   } else {
    //     console.log('元素在可视区域消失')
    //   }
    // })
    } else {
      this.setData({
        show: false,
        isdisabled:true
      })
    }
  },
  agree(){
    this.setData({
      isdisabled:false,
      show:false
    })
  },
  checkboxchange() {
    console.log(111);
    // this.setData({
    //   checked:false
    // })
    // if(this.data.checked) {
    //   this.setData({
    //     show:true
    //   })
    // }
  },
  pay(){
    wx.navigateTo({
      url:'/pages/PayComplete/PayComplete'
    })
  }
})