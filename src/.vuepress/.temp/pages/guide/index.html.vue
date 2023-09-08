<template><div><p>本文会帮助你从头启动项目</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<div class="hint-container tip">
<p class="hint-container-title">关于组件</p>
<ul>
<li>项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。</li>
</ul>
</div>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<p>本地环境需要安装 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn1.x<ExternalLinkIcon/></a>、<a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git<ExternalLinkIcon/></a></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>必须使用<a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn1.x<ExternalLinkIcon/></a>，否则依赖可能安装不上。</li>
<li><a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a> 版本要求12.x以上，且不能为13.x版本，这里推荐 14.x 及以上。</li>
</ul>
</div>
<h2 id="工具配置" tabindex="-1"><a class="header-anchor" href="#工具配置" aria-hidden="true">#</a> 工具配置</h2>
<p>推荐使用<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscode<ExternalLinkIcon/></a>,并安装以下工具来提高开发效率及代码格式化</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify" target="_blank" rel="noopener noreferrer">Iconify IntelliSense<ExternalLinkIcon/></a> - Iconify 图标插件</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense" target="_blank" rel="noopener noreferrer">windicss IntelliSense<ExternalLinkIcon/></a> - windicss 提示插件</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noopener noreferrer">I18n-ally<ExternalLinkIcon/></a> - i18n 插件</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noopener noreferrer">Volar<ExternalLinkIcon/></a> - vue 开发必备</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint<ExternalLinkIcon/></a> - 脚本代码检查</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier<ExternalLinkIcon/></a> - 代码格式化</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noopener noreferrer">Stylelint<ExternalLinkIcon/></a> - css 格式化</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noopener noreferrer">DotENV<ExternalLinkIcon/></a> - .env 文件 高亮</li>
</ul>
<h2 id="代码获取" tabindex="-1"><a class="header-anchor" href="#代码获取" aria-hidden="true">#</a> 代码获取</h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。</p>
</div>
<h3 id="从-gitee-获取代码" tabindex="-1"><a class="header-anchor" href="#从-gitee-获取代码" aria-hidden="true">#</a> 从 Gitee 获取代码</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/saltFishHasDream/hgb-admin.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>tag1.0.0 是纯净版本，tag1.0.0-demo是带示例的项目，如果不知道怎么写可以下载demo项目参考。</p>
</div>
<h3 id="项目启动" tabindex="-1"><a class="header-anchor" href="#项目启动" aria-hidden="true">#</a> 项目启动</h3>
<p>必须使用<a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn<ExternalLinkIcon/></a>进行依赖安装（若其他包管理器安装不了自己处理）。</p>
<div class="hint-container danger">
<p class="hint-container-title">注意</p>
<p>项目下载下来之后，先运行<code v-pre>yarn bootstrap</code>进行项目初始化，如果未执行会导致git提交钩子不生效。</p>
</div>
<h2 id="npm-script" tabindex="-1"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> npm script</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  # 项目初始化，只执行一次，多次执行后果自负
  <span class="token string-property property">"bootstrap"</span><span class="token operator">:</span> <span class="token string">"yarn install &amp;&amp; yarn prepare"</span><span class="token punctuation">,</span>
  # 运行项目 方式<span class="token number">1</span>
  <span class="token string-property property">"serve"</span><span class="token operator">:</span> <span class="token string">"npm run dev"</span><span class="token punctuation">,</span>
  # 运行项目 方式<span class="token number">2</span>
  <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span>
  # 初始化git钩子
  <span class="token string-property property">"prepare"</span><span class="token operator">:</span> <span class="token string">"husky install &amp;&amp; npx husky add .husky/pre-commit 'npm run lint:staged'"</span><span class="token punctuation">,</span>
  # 构建项目
  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build &amp;&amp; esno ./build/script/postBuild.ts"</span><span class="token punctuation">,</span>
  # 清空缓存后构建项目
  <span class="token string-property property">"build:no-cache"</span><span class="token operator">:</span> <span class="token string">"yarn clean:cache &amp;&amp; npm run build"</span><span class="token punctuation">,</span>
  # 生成打包分析，在 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Mac OS</span><span class="token template-punctuation string">`</span></span> 电脑上执行完成后会自动打开界面，在 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Window</span><span class="token template-punctuation string">`</span></span> 电脑上执行完成后需要打开 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./build/.cache/stats.html</span><span class="token template-punctuation string">`</span></span> 查看
  <span class="token string-property property">"report"</span><span class="token operator">:</span> <span class="token string">"cross-env REPORT=true npm run build"</span><span class="token punctuation">,</span>
  # 预览打包后的内容（先打包在进行预览）
  <span class="token string-property property">"preview"</span><span class="token operator">:</span> <span class="token string">"npm run build &amp;&amp; vite preview"</span><span class="token punctuation">,</span>
  # 直接预览本地 dist 文件目录
  <span class="token string-property property">"preview:dist"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span><span class="token punctuation">,</span>
  # 删除缓存
  <span class="token string-property property">"clean:cache"</span><span class="token operator">:</span> <span class="token string">"rimraf node_modules/.cache/ &amp;&amp; rimraf node_modules/.vite"</span><span class="token punctuation">,</span>
  # 删除 <span class="token function">node_modules</span> <span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">window</span><span class="token template-punctuation string">`</span></span> 系统手动删除该目录较慢，可以使用该命令来进行删除<span class="token punctuation">)</span>
  <span class="token string-property property">"clean:lib"</span><span class="token operator">:</span> <span class="token string">"rimraf node_modules"</span><span class="token punctuation">,</span>
  # 执行 eslint 校验，并修复部分问题
  <span class="token string-property property">"lint:eslint"</span><span class="token operator">:</span> <span class="token string">"eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix"</span><span class="token punctuation">,</span>
  # 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）
  <span class="token string-property property">"lint:prettier"</span><span class="token operator">:</span> <span class="token string">"prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\""</span><span class="token punctuation">,</span>
  # 检查代码
  <span class="token string-property property">"lint:staged"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span><span class="token punctuation">,</span>
  # 格式化代码
  <span class="token string-property property">"lint:pretty"</span><span class="token operator">:</span> <span class="token string">"pretty-quick --staged"</span><span class="token punctuation">,</span>
  # 执行本地gzip测试
  <span class="token string-property property">"test prod gzip"</span><span class="token operator">:</span> <span class="token string">"http-server dist --cors --gzip -c-1"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录说明" tabindex="-1"><a class="header-anchor" href="#目录说明" aria-hidden="true">#</a> 目录说明</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>
