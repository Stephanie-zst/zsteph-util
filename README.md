### zsteph-util

> 工具库

#### 安装说明

```
npm install zsteph-util
```

#### 使用说明

```
import zsteph-util from 'zsteph-util'
// or
import { LStorage, Tool } from 'zsteph-util'
```

## 文档

### 1. Day

- pass：格式化现在的已过时间

```
zsteph-util.Day.pass(1586840260500)
```

- format：格式化时间戳

```
import { Day } from 'zsteph-util'
Day.format(new Date())  // 默认格式 'yyyy-MM-dd hh:mm:ss'
Day.format(new Date(), 'yyyy:MM:dd')  // 自定义格式 'yyyy.MM.dd'
```

### 2. LStorage

- get: 获取 localstorage

- set: 设置 localstorage

- del: 删除 localstorage

```
import { LStorage } from 'zsteph-util'

LStorage.get('token')
LStorage.set({
  name:'token',
  value: '32sfdff232',
  expires: 1586934316925
})
LStorage.del('token')
LStorage.clear()
```

### 3. SStorage

- get: 获取 sessionStorage

- set: 设置 sessionStorage

- delete: 删除 sessionStorage

```
import { SStorage } from 'zsteph-util'
```

### 4. Tool

> 常用函数工具库（递归深拷贝、正则类型检测、防抖、节流、手机号脱敏等）

- debounce: 防抖

- debounceStart: 立即执行版

- debounceEnd: 非立即执行版

```
import { Tool } from 'zsteph-util'
methods:{
  sumbit: Tool.debounceStart(() => {
    // todo
  }, 2000),
}
```

- throttle : 节流

- checkType ：类型检测
  > 支持类型有 ip、phone(手机号码)、email(邮箱)、IDCard(身份证)、url(网址)、number(数字)

```
Tool.checkType('1334567890', 'phone') //检测手机
Tool.checkType('example@example.com', 'email') //检测邮箱
```

- deepClone: 拷贝

- formatPhone: 手机号脱敏

```
Tool.formatePhone('1334567890')
```

### 5. Sentry

> 捕获异常信息

- 初始化

```
import { Sentry } from 'zsteph-util'
const sentry = Sentry.getInstance(Vue, {
  dsn: 'https://<key1>@sentry.io/<key2>'
})
Vue.prototype.$sentry = sentry
```

- 主动上报

```
this.$sentry.log('log test')
```
