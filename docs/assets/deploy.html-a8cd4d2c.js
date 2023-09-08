import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c,d as a,e as n,b as p,f as s}from"./app-456ec0d8.js";const d={},r=s(`<h3 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h3><p>项目开发完成之后，执行以下命令进行构建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件</p><h3 id="旧版浏览器兼容" tabindex="-1"><a class="header-anchor" href="#旧版浏览器兼容" aria-hidden="true">#</a> 旧版浏览器兼容</h3><p>在 <strong>.env.production</strong> 内</p><p>设置 <code>VITE_LEGACY=true</code> 即可打包出兼容旧版浏览器的代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>VITE_LEGACY <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h3><p>发布之前可以在本地进行预览，有多种方式，这里介绍两种</p><p><strong>不能直接打开构建后的 html 文件</strong></p><ul><li>使用项目自定的命令进行预览(推荐)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先打包在进行预览</span>
<span class="token function">yarn</span> preview
<span class="token comment"># 直接预览本地 dist 文件目录</span>
<span class="token function">yarn</span> preview:dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>本地服务器预览(通过 live-server)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.全局安装live-server</span>
<span class="token function">yarn</span> global <span class="token function">add</span> live-server
<span class="token comment"># 2. 进入打包的后目录</span>
<span class="token builtin class-name">cd</span> ./dist
<span class="token comment"># 本地预览，默认端口8080</span>
live-server
<span class="token comment"># 指定端口</span>
live-server <span class="token parameter variable">--port</span> <span class="token number">9000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分析构建文件体积" tabindex="-1"><a class="header-anchor" href="#分析构建文件体积" aria-hidden="true">#</a> 分析构建文件体积</h3>`,16),o={href:"https://github.com/doesdev/rollup-plugin-analyzer",target:"_blank",rel:"noopener noreferrer"},u=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行之后，在自动打开的页面可以看到具体的体积分布，以分析哪些依赖有问题。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>左上角可以切换 显示 gzip 或者 brotli</p></div><h3 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h3><h4 id="开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#开启-gzip-压缩" aria-hidden="true">#</a> 开启 gzip 压缩</h4><p>开启 gzip，并配合 nginx 的 <code>gzip_static</code> 功能可以大大加快页面访问速度</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>只需开启 VITE_BUILD_COMPRESS=&#39;gzip&#39; 即可在打包的同时生成 .gz 文件</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 根据自己路径来配置更改</span>
<span class="token comment"># 例如部署在nginx /next/路径下  则VITE_PUBLIC_PATH=/next/</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="同时开启-gzip-与-brotli" tabindex="-1"><a class="header-anchor" href="#同时开启-gzip-与-brotli" aria-hidden="true">#</a> 同时开启 gzip 与 brotli</h4><p>只需开启 <code>VITE_BUILD_COMPRESS=&#39;brotli,gzip&#39;</code> 即可在打包的同时生成 <code>.gz</code> 和 <code>.br</code> 文件。</p><h4 id="gzip-与-brotli-在-nginx-内的配置" tabindex="-1"><a class="header-anchor" href="#gzip-与-brotli-在-nginx-内的配置" aria-hidden="true">#</a> gzip 与 brotli 在 nginx 内的配置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
  <span class="token comment"># 开启gzip</span>
  <span class="token function">gzip</span> on<span class="token punctuation">;</span>
  <span class="token comment"># 开启gzip_static</span>
  <span class="token comment"># gzip_static 开启后可能会报错，需要安装相应的模块, 具体安装方式可以自行查询</span>
  <span class="token comment"># 只有这个开启，vue文件打包的.gz文件才会有效果，否则不需要开启gzip进行打包</span>
  gzip_static on<span class="token punctuation">;</span>
  gzip_proxied any<span class="token punctuation">;</span>
  gzip_min_length 1k<span class="token punctuation">;</span>
  gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>
  <span class="token comment">#如果nginx中使用了多层代理 必须设置这个才可以开启gzip。</span>
  gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>
  gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png<span class="token punctuation">;</span>
  gzip_vary off<span class="token punctuation">;</span>
  gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>

  <span class="token comment"># 开启 brotli压缩</span>
  <span class="token comment"># 需要安装对应的nginx模块,具体安装方式可以自行查询</span>
  <span class="token comment"># 可以与gzip共存不会冲突</span>
  brotli on<span class="token punctuation">;</span>
  brotli_comp_level <span class="token number">6</span><span class="token punctuation">;</span>
  brotli_buffers <span class="token number">16</span> 8k<span class="token punctuation">;</span>
  brotli_min_length <span class="token number">20</span><span class="token punctuation">;</span>
  brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function v(m,b){const e=l("ExternalLinkIcon");return t(),c("div",null,[r,a("p",null,[n("如果你的构建文件很大，可以通过项目内置 "),a("a",o,[n("rollup-plugin-analyzer"),p(e)]),n(" 插件进行代码体积分析，从而优化你的代码。")]),u])}const k=i(d,[["render",v],["__file","deploy.html.vue"]]);export{k as default};
