import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as i}from"./app-845ccdc4.js";const s={},l=i(`<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><ul><li>类型: <code>string | ((page: Page) =&gt; string)</code></li><li>必填: 否</li></ul><p>作者信息</p><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> license</h3><ul><li>类型: <code>string | ((page: Page) =&gt; string)</code></li><li>必填: 否</li></ul><p>协议信息</p><h3 id="triggerwords" tabindex="-1"><a class="header-anchor" href="#triggerwords" aria-hidden="true">#</a> triggerWords</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>100</code></li></ul><p>触发附加版权的最小字数</p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否全局启用</p><h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy" aria-hidden="true">#</a> disableCopy</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>禁用复制</p><h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection" aria-hidden="true">#</a> disableSelection</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>禁用选择</p><h3 id="canonical" tabindex="-1"><a class="header-anchor" href="#canonical" aria-hidden="true">#</a> canonical</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>首选域名与部署目录</p><p>当你在多个站点部署内容时很有用。</p><div class="hint-container note"><p class="hint-container-title">例子</p><p>如果你在 <code>https://myblog.com</code> 和 <code>https://blog.com/username/</code> 下部署相同的内容，你可能希望选择一个站点作为首选链接。</p><ul><li>如果你倾向于使用第一个，你应该将 <code>canonical</code> 设置为 <code>https://myblog.com</code></li><li>如果你倾向于使用第二个，你应该将 <code>canonical</code> 设置为 <code>https://blog.com/username/</code></li></ul><p>这样，在另一个站点复制内容触发的版权信息，也会指向你的首选站点。</p></div><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型: <code>CopyrightLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 作者文字
   *
   * <span class="token keyword">@description</span> \`:author\` 将会被作者替换
   */</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 协议文字
   *
   * <span class="token keyword">@description</span> \`:license\` 会被当前协议替换
   */</span>
  license<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 链接文字
   *
   * <span class="token keyword">@description</span> \`:url\` 会替换为当前页面链接
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CopyrightLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CopyrightLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>版权插件的国际化配置。</p><details class="hint-container details"><summary>内置支持语言</summary><ul><li><strong>简体中文</strong> (zh-CN)</li><li><strong>繁体中文</strong> (zh-TW)</li><li><strong>英文(美国)</strong> (en-US)</li><li><strong>德语</strong> (de-DE)</li><li><strong>德语(澳大利亚)</strong> (de-AT)</li><li><strong>俄语</strong> (ru-RU)</li><li><strong>乌克兰语</strong> (uk-UA)</li><li><strong>越南语</strong> (vi-VN)</li><li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li><li><strong>波兰语</strong> (pl-PL)</li><li><strong>法语</strong> (fr-FR)</li><li><strong>西班牙语</strong> (es-ES)</li><li><strong>斯洛伐克</strong> (sk-SK)</li><li><strong>日语</strong> (ja-JP)</li><li><strong>土耳其语</strong> (tr-TR)</li><li><strong>韩语</strong> (ko-KR)</li><li><strong>芬兰语</strong> (fi-FI)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li></ul></details><h2 id="frontmatter-options" tabindex="-1"><a class="header-anchor" href="#frontmatter-options" aria-hidden="true">#</a> Frontmatter Options</h2><h3 id="copy-triggerwords" tabindex="-1"><a class="header-anchor" href="#copy-triggerwords" aria-hidden="true">#</a> copy.triggerWords</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>100</code></li></ul><p>触发附加版权的最小字数</p><h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy" aria-hidden="true">#</a> copy.disableCopy</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>禁用复制</p><h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection" aria-hidden="true">#</a> copy.disableSelection</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>禁用选择</p>`,38),o=[l];function c(t,r){return e(),a("div",null,o)}const u=n(s,[["render",c],["__file","config.html.vue"]]);export{u as default};