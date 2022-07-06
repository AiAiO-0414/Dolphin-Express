Page({
  data: {
    arr: <any>[],
    indexList: ['#', 'A', 'B', 'C', 'D'],
    addresslist:
    {
      '#': [{
        title: '中国',
        Etitle: 'China'
      }, {
        title: '美国',
        Etitle: 'United States'
      }, {
        title: '巴基斯坦',
        Etitle: 'Pakistan'
      }, {
        title: '英国',
        Etitle: 'United Kingdom'
      }],
      A: [{ id: 1, title: '阿尔巴尼亚', Etitle: 'Albania' },
      { id: 2, title: '阿尔及利亚', Etitle: 'Algeria' },
      { id: 3, title: '阿富汗', Etitle: 'Afghanistan' },
      { id: 4, title: '阿根廷', Etitle: 'Argentina' }],
      B: [{
        title: '巴基斯坦2',
        Etitle: 'Pakistan'
      }, {
        title: '巴西',
        Etitle: 'United Kingdom'
      }],
      C: [{
        title: '加拿大',
        Etitle: 'Canada'
      }, {
        title: '科科斯群岛',
        Etitle: 'Cocos Islands'
      }],
      D: [{
        title: '丹麦',
        Etitle: 'Denmark'
      }, {
        title: '多米尼克',
        Etitle: 'Dominica'
      },
      {
        title: '吉布提',
        Etitle: 'Djibouti'
      }
      ]
    }
  },

  onLoad() {

  },
  //选择国家
  selectCity(){
    console.log(111);
  },
  seachcity(e: any) {
    let keyword = e.detail
    let obj = this.data.addresslist
    for (var k in obj) {
      for (var i = 0; i < obj[k].length; i++) {
        let arr =[]
        let result = obj[k][i]
        let a = arr.push(result.title)
        console.log(result);
        // result.filter((item: any) => {
        //   console.log(item);
        // })
      }
    }

    // let list = arrlist.filter((item: any) => {

    //   return item.title.includes(keyword) && item
    // })
    // console.log(list);

    // console.log(list,'list');/
    // let str = list
    // console.log(str);
  }
})