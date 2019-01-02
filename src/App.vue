<script>
export default {
  async created () {
    // const res = await get('/weapp/demo')
    // console.log(123, res)
    // wx.request({
    //   url:config.host+'/weapp/demo',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    console.log('小程序启动了')
  }
}
</script>

<style>
.text-footer {
  text-align: center;
  font-size: 12px;
  margin-bottom: 5px;
}
.text-primary {
  color: #ea5149;
}
.page-title {
  padding-left: 20px;
  background: #eee;
  line-height: 40px;
  font-size: 14px;
}
.right {
  float: right;
}
.btn {
  color: white;
  background: #ea5a49;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active {
  background: #fa5a49;
}
</style>
