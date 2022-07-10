Component({
  properties: {
    arr:Array,
    isdisabled:{
      type:Boolean,
      value:false
    },
    show:{
      type:Boolean,
      value:false
    },
    isshow:{
      type:Boolean,
      value:false
    },
    orderstate:{
      type:String,
      value:0
    },
  },
  data: {
    key: '',
    // arr: <any>[],
    ordernumArr: <any>[],
    isshow: false,
    show: false,
    detailData: [{ id: 1, city: '美国', 'channel': '普通货物', statustext: '待填写', time: '2022-05-09 14:07:12', status: 0 }],

    imgList: ["/assets/images/box.png", "/assets/images/box.png", "/assets/images/box.png"],
    billdata: [
      { id: 1, billnum: '包裹一', billattribute: '普通货物', billsize: '12*5*5 CM', billkg: '1.25KG', billmethod: '实际重量', billprice: '125', img: '/assets/images/box.png' },
      { id: 2, billnum: '包裹二', billattribute: '电子产品', billsize: '12*4*4 CM', billkg: '1.75KG', billmethod: '实际重量', billprice: '125', img: '/assets/images/box.png' },
    ]
  },
  methods: {
    getnum(this: any, e: any) {
      let value = e.detail.value
      this.triggerEvent("getnum", value)
      console.log(this.arr,'aaa');
      
      // if (e.detail.value) {
      // for (var i = 0; i <= value - 1; i++) {
      //   let obj = {
      //     index: i,
      //     deb: true,
      //     value: ''
      //   };
      //   let obj2 = {...obj};
      //   let arr = [...this.data.arr,obj2];
      //   this.data.arr.push(arr);
      // }
      // console.log(this.data.arr);
      // let orderindex = this.data.index;
      // this.setData({
      //   index: i,
      // })
      // console.log(orderindex);
      // this.setData({
      //   isdisabled: true
      // })
      // }

      // wx.setStorage({
      //   data: { 'orderindex': orderindex },
      //   key: 'orderindex',
      // })
    },

    //订单号
    getordernum(this: any, e: any) {
      let val = e.detail.value;
      let id = e.currentTarget.dataset.id;
      console.log(e,'123');
      
      this.triggerEvent("getordernum", {val,id})
      // let iputIndex = e.currentTarget.dataset.index;
      // if (val == '') {
      //   return
      // }
      // let r = this.data.arr.filter((item:any)=>{
      //   return item
      // })
      // => item.id == iputIndex)[0].value = val
      // this.data.arr.filter((item:any)=>{
      //   if(item.index == iputIndex) {
      //   }
      // console.log(item,'id');   
      // })
      // this.setData({
      //   isshow: true
      // })
      // this.setData({
      //   key: iputIndex
      // })

      // let newArr = this.data.ordernumArr;
      // newArr = [...newArr, val];
      // this.setData({
      //   ordernumArr: newArr
      // })
      // console.log(this.data.ordernumArr, 'arr');
      // let result = this.data.arr.filter((item: any) => {
      //   console.log(iputIndex, '柔呆呆');
      //   if (item.index == iputIndex) {
      //     item.value = this.data.ordernumArr
      //     return item.value
      //   }
      // })
      // console.log(result, 'r');
      // console.log(this.data.arr, 'arr2');
      // this.setData({
      //   arr:this.data.ordernumArr
      // })
      // console.log(this.data.arr,'1');
      // console.log(this.data.index);
      // this.setData({
      //   key: iputIndex
      // })
      // if (this.data.key == iputIndex) {
      //   let arr = ''
      //   arr = e.detail.value
      //   // let r = arr.join(" ")
      //   console.log(arr);
      // }
    },
    //删除
    delete(this: any, e: any) {
      let index = e.currentTarget.dataset.index;
      this.triggerEvent("delete",index)
      // console.log(1);
      // console.log(this.data.index);
      // let result = this.data.index.splice(this.data.index,1)
      // this.serData({
      //   index:result
      // })
    },
    //添加快递单号
    addbtn(this: any, e: any) {
      this.triggerEvent("addbtn", 1)
    },
    //确定添加快递单号
    yesbutton(this:any){
      this.triggerEvent("yesbutton")
    },
    //确认增加
    addinput(this: any) {
      this.triggerEvent("addinput")
    },
   
    //图片预览
    preview(this: any, event: any) {
      // console.log(event.currentTarget.dataset.index)
      // let currentUrl = event.currentTarget.dataset.index
      wx.previewImage({
        // current: this.data.imgList[0],
        urls: this.data.imgList, // 需要预览的图片http链接列表
        success: function (res) {
          console.log(res, 's');
        },
        fail: function (res) {
          console.log(res, 'r');

        }
      })
    }
  },

  lifetimes: {
    attached: function (this: any) {
      // this.addinput()
      // 在组件实例进入页面节点树时执行
      // let index = wx.getStorageSync('orderindex').orderindex;
      // this.setData({
      //   index: index
      // })
      // console.log(this.data.index);
      // console.log('this', this);
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },


})
