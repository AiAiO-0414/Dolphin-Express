// pages/selectAddress/selectAddress.ts
Page({
  data: {
    isselect: false,
    radiostatus: false,
    userInfo: [
      // {
      //   username: 'AiAiO', address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON,AZ 85705 USA', phoneNumber: '15815140424', city: 'Denmark', PostCode: '515134'
      // }
    ]
  },
  status() {
    this.setData({
      isselect: !this.data.isselect
    })
    wx.setStorage({
      data: { 'isselect': this.data.isselect },
      key: 'isselect',
    })
  },
  //添加地址
  addbutton() {
    wx.navigateTo({
      url: '/pages/AddressItem/AddAddress/AddAddress'
    })
  },
  //地址回显
  assignment() {
    let result = encodeURIComponent(JSON.stringify(this.data.userInfo))
    wx.navigateTo({
      url: '/pages/AddressItem/address/address?userinfo=' + result,
    })
  },
  telreg() {
    //手机号码中间4位隐藏
    // var tel = this.data.phoneNumber
    var reg = /(\d{3})\d{4}(\d{4})/g;
    let result = this.data.userInfo.map((item: any) => {
      item.phoneNumber = item.phoneNumber.replace(reg, "$1****$2");
      return item
    })
    console.log(result);
    this.setData({
      userInfo: result
    })
  },
  onLoad() {
    let radiostatus = wx.getStorageSync('isselect').isselect;
    this.setData({
      isselect: radiostatus
    }),
    this.telreg()
    //获取地址数据
    let data = wx.getStorageSync('addAddressData').addAddressData;
    this.setData({
      userInfo:data
    })
    console.log(data,'u');
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