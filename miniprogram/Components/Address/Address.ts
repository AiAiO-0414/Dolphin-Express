// Components/Address/Address.ts
Component({
  properties: {

  },

  data: {
    phoneNumber:'13873167888',
  },
  methods: {
    copyphone() {
      wx.setClipboardData({
        data: this.data.phoneNumber,
        success() {
          wx.showToast({
            title: '复制成功',
          })
        }
      })
    },
  }
})
