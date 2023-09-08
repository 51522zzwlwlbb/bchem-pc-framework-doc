---
title: 开始
---

本文会帮助你从头启动项目

## 前言

::: tip 关于组件

- 项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。

:::

## 环境准备

本地环境需要安装 [Yarn1.x](https://yarnpkg.com/)、[Node.js](https://nodejs.org/en) 和 [Git](https://git-scm.com/)

::: warning 注意

- 必须使用[Yarn1.x](https://yarnpkg.com/)，否则依赖可能安装不上。
- [Node.js](https://nodejs.org/en) 版本要求12.x以上，且不能为13.x版本，这里推荐 14.x 及以上。

:::

## 工具配置

推荐使用[vscode](https://code.visualstudio.com/),并安装以下工具来提高开发效率及代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 代码获取

::: warning 注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。

:::

### 从 Gitee 获取代码

``` bash
git clone https://gitee.com/saltFishHasDream/hgb-admin.git
```

::: tip 提示

tag1.0.0 是纯净版本，tag1.0.0-demo是带示例的项目，如果不知道怎么写可以下载demo项目参考。

:::

### 项目启动

必须使用[Yarn](https://yarnpkg.com/)进行依赖安装（若其他包管理器安装不了自己处理）。

::: danger 注意

项目下载下来之后，先运行`yarn bootstrap`进行项目初始化，如果未执行会导致git提交钩子不生效。

:::

## npm script
``` js
"scripts": {
  # 项目初始化，只执行一次，多次执行后果自负
  "bootstrap": "yarn install && yarn prepare",
  # 运行项目 方式1
  "serve": "npm run dev",
  # 运行项目 方式2
  "dev": "vite",
  # 初始化git钩子
  "prepare": "husky install && npx husky add .husky/pre-commit 'npm run lint:staged'",
  # 构建项目
  "build": "vite build && esno ./build/script/postBuild.ts",
  # 清空缓存后构建项目
  "build:no-cache": "yarn clean:cache && npm run build",
  # 生成打包分析，在 `Mac OS` 电脑上执行完成后会自动打开界面，在 `Window` 电脑上执行完成后需要打开 `./build/.cache/stats.html` 查看
  "report": "cross-env REPORT=true npm run build",
  # 预览打包后的内容（先打包在进行预览）
  "preview": "npm run build && vite preview",
  # 直接预览本地 dist 文件目录
  "preview:dist": "vite preview",
  # 删除缓存
  "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
  # 删除 node_modules (`window` 系统手动删除该目录较慢，可以使用该命令来进行删除)
  "clean:lib": "rimraf node_modules",
  # 执行 eslint 校验，并修复部分问题
  "lint:eslint": "eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix",
  # 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）
  "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
  # 检查代码
  "lint:staged": "lint-staged",
  # 格式化代码
  "lint:pretty": "pretty-quick --staged",
  # 执行本地gzip测试
  "test prod gzip": "http-server dist --cors --gzip -c-1"
},
```

## 目录说明

``` js
.
├── .husky # husky配置文件
├── .vscode # vscode项目配置文件
├── build # 打包脚本相关
│   ├── config # 配置文件
│   ├── generate # 生成器
│   ├── script # 脚本
│   └── vite # vite配置
├── mock # mock文件夹
├── public # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件
│   ├── assets # 资源文件
│   │   ├── icons # icon sprite 图标文件夹
│   │   ├── images # 项目存放图片的文件夹
│   │   └── svg # 项目存放svg图片的文件夹
│   ├── components # 公共组件
│   ├── directives # 指令
│   ├── enums # 枚举/常量
│   ├── hooks # hook
│   │   ├── component # 组件相关hook
│   │   ├── core # 基础hook
│   │   ├── event # 事件相关hook
│   │   ├── setting # 配置相关hook
│   │   └── web # web相关hook
│   ├── layouts # 布局文件
│   │   ├── default # 默认布局
│   │   ├── iframe # iframe布局
│   │   └── page # 页面布局
│   ├── locales # 多语言
│   ├── logics # 逻辑
│   ├── main.ts # 主入口
│   ├── router # 路由配置
│   ├── settings # 项目配置
│   │   ├── componentSetting.ts # 组件配置
│   │   ├── designSetting.ts # 样式配置
│   │   ├── encryptionSetting.ts # 加密配置
│   │   ├── localeSetting.ts # 多语言配置
│   │   ├── projectSetting.ts # 项目配置
│   │   └── siteSetting.ts # 站点配置
│   ├── store # 数据仓库
│   ├── utils # 工具类
│   └── views # 页面
├── types # 类型文件
├── vite.config.ts # vite配置文件
└── windi.config.ts # windcss配置文件
```