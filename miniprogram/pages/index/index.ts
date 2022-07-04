// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    itemurl: [
      { id: 1, img: '../../assets/images/swiperitem1.png' },
      { id: 2, img: '../../assets/images/swiperitem1.png' }
    ],
    show: false,
    channeltext: [
      { id: 1, textItem: '普通货物' },
      { id: 2, textItem: '电子产品' },
      { id: 3, textItem: '液体粉末' },
      { id: 4, textItem: '内地EMS' },
      { id: 5, textItem: '广东EMS' }
    ],
    key:0,
  },
  transport() {
    this.setData({
      show: true
    })
  },
  channel(e:any) {
    let curindex = e.currentTarget.dataset.index;
    this.setData({
      // curindex:curindex,
      key:curindex
    })
    console.log(this.data.key);
  },
  yesbutton() {
    wx.navigateTo({
      url:'/pages/address/address',
      success:(res)=>{
        console.log(res);
      }
    })
  },
  onClose() {
    this.setData({ show: false });
  },
})
