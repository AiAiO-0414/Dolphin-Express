import { url } from "inspector";

// Components/ReceiveAddress/ReceiveAddress.ts
Component({
  properties: {
    phoneNumber:String
  },
  data: {
    isshow: false,
    key: 0,
    addressformText: [
      { id: 1, title: 'Name：', img: '/assets/images/gantan.png', text: 'Please fill in the recipient‘s name', status: false },
      { id: 2, title: 'Phone：', img: '/assets/images/gantan.png', text: 'Please fill in the recipient‘s phone' },
      { id: 3, title: 'Address：', img: '/assets/images/gantan.png', text: 'Please fill in the address' },
      { id: 4, title: 'City：', img: '/assets/images/gantan.png', text: 'Please fill in the city' },
      { title: 'PostCode：', img: '/assets/images/gantan.png', text: 'Please fill in the postcode' },
    ]
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    regtext(e: any) {
      var ids = e.currentTarget.dataset.index
      let value = e.detail.value
      var reg = /[\u4e00-\u9fa5]/;
      let isHide = reg.test(value);
      // this.data.addressformText.forEach((item:any)=>{
      //   console.log(item.status);
      // })
      if (isHide) {
        // value = value.replace(reg, '')
        this.setData({
          key: ids
        })
      }
      console.log(this.data.key, 'key');
    },

    addAddress() {
      wx.navigateTo({
        url: '/pages/selectAddress/selectAddress',
        success: (res) => {
          console.log(res);
        }
      })
    },
  }
})
