/*
 * @Descripttion:
 * @Author: Stephanie-zst
 * @LastEditTime: 2021-03-01 21:41:44
 */

const day = require('@/modules/day')

describe('day 模块', () => {
  test('format 默认格式，返回时间格式是否正常', () => {
    expect(day.format(1586934316925)).toBe('2020-04-15 15:05:16')
  })

  test('format 传参数，返回时间格式是否正常', () => {
    expect(day.format(1586934316925, 'yyyy.MM.dd')).toBe('2020.04.15')
  })
})
