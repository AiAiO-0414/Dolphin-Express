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
    addAddressData: <any>[]
  },
  regtext() { },
  addresslist() {
    wx.navigateTo({
      url: '/pages/AddressItem/selectAddress/selectAddress'
    })
  },
  onSubmit(e: any) {
    let value = e.detail.value;
    let newArr = [];
    // let data = this.data.addAddressData
    newArr.push(this.data.addAddressData)
    this.data.addAddressData.forEach((item:any) => {
      console.log(item,'i');
      return item
    });
    // let newArr = this.data.addAddressData
    newArr = [...newArr, value];
    console.log(newArr, 'newArr');
    this.setData({
      addAddressData: newArr
    })
    console.log(this.data.addAddressData);
    wx.setStorage({
      data: { 'addAddressData': this.data.addAddressData },
      key: 'addAddressData',
    })
    wx.navigateTo({
      url: '/pages/AddressItem/selectAddress/selectAddress'
    })
  },
})