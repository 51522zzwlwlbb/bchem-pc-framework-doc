import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,d as n,e as s,b as l,f as i}from"./app-8e0502af.js";const c={},r=n("h2",{id:"项目配置项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目配置项","aria-hidden":"true"},"#"),s(" 项目配置项")],-1),d=n("p",null,"用于修改项目的配色、布局、缓存、多语言、组件默认配置",-1),u=n("h2",{id:"环境变量配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境变量配置","aria-hidden":"true"},"#"),s(" 环境变量配置")],-1),v=n("p",null,"项目的环境变量配置位于项目根目录下的 .env、.env.development、.env.production",-1),k={href:"https://github.com/vitejs/vite#modes-and-environment-variables",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.env                <span class="token comment"># 在所有的环境中被载入</span>
.env.local          <span class="token comment"># 在所有的环境中被载入，但会被 git 忽略</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         <span class="token comment"># 只在指定的模式中被载入</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local   <span class="token comment"># 只在指定的模式中被载入，但会被 git 忽略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">温馨提示</p><p>温馨提醒</p><p>只有以 VITE_ 开头的变量会被嵌入到客户端侧的包中，你可以项目代码中这样访问它们：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PROT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以 VITE_GLOB_* 开头的的变量，在打包的时候，会被加入app.config.js配置文件当中.</p></div><h3 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h3><h4 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h4><p>所有环境适用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 端口号</span>
<span class="token assign-left variable">VITE_PORT</span><span class="token operator">=</span><span class="token number">8001</span>
<span class="token comment"># 网站标题</span>
<span class="token assign-left variable">VITE_GLOB_APP_TITLE</span><span class="token operator">=</span>HGBAdmin
<span class="token comment"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span>
<span class="token assign-left variable">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">=</span>HGBAdmin
<span class="token comment"># 生产环境 开启mock</span>
<span class="token assign-left variable">VITE_GLOB_PROD_MOCK</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="env-development" tabindex="-1"><a class="header-anchor" href="#env-development" aria-hidden="true">#</a> .env.development</h4><p>开发环境适用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只在开发模式中被载入</span>
<span class="token assign-left variable">VITE_PORT</span><span class="token operator">=</span><span class="token number">8001</span>
<span class="token comment"># 是否开启mock数据，关闭时需要自行对接后台接口</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># 资源公共路径,需要以 /开头和结尾</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token comment"># 是否删除Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>false
<span class="token comment"># 代理配置，第一个会在代理时去掉/userApi前缀，第二个不会</span>
<span class="token assign-left variable">VITE_PROXY</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;/userApi&quot;</span>,<span class="token string">&quot;http://localhost:8001&quot;</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token string">&quot;/upload&quot;</span>,<span class="token string">&quot;http://localhost:8001/upload&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># API 接口地址</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>
<span class="token comment"># 图片上传地址</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>
<span class="token comment"># 图片前缀地址</span>
<span class="token assign-left variable">VITE_GLOB_IMG_URL</span><span class="token operator">=</span>
<span class="token comment"># 接口前缀</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里配置的 <code>VITE_PROXY</code> 以及 <code>VITE_GLOB_API_URL</code>, <code>/api</code> 需要是唯一的，不要和接口有的名字冲突</p><p>如果你的接口是 <code>http://localhost:3000/api</code> 之类的，请考虑将 <code>VITE_GLOB_API_URL=/otherApi</code> 换成别的名字</p></div><h4 id="env-production" tabindex="-1"><a class="header-anchor" href="#env-production" aria-hidden="true">#</a> .env.production</h4><p>生产环境适用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 是否开启mock</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>false
<span class="token comment"># 网站根目录</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/hgb-admin/
<span class="token comment"># 只有_GLOB_前缀的才会注入到运行时</span>
<span class="token assign-left variable">VITE_GLOB_PUBLIC_PATH</span><span class="token operator">=</span>/hgb-admin/
<span class="token comment"># 网站前缀</span>
<span class="token assign-left variable">VITE_BASE_URL</span><span class="token operator">=</span>/hgb-admin/
<span class="token comment"># 是否删除console</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>true
<span class="token comment"># API</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>
<span class="token comment"># 图片上传地址</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>
<span class="token comment"># 图片前缀地址</span>
<span class="token assign-left variable">VITE_GLOB_IMG_URL</span><span class="token operator">=</span>
<span class="token comment"># 接口前缀</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>/api
<span class="token comment"># 是否启用gzip压缩或brotli压缩</span>
<span class="token comment"># 可选: gzip | brotli | none</span>
<span class="token comment"># 如果你需要多种形式，你可以用&#39;,&#39;来分隔</span>
<span class="token assign-left variable">VITE_BUILD_COMPRESS</span><span class="token operator">=</span><span class="token string">&#39;none&#39;</span>
<span class="token comment"># 使用压缩时是否删除原始文件，默认为false</span>
<span class="token assign-left variable">VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生产环境动态配置" tabindex="-1"><a class="header-anchor" href="#生产环境动态配置" aria-hidden="true">#</a> 生产环境动态配置</h2><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3><p>当执行yarn build构建项目之后，会自动生成 _app.config.js 文件并插入 index.html。</p><p><b>注意: 开发环境不会生成</b></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// _app.config.js</span>
<span class="token comment">// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME</span>
window<span class="token punctuation">.</span>__PRODUCTION__VUE_VBEN_ADMIN__CONF__ <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token operator">:</span> <span class="token string">&#39;HGB-admin&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">:</span> <span class="token string">&#39;HGB-admin&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token operator">:</span> <span class="token string">&#39;/app&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token operator">:</span> <span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p>_app.config.js 用于项目在打包后，需要动态修改配置的需求，如接口地址。不用重新进行打包，可在打包后修改 /dist/_app.config.js 内的变量，刷新即可更新代码内的局部变量。</p><h3 id="如何获取全局变量" tabindex="-1"><a class="header-anchor" href="#如何获取全局变量" aria-hidden="true">#</a> 如何获取全局变量</h3><p>想要获取 _app.config.js 内的变量，可以使用 src/hooks/setting/index.ts 提供的函数来进行获取</p><h3 id="如何新增-新增一个可动态修改的配置项" tabindex="-1"><a class="header-anchor" href="#如何新增-新增一个可动态修改的配置项" aria-hidden="true">#</a> 如何新增(新增一个可动态修改的配置项)</h3><p>1.首先在 <code>.env</code> 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 <code>VITE_GLOB_</code>开头</p><p>2.<code>VITE_GLOB_</code> 开头的变量会自动加入环境变量，通过在 <code>src/types/config.d.ts</code> 内修改 <code>GlobEnvConfig</code> 和 <code>GlobConfig</code> 两个环境变量的值来定义新添加的类型</p><p>3.<code>useGlobSetting</code> 函数中添加刚新增的返回值即可</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useGlobSetting <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> SettingWrap <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Take global configuration</span>
  <span class="token keyword">const</span> glob<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
    apiUrl<span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
    shortName<span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
    urlPrefix<span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
    uploadUrl<span class="token operator">:</span> <span class="token constant">VITE_GLOB_UPLOAD_URL</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> glob <span class="token keyword">as</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h2><div class="hint-container warning"><p class="hint-container-title">WARNING</p><p>项目配置文件用于配置项目内展示的内容、布局、文本等效果，该配置，暂时没有存于localStorage中。刷新则恢复初始值。</p></div><p><code>src/settings/projectSetting.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//导航模式 vertical 左侧菜单模式 horizontal 顶部菜单模式</span>
    <span class="token literal-property property">navMode</span><span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//导航风格 dark 暗色侧边栏 light 白色侧边栏 header-dark 暗色顶栏</span>
    <span class="token literal-property property">navTheme</span><span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//顶部</span>
    <span class="token literal-property property">headerSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//背景色</span>
        <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//固定顶部</span>
        <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//显示重载按钮</span>
        <span class="token literal-property property">isReload</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//多标签</span>
    <span class="token literal-property property">multiTabsSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//背景色</span>
        <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//是否显示</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//固定多标签</span>
        <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//菜单</span>
    <span class="token literal-property property">menuSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//最小宽度</span>
        <span class="token literal-property property">minMenuWidth</span><span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
        <span class="token comment">//菜单宽度</span>
        <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token comment">//固定菜单</span>
        <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//面包屑</span>
    <span class="token literal-property property">crumbsSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//是否显示</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//显示图标</span>
        <span class="token literal-property property">showIcon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//菜单权限模式 FIXED 前端固定路由  BACK 动态获取</span>
    <span class="token literal-property property">permissionMode</span><span class="token operator">:</span> <span class="token string">&#39;FIXED&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> setting<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件配置" tabindex="-1"><a class="header-anchor" href="#组件配置" aria-hidden="true">#</a> 组件配置</h3><p><code>src/settings/componentSetting.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">apiSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 当前页的字段名</span>
            <span class="token literal-property property">pageField</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 每页数量字段名</span>
            <span class="token literal-property property">sizeField</span><span class="token operator">:</span> <span class="token string">&#39;pageSize&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 接口返回的数据字段名</span>
            <span class="token literal-property property">listField</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 接口返回总页数字段名</span>
            <span class="token literal-property property">totalField</span><span class="token operator">:</span> <span class="token string">&#39;pageCount&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//默认分页数量</span>
        <span class="token literal-property property">defaultPageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token comment">//可切换每页数量集合</span>
        <span class="token literal-property property">pageSizes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">upload</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//考虑接口规范不同</span>
        <span class="token literal-property property">apiSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 集合字段名</span>
            <span class="token literal-property property">infoField</span><span class="token operator">:</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 图片地址字段名</span>
            <span class="token literal-property property">imgField</span><span class="token operator">:</span> <span class="token string">&#39;photo&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//最大上传图片大小</span>
        <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token comment">//图片上传类型</span>
        <span class="token literal-property property">fileType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/gif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/svg+xml&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h3><p><code>src/settings/designSetting.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app theme preset color</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">appThemeList</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;#2d8cf0&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#0960bd&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#0084f4&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#009688&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#536dfe&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#ff5c93&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#ee4f12&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#0096c7&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#9c27b0&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#ff9800&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#FF3D68&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#00C1D4&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#71EFA3&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#171010&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#78DEC7&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#1768AC&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#FB9300&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#FC5404&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//深色主题</span>
    <span class="token literal-property property">darkTheme</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//系统主题色</span>
    <span class="token literal-property property">appTheme</span><span class="token operator">:</span> <span class="token string">&#39;#2d8cf0&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//系统内置主题色列表</span>
    appThemeList<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> setting<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function b(g,_){const a=p("ExternalLinkIcon");return t(),o("div",null,[r,d,u,v,n("p",null,[s("具体可以参考 "),n("a",k,[s("Vite 文档"),l(a)])]),m])}const y=e(c,[["render",b],["__file","setting.html.vue"]]);export{y as default};