├── <span class="token punctuation">.</span>husky # husky配置文件
├── <span class="token punctuation">.</span>vscode # vscode项目配置文件
├── build # 打包脚本相关
│   ├── config # 配置文件
│   ├── generate # 生成器
│   ├── script # 脚本
│   └── vite # vite配置
├── mock # mock文件夹
├── <span class="token keyword">public</span> # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件
│   ├── assets # 资源文件
│   │   ├── icons # icon sprite 图标文件夹
│   │   ├── images # 项目存放图片的文件夹
│   │   └── svg # 项目存放svg图片的文件夹
│   ├── components # 公共组件
│   ├── directives # 指令
│   ├── enums # 枚举<span class="token operator">/</span>常量
│   ├── hooks # hook
│   │   ├── component # 组件相关hook
│   │   ├── core # 基础hook
│   │   ├── event # 事件相关hook
│   │   ├── setting # 配置相关hook
│   │   └── web # web相关hook
│   ├── layouts # 布局文件
│   │   ├── <span class="token keyword">default</span> # 默认布局
│   │   ├── iframe # iframe布局
│   │   └── page # 页面布局
│   ├── locales # 多语言
│   ├── logics # 逻辑
│   ├── main<span class="token punctuation">.</span>ts # 主入口
│   ├── router # 路由配置
│   ├── settings # 项目配置
│   │   ├── componentSetting<span class="token punctuation">.</span>ts # 组件配置
│   │   ├── designSetting<span class="token punctuation">.</span>ts # 样式配置
│   │   ├── encryptionSetting<span class="token punctuation">.</span>ts # 加密配置
│   │   ├── localeSetting<span class="token punctuation">.</span>ts # 多语言配置
│   │   ├── projectSetting<span class="token punctuation">.</span>ts # 项目配置
│   │   └── siteSetting<span class="token punctuation">.</span>ts # 站点配置
│   ├── store # 数据仓库
│   ├── utils # 工具类
│   └── views # 页面
├── types # 类型文件
├── vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts # vite配置文件
└── windi<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts # windcss配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


