//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    autoplay: true,
    recommend: [],
    keyword: '',
    tabs: [{
      type: 1,
      text: '新歌'
    }, {
      type: 16,
      text: '流行'
    }, {
      type: 21,
      text: '欧美'
    }, {
      type: 25,
      text: '网络'
    }, {
      type: 11,
      text: '摇滚'
    }, {
      type: 22,
      text: '经典'
    }],

    // tab标签属性
    tabWidth:0,
    sliderOffset:0,
    activeIndex:0,
    tabData:{

    }
  },

  gotoSearch(e) {
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + this.data.keyword
    })
  },

  tabClick(e) {
    let activeIndex = e.currentTarget.dataset.id;
    let sliderOffset = activeIndex* this.data.tabWidth;
    this.setData({
      activeIndex,
      sliderOffset
    })
  },
  getTabData(type){
    wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.billboard.billList',
        type,
        size: 5,
        offset: 0
      },
      success: res => {
        let data = res.data;console.log(data)

        let tabData = {
          ...this.data.tabData,
          [type]:data.song_list //把type变量的值作为属性名
          }

        this.setData({
          tabData
        })


      }
    });
  },

  // 跳转到列表页
  gotoList(e){
    wx.navigateTo({
      url: '/pages/list/list?type='+e.currentTarget.dataset.type
    })
  },
  onLoad: function() {
    // 热门歌曲
    wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.billboard.billList',
        type: 2,
        size: 7,
        offset: 0
      },
      success: res => {
        let data = res.data;

        //根据hot属性排序热门歌曲
        let hot = data.song_list.sort((a, b) => {
          return a.hot - b.hot;
        }).reverse();
        console.log(hot)
        this.setData({
          keyword: hot[0].title,
          recommend: data.song_list
        })


      }
    });

    //tab样式
    wx.getSystemInfo({
      success: res => {
        console.log('res:',res);
        let tabWidth = res.windowWidth / this.data.tabs.length;
        this.setData({
          tabWidth,
          sliderOffset: tabWidth * this.data.activeIndex
        });
      }
    });

    // 获取所有table数据
    this.data.tabs.forEach(tab=>{
      this.getTabData(tab.type)
    });
  }
})