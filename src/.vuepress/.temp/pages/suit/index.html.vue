<template><div><h3 id="本地开发设置" tabindex="-1"><a class="header-anchor" href="#本地开发设置" aria-hidden="true">#</a> 本地开发设置</h3>
<h3 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> mock</h3>
<p>本地开发默认开启mock，<code v-pre>.env.development</code> 中进行配置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 是否开启mock</span>
VITE_USE_MOCK <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口代理" tabindex="-1"><a class="header-anchor" href="#接口代理" aria-hidden="true">#</a> 接口代理</h3>
<p>默认代理路径为 <code v-pre>/api</code>, <code v-pre>.env.development</code> 中进行配置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 接口前缀</span>
VITE_GLOB_API_URL_PREFIX <span class="token operator">=</span> /api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><code v-pre>VITE_PROXY = [[&quot;/api&quot;,&quot;http://localhost:8001&quot;]]</code> 该配置会在代理的时候将<code v-pre>/api</code>路径去除，例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/api/dashboard/console'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'get'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后代理的路径就是<code v-pre>http://localhost:8001/dashboard/console</code>。</p>
<p>如果需要保留路径，可以设置：<code v-pre>VITE_PROXY = [[&quot;/api&quot;,&quot;http://localhost:8001/api&quot;]]</code>。</p>
</div>
<h3 id="登录白名单设置" tabindex="-1"><a class="header-anchor" href="#登录白名单设置" aria-hidden="true">#</a> 登录白名单设置</h3>
<p>部分情况下，可能需要设置非登录也能查看的页面，可以在路由守卫中增加白名单设置，路径在<code v-pre>/src/router/guards.ts</code>中：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> whitePathList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token string">'/social-login'</span><span class="token punctuation">,</span> <span class="token string">'/no-login-path'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="首页、登录页、错误跳转页设置" tabindex="-1"><a class="header-anchor" href="#首页、登录页、错误跳转页设置" aria-hidden="true">#</a> 首页、登录页、错误跳转页设置</h3>
<p><code v-pre>/src/enums/pageEnums.ts</code>中自定义设置登录页、首页、错误页的地址。</p>
<h3 id="请求处理" tabindex="-1"><a class="header-anchor" href="#请求处理" aria-hidden="true">#</a> 请求处理</h3>
<p>开始项目之前，和后端约定好请求code的枚举，并将成功的code设置到项目的<code v-pre>/src/enums/httpEnums.ts</code>中：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> ResultEnum <span class="token punctuation">{</span>
  <span class="token constant">SUCCESS</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// 自定义成功的code</span>
  <span class="token constant">ERROR</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 自定义错误的code</span>
  <span class="token constant">TIMEOUT</span> <span class="token operator">=</span> <span class="token number">10042</span><span class="token punctuation">,</span> <span class="token comment">// 自定义接口超时时间</span>
  <span class="token constant">TYPE</span> <span class="token operator">=</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一些碎碎念" tabindex="-1"><a class="header-anchor" href="#一些碎碎念" aria-hidden="true">#</a> 一些碎碎念</h3>
<h4 id="window-message" tabindex="-1"><a class="header-anchor" href="#window-message" aria-hidden="true">#</a> <code v-pre>window['$message']</code></h4>
<p>直接使用 <code v-pre>window['$message']</code> 可以直接以service方式调用<code v-pre>message</code>组件, 不用每次在需要使用的时候进行以下操作：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'naive-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'some error message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 直接使用 window['$message'].error('some error message');</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="h函数" tabindex="-1"><a class="header-anchor" href="#h函数" aria-hidden="true">#</a> h函数</h4>
<p>vue3中渲染表格、数据，尽量使用h函数，好处在于js的可操作性大于template，并且得益于vue3的特性，多数情况下你认为不能响应式的操作它其实都可以是响应式的</p>
<h4 id="tabsview的缓存" tabindex="-1"><a class="header-anchor" href="#tabsview的缓存" aria-hidden="true">#</a> tabsView的缓存</h4>
<p>系统会默认缓存之前打开过的页面标签，如果不需要，可以在<code v-pre>/src/layout/components/TagsView/index.vue</code>中关于 <code v-pre>cacheRoutes</code>的逻辑进行修改</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>暂时不支持配置，2.0规划支持</p>
</div>
<h4 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h4>
<p>尽量多使用grid的响应式栅格，移动端都能适配那真的是泰裤辣</p>
</div></template>


