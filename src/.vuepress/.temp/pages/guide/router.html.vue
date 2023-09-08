<template><div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<p>项目路由配置存放于 <code v-pre>src/router</code> 下面。 <code v-pre>src/router/modules</code>用于存放路由模块，在该目录下的文件会自动注册。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<h3 id="模块说明" tabindex="-1"><a class="header-anchor" href="#模块说明" aria-hidden="true">#</a> 模块说明</h3>
<p>在 <code v-pre>src/router/modules</code> 内的 <code v-pre>.ts</code> 文件会被视为一个路由模块。</p>
<p>一个路由模块包含以下结构</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/router/constant'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DashboardOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vicons/antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/index'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routeName <span class="token operator">=</span> <span class="token string">'dashboard'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
        path<span class="token operator">:</span> <span class="token string">'/dashboard'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> routeName<span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token string">'/dashboard/console'</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Dashboard'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token function">renderIcon</span><span class="token punctuation">(</span>DashboardOutlined<span class="token punctuation">)</span><span class="token punctuation">,</span>
            permissions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dashboard_console'</span><span class="token punctuation">,</span> <span class="token string">'dashboard_console'</span><span class="token punctuation">,</span> <span class="token string">'dashboard_workplace'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            sort<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">'console'</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_console</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'主控台'</span><span class="token punctuation">,</span>
                    permissions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dashboard_console'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/dashboard/console/console.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">'workplace'</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_workplace</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'工作台'</span><span class="token punctuation">,</span>
                    keepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    permissions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dashboard_workplace'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/dashboard/workplace/workplace.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多级路由" tabindex="-1"><a class="header-anchor" href="#多级路由" aria-hidden="true">#</a> 多级路由</h3>
<div class="hint-container warning">
<p class="hint-container-title">注意事项</p>
<ul>
<li>整个项目所有路由 name 不能重复</li>
<li>除了 layout 对应的 path 前面需要加 /，其余子路由都不要以/开头</li>
<li>多级路由，当没有配置时，redirect ，redirect 默认为第一个子路由，配置则优先按配置</li>
</ul>
</div>
<p>示例</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> ParentLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/router/constant'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WalletOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vicons/antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/index'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routeName <span class="token operator">=</span> <span class="token string">'comp'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/comp'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> routeName<span class="token punctuation">,</span>
        component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token string">'/comp/table'</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'组件示例'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token function">renderIcon</span><span class="token punctuation">(</span>WalletOutlined<span class="token punctuation">)</span><span class="token punctuation">,</span>
            sort<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">'table'</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_table</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                redirect<span class="token operator">:</span> <span class="token string">'/comp/table/basic'</span><span class="token punctuation">,</span>
                component<span class="token operator">:</span> ParentLayout<span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'表格'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                children<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        path<span class="token operator">:</span> <span class="token string">'basic'</span><span class="token punctuation">,</span>
                        name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_table_basic</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                            title<span class="token operator">:</span> <span class="token string">'基础表格'</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/comp/table/basic.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        path<span class="token operator">:</span> <span class="token string">'editCell'</span><span class="token punctuation">,</span>
                        name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_table_editCell</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                            title<span class="token operator">:</span> <span class="token string">'单元格编辑'</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/comp/table/editCell.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        path<span class="token operator">:</span> <span class="token string">'editRow'</span><span class="token punctuation">,</span>
                        name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_table_editRow</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                            title<span class="token operator">:</span> <span class="token string">'整行编辑'</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/comp/table/editRow.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">'upload'</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>routeName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_upload</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'上传'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/comp/upload/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="meta-配置说明" tabindex="-1"><a class="header-anchor" href="#meta-配置说明" aria-hidden="true">#</a> Meta 配置说明</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
  <span class="token comment">//菜单名称 一般必填</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">//禁用菜单</span>
  disabled<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">//菜单图标  </span>
  icon<span class="token operator">:</span> VNode<span class="token punctuation">;</span>
  <span class="token comment">//缓存该路由</span>
  keepAlive<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">//隐藏菜单</span>
  hidden<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>  
  <span class="token comment">//排序越小越排前</span>
  sort<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token comment">//取消自动计算根路由模式</span>
  alwaysShow<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// 当路由设置了该属性，则会高亮相对应的侧边栏。</span>
  <span class="token comment">// 这在某些场景非常有用，比如：一个列表页路由为：/list/basic-list</span>
  <span class="token comment">// 点击进入详情页，这时候路由为/list/basic-info/1，但你想在侧边栏高亮列表的路由，就可以进行如下设置</span>
  <span class="token comment">// 注意是配置高亮路由 `name`，不是path</span>
  activeMenu<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">//是否跟路由 顶部混合菜单，必须传 true，否则左侧会显示异常（场景就是，分割菜单之后，当一级菜单没有子菜单）</span>
  isRoot<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">//内联外部地址</span>
  frameSrc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">//菜单包含权限集合，满足其中一个就会显示</span>
  permissions<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">//是否固定 设置为 true 之后 多页签不可删除</span>
  affix<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h3>
