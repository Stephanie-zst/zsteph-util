/*
 * @Descripttion: Day
 * @Author: Stephanie-zst
 * @LastEditTime: 2021-03-01 21:37:01
 */

module.exports = {
  /**
   * 格式化现在的已过时间
   * @param {Date} startTime
   * @return {String}
   */
  pass: (startTime) => {
    let now = +new Date(),
      time = now - startTime,
      day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12)
    if (year) return year + '年前'
    if (month) return month + '个月前'
    if (day) return day + '天前'
    if (hour) return hour + '小时前'
    if (min) return min + '分钟前'
    else return '刚刚'
  },

  /**
   * 格式化时间戳
   * @param {number} time  时间戳
   * @param {string} fmt  格式
   * @return {String}
   */
  format: (time, fmt = 'yyyy-MM-dd hh:mm:ss') => {
    let ret
    let date = new Date(time)
    let opt = {
      'y+': date.getFullYear().toString(),
      'M+': (date.getMonth() + 1).toString(),
      'd+': date.getDate().toString(),
      'h+': date.getHours().toString(),
      'm+': date.getMinutes().toString(),
      's+': date.getSeconds().toString(),
    }
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt)
      if (ret) {
        fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
      }
    }
    return fmt
  },
}
