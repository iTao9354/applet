// pages/exercise/exercise.js
var initData = 'this is first line\nthis is second line'
var extraLine = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '这是我的练习页面',
    idAttr: 0,
    conditionAttr: true,
    flagOperation: false,
    a: 1,
    b: 2, 
    c: 3,
    lengthLogic: 6,
    strOperation: 'Carol',
    objPath: {
      key: 'Hello'
    },
    arrPath: ['Carol'],
    objCombine: {
      key: 'Amy',
      value: 'Penny'
    },
    key: 's',
    value: 'a',
    bar: 'p',

    arrayFor: ['Sheldon', 'Amy', 'Lenard', 'Penny', 'Howard', 'Bernadette', 'Raj'],
    arrayItem: [
      {msg: 'foo'},
      {msg: 'bar'}
    ],

    dataIf: 'Penny',

    staffA_tem: { firstName: 'Hulk', lastName: 'Hu' },
    staffB_tem: { firstName: 'Shang', lastName: 'You' },
    staffC_tem: { firstName: 'Gideon', lastName: 'Lin' },

    countEv: 1,

    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 2000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长

    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],

    text: initData,

    btnType: 'primary', // 按钮的样式类型
    btnSize: 'default', // 按钮的大小
    btnPlain: false, // 按钮是否镂空
    disabled: false, // 是否禁用
    btnLoading: false, // 名称前是否带loading图标

    checkboxItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },
  add() {
    window.location.href = 'tel:'
    this.setData({
      countEv: this.data.countEv + 1
    })
  },
  tapName(e) {
    console.log(e)
  },
  handleTap1() {
    console.log('I\'m outer view1')
  },
  handleTap2() {
    console.log('I\'m outer view2')
  },
  handleTap3() {
    console.log('I\'m inner view3')
  },
  handleTap4() {
    console.log('I\'m inner view4')
  },

  // 面板指示点显示隐藏
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  // 是否可以自动切换
  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  // 监听自动切换时间间隔
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  // 监听滑块动画时长
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  // text加一条线
  addLine() {
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  // text删除线
  removeLine() {
    if(extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },

  // 获取用户信息
  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },

  // 获取复选框的值
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带的value值为' + e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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