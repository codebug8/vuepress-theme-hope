import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-f6a22c71.js";const e={},o=t(`<h2 id="composables" tabindex="-1"><a class="header-anchor" href="#composables" aria-hidden="true">#</a> Composables</h2><div class="hint-container note"><p class="hint-container-title">注</p><p>这些函数只能在 setup 中调用</p></div><h3 id="hasglobalcomponent" tabindex="-1"><a class="header-anchor" href="#hasglobalcomponent" aria-hidden="true">#</a> hasGlobalComponent</h3><p>检查组件是否已全局注册。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>该组件的本地导入不影响结果。</p></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasGlobalComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 如果你全局注册了 \`&lt;my-component&gt;\`</span>
<span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">&quot;MyComponent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">&quot;my-component&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">&quot;MyComponent2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div></details><h3 id="uselocaleconfig" tabindex="-1"><a class="header-anchor" href="#uselocaleconfig" aria-hidden="true">#</a> useLocaleConfig</h3><p>从语言环境设置中获取当前语言环境配置。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> useLocaleConfig<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">LocaleData</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  localesConfig<span class="token operator">:</span> RequiredLocaleConfig<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><details class="hint-container details"><summary>示例</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> localesCOnfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Title&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标题&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">useLocaleConfig</span><span class="token punctuation">(</span>localesConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// under \`/page\`</span>
locale<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;Title&#39;</span>

<span class="token comment">// under \`/zh/page\`</span>
locale<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;标题&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="usepagetitle" tabindex="-1"><a class="header-anchor" href="#usepagetitle" aria-hidden="true">#</a> usePageTitle</h3><p>获得当前页面标题。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">PageTitleRef</span> <span class="token operator">=</span> ComputedRef<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">usePageTitle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> PageTitleRef<span class="token punctuation">;</span>
</code></pre></div><h2 id="utils" tabindex="-1"><a class="header-anchor" href="#utils" aria-hidden="true">#</a> Utils</h2><h3 id="设备相关" tabindex="-1"><a class="header-anchor" href="#设备相关" aria-hidden="true">#</a> 设备相关</h3><p>可以通过函数名称轻松推断出功能。</p><p>ua 参数是 <code>navigator.userAgent</code>，因为它在 SSR 中不可用，所以你应该在 <code>onMounted</code> 生命周期中调用这些函数。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsMobile</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsChromeWebView</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsSafariMobile</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsSafari</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsiPhone</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsiPad</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsWindows</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsIOS</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIsMacOS</span><span class="token operator">:</span> <span class="token punctuation">(</span>ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="路由相关" tabindex="-1"><a class="header-anchor" href="#路由相关" aria-hidden="true">#</a> 路由相关</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Whether the lick is active
 *
 * <span class="token keyword">@param</span> <span class="token parameter">route</span> Current route
 * <span class="token keyword">@param</span> <span class="token parameter">link</span> link path
 * <span class="token keyword">@returns</span> Whether the lick is active
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isActiveLink</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  route<span class="token operator">:</span> RouteLocationNormalizedLoaded<span class="token punctuation">,</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),p=[o];function c(l,i){return s(),a("div",null,p)}const k=n(e,[["render",c],["__file","client.html.vue"]]);export{k as default};