// pages/search/search.js
let timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: true,
    inputVal: "",
    searchResult: []
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      wx.request({
        url: 'https://tingapi.ting.baidu.com/v1/restserver/ting',
        data: {
          method: 'baidu.ting.search.catalogSug',
          query: e.detail.value
        },
        success: res => {
          let data = res.data; console.log(data)
          let searchResult = data.song.map((item, idx) => {
            let { artistname, songname, songid, weight } = item;
            return {
              pic: data.album[idx].artistpic,
              artistname,
              songname,
              songid,
              hot: weight
            }
          });
          this.setData({
            searchResult
          })
        }
      });
    }, 600)


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      inputShowed:true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})