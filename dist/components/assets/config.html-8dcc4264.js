import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c,a as r,b as n,d as s,e,w as t,f as o}from"./app-08a03a85.js";const d={},u=o(`<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h2><ul><li><p>Type: <code>AvailableComponent[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AvailableComponent</span> <span class="token operator">=</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>[]</code></p></li></ul><p>Components to be registered.</p><p>Available component names:</p><ul><li><code>&quot;ArtPlayer&quot;</code></li><li><code>&quot;AudioPlayer&quot;</code></li><li><code>&quot;Badge&quot;</code></li><li><code>&quot;BiliBili&quot;</code></li><li><code>&quot;CodePen&quot;</code></li><li><code>&quot;FontIcon&quot;</code></li><li><code>&quot;PDF&quot;</code></li><li><code>&quot;Replit&quot;</code></li><li><code>&quot;Share&quot;</code></li><li><code>&quot;StackBlitz&quot;</code></li><li><code>&quot;SiteInfo&quot;</code></li></ul>`,5),m=o('<ul><li><code>&quot;VideoPlayer&quot;</code></li><li><code>&quot;XiGua&quot;</code></li><li><code>&quot;YouTube&quot;</code></li></ul><h2 id="componentsoptions" tabindex="-1"><a class="header-anchor" href="#componentsoptions" aria-hidden="true">#</a> componentsOptions</h2><p>Global config for components.</p><h3 id="componentsoptions-artplayer" tabindex="-1"><a class="header-anchor" href="#componentsoptions-artplayer" aria-hidden="true">#</a> componentsOptions.artPlayer</h3>',4),v=n("li",null,[s("Type: "),n("code",null,"ComponentsArtPlayerOptions")],-1),k=n("li",null,"Required: No",-1),b=n("h3",{id:"componentsoptions-share-services",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-share-services","aria-hidden":"true"},"#"),s(" componentsOptions.share.services")],-1),h=n("li",null,[s("Type: "),n("code",null,"(string | ShareService)[]")],-1),g=n("p",null,"Share services",-1),f=n("h3",{id:"componentsoptions-share-twitterusername",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-share-twitterusername","aria-hidden":"true"},"#"),s(" componentsOptions.share.twitterUserName")],-1),_=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"string")]),n("li",null,"Required: No")],-1),y=n("p",null,"Twitter username.",-1),q=n("h3",{id:"componentsoptions-fonticon-assets",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-fonticon-assets","aria-hidden":"true"},"#"),s(" componentsOptions.fontIcon.assets")],-1),T=o(`<li><p>Type: <code>FontIconAssets</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Link</span> <span class="token operator">=</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li>`,2),w=n("p",null,"Details:",-1),x=n("p",null,[s("Link of font icon asset, "),n("code",null,"'iconfont'"),s(" and "),n("code",null,"'fontawesome'"),s(" keywords are supported.")],-1),D=n("h3",{id:"componentsoptions-fonticon-prefix",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-fonticon-prefix","aria-hidden":"true"},"#"),s(" componentsOptions.fontIcon.prefix")],-1),P=n("li",null,[s("Type: "),n("code",null,"string")],-1),B=n("li",null,"Default: Inferred from assets",-1),N=n("p",null,"Class prefix of font icon",-1),C=n("h3",{id:"componentsoptions-pdf-pdfjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#componentsoptions-pdf-pdfjs","aria-hidden":"true"},"#"),s(" componentsOptions.pdf.pdfjs")],-1),S=n("li",null,[s("Type: "),n("code",null,"string")],-1),F=n("li",null,"Required: No",-1),I=n("p",null,"Location to pdfjs viewer.",-1),L=n("h2",{id:"rootcomponents",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents","aria-hidden":"true"},"#"),s(" rootComponents")],-1),A=n("p",null,"Components to be mounted at root.",-1),R=n("h3",{id:"rootcomponents-addthis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents-addthis","aria-hidden":"true"},"#"),s(" rootComponents.addThis")],-1),O=n("li",null,[s("Type: "),n("code",null,"string | false")],-1),G=n("li",null,[s("Default: "),n("code",null,"false")],-1),V=n("p",null,"Public ID of addThis.",-1),U=n("h3",{id:"rootcomponents-backtotop",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents-backtotop","aria-hidden":"true"},"#"),s(" rootComponents.backToTop")],-1),W=o(`<li><p>Type: <code>BackToTopOptions | boolean</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Scroll threshold distance to display back to top button (in pixels)
   *
   * <span class="token keyword">@default</span> 100
   */</span>
  threshold<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether display scroll progress
   *
   * <span class="token keyword">@default</span> true
   */</span>
  progress<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>false</code></p></li>`,2),j=n("p",null,"Details:",-1),z=n("p",null,"Whether enabling backToTop button. When setting a number, it will be used as BackToTop button threshold distance (in pixels), default is 300.",-1),E=n("h3",{id:"rootcomponents-notice",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rootcomponents-notice","aria-hidden":"true"},"#"),s(" rootComponents.notice")],-1),J=o(`<li><p>Type: <code>NoticeOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">NoticeActionOption</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Action text
   */</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Action link
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Action type
   *
   * <span class="token keyword">@default</span> &#39;default
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NoticeItemOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Notice title
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Notice content
   */</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Notice key
   *
   * <span class="token keyword">@description</span> Used to identify and store the notice status
   */</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether show notice only once or show it in every visit
   *
   * <span class="token keyword">@description</span> If \`key\` is not provided, this option will be ignored
   *
   * <span class="token keyword">@default</span> false
   */</span>
  showOnce<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the notice shall be confirmed
   *
   * <span class="token keyword">@default</span> false
   */</span>
  confirm<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the notice should appear fullscreen
   *
   * <span class="token keyword">@default</span> false
   */</span>
  fullscreen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Notice actions
   */</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> NoticeActionOption<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">NoticeOptions</span> <span class="token operator">=</span> NoticeItemOptions <span class="token operator">&amp;</span>
  <span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token punctuation">{</span> match<span class="token operator">:</span> RegExp <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li>`,2),$=n("p",null,"Details:",-1),K=o(`<p>Config for global notice.</p><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><p>Component locales.</p><h3 id="locales-backtotop" tabindex="-1"><a class="header-anchor" href="#locales-backtotop" aria-hidden="true">#</a> locales.backToTop</h3><ul><li><p>Type: <code>BackToTopLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BackToTopLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Back to top button label text
   */</span>
  backToTop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BackToTopLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> BackToTopLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for BackToTop button.</p><h3 id="locales-pdf" tabindex="-1"><a class="header-anchor" href="#locales-pdf" aria-hidden="true">#</a> locales.pdf</h3><ul><li><p>Type: <code>PDFLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PDFLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * PDF hint text
   *
   * <span class="token keyword">@description</span> Only used if the browser does not support embedding PDF and no PDFJS URL is provided.
   * [url] will be replaced by actual PDF link.
   */</span>
  hint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PDFLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CatalogLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for pdf component.</p><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-DE)</li><li><strong>German (Australia)</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li><li><strong>Finnish</strong> (fi-FI)</li><li><strong>Indonesian</strong> (id-ID)</li><li><strong>Dutch</strong> (nl-NL)</li></ul></details>`,10);function X(Y,H){const a=l("RouterLink");return p(),c("div",null,[u,r(' - `"VidStack"` '),m,n("ul",null,[v,k,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/artplayer.html#global-config"},{default:t(()=>[s("Guide → ArtPlayer")]),_:1})])])])]),b,n("ul",null,[h,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/share.html#setting-component"},{default:t(()=>[s("Guide → Share → Setting component")]),_:1})])])])]),g,f,_,y,q,n("ul",null,[T,n("li",null,[w,n("ul",null,[n("li",null,[e(a,{to:"/guide/fonticon.html"},{default:t(()=>[s("Guide → FontIcon")]),_:1})])])])]),x,D,n("ul",null,[P,B,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/fonticon.html"},{default:t(()=>[s("Guide → FontIcon")]),_:1})])])])]),N,C,n("ul",null,[S,F,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/pdf.html#pdfjs-viewer"},{default:t(()=>[s("Guide → PDF → PDFJS")]),_:1})])])])]),I,L,A,R,n("ul",null,[O,G,n("li",null,[s("Details: "),n("ul",null,[n("li",null,[e(a,{to:"/guide/addthis.html#usage"},{default:t(()=>[s("Guide → AddThis")]),_:1})])])])]),V,U,n("ul",null,[W,n("li",null,[j,n("ul",null,[n("li",null,[e(a,{to:"/guide/backtotop.html"},{default:t(()=>[s("Guide → BackToTop")]),_:1})])])])]),z,E,n("ul",null,[J,n("li",null,[$,n("ul",null,[n("li",null,[e(a,{to:"/guide/notice.html"},{default:t(()=>[s("Guide → Notice")]),_:1})])])])]),K])}const Z=i(d,[["render",X],["__file","config.html.vue"]]);export{Z as default};
