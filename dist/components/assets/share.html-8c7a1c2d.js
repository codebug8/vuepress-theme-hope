import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as l,a as c,e,b as s,d as r,f as a}from"./app-08a03a85.js";const p={},d=s("p",null,"分享组件，将页面内容分享到社交媒体。",-1),u=s("h2",{id:"demo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),r(" Demo")],-1),v=s("p",null,"基础分享:",-1),m=a(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>自定义分享服务:</p>`,2),k=a(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token attr-name">services</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qq,weibo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token attr-name">:services</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;qq&#39;,&#39;weibo&#39;]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>彩色图标:</p>`,2),g=a(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token attr-name">colorful</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="设置组件" tabindex="-1"><a class="header-anchor" href="#设置组件" aria-hidden="true">#</a> 设置组件</h2><p>要提供 tree-shaking 支持，你应该在插件选项中设置 <code>componentOptions.share.services</code> 以及你想要在客户端使用的服务。 这将防止未使用的配置注入到客户端，并将减少客户端包的大小。</p><p>支持以下内置关键字:</p><ul><li>buffer</li><li>douban</li><li>email</li><li>evernote</li><li>facebook</li><li>flipboard</li><li>line</li><li>qq</li><li>qrcode</li><li>reddit</li><li>skype</li><li>telegram</li><li>twitter</li><li>whatsapp</li><li>weibo</li></ul><p>除了内置关键字外，你还可以将自己的服务配置添加到 <code>componentOptions.share.services</code> 中。 每个配置都应该是一个具有以下属性的对象:</p><ul><li><code>name</code>: 服务名称</li><li><code>link</code>: 分享链接，其中 <code>[]</code> 包裹的 <code>title</code>、<code>description</code>、<code>url</code>、<code>excerpt</code>、<code>summary</code>、<code>tags</code>、<code>cover</code> 和 <code>image</code> 将被替换为页面对应的值。</li><li><code>action</code>: 分享按钮的动作，可以是<code>open</code> (在新标签中打开链接) ，<code>navigate</code> (导航到链接) ，<code>popup</code> (打开弹出窗口) 或<code>qrcode</code> (显示 带链接的二维码) ，默认为 <code>popup</code></li><li><code>color</code>: 图标的主题色</li><li><code>shape</code>: 支持普通图标形状、图像 url、svg 代码或字体图标类</li><li><code>icon</code>: 彩色图标 (如果未提供，将通过 <code>color</code> 和 <code>shape</code> 生成)，svg 代码或字体图标类均受支持</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你使用的是 Twitter，则可以使用你的 Twitter 用户名设置 <code>componentOptions.share.twitterUserName</code>。</p></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="services" tabindex="-1"><a class="header-anchor" href="#services" aria-hidden="true">#</a> services</h3><ul><li><p>类型: <code>string | ShareService[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">BuiltInShareService</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;buffer&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;douban&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;email&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;evernote&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;facebook&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;flipboard&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;line&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;qq&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;qrcode&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;reddit&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;skype&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;telegram&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;twitter&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;whatsapp&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;weibo&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ShareServiceConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 分享链接
   *
   * <span class="token keyword">@description</span> 你可以使用 \`[\` 和 \`]\` 包裹变量名，变量将会被替换为页面的值：
   *
   * - \`title\` 将会被替换为页面的标题
   * - \`description\` 将会被替换为页面的描述
   * - \`url\` 将会被替换为页面的链接
   * - \`summary\` 将会被替换为页面的综述
   * - \`tags\` 将会被替换为页面的标签
   * - \`cover\` 将会被替换为页面的封面
   * - \`image\` 将会被替换为页面的第一张图片
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 分享按钮的行为
   *
   * <span class="token keyword">@description</span>
   * - \`open\` 将会在新标签页打开链接
   * - \`navigate\` 将会跳转到链接
   * - \`popup\` 将会打开一个弹窗
   * - \`qrcode\` 将会显示一个二维码
   *
   * <span class="token keyword">@default</span> &quot;popup&quot;
   */</span>
  action<span class="token operator">?</span><span class="token operator">:</span> ShareAction<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 图标的主题色
   *
   * <span class="token keyword">@default</span> &#39;currentColor&#39;
   */</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 纯色图标的形状
   */</span>
  shape<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 彩色图标
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ShareServiceOptions</span> <span class="token keyword">extends</span> <span class="token class-name">ShareServiceConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 服务名称
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">ShareService</span> <span class="token operator">=</span> BuiltInShareService <span class="token operator">|</span> ShareServiceOptions<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: 所有可用的服务</p></li></ul><p>分享服务</p><h3 id="titlegetter" tabindex="-1"><a class="header-anchor" href="#titlegetter" aria-hidden="true">#</a> titleGetter</h3><ul><li>类型: <code>(page: PageData) =&gt; string</code></li><li>默认值: <code>(page) =&gt; page.title</code></li></ul><p>标题获取器。</p><h3 id="descriptiongetter" tabindex="-1"><a class="header-anchor" href="#descriptiongetter" aria-hidden="true">#</a> descriptionGetter</h3><ul><li>类型: <code>(page: PageData) =&gt; string</code></li><li>默认值: <code>(page) =&gt; page.frontmatter.description</code></li></ul><p>描述获取器</p><h3 id="summarygetter" tabindex="-1"><a class="header-anchor" href="#summarygetter" aria-hidden="true">#</a> summaryGetter</h3><ul><li>类型: <code>(page: PageData) =&gt; string</code></li><li>默认值: <code>(page) =&gt; page.summary</code></li></ul><p>摘要获取器</p><h3 id="covergetter" tabindex="-1"><a class="header-anchor" href="#covergetter" aria-hidden="true">#</a> coverGetter</h3><ul><li>类型: <code>(page: PageData) =&gt; string</code></li><li>默认值: <code>(page) =&gt; page.cover</code></li></ul><p>封面获取器</p><h3 id="taggetter" tabindex="-1"><a class="header-anchor" href="#taggetter" aria-hidden="true">#</a> tagGetter</h3><ul><li>类型: <code>(page: PageData) =&gt; string</code></li><li>默认值: <code>({ frontmatter }) =&gt; frontmatter[&quot;tag&quot;] || frontmatter[&quot;tags&quot;]</code></li></ul><p>标签获取器</p><h3 id="inline" tabindex="-1"><a class="header-anchor" href="#inline" aria-hidden="true">#</a> inline</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否内联显示</p><h3 id="colorful" tabindex="-1"><a class="header-anchor" href="#colorful" aria-hidden="true">#</a> colorful</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否使用彩色图标</p>`,33);function b(h,q){const n=t("Share");return o(),l("div",null,[d,c(" more "),u,v,e(n),m,e(n,{services:"qq,weibo"}),e(n,{services:["qq","weibo"]}),k,e(n,{colorful:""}),g])}const _=i(p,[["render",b],["__file","share.html.vue"]]);export{_ as default};
