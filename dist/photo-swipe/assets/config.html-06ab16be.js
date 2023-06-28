import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as l,a as n,b as s,d as c,e as a}from"./app-0ad4067d.js";const p={},r=a(`<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h3><ul><li>类型: <code>string | string[]</code></li><li>默认值: <code>&quot;.theme-default-content :not(a) &gt; img:not([no-view])&quot;</code></li></ul><p>图片选择器</p><h3 id="scrolltoclose" tabindex="-1"><a class="header-anchor" href="#scrolltoclose" aria-hidden="true">#</a> scrollToClose</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在滚动时关闭当前图片。</p><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>800</code></li></ul><p>操作页面 DOM 的延时，单位 ms。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你使用的主题有切换动画，建议配置此选项为 <code>切换动画时长 + 200</code>。</p></div><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型: <code>PhotoSwipeLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PhotoSwipeLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 关闭按钮标签文字
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 全屏按钮标签文字
   */</span>
  fullscreen<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 分享按钮标签文字
   */</span>
  share<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 缩放按钮标签文字
   */</span>
  zoom<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 上一张图片按钮标签文字
   */</span>
  prev<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 下一张图片按钮标签文字
   */</span>
  next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 功能按钮配置
   */</span>
  buttons<span class="token operator">:</span> PhotoSwipeDefaultUI<span class="token punctuation">.</span>ShareButtonData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PhotoSwipeLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PhotoSwipeLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>Photo Swipe 插件的国际化配置。</p><details class="hint-container details"><summary>内置支持语言</summary><ul><li><strong>简体中文</strong> (zh-CN)</li><li><strong>繁体中文</strong> (zh-TW)</li><li><strong>英文(美国)</strong> (en-US)</li><li><strong>德语</strong> (de-DE)</li><li><strong>德语(澳大利亚)</strong> (de-AT)</li><li><strong>俄语</strong> (ru-RU)</li><li><strong>乌克兰语</strong> (uk-UA)</li><li><strong>越南语</strong> (vi-VN)</li><li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li><li><strong>波兰语</strong> (pl-PL)</li><li><strong>法语</strong> (fr-FR)</li><li><strong>西班牙语</strong> (es-ES)</li><li><strong>斯洛伐克</strong> (sk-SK)</li><li><strong>日语</strong> (ja-JP)</li><li><strong>土耳其语</strong> (tr-TR)</li><li><strong>韩语</strong> (ko-KR)</li><li><strong>芬兰语</strong> (fi-FI)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li></ul></details><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置" aria-hidden="true">#</a> 客户端配置</h2><h3 id="definephotoswipeoptions" tabindex="-1"><a class="header-anchor" href="#definephotoswipeoptions" aria-hidden="true">#</a> definePhotoSwipeOptions</h3>`,17),d={href:"http://photoswipe.com/",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"photo-swipe",-1),m=a(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> definePhotoSwipeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-photo-swipe/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">definePhotoSwipeOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在此设置 photoswipe 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,1);function v(k,h){const e=i("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[s("传递给 "),n("a",d,[u,c(e)]),s(" 的额外选项。")]),m])}const f=t(p,[["render",v],["__file","config.html.vue"]]);export{f as default};
