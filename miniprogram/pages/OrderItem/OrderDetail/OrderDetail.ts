// pages/OrderItem/OrderDetail/OrderDetail.ts
Page({
  data: {
    phonenum: '18820220334',
    addressdata: []
  },
  onLoad() {
    let AddressformData = wx.getStorageSync('AddressformData');
    this.setData({
      addressdata: AddressformData
    })
    console.log(this.data.addressdata, 'a');
  },
  CopyPhoneNum() {
    let phoneNumber = this.data.addressdata.formData[0].Phone;
    wx.setClipboardData({
      data: phoneNumber,
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },
  CopyNum(){
    
    wx.setClipboardData({
      data:this.data.phonenum,
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  }
})