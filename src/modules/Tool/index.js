/*
 * @Descripttion: Tool
 * @Author: Stephanie-zst
 * @LastEditTime: 2021-03-01 21:40:12
 */

module.exports = {
  /**
   * 递归深拷贝
   * @param {object} obj 拷贝对象
   * @returns {object}
   */
  deepClone: (obj) => {
    let objClone = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === 'object') {
      for (let key in obj) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    }
    return objClone
  },

  /**
   * 根据类型返回正则
   * @param {string} str 检测的内容
   * @param {string} type 检测类型
   */
  checkType: (str, type) => {
    const regexp = {
      ip: /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(str),
      port: /^(\d|[1-5]\d{4}|6[1-4]\d{3}|65[1-4]\d{2}|655[1-2]\d|6553[1-5])$/.test(str),
      phone: /^1[3|4|5|6|7|8][0-9]{9}$/.test(str), // 手机号
      number: /^[0-9]+$/.test(str), // 是否全数字
      email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str),
      IDCard: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str),
      url: /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str),
    }
    return regexp[type]
  },

  /**
   * 手机号脱敏
   * @param {string} phone 手机号码
   */
  formatPhone: (phone) => {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  },

  /**
   * 函数节流
   * @param {function} fn 函数
   * @param {number} delay 延迟执行毫秒数
   */
  throttle: (fn, delay) => {
    let timer = null
    return function () {
      let args = arguments
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          fn.apply(this, args)
        }, delay)
      }
    }
  },

  /**
   * 函数防抖 (立即执行版)
   * @param {function} fn 函数
   * @param {number} delay 延迟执行毫秒数
   */
  debounceStart: (fn, delay = 2000) => this.debounce(fn, delay, true),

  /**
   * 函数防抖 (非立即执行版)
   * @param {function} fn 函数
   * @param {number} delay 延迟执行毫秒数
   */
  debounceEnd: (fn, delay = 2000) => this.debounce(fn, delay, false),

  /**
   * 函数防抖 (完全版)
   * @param {function} fn 函数
   * @param {number} delay 延迟执行毫秒数
   * @param {boolean} immediate true 表立即执行，false 表非立即执行
   */
  debounce: (fn, delay, immediate = false) => {
    let timer = null
    let status = true
    if (!immediate)
      return function () {
        let args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), delay)
      }
    else
      return function () {
        clearTimeout(timer)
        if (status) {
          status = false
          fn.call(this, arguments)
        }
        timer = setTimeout(() => (status = true), delay)
      }
  },

  /**
   * 首字母大写
   * @param {string} str 字符
   */
  firstUpperCase: (str) => {
    return str.charAt(0).toUpperCase() + str.toString().slice(1)
  },

  /**
   * 随机数范围
   * @param {number} min 开始
   * @param {number} max 结束
   */
  random: (min, max) => {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min))
    } else {
      return null
    }
  },

  /**
   * 小数安全的运算
   * @param {*} num1
   * @param {*} num2
   */
  safeCompute: (num1, num2, type) => {
    const num1Digits = (num1.toString().split('.')[1] || '').length
    const num2Digits = (num2.toString().split('.')[1] || '').length
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits))
    switch (type) {
      case '+':
        return (num1 * baseNum + num2 * baseNum) / baseNum
      case '-':
        return (num1 * baseNum - num2 * baseNum) / baseNum
      case '*':
        return (num1 * baseNum * (num2 * baseNum)) / baseNum
      case '/':
        return (num1 * baseNum) / (num2 * baseNum) / baseNum
    }
  },

  /**
   * 移除对象多个指定键
   * @param {object} data 对象
   * @param {string} keys 键
   */
  removeDataKeys: (data, keys) => {
    let result = data
    if (keys.length) {
      for (let i = 0; i < keys.length; i++) {
        result = this.removeDataKey(result, keys[i])
      }
      return result
    } else {
      return data
    }
  },

  /**
   * 移除对象一个指定键
   * @param {object} data 对象
   * @param {string} keys 键
   */
  removeDataKey: (data, key) => {
    let result = {}
    for (let currentKey in data) {
      if (currentKey !== key) {
        result[currentKey] = data[currentKey]
      }
    }
    return result
  },
}
