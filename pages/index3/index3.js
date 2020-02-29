// pages/index3/index3.js
Page({

  data:{
    keywords:"",
    picList:[]
  },
  onLoad:function (options){
     this.data.value = options.value
     
     wx.request({
       url: `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&queryWord=${this.data.value}&ie=utf-8&word=${this.data.value}`,
       
       success:(res)=>{
         this.setData({
           picList: res.data.data
           
         })
         console.log(res.data.data)
       },
       fail:function(err){

       }
     })


  },
  back:function(){
    wx.navigateBack({
      delta:1
    })
  },
  perview:function(e){
    console.log(e)
    wx.previewImage({
    urls: this.data.picList.map(i => i.thumbURL),
    current:e.target.dataset.src
    })
  }
})