<p>为了简化使用，只需用renderIcon(WalletOutlined)方法，传入 <a href="https://www.xicons.org/" target="_blank" rel="noopener noreferrer">xicons<ExternalLinkIcon/></a> 中图标即可</p>
<h3 id="新增路由" tabindex="-1"><a class="header-anchor" href="#新增路由" aria-hidden="true">#</a> 新增路由</h3>
<h4 id="如何新增一个路由模块" tabindex="-1"><a class="header-anchor" href="#如何新增一个路由模块" aria-hidden="true">#</a> 如何新增一个路由模块</h4>
<ol>
<li>在 <code v-pre>src/router/modules</code> 内新增一个模块文件。</li>
</ol>
<p>示例，新增 test.ts 文件</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/router/constant'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CheckCircleOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vicons/antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/index'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/result'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'Result'</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token string">'/result/success'</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'结果页面'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token function">renderIcon</span><span class="token punctuation">(</span>CheckCircleOutlined<span class="token punctuation">)</span><span class="token punctuation">,</span>
            sort<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">'result-success'</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'成功页'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/result/success.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时路由已添加完成，不需要手动引入，放在src/router/modules 内的文件会自动被加载。</p>
<h4 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h4>
<p>访问 ip:端口/result/success 出现对应组件内容即代表成功</p>
<h3 id="路由刷新" tabindex="-1"><a class="header-anchor" href="#路由刷新" aria-hidden="true">#</a> 路由刷新</h3>
<p>项目中采用的是重定向方式</p>
<h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/redirect'</span> <span class="token operator">+</span> <span class="token function">unref</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">.</span>fullPath<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h4>
<p><code v-pre>src/views/redirect/index.vue</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> onBeforeMount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute<span class="token punctuation">,</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NEmpty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'naive-ui'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Redirect'</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> route<span class="token punctuation">;</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> params<span class="token punctuation">;</span>
            router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">'/'</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span> <span class="token operator">:</span> path<span class="token punctuation">)</span><span class="token punctuation">,</span>
                query<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>NEmpty <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外联" tabindex="-1"><a class="header-anchor" href="#外联" aria-hidden="true">#</a> 外联</h3>
<p>在侧边栏中配置一个外链，只要你在 name 中填写了合法的 url 路径，当你点击侧边栏的时候就会帮你新开这个页面。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/external'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'https://jekip.github.io/docs/'</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'文档地址'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token function">renderIcon</span><span class="token punctuation">(</span>CheckCircleOutlined<span class="token punctuation">)</span><span class="token punctuation">,</span>
        sort<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意事项</p>
<p><code v-pre>path</code> 不能为链接，必须为 <code v-pre>/</code> 开头字符串<br>
子路由都不要以<code v-pre>/</code>开头，跳转外部地址，只需把 <code v-pre>name</code> 填写完整网址即可</p>
</div>
<h3 id="内联" tabindex="-1"><a class="header-anchor" href="#内联" aria-hidden="true">#</a> 内联</h3>
<p>在侧边栏中配置一个内联外部地址，只要你在 meta.frameSrc 填写了合法的 url 路径，当你点击侧边栏的时候就会帮你内联显示这个页面。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/router/constant'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DesktopOutline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vicons/ionicons5'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/index'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">IFrame</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/iframe/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/frame'</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'Frame'</span><span class="token punctuation">,</span>
        redirect<span class="token operator">:</span> <span class="token string">'/frame/docs'</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'外部页面'</span><span class="token punctuation">,</span>
            sort<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token function">renderIcon</span><span class="token punctuation">(</span>DesktopOutline<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">'docs'</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">'frame-docs'</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'项目文档(内嵌)'</span><span class="token punctuation">,</span>
                    frameSrc<span class="token operator">:</span> <span class="token string">'https://naive-ui-admin-docs.vercel.app'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                component<span class="token operator">:</span> IFrame<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">'naive'</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">'frame-naive'</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'NaiveUi(内嵌)'</span><span class="token punctuation">,</span>
                    frameSrc<span class="token operator">:</span> <span class="token string">'https://www.naiveui.com'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                component<span class="token operator">:</span> IFrame<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根路由" tabindex="-1"><a class="header-anchor" href="#根路由" aria-hidden="true">#</a> 根路由</h3>
<p>系统已经帮你做了判断，当一个路由下面的 children 声明的路由大于&gt;1 个时，自动会变成嵌套的模式。 如果子路由正好等于一个就会默认将子路由作为根路由显示在侧边栏中，若不想这样，可以通过设置在根路由meta中设置alwaysShow: true来取消这一特性</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/external'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'external'</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>    
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        sort<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">//排序依然还是在这里定义</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">'console'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">console</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">'主控台'</span><span class="token punctuation">,</span>
                permission<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dashboard_console'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/dashboard/console/console.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何开启单个页面缓存" tabindex="-1"><a class="header-anchor" href="#如何开启单个页面缓存" aria-hidden="true">#</a> 如何开启单个页面缓存</h4>
<p>开启缓存有 3 个条件</p>
<ol>
<li>在router中meta内将keepAlive 设置为 true</li>
<li>路由设置 name，且不能重复</li>
<li>路由对应的组件加上 name，与路由设置的 name 保持一致</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code> <span class="token punctuation">{</span>
   <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token comment">// name</span>
    name<span class="token operator">:</span> <span class="token string">'Login'</span><span class="token punctuation">,</span>
    <span class="token comment">// 对应组件组件的name</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/login/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// @/views/login/index.vue</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 需要和路由的name一致</span>
    name<span class="token operator">:</span><span class="token string">"Login"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><code v-pre>keep-alive</code> 生效的前提是：需要将路由的 <code v-pre>name</code> 属性及对应的页面的 <code v-pre>name</code> 设置成一样。因为：</p>
<p><code v-pre>include</code> - 字符串或正则表达式，只有名称匹配的组件会被缓存</p>
</div>
</div></template>


