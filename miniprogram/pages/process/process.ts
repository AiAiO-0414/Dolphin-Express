// pages/process/process.ts
Page({

  data: {
    time: 5 * 1000,
    timeData: {},
    isdisabled:true
  },

  onChange(e:any) {
    this.setData({
      timeData: e.detail,
    });
  },
  onfinish(){
    this.setData({
      isdisabled:false,
      timeData: '',
    })
  },
  read(){
    wx.navigateBack()
  }
})