import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as t,b as p,a as n}from"./app-45d6dfe2.js";const e={},o=n(`<p>这个插件将会向页面数据注入预计阅读时间与字数统计。</p><p>相关信息会注入到 <code>readingTime</code> 属性，格式如下:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 分钟数 */</span>
  minutes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 字数 */</span>
  words<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),c=n(`<h2 id="在-node-侧用" tabindex="-1"><a class="header-anchor" href="#在-node-侧用" aria-hidden="true">#</a> 在 Node 侧用</h2><p>对于任何页面，你可以从 <code>page.data.readingTime</code> 获取预计阅读时间与字数统计:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span> <span class="token comment">// { minutes: 3.2, words: 934 }</span>
</code></pre></div><p>你可以在 <code>extendsPage</code> 生命周期获取它做进一步处理:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>也可以在 <code>onInitialized</code> 生命周期获取每个页面的阅读时间:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">onInitialized</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="客户端侧" tabindex="-1"><a class="header-anchor" href="#客户端侧" aria-hidden="true">#</a> 客户端侧</h2><p>你可以从 <code>vuepress-plugin-reading-time2</code> 导入 <code>useReadingTimeData</code> 和 <code>useReadingTimeLocale</code> 来获取当前页面的阅读时间数据和语言环境数据：</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  useReadingTimeData<span class="token punctuation">,</span>
  useReadingTimeLocale<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-reading-time2/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> readingTimeData <span class="token operator">=</span> <span class="token function">useReadingTimeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> readingTimeLocale <span class="token operator">=</span> <span class="token function">useReadingTimeLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>相关类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span>
  minutes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  words<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useReadingTimeData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>ReadingTime <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ReadingTimeLocale</span> <span class="token punctuation">{</span>
  time<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useReadingTimeLocale</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>ReadingTimeLocale<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function i(l,u){return s(),t("div",null,[o,p(" more "),c])}const d=a(e,[["render",i],["__file","guide.html.vue"]]);export{d as default};
