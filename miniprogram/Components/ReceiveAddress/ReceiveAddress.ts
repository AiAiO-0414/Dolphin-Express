// Components/ReceiveAddress/ReceiveAddress.ts
Component({
  properties: {
    addressData: Object
  },
  // observers: {
  //   'addressData': function (this: any, value: any) {
  //     console.log(value, 'dbs');
  //     this.setData({
  //       inputvalue: value
  //     })
  //       let result = this.data.addressformText.map((item: any) => {
  //         // if(item.id == )
  //         if(item.id === 1) {
  //            item.value = value.username
  //          return item
  //         }

  //       })
  //       console.log(result,'r');

  //     }
  //   },
    data: {
      isshow: false,
      key: '',
      inputvalue: '',
      addressformText: [
        { id: 1, title: 'Name：', img: '/assets/images/gantan.png', text: 'Please fill in the recipient‘s name', status: 'none', value: '' },
        { id: 2, title: 'Phone：', img: '/assets/images/gantan.png', text: 'Please fill in the recipient‘s phone', status: 'none', value: '' },
        { id: 3, title: 'Address：', img: '/assets/images/gantan.png', text: 'Please fill in the address', status: 'none', value: '' },
        { id: 4, title: 'City：', img: '/assets/images/gantan.png', text: 'Please fill in the city', status: 'none', value: '' },
        { id: 5, title: 'PostCode：', img: '/assets/images/gantan.png', text: 'Please fill in the postcode', status: 'none', value: '' }
      ]
    },

    methods: {
      regtext(this: any, e: any) {
        var ids = e.currentTarget.dataset.index + 1
        this.setData({
          key: ids
        })
        console.log(ids, 'ids');
        let value = e.detail.value
        var reg = /[\u4e00-\u9fa5]/;
        let isHide = reg.test(value);
        if (ids == this.data.key) {
          let result = this.data.addressformText.map((item: any) => {
            if (item.id == ids && isHide) {
              item.status = '';
            } else {
              item.status = 'none'
            }
            return item
          });
          this.setData({
            addressformText: result
          })
        }
      },

      addAddress() {
        wx.navigateTo({
          url: '/pages/AddressItem/selectAddress/selectAddress',
          // success: (res) => {
          //   console.log(res);
          // }
        })
      },
    },
    lifetimes: {
      attached: function () {
        // 在组件实例进入页面节点树时执行
        console.log('this', this);
      },
      detached: function () {
        // 在组件实例被从页面节点树移除时执行
      },
    },

  })
