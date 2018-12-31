const {
  mysql
} = require('../qcloud')

module.exports = async (ctx) => {
  const {
    id
  } = ctx.request.query
  await mysql('books')
    .where('id', id)
    .increment('count', 1)
}
