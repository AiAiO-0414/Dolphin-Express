// pages/selectAddress/selectAddress.ts
Page({
  data: {
    radiostatus: false,
    userInfo: [
      // {
      //   username: 'AiAiO', address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON,AZ 85705 USA', phoneNumber: '15815140424', city: 'Denmark', PostCode: '515134'
      // }
    ]
  },
  status(this: any, e: any) {
    let dataindex = e.currentTarget.dataset.index
    let arr = this.data.userInfo
    let result = arr.filter((item: any, index: any) => {
      item.state = false
      if (dataindex == index) {
        item.state = true
      }
      return item
    })
    this.setData({
      userInfo: result
    })
    wx.setStorageSync("addAddressData", this.data.userInfo);
  },

  //添加地址
  addbutton() {
    wx.navigateTo({
      url: '/pages/AddressItem/AddAddress/AddAddress'
    })
  },
  //删除地址
  del(e: any) {
    let index = e.currentTarget.dataset.index;
    console.log(index);
    this.data.userInfo.splice(index, 1);
    this.setData({
      userInfo: this.data.userInfo
    })
    wx.setStorageSync("addAddressData", this.data.userInfo);
  },

    //地址回显
    assignment(e: any) {
      let dataindex = e.currentTarget.dataset.index
      let data = this.data.userInfo[dataindex]
      let result = encodeURIComponent(JSON.stringify(data))
      wx.navigateTo({
        url: '/pages/AddressItem/address/address?AddressData=' + result,
      })
    },

    telreg(this: any) {
      //手机号码中间4位隐藏
      var reg = /(\d{3})\d{4}(\d{4})/g;
      let result = this.data.userInfo.map((item: any) => {
        item.Phone = item.Phone.replace(reg, "$1****$2");
        return item
      })
      this.setData({
        userInfo: result
      })
    },
    onLoad(this: any) {
      //获取地址数据
      this.getAddressData()
      let radiostatus = wx.getStorageSync('isselect').isselect;
      this.setData({
        isselect: radiostatus
      }),
        //手机号码隐藏
        this.telreg()
      // console.log(this.getPage(),'page');
      // let page = this.getPage()
      // if(page == 'pages/AddressItem/AddAddress/AddAddress'){
      this.radiostatus()
      // }
    },
    //获取添加的地址数据
    getAddressData() {
      let data = wx.getStorageSync('addAddressData');
      this.setData({
        userInfo: data
      })
    },
    // getPage() {
    //   let pages = getCurrentPages();
    //   let prevpage = pages[pages.length - 2];
    //   return prevpage.route
    // },
    radiostatus(this: any) {
      let arr = this.data.userInfo
      console.log(arr[arr.length - 1].state);
      if (arr[arr.length - 1].state == true) {
        let result = arr.map((item: any, index: any) => {
          item.state = item.status
          if (index == arr.length - 1) {
            item.state = true
          }
          return item
        })
        this.setData({
          userInfo: result
        })
      }
    }
  })