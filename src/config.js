// 配置项

// 本地环境
const host = 'http://192.168.1.126:5757'

// 开发环境
// const host = 'https://f1kjl9op.qcloud.la'

const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`
}
export default config
