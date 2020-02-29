//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    percent:1,
    r:0,
    g:0,
    b:0
  },
  onLoad:function(){
    setInterval(()=>{
        this.data.percent++;
        this.setData({
          percent:this.data.percent
        })
    },100)
  },
  changered:function(e){
    this.data.r =e.detail.value
    this.setData({
      r:this.data.r
    })
  },
  changegreen: function (e) {
    this.data.g = e.detail.value
    this.setData({
      g: this.data.g
    })
  },
  changeblue: function (e) {
    this.data.b = e.detail.value
    this.setData({
      b: this.data.b
    })
  }
})
