import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,a as s}from"./app-09024e88.js";const t={},o=s(`<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="level" tabindex="-1"><a class="header-anchor" href="#level" aria-hidden="true">#</a> level</h3><ul><li>类型: <code>1 | 2 | 3</code></li><li>默认值: <code>3</code></li></ul><p>目录项级别的最大深度。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>仅在你使用内置目录组件时可用。</p></div><h3 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>目录是否显示索引</p><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h3><ul><li>类型: <code>(RegExp | string)[]</code></li><li>默认值: <code>[]</code></li></ul><p>不会自动生成的页面路径。</p><h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> frontmatter</h3><ul><li>类型: <code>(path: string) =&gt; Record&lt;string, any&gt;</code></li><li>必填: 否</li></ul><p>控制页面 Frontmatter。</p><h3 id="titlegetter" tabindex="-1"><a class="header-anchor" href="#titlegetter" aria-hidden="true">#</a> titleGetter</h3><ul><li>类型: <code>(page: Page) =&gt; string</code></li><li>默认值: <code>(page: Page) =&gt; page.title</code></li></ul><p>页面标题获取器</p><h3 id="icongetter" tabindex="-1"><a class="header-anchor" href="#icongetter" aria-hidden="true">#</a> iconGetter</h3><ul><li>类型: <code>(page: Page) =&gt; string</code></li><li>必填: 否</li></ul><p>页面图标获取器</p><h3 id="ordergetter" tabindex="-1"><a class="header-anchor" href="#ordergetter" aria-hidden="true">#</a> orderGetter</h3><ul><li>类型: <code>(page: Page) =&gt; string</code></li><li>必填: 否</li></ul><p>页面顺序获取器</p><h3 id="shouldindex" tabindex="-1"><a class="header-anchor" href="#shouldindex" aria-hidden="true">#</a> shouldIndex</h3><ul><li>类型: <code>(page: Page) =&gt; boolean</code></li><li>默认值: <code>() =&gt; true</code></li></ul><p>页面是否应该被索引</p><h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> component</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>使用的目录组件名称。</p><h3 id="iconcomponent" tabindex="-1"><a class="header-anchor" href="#iconcomponent" aria-hidden="true">#</a> iconComponent</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>使用的图标组件名称，图标信息会作为 <code>icon</code> 属性传入相关组件进行渲染。</p><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型: <code>AutoCatalogLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoCatalogLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 目录标题
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 空目录提示
   */</span>
  empty<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoCatalogLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> AutoCatalogLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>目录组件国际化配置。</p><details class="hint-container details"><summary>内置支持语言</summary><ul><li><strong>简体中文</strong> (zh-CN)</li><li><strong>繁体中文</strong> (zh-TW)</li><li><strong>英文(美国)</strong> (en-US)</li><li><strong>德语</strong> (de-DE)</li><li><strong>德语(澳大利亚)</strong> (de-AT)</li><li><strong>俄语</strong> (ru-RU)</li><li><strong>乌克兰语</strong> (uk-UA)</li><li><strong>越南语</strong> (vi-VN)</li><li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li><li><strong>波兰语</strong> (pl-PL)</li><li><strong>法语</strong> (fr-FR)</li><li><strong>西班牙语</strong> (es-ES)</li><li><strong>斯洛伐克</strong> (sk-SK)</li><li><strong>日语</strong> (ja-JP)</li><li><strong>土耳其语</strong> (tr-TR)</li><li><strong>韩语</strong> (ko-KR)</li><li><strong>芬兰语</strong> (fi-FI)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li></ul></details><h2 id="客户端选项" tabindex="-1"><a class="header-anchor" href="#客户端选项" aria-hidden="true">#</a> 客户端选项</h2><h3 id="defineautocatalogiconcomponent" tabindex="-1"><a class="header-anchor" href="#defineautocatalogiconcomponent" aria-hidden="true">#</a> defineAutoCatalogIconComponent</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AutoCatalogIconComponent</span> <span class="token operator">=</span> Component<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">defineAutoCatalogIconComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  options<span class="token operator">:</span> AutoCatalogIconComponent
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><p>自定义目录图标组件。</p><h2 id="autocatalog-组件属性" tabindex="-1"><a class="header-anchor" href="#autocatalog-组件属性" aria-hidden="true">#</a> AutoCatalog 组件属性</h2><h3 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> base</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>当前路由的基础路径</code></li></ul><p>目录基础路径</p><h3 id="level-1" tabindex="-1"><a class="header-anchor" href="#level-1" aria-hidden="true">#</a> level</h3><ul><li>类型: <code>1 | 2 | 3</code></li><li>默认值: <code>3</code></li></ul><p>Catalog 的最大层级</p><h3 id="index-1" tabindex="-1"><a class="header-anchor" href="#index-1" aria-hidden="true">#</a> index</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否在目录列表中显示索引</p>`,50),i=[o];function l(r,c){return a(),e("div",null,i)}const u=n(t,[["render",l],["__file","config.html.vue"]]);export{u as default};