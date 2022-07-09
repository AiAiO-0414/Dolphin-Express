import { arrayBuffer } from "stream/consumers";

// Components/orderlist/OrderNum/OrderNum.ts
Component({
  properties: {

  },
  data: {
    isdisabled: false,
    index: '',
    key: '',
    arr: <any>[],
    ordernumArr: <any>[],
    isshow: false,
    show: false,
    detailData: [{ id: 1, city: '美国', 'channel': '普通货物', statustext: '待填写', time: '2022-05-09 14:07:12', status: 0 }]
  },
  methods: {
    getnum(this: any, e: any) {
      // if (e.detail.value) {
      let value = e.detail.value
      for (var i = 0; i <= value - 1; i++) {
        this.data.arr.push({
          index: i,
          deb: true,
          value: ''
        })
      }
      console.log(this.data.arr);
      let orderindex = this.data.index;
      this.setData({
        index: i,
      })
      console.log(orderindex);
      this.setData({
        isdisabled: true
      })
      // }

      // wx.setStorage({
      //   data: { 'orderindex': orderindex },
      //   key: 'orderindex',
      // })
    },

    //订单号
    getordernum(this: any, e: any) {
      let val = e.detail.value;
      let iputIndex = e.currentTarget.dataset.index;
      console.log(iputIndex, 'i');
      if (val == '') {
        return
      }
      let r = this.data.arr.filter((item:any)=>{
        return item
      })
      // => item.id == iputIndex)[0].value = val
      console.log(r,'rrrr');
      

      // this.data.arr.filter((item:any)=>{
      //   if(item.index == iputIndex) {

      //   }
      // console.log(item,'id');   
      // })
      this.setData({
        isshow: true
      })
      this.setData({
        key: iputIndex
      })

      let newArr = this.data.ordernumArr;
      newArr = [...newArr, val];
      this.setData({
        ordernumArr: newArr
      })
      console.log(this.data.ordernumArr, 'arr');
      let result = this.data.arr.filter((item: any) => {
        console.log(iputIndex, '柔呆呆');
        if (item.index == iputIndex) {
          item.value = this.data.ordernumArr
          return item.value
        }
      })
      console.log(result, 'r');
      console.log(this.data.arr, 'arr2');

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
    delete(this: any) {
      // console.log(1);
      // console.log(this.data.index);
      // let result = this.data.index.splice(this.data.index,1)
      // this.serData({
      //   index:result
      // })
    },
    //添加快递单号
    addbtn(this: any) {
      this.setData({
        show: true
      })
    },
    //确认增加
    addinput(this: any) {
      console.log(111);
      let s = this.data.index
      console.log(s + 1);
      this.setData({
        index: s + 1
      })
      console.log(this.data.index);

    },
    //确定按钮
    yesbutton(this: any) {

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
