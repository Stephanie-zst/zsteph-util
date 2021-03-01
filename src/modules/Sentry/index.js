/*
 * @Descripttion: 封装异常上报类 Report，使用单例模式，避免监控类重复实例化
 * @Author: Stephanie-zst
 * @LastEditTime: 2021-03-01 21:58:44
 */

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

class Report {
  constructor(Vue, options = {}) {
    if (process.env.NODE_ENV !== 'development') {
      // todo
    }
    this.vue = Vue
    this.options = options
  }
  /**
   * 单例模式
   */
  static getInstance(Vue, Option) {
    if (!(this.instance instanceof this)) {
      this.instance = new this(Vue, Option)
      this.instance.install()
    }
    return this.instance
  }
  /**
   * init
   */
  install() {
    if (process.env.NODE_ENV !== 'development') {
      Raven.config(this.options.dsn, {
        environment: process.env.NODE_ENV,
      })
        .addPlugin(RavenVue, this.Vue)
        .install()
      // raven 内置了 vue 插件，会通过 vue.config.errorHandler 来捕获 vue 组件内错误并上报 sentry 服务

      // 记录用户信息
      Raven.setUserContext({ user: this.options.user || '' })

      // 设置全局tag标签
      Raven.setTagsContext({ environment: this.options.env || '' })
    }
  }

  /**
   * 主动上报
   * type: 'info','warning','error'
   */
  log(data = null, type = 'error', options = {}) {
    // 添加面包屑
    Raven.captureBreadcrumb({
      message: data,
      category: 'manual message',
    })
    // 异常上报
    if (data instanceof Error) {
      Raven.captureException(data, {
        level: type,
        logger: 'manual exception',
        tags: { options },
      })
    } else {
      Raven.captureException('error', {
        level: type,
        logger: 'manual data',
        extra: {
          data,
          options: this.options,
          date: new Date(),
        },
      })
    }
  }
}

export default Report
