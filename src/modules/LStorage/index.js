/*
 * @Descripttion: localStorage
 * @Author: Stephanie-zst
 * @LastEditTime: 2021-03-01 21:37:15
 */

module.exports = {
  set: (params) => {
    let content = {}
    Object.assign(content, params, { name: '', value: '', expires: '' })
    const { name, value } = content
    if (name && value) {
      return window.localStorage.setItem(name, JSON.stringify(content))
    }
  },

  get: (name) => {
    if (!name) return
    let content = window.localStorage.getItem(name)
    try {
      content = JSON.parse(content)
    } catch (error) {
      return content
    }
    // 没有过期时间
    if (content.expires === '') return content.value
    const now = +new Date()
    if (now >= content.expires) {
      return window.localStorage.removeItem(name)
    } else {
      return content.value
    }
  },

  del: (name) => {
    if (!name) return
    return window.localStorage.removeItem(name)
  },

  clear: () => {
    return window.localStorage.clear()
  },
}
