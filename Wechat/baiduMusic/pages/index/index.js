//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    autoplay: true,
    recommend: [],
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  gotoSearch(){
    wx.navigateTo({
      url:'/pages/search/search'
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

        this.setData({
          recommend: data.song_list
        })


      }
    });
  }
})