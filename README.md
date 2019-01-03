# mpvue+Koa2
# 基于mpvue + ES6/7 + webpack + Node.js + Koa + Mysql 实现小程序图书管理

## 项目构架
- 前端
  - 原生小程序
  - Vue.js
  - mpvue
- 后端
  - Koa2
  - 数据库（mysql）

***
## 功能介绍
1. 个人中心 - 腾讯云sdk登录,小程序本地存储,自定义组件
2. 添加图书 - Async+await异步请求,前后端传递isbn号,豆瓣读书api,https模块获取豆瓣数据
3. 图书列表 - Knex、select查询图书,前后端传递isbn号,分页原理分析,首页轮播图实现,点击跳转详情页
4. 图书详情 - mpvue路由传参,小程序图片渲染,组件化开发,循环显示标签
5. 评论模块 - 表单组件textarea / switch,获取手机系统信息,获取用户地理位置,百度地图api转换经纬度,评论添加实现
6. 评论列表 - 根据用户opened,筛选评论列表,筛选图书评论,复用card组件

***
## 项目运行([Node.js](https://nodejs.org/ "nodejs"))
#### 注意：前后端是在一个项目里面，所以你安装MiniApp目录依赖之后还要进入server文件夹安装依赖
```
cd MiniApp   --- cd MiniApp/server

npm install  --- npm install

npm run dev  --- npm run dev

```

***
## 总结
- 使用vue语法配合小程序原生api及原生组件完成前端开发
- 获取手机系统信息,获取用户地理位置,百度地图api转换经纬度
- 使用Koa2中件间组合mysql完成后端开发
- Knex、select查询图书
- 根据用户opened,筛选评论列表,筛选图书评论

***
## 项目效果图
![](/screenshots/图书列表.gif)
![](/screenshots/图书详情.gif)
![](/screenshots/评论列表.gif)
![](/screenshots/me.png)
