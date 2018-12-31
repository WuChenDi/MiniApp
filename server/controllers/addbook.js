const https = require('https')
/* mysql 数据库修改 **server/config.js** */
const {
  mysql
} = require('../qcloud')

/**
 * 新增图书
 * [获取豆瓣信息 无法访问](https://developers.douban.com/wiki/?title=book_v2#get_isbn_book)
 * [数据](https://api.douban.com/v2/book/isbn/9787536692930)
 * 2. 入库
 * @param {*} ctx
 */
module.exports = async ctx => {
  /* post 请求在 body 字段里面 */
  /* 前端 Me.vue 发过来的 isbn, openid */
  const {
    isbn,
    openid
  } = ctx.request.body
  console.log('添加图书', isbn, openid)
  if (isbn && openid) {
    /* 防止重复添加图书 */
    const findRes = await mysql('books')
      .select()
      .where('isbn', isbn)
    if (findRes.length) {
      ctx.state = {
        code: -1,
        data: {
          msg: '图书已存在'
        }
      }
      return
    }
    let url = 'https://api.douban.com/v2/book/isbn/' + isbn
    console.log(url)
    /* 抓取豆瓣图书信息 bookinfo */
    const bookinfo = await getJSON(url)
    /* 显示豆瓣图书单项信息 */
    const rate = bookinfo.rating.average
    const {
      title,
      image,
      alt,
      publisher,
      summary,
      price
    } = bookinfo
    /* tags 变成 -> tags: "科幻 1000, 小说 500, ..." */
    const tags = bookinfo.tags
      .map(v => {
        return `${v.title} ${v.count}`
      })
      .join(',')
    const author = bookinfo.author.join(',')
    console.log({
      rate,
      title,
      image,
      alt,
      publisher,
      summary,
      price,
      tags,
      author
    })
    try {
      /* 数据插入 mysql 库 */
      /* insert 要写 try catch */
      await mysql('books').insert({
        isbn,
        openid,
        rate,
        title,
        image,
        alt,
        publisher,
        summary,
        price,
        tags,
        author
      })
      /* 返回 */
      ctx.state.data = {
        title,
        msg: 'success'
      }
    } catch (e) {
      ctx.state = {
        /* 0: 正确, -1: 错误 */
        code: -1,
        data: {
          msg: '新增失败:' + e.sqlMessage
        }
      }
    }
  }
}

function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let urlData = ''
      /* 获取新数据的时候 */
      res.on('data', data => {
        urlData += data
      })
      /* 获取结束的时候 */
      res.on('end', data => {
        /* string 处理成 json */
        const bookinfo = JSON.parse(urlData)
        /* 图书存在 */
        if (bookinfo.title) {
          resolve(bookinfo)
        }
        reject(bookinfo)
      })
    })
  })
}
