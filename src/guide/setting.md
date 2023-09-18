---
title: 配置
---

## 项目配置项

用于修改项目的配色、布局、缓存、多语言、组件默认配置

## 环境变量配置

项目的环境变量配置位于项目根目录下的 .env、.env.development、.env.production

具体可以参考 [Vite 文档](https://github.com/vitejs/vite#modes-and-environment-variables)

``` bash
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

::: tip 温馨提示

温馨提醒

只有以 VITE_ 开头的变量会被嵌入到客户端侧的包中，你可以项目代码中这样访问它们：

``` js
console.log(import.meta.env.VITE_PROT);
```

以 VITE_GLOB_* 开头的的变量，在打包的时候，会被加入app.config.js配置文件当中.
:::

### 配置项说明

#### .env

所有环境适用

```bash
# 端口号
VITE_PORT=8001
# 网站标题
VITE_GLOB_APP_TITLE=HGBAdmin
# 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符
VITE_GLOB_APP_SHORT_NAME=HGBAdmin
# 生产环境 开启mock
VITE_GLOB_PROD_MOCK=true
```

#### .env.development

开发环境适用

```bash
# 只在开发模式中被载入
VITE_PORT=8001
# 是否开启mock数据，关闭时需要自行对接后台接口
VITE_USE_MOCK=true
# 资源公共路径,需要以 /开头和结尾
VITE_PUBLIC_PATH=/
# 是否删除Console.log
VITE_DROP_CONSOLE=false
# 代理配置，第一个会在代理时去掉/userApi前缀，第二个不会
VITE_PROXY=[["/userApi","http://localhost:8001"],["/upload","http://localhost:8001/upload"]]
# API 接口地址
VITE_GLOB_API_URL=
# 图片上传地址
VITE_GLOB_UPLOAD_URL=
# 图片前缀地址
VITE_GLOB_IMG_URL=
# 接口前缀
VITE_GLOB_API_URL_PREFIX=
```

::: warning 注意

这里配置的 `VITE_PROXY` 以及 `VITE_GLOB_API_URL`, `/api` 需要是唯一的，不要和接口有的名字冲突

如果你的接口是 `http://localhost:3000/api` 之类的，请考虑将 `VITE_GLOB_API_URL=/otherApi` 换成别的名字

:::

#### .env.production

生产环境适用

```bash
# 是否开启mock
VITE_USE_MOCK=false
# 网站根目录
VITE_PUBLIC_PATH=/hgb-admin/
# 只有_GLOB_前缀的才会注入到运行时
VITE_GLOB_PUBLIC_PATH=/hgb-admin/
# 网站前缀
VITE_BASE_URL=/hgb-admin/
# 是否删除console
VITE_DROP_CONSOLE=true
# API
VITE_GLOB_API_URL=
# 图片上传地址
VITE_GLOB_UPLOAD_URL=
# 图片前缀地址
VITE_GLOB_IMG_URL=
# 接口前缀
VITE_GLOB_API_URL_PREFIX=/api
# 是否启用gzip压缩或brotli压缩
# 可选: gzip | brotli | none
# 如果你需要多种形式，你可以用','来分隔
VITE_BUILD_COMPRESS='none'
# 使用压缩时是否删除原始文件，默认为false
VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE=false
```

## 生产环境动态配置

### 说明

当执行yarn build构建项目之后，会自动生成 _app.config.js 文件并插入 index.html。

<b>注意: 开发环境不会生成</b>

```js
// _app.config.js
// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME
window.__PRODUCTION__VUE_VBEN_ADMIN__CONF__ = {
  VITE_GLOB_APP_TITLE: 'HGB-admin',
  VITE_GLOB_APP_SHORT_NAME: 'HGB-admin',
  VITE_GLOB_API_URL: '/app',
  VITE_GLOB_API_URL_PREFIX: '/',
  VITE_GLOB_UPLOAD_URL: '/upload',
};
```

### 作用

_app.config.js 用于项目在打包后，需要动态修改配置的需求，如接口地址。不用重新进行打包，可在打包后修改 /dist/_app.config.js 内的变量，刷新即可更新代码内的局部变量。

### 如何获取全局变量

想要获取 _app.config.js 内的变量，可以使用 src/hooks/setting/index.ts 提供的函数来进行获取

### 如何新增(新增一个可动态修改的配置项)

1.首先在 `.env` 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 `VITE_GLOB_`开头

2.`VITE_GLOB_` 开头的变量会自动加入环境变量，通过在 `src/types/config.d.ts` 内修改 `GlobEnvConfig` 和 `GlobConfig` 两个环境变量的值来定义新添加的类型

3.`useGlobSetting` 函数中添加刚新增的返回值即可

``` ts
const {
  VITE_GLOB_APP_TITLE,
  VITE_GLOB_API_URL,
  VITE_GLOB_APP_SHORT_NAME,
  VITE_GLOB_API_URL_PREFIX,
  VITE_GLOB_UPLOAD_URL,
} = ENV;

export const useGlobSetting = (): SettingWrap => {
  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL
  };
  return glob as Readonly<GlobConfig>;
};
```

## 项目配置

::: warning WARNING

项目配置文件用于配置项目内展示的内容、布局、文本等效果，该配置，暂时没有存于localStorage中。刷新则恢复初始值。

:::

`src/settings/projectSetting.ts`

```js
const setting = {
    //导航模式 vertical 左侧菜单模式 horizontal 顶部菜单模式
    navMode: 'vertical',
    //导航风格 dark 暗色侧边栏 light 白色侧边栏 header-dark 暗色顶栏
    navTheme: 'dark',
    //顶部
    headerSetting: {
        //背景色
        bgColor: '#fff',
        //固定顶部
        fixed: true,
        //显示重载按钮
        isReload: true,
    },
    //多标签
    multiTabsSetting: {
        //背景色
        bgColor: '#fff',
        //是否显示
        show: true,
        //固定多标签
        fixed: true,
    },
    //菜单
    menuSetting: {
        //最小宽度
        minMenuWidth: 64,
        //菜单宽度
        menuWidth: 200,
        //固定菜单
        fixed: true,
    },
    //面包屑
    crumbsSetting: {
        //是否显示
        show: true,
        //显示图标
        showIcon: false,
    },
    //菜单权限模式 FIXED 前端固定路由  BACK 动态获取
    permissionMode: 'FIXED',
};
export default setting;
```

### 组件配置

`src/settings/componentSetting.ts`

```js
export default {
    table: {
        apiSetting: {
            // 当前页的字段名
            pageField: 'page',
            // 每页数量字段名
            sizeField: 'pageSize',
            // 接口返回的数据字段名
            listField: 'list',
            // 接口返回总页数字段名
            totalField: 'pageCount',
        },
        //默认分页数量
        defaultPageSize: 10,
        //可切换每页数量集合
        pageSizes: [10, 20, 30, 40, 50],
    },
    upload: {
        //考虑接口规范不同
        apiSetting: {
            // 集合字段名
            infoField: 'data',
            // 图片地址字段名
            imgField: 'photo',
        },
        //最大上传图片大小
        maxSize: 2,
        //图片上传类型
        fileType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
    },
};
```

### 主题配置

`src/settings/designSetting.ts`

```js
// app theme preset color
export const appThemeList: string[] = [
    '#2d8cf0',
    '#0960bd',
    '#0084f4',
    '#009688',
    '#536dfe',
    '#ff5c93',
    '#ee4f12',
    '#0096c7',
    '#9c27b0',
    '#ff9800',
    '#FF3D68',
    '#00C1D4',
    '#71EFA3',
    '#171010',
    '#78DEC7',
    '#1768AC',
    '#FB9300',
    '#FC5404',
];

const setting = {
    //深色主题
    darkTheme: false,
    //系统主题色
    appTheme: '#2d8cf0',
    //系统内置主题色列表
    appThemeList,
};

export default setting;
```