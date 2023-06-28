import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as t,b as e,a as n}from"./app-45d6dfe2.js";const p={},o=n(`<p>This plugin will inject expect reading time and word count statistics into the page data.</p><p>Relevant information will be injected into the <code>readingTime</code> property in the following format:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Expect reading minute */</span>
  minutes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Words count */</span>
  words<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),c=n(`<h2 id="node-side" tabindex="-1"><a class="header-anchor" href="#node-side" aria-hidden="true">#</a> Node Side</h2><p>For any page, you can get estimated reading time and word count from <code>page.data.readingTime</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span> <span class="token comment">// { minutes: 3.2, words: 934 }</span>
</code></pre></div><p>You can access it for further processing in the <code>extendsPage</code> lifecycle:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>You can also get the reading time of each page in the <code>onInitialized</code> lifecycle:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">onInitialized</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="client-side" tabindex="-1"><a class="header-anchor" href="#client-side" aria-hidden="true">#</a> Client Side</h2><p>You can import <code>useReadingTimeData</code> and <code>useReadingTimeLocale</code> from <code>vuepress-plugin-reading-time2</code> to get the reading time data and locale data of the current page:</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  useReadingTimeData<span class="token punctuation">,</span>
  useReadingTimeLocale<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-reading-time2/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> readingTimeData <span class="token operator">=</span> <span class="token function">useReadingTimeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> readingTimeLocale <span class="token operator">=</span> <span class="token function">useReadingTimeLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Related types:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span>
  minutes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  words<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useReadingTimeData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>ReadingTime <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ReadingTimeLocale</span> <span class="token punctuation">{</span>
  time<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useReadingTimeLocale</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>ReadingTimeLocale<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function i(l,u){return s(),t("div",null,[o,e(" more "),c])}const k=a(p,[["render",i],["__file","guide.html.vue"]]);export{k as default};
