// pages/AddAddress/AddAddress.ts
Page({
  data: {
    addressformText: [
      { id: 1, title: 'Name：', img: "/assets/images/gantan.png", text: "Please fill in the recipient's name", status: false },
      { id: 2, title: 'Phone：', img: '/assets/images/gantan.png', text: "Please fill in the recipient's phone" },
      { id: 3, title: 'Address：', img: '/assets/images/gantan.png', text: 'Please fill in the address' },
      { id: 4, title: 'City：', img: '/assets/images/gantan.png', text: 'Please fill in the city' },
      { title: 'PostCode：', img: '/assets/images/gantan.png', text: 'Please fill in the postcode' },
    ]
  },
  regtext(){},

  addresslist(){
    wx.navigateTo({
      url:'/pages/AddressItem/selectAddress/selectAddress'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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