// pages/OrderItem/OrderDetail/OrderDetail.ts
Page({
  data: {
    phonenum: '18820220334',
    addressdata: [],
    orderstate:0,
    isdisabled: false,
    show: false,
    isshow: false,
    index: '',
    arr: <any>[],
  },
  onLoad(this: any) {
    let AddressformData = wx.getStorageSync('AddressformData');
    this.setData({
      addressdata: AddressformData
    })
    let ordernum = wx.getStorageSync('ordernum').ordernum;
    if (ordernum) {
      let result = ordernum.map((item:any)=>{
        return item.status
      })      
      this.setData({
        arr: ordernum,
        orderstate:result
      })
    }
  },
  CopyPhoneNum(this: any) {
    let phoneNumber = this.data.addressdata.formData[0].Phone;
    wx.setClipboardData({
      data: phoneNumber,
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },
  CopyNum() {
    wx.setClipboardData({
      data: this.data.phonenum,
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },
  //快递个数input框失去焦点事件
  getnum(this: any, e: any) {
    let value = e.detail
    if (value == '') {
      return
    }
    let inpstatus = false
    for (let i = 0; i < value; i++) {
      this.data.arr.push({ status: '0', val: '', id: i + 1, disabled: inpstatus })
    }
    this.setData({
      arr: this.data.arr,
      isdisabled: true
    })
  },
  // 快递单号失去焦点事件
  getordernum(this: any, e: any) {
    let value = e.detail.val;
    let id = e.detail.id
    if (value == '') {
      return
    }
    this.setData({
      isshow: true
    })
    let result = this.data.arr.filter((item: any) => {
      if (item.id == id) {
        item.val = value
        item.status = 1
        item.disabled = true
      }
      return item
    })
    this.setData({
      arr: result
    })
    wx.setStorage({
      data: { 'ordernum': this.data.arr },
      key: 'ordernum',
    })
    // let ordernum = wx.getStorageSync('ordernum').ordernum;    
    // this.setData({
    //   arr:ordernum
    // })
    // if(ordernum) {
    //   for (let i = 0; i < ordernum.length; i++) {
    //     this.data.arr.push(ordernum)
    //   }
    //   console.log(this.data.arr);
    //   this.setData({
    //     arr:this.data.arr
    //   })
    // }
    // console.log(result,'rrr');
  },
  //补充快递单号事件
  addbtn(this: any) {
    this.setData({
      show: true
    })
  },
  //确认增加input
  addinput(this: any) {
    let time = new Date().getTime()
    let inpstatus = false
    let obj = {
      status: '0', val: '', id: time, disabled: inpstatus
    }
    this.data.arr.push(obj)
    this.setData({
      arr: this.data.arr,
      // number:Number(this.data.number) + 1
    })
    console.log(this.data.arr, 'add');
  },
  //确认添加快递单号
  yesbutton(e: any) {
    console.log(e);
  },
  onClose() {
    console.log(111);
  },
  //删除input框
  delete(e: any) {
    console.log(e.detail);
    let index = e.detail
    let _this = this
    wx.showModal({
      title: '确认删除吗？',
      success: res => {
        if (res.confirm === true) {
          _this.data.arr.splice(index, 1)
          _this.setData({
            arr: _this.data.arr,
          })
        }
        //如果全删除完快递个数可以重新填写
        if (_this.data.arr.length == 0) {
          this.setData({
            isdisabled: false
          })
        }
      }
    })
  },
})