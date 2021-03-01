let ZUtils = {}
let haveDefault = ['sentry']

// 导出所有模块
const modules = require.context('./modules/', true, /\.js$/)
modules.keys().forEach((modulesKey) => {
  let attr = modulesKey.replace('./', '').replace('.js', '').replace('/index', '')
  if (haveDefault.includes(attr)) {
    ZUtils[attr] = modules(modulesKey).default
  } else {
    ZUtils[attr] = modules(modulesKey)
  }
})

module.exports = ZUtils
