---
title: 构建&部署
---


### 构建

项目开发完成之后，执行以下命令进行构建

```bash
yarn build
```

构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件

### 旧版浏览器兼容

在 **.env.production** 内

设置 `VITE_LEGACY=true` 即可打包出兼容旧版浏览器的代码

```bash
VITE_LEGACY = true
```

### 预览

发布之前可以在本地进行预览，有多种方式，这里介绍两种

**不能直接打开构建后的 html 文件**

- 使用项目自定的命令进行预览(推荐)

```bash
# 先打包在进行预览
yarn preview
# 直接预览本地 dist 文件目录
yarn preview:dist
```

- 本地服务器预览(通过 live-server)

```bash
# 1.全局安装live-server
yarn global add live-server
# 2. 进入打包的后目录
cd ./dist
# 本地预览，默认端口8080
live-server
# 指定端口
live-server --port 9000
```

### 分析构建文件体积

如果你的构建文件很大，可以通过项目内置 [rollup-plugin-analyzer](https://github.com/doesdev/rollup-plugin-analyzer) 插件进行代码体积分析，从而优化你的代码。

```bash
yarn report
```

运行之后，在自动打开的页面可以看到具体的体积分布，以分析哪些依赖有问题。

::: tip
左上角可以切换 显示 gzip 或者 brotli
:::

### 压缩

#### 开启 gzip 压缩

开启 gzip，并配合 nginx 的 `gzip_static` 功能可以大大加快页面访问速度

::: tip
只需开启 VITE_BUILD_COMPRESS='gzip' 即可在打包的同时生成 .gz 文件
:::

```bash
# 根据自己路径来配置更改
# 例如部署在nginx /next/路径下  则VITE_PUBLIC_PATH=/next/
VITE_PUBLIC_PATH=/
```

#### 同时开启 gzip 与 brotli

只需开启 `VITE_BUILD_COMPRESS='brotli,gzip'` 即可在打包的同时生成 `.gz` 和 `.br` 文件。


#### gzip 与 brotli 在 nginx 内的配置

```bash
http {
  # 开启gzip
  gzip on;
  # 开启gzip_static
  # gzip_static 开启后可能会报错，需要安装相应的模块, 具体安装方式可以自行查询
  # 只有这个开启，vue文件打包的.gz文件才会有效果，否则不需要开启gzip进行打包
  gzip_static on;
  gzip_proxied any;
  gzip_min_length 1k;
  gzip_buffers 4 16k;
  #如果nginx中使用了多层代理 必须设置这个才可以开启gzip。
  gzip_http_version 1.0;
  gzip_comp_level 2;
  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
  gzip_vary off;
  gzip_disable "MSIE [1-6]\.";

  # 开启 brotli压缩
  # 需要安装对应的nginx模块,具体安装方式可以自行查询
  # 可以与gzip共存不会冲突
  brotli on;
  brotli_comp_level 6;
  brotli_buffers 16 8k;
  brotli_min_length 20;
  brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml;
}
```

