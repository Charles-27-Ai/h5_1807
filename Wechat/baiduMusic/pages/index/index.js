//index.js
//获取应用实例
const app = getApp()

let timer;
Page({
  data: {
    autoplay: true,
    recommend: [],
    inputShowed: false,
    inputVal: "",
    searchResult:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });

    if(timer) clearTimeout(timer);

    timer = setTimeout(()=>{
      wx.request({
        url: 'https://tingapi.ting.baidu.com/v1/restserver/ting',
        data: {
          method: 'baidu.ting.search.catalogSug',
          query: e.detail.value
        },
        success: res => {
          let data = res.data;console.log(data)
          let searchResult = data.song.map((item,idx) => {
            let { artistname, songname, songid, weight } = item;
            return {
              pic: data.album[idx].artistpic,
              artistname,
              songname,
              songid,
              hot:weight
            }
          });
          this.setData({
            searchResult
          })
        }
      });
    },600)

    
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