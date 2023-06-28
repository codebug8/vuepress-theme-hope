import{_ as n,o as s,c as a,f as e}from"./app-2e3f1779.js";const p={},t=e(`<h2 id="链接检查" tabindex="-1"><a class="header-anchor" href="#链接检查" aria-hidden="true">#</a> 链接检查</h2><p>主题默认在开发模式下检查你的 Markdown 链接。</p><p>你可以通过插件选项中的 <code>checkLinks</code> 自定义此功能。 <code>checkLinks</code> 接收一个对象。</p><ul><li>你可以使用 <code>checkLinks.status</code> 自定义链接检查状态，你可以在 <code>&#39;always&#39;</code>、<code>&#39;never&#39;</code>、<code>&#39;dev&#39;</code> 和 <code>&#39;build&#39;</code> 中选择。</li><li>要忽略某些链接，你可以将 <code>checkLinks.ignore</code> 设置为字符串和 RegExp 的数组，或者填入一个接收 link 和 isDev 作为参数并返回一个布尔值以标识是否忽略此链接的函数。</li></ul><p>例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdEnhancePlugins</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">checkLinks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 仅在开发模式下检查链接</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 忽略以 \`/api/\` 开头的链接</span>
          <span class="token operator">/</span><span class="token operator">^</span>\\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">api\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token comment">// 忽略 \`/playground.html\`</span>
          <span class="token string">&quot;/playground.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gfm" tabindex="-1"><a class="header-anchor" href="#gfm" aria-hidden="true">#</a> GFM</h2><p>如果你的文档既在文档站点上提供又直接在 GitHub 上提供，我们在主题选项中提供了 <code>plugins.mdEnhance.gfm</code> 选项来使你的 Markdown 行为与 GitHub 保持一致。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>自定义容器在 <code>@vuepress/theme-default</code> 和 <code>vuepress-theme-hope</code> 中默认启用，但在 GitHub Markdown 预览中不可用。</p></div><h2 id="v-pre" tabindex="-1"><a class="header-anchor" href="#v-pre" aria-hidden="true">#</a> v-pre</h2><p>由于 VuePress2 已经在 <code>@vuepress/core</code> 中移除了 V1 的 v-pre 容器，插件提供了一个选项 <code>vPre</code> 支持它。</p><p>换言之当设置 <code>plugins.mdEnhance.vPre: true</code> 时，你可以在下面的容器中使用任何 Mustache 语法。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: v-pre

{{ abc }}

:::
</code></pre></div>`,13),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","others.html.vue"]]);export{d as default};
