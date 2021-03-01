/*
 * @Descripttion: Cookie
 * @Author: Stephanie-zst
 * @LastEditTime: 2021-03-01 21:36:53
 */

module.exports = {
  get: (name) => {
    const cookieArr = document.cookie.split('; ')
    for (let i = 0, len = cookieArr.length; i < len; i++) {
      let arr = cookieArr[i].split('=')
      if (arr[0] === name) {
        return decodeURIComponent(arr[1])
      }
    }
    return ''
  },

  set: (opt = {}) => {
    let time = new Date()
    let list = []
    let days = opt.days || 1

    opt.path = opt.path || '/'
    if (!opt.name) {
      return
    }

    list.push(`${opt.name}=${opt.value}`)
    delete opt.days
    delete opt.name
    delete opt.value

    for (const key in opt) {
      opt[key] && list.push(`${key}=${opt[key]}`)
    }
    time.setTime(time.getTime() + days * 86400000)
    time = time.toGMTString()
    list.push(`expires=${time}`)

    document.cookie = list.join(';')
  },

  del: (name) => {
    document.cookie = name + '=;expires=' + new Date(0).toGMTString()
  },
}
