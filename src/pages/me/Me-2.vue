<template>
  <div class="container">
    <!-- <div class="userinfo" @click='login'>
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div> -->
    <div class="userinfo" @click='login'>
      <img :src="userinfo.avatarUrl" alt="">
      <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">{{userinfo.nickName}}</button>
    </div>
    <YearProgress></YearProgress>

    <button v-if='userinfo.openId' @click='scanBook' class='btn'>添加图书</button>
  </div>
</template>
<script>
import qcloud from "wafer2-client-sdk";
import YearProgress from "@/components/YearProgress";
import { showSuccess, post } from "@/util";
import config from "@/config";
export default {
  components: {
    YearProgress
  },
  data() {
    return {
      userinfo: {
        avatarUrl: "../../../static/img/unlogin.png",
        nickName: "点击登录"
      }
    };
  },
  mounted() {
    // 一进来看看用户是否授权过
    this.getSetting();
  },
  methods: {
    scanBook() {
      wx.scanCode({
        success: res => {
          if (res.result) {
            console.log(res.result);
          }
        }
      });
    },
    getSetting() {
      wx.getSetting({
        success: function(res) {
          if (res.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo);
                // self.userinfo
                console.log("用户已经授权过");
              }
            });
          } else {
            console.log("用户还未授权过");
          }
        }
      });
    },
    getUserInfo1() {
      console.log("click事件首先触发");
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      // console.log(wx.canIUse('button.open-type.getUserInfo'))
      if (wx.canIUse("button.open-type.getUserInfo")) {
        // 用户版本可用
      } else {
        console.log("请升级微信版本");
      }
    },
    bindGetUserInfo(e) {
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData) {
        console.log("用户按了允许授权按钮");
      } else {
        console.log("用户按了拒绝按钮");
      }
    }
  },
  onShow() {
    // console.log(123)
    let userinfo = wx.getStorageSync("userinfo");
    // console.log([userinfo])
    if (userinfo) {
      this.userinfo = userinfo;
    }
    // console.log(this.userinfo)
  }
};
</script>

<style lang='scss'>
.container {
  padding: 0 30rpx;
}
.userinfo {
  margin-top: 100rpx;
  text-align: center;
  img {
    width: 150rpx;
    height: 150rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}
</style>
