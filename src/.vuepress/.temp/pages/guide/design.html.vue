<template><div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>主要介绍如何在项目中使用和规划样式文件。</p>
<p>默认使用 <code v-pre>less</code> 作为预处理语言，建议在使用前或者遇到疑问时学习一下 <code v-pre>Less</code> 的相关特性（如果想获取基础的 <code v-pre>CSS</code> 知识或查阅属性，请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank" rel="noopener noreferrer">MDN<ExternalLinkIcon/></a> 文档）。</p>
<p>项目中使用的通用样式，都存放于 <code v-pre>src/styles/</code> 下面。</p>
<h3 id="以下-common-tailwind-文件已在-app-vue-中全局引入" tabindex="-1"><a class="header-anchor" href="#以下-common-tailwind-文件已在-app-vue-中全局引入" aria-hidden="true">#</a> 以下 <strong>common,tailwind</strong> 文件已在 <strong>App.vue</strong> 中全局引入</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── common <span class="token comment"># 公共类</span>
├── tailwind <span class="token comment"># tailwind 类库</span>
└── var <span class="token comment"># 变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">全局注入</p>
<p><code v-pre>var.less</code> 这个文件会被全局注入到所有文件，所以在页面内可以直接使用变量而不需要手动引入</p>
</div>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  // 这里已经隐式注入了 var.less
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tailwindcss-2-2-6" tabindex="-1"><a class="header-anchor" href="#tailwindcss-2-2-6" aria-hidden="true">#</a> tailwindcss(2.2.6+)</h3>
<p>项目中引用到了 <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer">tailwindcss<ExternalLinkIcon/></a>,具体可以见文件使用说明。</p>
<p>语法如下:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex mx-4 px-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="为什么使用-less" tabindex="-1"><a class="header-anchor" href="#为什么使用-less" aria-hidden="true">#</a> 为什么使用 Less</h3>
<p>习惯了</p>
<h3 id="开启-scoped" tabindex="-1"><a class="header-anchor" href="#开启-scoped" aria-hidden="true">#</a> 开启 scoped</h3>
<p>没有加 <code v-pre>scoped</code> 属性，默认会编译成全局样式，可能会造成全局污染</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">温馨提醒</p>
<p>使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。</p>
</div>
<h3 id="深度选择器" tabindex="-1"><a class="header-anchor" href="#深度选择器" aria-hidden="true">#</a> 深度选择器</h3>
<p>有时我们可能想明确地制定一个针对子组件的规则。</p>
<p>如果你希望 <code v-pre>scoped</code> 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 <code v-pre>&gt;&gt;&gt;</code> 操作符。有些像 Sass 之类的预处理器无法正确解析 <code v-pre>&gt;&gt;&gt;</code>。这种情况下你可以使用 <code v-pre>/deep/</code> 或 <code v-pre>::v-deep</code> 操作符取而代之——两者都是 <code v-pre>&gt;&gt;&gt;</code> 的别名，同样可以正常工作。</p>
<p>使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* deep selectors */</span>
  <span class="token selector">::v-deep(.foo)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* shorthand */</span>
  <span class="token selector">:deep(.foo)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* targeting slot content */</span>
  <span class="token selector">::v-slotted(.foo)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* shorthand */</span>
  <span class="token selector">:slotted(.foo)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* one-off global rule */</span>
  <span class="token selector">::v-global(.foo)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* shorthand */</span>
  <span class="token selector">:global(.foo)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-modules" tabindex="-1"><a class="header-anchor" href="#css-modules" aria-hidden="true">#</a> CSS Modules</h3>
<p>针对样式覆盖问题，还有一种方案是使用 CSS Modules 模块化方案。使用方式如下。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$style.span1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useCSSModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> $style <span class="token operator">=</span> <span class="token function">useCSSModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> moduleAStyle <span class="token operator">=</span> <span class="token function">useCSSModule</span><span class="token punctuation">(</span><span class="token string">'moduleA'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        $style<span class="token punctuation">,</span>
        moduleAStyle<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">module</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.span1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>moduleA<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.span1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重复引用问题" tabindex="-1"><a class="header-anchor" href="#重复引用问题" aria-hidden="true">#</a> 重复引用问题</h3>
<p>加上 reference 可以解决页面内重复引用导致实际生成的 style 样式表重复的问题。</p>
<p>这步已经全局引入了。所以可以不写，直接使用变量</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span>
  /* 该行代码已全局引用。可以不用单独引入 */
  @import (reference) '../../styles/val.less';
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


