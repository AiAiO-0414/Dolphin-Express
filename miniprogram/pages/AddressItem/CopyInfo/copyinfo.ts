// pages/AddressItem/CopyInfo/copyinfo.ts
Page({
  data: {
    itemInfo: [
      { id: '1', label: '收件人：', info: '海豚仓库' },
      { id: '2', label: '收货地址：', info: '深圳市龙华区观澜街道银星科技园第三期A区B座1077室' },
      { id: '3', label: '手机号码：', info: '15815140424' },
      { id: '4', label: '邮政编码：', info: '515134' }
    ]
  },

  copyinfo() {
    // let info = JSON.stringify(this.data.itemInfo).replace(/,/g,',\r\n').replace(/{/g,'{\r\n').replace(/}/g,'\r\n}')
    // let info = JSON.stringify(this.data.itemInfo)
    // console.log(info);
    wx.setClipboardData({
      data: "收件人：海豚仓库 收货地址：深圳市龙华区观澜街道银星科技园第三期A区B座1077室 手机号码：15815140424 邮政编码：515134",
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
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