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
      key:curindex
    })
    let channeltext = this.data.channeltext[curindex].textItem;
    wx.setStorage({
      data: { 'channeltext': channeltext },
      key: 'channeltext',
    })
  },
  yesbutton() {
    wx.navigateTo({
      url:'/pages/AddressItem/address/address',
      success:(res)=>{
        console.log(res);
      }
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  goshopping(){
    wx.navigateTo({
      url:'/pages/AddressItem/CopyInfo/copyinfo'
    })
  },
  cost(){
    wx.navigateTo({
      url:'/pages/cost/cost'
    })
  },
  notice(){
    wx.navigateTo({
      url:'/pages/notice/notice'
    })
  },
  
})
