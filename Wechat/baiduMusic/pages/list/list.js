// pages/list/list.js

// 获取全局app.js的数据
const app = getApp();
console.log(app)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    size:10,
    offset:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {type} = options;

    //获取type对应的文字内容
    let {title} = app.globalData.types.filter(item=>item.type==type)[0];

  // 设置小程序页面标题
    wx.setNavigationBarTitle({
      title
    });


    wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.billboard.billList',
        type,
        size: this.data.size,
        offset: this.data.offset
      },
      success: res => {
        let data = res.data; console.log(data)

        this.setData({
          datalist:data.song_list
        })


      }
    });
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