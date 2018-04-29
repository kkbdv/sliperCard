
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData1:{}, 
    animationData2: {} ,
    cardInfoList:[],
    All: [{ detail: '你好',colortype:0 }, { colortype:2 }, { colortype:1}, { colortype:0}, { colortype:0}],
  },
  //卡片1
  touchmove1:function(e){  
    console.log(e);
    let pageY = e.touches[0].pageY; //触点当前位置
    let moveY=this.data.screenheight*0.5; //
    var b=this.data.cardInfoList
    var a=[{balltop:0,colortype:-1}];
    a[0].balltop = e.touches[0].pageY - moveY;//当前触点Y-中心点Y
    b[0].balltop = a[0].balltop;
    this.setData({
      cardInfoList:b,
    })
  },
  //松手后事件
  touchend1:function(e){
    console.log(e)
    if (e.target.offsetTop>250){
      this.Animation1(500)
    }else{
    this.setData({
      // balltop1: 42
    })
    }
  },
//定义动画特效
  Animation1:function(transX){ //：-对象的直接量
    var animation=wx.createAnimation({
      duration: 400,
      timingFunction: "ease",
    });
    this.animation=animation;
    this.animation.translateY(transX).step();
    this.setData({
        animationData1:this.animation.export()
    })
    
  },
//移动到卡1动作
twotoone:function(){
  this.animation=wx.createAnimation({
    duration:400,
    timingFunction:"ease",
  })
  this.animation.translateY(12).translateX(-15).step();
  this.setData({
    animationData2:this.animation.export()
  })
},
//卡片2
  Animation2: function (transX) { //：-对象的直接量
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: "ease",
    });
    this.animation = animation;
    this.animation.translateY(transX).step();
    this.setData({
      animationData2: this.animation.export()
    })
  },

  onLoad: function (options) {
    var that=this;
    var temp;
    for(let i=0;i<3;i++){
      temp = that.data.All.shift();
      //如何让对象数组中第一个对象增加属性
      that.data.cardInfoList.push(temp);
    }
    that.data.cardInfoList[0].balltop="42";
    that.data.cardInfoList[0].ballleft = "0";
    that.data.cardInfoList[0].z_index = "6";
    that.data.cardInfoList[1].balltop = "30";
    that.data.cardInfoList[1].ballleft = "15";
    that.data.cardInfoList[1].z_index = "4";
    that.data.cardInfoList[2].balltop = "18";
    that.data.cardInfoList[2].ballleft = "30";
    that.data.cardInfoList[2].z_index = "2";

    wx:wx.getSystemInfo({
      success: function(res) {
        console.log(res.windowHeight*0.5);
        that.setData({
          screenheight :res.windowHeight,
          cardInfoList:that.data.cardInfoList,

        })
      }
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