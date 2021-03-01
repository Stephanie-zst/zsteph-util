/*
 * @Descripttion: sessionStorage
 * @Author: Stephanie-zst
 * @LastEditTime: 2021-03-01 21:40:02
 */

module.exports = {
  get: (name) => {
    if (!name) return
    return window.sessionStorage.getItem(name)
  },

  set: (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    return window.sessionStorage.setItem(name, content)
  },

  del: (name) => {
    if (!name) return
    return window.sessionStorage.removeItem(name)
  },
}
