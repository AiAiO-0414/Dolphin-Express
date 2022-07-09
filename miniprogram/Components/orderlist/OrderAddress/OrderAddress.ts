// Components/orderlist/OrderAddress/OrderAddress.ts
Component({
  properties: {
    addressdata: Object
  },
  data: {
    phonenum: '18820220334'
  },
  methods: {
    copy(this:any) {
      console.log(111);
      this.triggerEvent("CopyPhoneNum")
    },
    copynum(this:any){
    console.log(111);

      this.triggerEvent("CopyNum")
    }
  }
})
