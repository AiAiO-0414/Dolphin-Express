// pages/address/address.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressData: '',
    formData: [],
  },
  submitform(this: any, e: any) {
    this.setData({
      formData: [e.detail]
    })
    let formData = this.data.formData;
    wx.setStorage({
      data: { 'formData': formData },
      key: 'AddressformData',
    })
    // e.detail[0].((item: any) => {
    //   if (item != '') {
    //     wx.navigateTo({
    //       url: '/pages/OrderItem/OrderDetail/OrderDetail'
    //     })
    //   }
    // })
    if (e.detail[0].Name != '') {
      console.log(e.detail, '3');
      // wx.navigateTo({
      //   url: '/pages/OrderItem/OrderDetail/OrderDetail'
      // })

    }

    console.log(this.data.formData, 'r');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // let result = JSON.parse(decodeURIComponent(this.options.userinfo))
    // console.log(result[0],'r');
    // this.setData({
    //   addressData: result[0]
    // })
  },
})