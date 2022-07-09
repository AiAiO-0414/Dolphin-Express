// pages/users/users.ts
Page({
  data: {
    userInfo: {},
    canIUseGetUserProfile: false
  },
  onLoad() {
    this.getinfo()
  },

  getinfo() {
    wx.getUserProfile({
      desc: "让你发财",
      success: (res) => {
        console.log(res.userInfo);
        this.setData({
          userInfo:res.userInfo
        })
      },
      fail: (res) => {
        console.log("失败了", res);
      }
    })
  },
  adddressbtn(){
    wx.navigateTo({
      url:'/pages/AddressItem/selectAddress/selectAddress'
    })
  },
  mycoupon(){
    wx.navigateTo({
      url:'/pages/couponItem/mycoupon/mycoupon'
    })
  },
  process(){
    wx.navigateTo({
      url:'/pages/process/process'
    })
  },
  notice(){
    wx.navigateTo({
      url:'/pages/notice/notice'
    })
  }
})