
Page({
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
    for (var key in e.detail) {
      wx.showToast({
        title: '输入框不能为空',
        icon:'error',
      })
      if (!e.detail[key]) return;
    }
    wx.navigateTo({
      url: '/pages/OrderItem/OrderDetail/OrderDetail'
    })
    console.log(this.data.formData, 'r');
  },

  onLoad() {
    let result = this.options.AddressData
    result = JSON.parse(decodeURIComponent(result))
    console.log(result,'rrr');
    this.setData({
      addressData:result
    })
  },
})