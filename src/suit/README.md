---
title: 配置项目
---

### 本地开发设置

### mock

本地开发默认开启mock，`.env.development` 中进行配置

```bash
# 是否开启mock
VITE_USE_MOCK = true
```

### 接口代理

默认代理路径为 `/api`, `.env.development` 中进行配置

```bash
# 接口前缀
VITE_GLOB_API_URL_PREFIX = /api
```

::: warning 注意
`VITE_PROXY = [["/api","http://localhost:8001"]]` 该配置会在代理的时候将`/api`路径去除，例：

```js
http.request({
  url: '/api/dashboard/console',
  method: 'get',
});
```

最后代理的路径就是`http://localhost:8001/dashboard/console`。

如果需要保留路径，可以设置：`VITE_PROXY = [["/api","http://localhost:8001/api"]]`。
:::

### 登录白名单设置

部分情况下，可能需要设置非登录也能查看的页面，可以在路由守卫中增加白名单设置，路径在`/src/router/guards.ts`中：

```js
const whitePathList = ['/', '/social-login', '/no-login-path'];
```

### 首页、登录页、错误跳转页设置

`/src/enums/pageEnums.ts`中自定义设置登录页、首页、错误页的地址。

### 请求处理

开始项目之前，和后端约定好请求code的枚举，并将成功的code设置到项目的`/src/enums/httpEnums.ts`中：

```ts
export enum ResultEnum {
  SUCCESS = 200, // 自定义成功的code
  ERROR = -1, // 自定义错误的code
  TIMEOUT = 10042, // 自定义接口超时时间
  TYPE = 'success',
}
```

### 一些碎碎念

#### `window['$message']`

直接使用 `window['$message']` 可以直接以service方式调用`message`组件, 不用每次在需要使用的时候进行以下操作：

```js
import { useMessage } from 'naive-ui';
const message = useMessage();
message.error('some error message');

// 直接使用 window['$message'].error('some error message');
```

#### h函数

vue3中渲染表格、数据，尽量使用h函数，好处在于js的可操作性大于template，并且得益于vue3的特性，多数情况下你认为不能响应式的操作它其实都可以是响应式的

#### tabsView的缓存

系统会默认缓存之前打开过的页面标签，如果不需要，可以在`/src/layout/components/TagsView/index.vue`中关于 `cacheRoutes`的逻辑进行修改

::: tip
暂时不支持配置，2.0规划支持
:::

#### 布局

尽量多使用grid的响应式栅格，移动端都能适配那真的是泰裤辣
