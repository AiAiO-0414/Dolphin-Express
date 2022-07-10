// pages/AddAddress/AddAddress.ts
Page({
  data: {
    addressformText: [
      { id: 1, title: 'Name', img: "/assets/images/gantan.png", text: "Please fill in the recipient's name", status: false },
      { id: 2, title: 'Phone', img: '/assets/images/gantan.png', text: "Please fill in the recipient's phone" },
      { id: 3, title: 'Address', img: '/assets/images/gantan.png', text: 'Please fill in the address' },
      { id: 4, title: 'City', img: '/assets/images/gantan.png', text: 'Please fill in the city' },
      { title: 'PostCode', img: '/assets/images/gantan.png', text: 'Please fill in the postcode' },
    ],
    status:false,
    addAddressData: <any>[]
  },
  addresslist() {
    wx.navigateTo({
      url: '/pages/AddressItem/selectAddress/selectAddress'
    })
  },
  onSubmit(e: any) {
    let value = e.detail.value;
    let arr = <any>[];
    for (var key in value) {
      if (!value[key]) arr.push(key);
    }
    if (arr.length !== 0) {
      wx.showToast({
        title: '输入框不能为空',
        icon: 'none',
      })
      return
    }
    value = {
      ...value,
      state:this.data.status,
    }
      let addData = wx.getStorageSync('addAddressData');
      value = [...addData, value];
      wx.setStorageSync("addAddressData", value);
      wx.navigateTo({
        url: '/pages/AddressItem/selectAddress/selectAddress'
      })
    },
    checkstatus(e: any) {  
     this.setData({
       status:e.detail.value
     })
    }
  })