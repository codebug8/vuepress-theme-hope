import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c,a as r,b as n,d as s,e,w as t,f as o}from"./app-08a03a85.js";const d={},u=o(`<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h2><ul><li><p>类型: <code>AvailableComponent[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AvailableComponent</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;ArtPlayer&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;AudioPlayer&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Badge&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;BiliBili&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;CodePen&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;FontIcon&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;PDF&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Replit&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;Share&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;StackBlitz&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;SiteInfo&quot;</span>
  <span class="token comment">// | &quot;VidStack&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;VideoPlayer&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;XiGua&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;YouTube&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>[]</code></p></li></ul><p>需要被注册的组件。</p><p>可接受的组件名称为:</p><ul><li><code>&quot;ArtPlayer&quot;</code></li><li><code>&quot;AudioPlayer&quot;</code></li><li><code>&quot;Badge&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;CodePen&quot;</code></li><li><code>&quot;FontIcon&quot;</code></li><li><code>&quot;PDF&quot;</code></li><li><code>&quot;Replit&quot;</code></li><li><code>&quot;Share&quot;</code></li><li><code>&quot;StackBlitz&quot;</code></li><li><code>&quot;SiteInfo&quot;</code></li></ul>`,5),m=o('<ul><li><code>&quot;VideoPlayer&quot;</code></li><li><code>&quot;XiGua&quot;</code></li><li><code>&quot;YouTube&quot;</code></li></ul><h2 id="componentsoptions" tabindex="-1"><a class="header-anchor" href="#componentsoptions" aria-hidden="true">#</a> componentsOptions</h2><p>组件的全局配置</p><h3 id="componentsoptions-artplayer" tabindex="-1"><a class="header-anchor" href="#componentsoptions-artplayer" aria-hidden="true">#</a> componentsOptions.artPlayer</h3>',4),v=n("li",null,[s("类型: "),n("code",null,"ComponentsArtPlayerOptions")],-1),k=n("li",null,[s("默认值: "),n("code",null,"{}")],-1),b=n("h3",{id:"componentsoptions-fonticon-assets",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-fonticon-assets","aria-hidden":"true"},"#"),s(" componentsOptions.fontIcon.assets")],-1),h=o(`<li><p>类型: <code>FontIconAssets</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Link</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">//</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">BuiltInFontIcon</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;iconify&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;iconfont&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;fontawesome&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;fontawesome-with-brands&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">FontIconAssets</span> <span class="token operator">=</span> BuiltInFontIcon <span class="token operator">|</span> Link <span class="token operator">|</span> <span class="token punctuation">(</span>BuiltInFontIcon <span class="token operator">|</span> Link<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li>`,2),g=n("p",null,"详情:",-1),f=n("p",null,[s("字体图标资源链接，支持 "),n("code",null,"'iconfont'"),s(" 和 "),n("code",null,"'fontawesome'"),s(" 关键字。")],-1),_=n("h3",{id:"componentsoptions-fonticon-prefix",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-fonticon-prefix","aria-hidden":"true"},"#"),s(" componentsOptions.fontIcon.prefix")],-1),q=n("li",null,[s("类型: "),n("code",null,"string")],-1),y=n("li",null,"默认值: 尝试从 iconAssets 推断",-1),B=n("p",null,"字体图标的 Class 前缀",-1),w=n("h3",{id:"componentsoptions-pdf-pdfjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-pdf-pdfjs","aria-hidden":"true"},"#"),s(" componentsOptions.pdf.pdfjs")],-1),x=n("li",null,[s("类型: "),n("code",null,"string")],-1),T=n("li",null,"必填: 否",-1),P=n("p",null,"PDFJS 查看器的路径",-1),F=n("h3",{id:"componentsoptions-share-services",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-share-services","aria-hidden":"true"},"#"),s(" componentsOptions.share.services")],-1),D=n("li",null,[s("类型: "),n("code",null,"(string | ShareService)[]")],-1),A=o('<p>分享服务</p><h3 id="componentsoptions-share-twitterusername" tabindex="-1"><a class="header-anchor" href="#componentsoptions-share-twitterusername" aria-hidden="true">#</a> componentsOptions.share.twitterUserName</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>Twitter 用户名。</p><h2 id="rootcomponents" tabindex="-1"><a class="header-anchor" href="#rootcomponents" aria-hidden="true">#</a> rootComponents</h2><p>会被挂载到根节点的组件。</p><h3 id="rootcomponents-addthis" tabindex="-1"><a class="header-anchor" href="#rootcomponents-addthis" aria-hidden="true">#</a> rootComponents.addThis</h3>',7),E=n("li",null,[s("类型: "),n("code",null,"string | false")],-1),I=n("li",null,[s("默认值: "),n("code",null,"false")],-1),C=n("p",null,"AddThis 的公开 ID。",-1),S=n("h3",{id:"rootcomponents-backtotop",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents-backtotop","aria-hidden":"true"},"#"),s(" rootComponents.backToTop")],-1),N=o(`<li><p>类型: <code>BackToTopOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 滚动距离阈值，用于显示返回顶部按钮 (单位: 像素)
   *
   * <span class="token keyword">@default</span> 100
   */</span>
  threshold<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否显示滚动进度
   *
   * <span class="token keyword">@default</span> true
   */</span>
  progress<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>false</code></p></li>`,2),O=n("p",null,"详情:",-1),L=n("p",null,"是否启用返回顶部按钮，当设置为数字时，会被作为返回顶部按钮触发距离 (单位: 像素)，默认为 300。",-1),z=n("h3",{id:"rootcomponents-notice",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents-notice","aria-hidden":"true"},"#"),s(" rootComponents.notice")],-1),R=o(`<li><p>Type: <code>NoticeOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NoticeActionOption</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 操作文字
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 操作链接
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 操作类型
   *
   * <span class="token keyword">@default</span> &#39;default
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NoticeItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 通知标题
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 通知内容
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Notice 的 key
   *
   * <span class="token keyword">@description</span> 用于标识和存储 notice 的状态
   */</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否只显示一次通知
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showOnce<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 通知是否需要确认
   *
   * <span class="token keyword">@default</span> false
   */</span>
  confirm<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 通知是否应该全屏显示
   *
   * <span class="token keyword">@default</span> false
   */</span>
  fullscreen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 通知操作
   */</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> NoticeActionOption<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">NoticeOptions</span> <span class="token operator">=</span> NoticeItemOptions <span class="token operator">&amp;</span>
  <span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span> match<span class="token operator">:</span> RegExp <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li>`,2),V=n("p",null,"详情:",-1),j=o(`<p>全局通知的配置</p><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><p>组件多语言配置</p><h3 id="locales-backtotop" tabindex="-1"><a class="header-anchor" href="#locales-backtotop" aria-hidden="true">#</a> locales.backToTop</h3><ul><li><p>类型: <code>BackToTopLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 返回顶部文字
   */</span>
  backToTop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BackToTopLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> BackToTopLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>返回顶部按钮国际化配置。</p><h3 id="locales-pdf" tabindex="-1"><a class="header-anchor" href="#locales-pdf" aria-hidden="true">#</a> locales.pdf</h3><ul><li><p>类型: <code>PDFLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PDFLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * PDF 提示文字
   *
   * <span class="token keyword">@description</span> 只有在浏览器不支持嵌入 PDF 且没有提供 PDFJS URL 时才会使用
   * [url] 会被实际 PDF 链接替换
   */</span>
  hint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PDFLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PDFLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>PDF 组件国际化配置。</p><details class="hint-container details"><summary>内置支持语言</summary><ul><li><strong>简体中文</strong> (zh-CN)</li><li><strong>繁体中文</strong> (zh-TW)</li><li><strong>英文(美国)</strong> (en-US)</li><li><strong>德语</strong> (de-DE)</li><li><strong>德语(澳大利亚)</strong> (de-AT)</li><li><strong>俄语</strong> (ru-RU)</li><li><strong>乌克兰语</strong> (uk-UA)</li><li><strong>越南语</strong> (vi-VN)</li><li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li><li><strong>波兰语</strong> (pl-PL)</li><li><strong>法语</strong> (fr-FR)</li><li><strong>西班牙语</strong> (es-ES)</li><li><strong>斯洛伐克</strong> (sk-SK)</li><li><strong>日语</strong> (ja-JP)</li><li><strong>土耳其语</strong> (tr-TR)</li><li><strong>韩语</strong> (ko-KR)</li><li><strong>芬兰语</strong> (fi-FI)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li></ul></details>`,10);function U(J,$){const a=l("RouterLink");return p(),c("div",null,[u,r(' - `"VidStack"` '),m,n("ul",null,[v,k,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide/artplayer.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE"},{default:t(()=>[s("指南 → ArtPlayer")]),_:1})])])])]),b,n("ul",null,[h,n("li",null,[g,n("ul",null,[n("li",null,[e(a,{to:"/zh/guide/fonticon.html"},{default:t(()=>[s("指南 → FontIcon")]),_:1})])])])]),f,_,n("ul",null,[q,y,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide/fonticon.html"},{default:t(()=>[s("指南 → FontIcon")]),_:1})])])])]),B,w,n("ul",null,[x,T,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide/pdf.html#pdfjs-%E6%9F%A5%E7%9C%8B%E5%99%A8"},{default:t(()=>[s("指南 → PDF → PDFJS")]),_:1})])])])]),P,F,n("ul",null,[D,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide/share.html#%E8%AE%BE%E7%BD%AE%E7%BB%84%E4%BB%B6"},{default:t(()=>[s("指南 → Share → 设置组件")]),_:1})])])])]),A,n("ul",null,[E,I,n("li",null,[s("详情: "),n("ul",null,[n("li",null,[e(a,{to:"/zh/guide/addthis.html#%E4%BD%BF%E7%94%A8"},{default:t(()=>[s("指南 → AddThis")]),_:1})])])])]),C,S,n("ul",null,[N,n("li",null,[O,n("ul",null,[n("li",null,[e(a,{to:"/zh/guide/backtotop.html"},{default:t(()=>[s("指南 → BackToTop")]),_:1})])])])]),L,z,n("ul",null,[R,n("li",null,[V,n("ul",null,[n("li",null,[e(a,{to:"/zh/guide/notice.html"},{default:t(()=>[s("指南 → Notice")]),_:1})])])])]),j])}const X=i(d,[["render",U],["__file","config.html.vue"]]);export{X as default};
