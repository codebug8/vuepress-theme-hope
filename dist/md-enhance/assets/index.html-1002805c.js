import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as m,a as n,b as e,d as s,e as v,w as a,f as r}from"./app-1f522f6c.js";const k={},h=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持幻灯片。",-1),b={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),_=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 启用幻灯片"),e(`
      presentation`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 启用幻灯片"),e(`
      `),n("span",{class:"token literal-property property"},"presentation"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=r('<p><code>presentation</code> 也接收一个字符串数组，可以自由配置是否启用一些内置插件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>内置插件包括:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul><!-- - `&quot;anything&quot;`\n- `&quot;audio&quot;`\n- `&quot;chalkboard&quot;` --><p>注: 为了支持 Markdown 语法，我们总会启用 <code>markdown</code> 插件。</p></div>',2),y={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},x=r(`<p>你可以在客户端配置文件中导入并使用 <code>defineRevealConfig</code> 来自定义 reveal.js 的配置:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineRevealConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineRevealConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在此设置 reveal.js 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li>使用 <code>---</code> 分割幻灯片</li><li>使用 <code>--</code> 对幻灯片进行二次分割(垂直显示)</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前可用的主题(请使用它们直接替换 <code>[theme]</code>):</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,7),j=n("h2",{id:"演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),e(" 演示")],-1),C=n("h2",{id:"选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选项","aria-hidden":"true"},"#"),e(" 选项")],-1),R=n("p",null,[e("你可以在 Frontmatter 设置 "),n("code",null,"reveal"),e(" 以设置特定页面的 reveal.js 选项，也可以在插件选项中设置 "),n("code",null,"presentation"),e(" 以全局设置 reveal.js。")],-1),E={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function T(V,N){const t=l("ExternalLinkIcon"),p=l("CodeTabs"),c=l("RouterLink");return u(),m("div",null,[h,n("p",null,[e("本插件利用了 "),n("a",b,[e("reveal.js"),s(t)]),e(" 来支持这一功能。")]),v(" more "),g,s(p,{id:"10",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:o,isActive:i})=>[e("TS")]),title1:a(({value:o,isActive:i})=>[e("JS")]),tab0:a(({value:o,isActive:i})=>[_]),tab1:a(({value:o,isActive:i})=>[f]),_:1}),w,n("p",null,[e("Reveal.js 还提供了"),n("a",y,[e("更多的插件"),s(t)]),e("。如果你需要某个特定的插件，请在 GitHub 上提出 "),n("a",q,[e("Feature Request"),s(t)])]),x,n("p",null,[e("主题演示，请详见 "),s(c,{to:"/zh/guide/presentation/themes.html"},{default:a(()=>[e("幻灯片主题")]),_:1})]),j,n("p",null,[e("请见 "),s(c,{to:"/zh/guide/presentation/demo.html"},{default:a(()=>[e("幻灯片演示")]),_:1}),e("。")]),C,R,n("p",null,[e("更多选项，请参见"),n("a",E,[e("reveal.js config"),s(t)]),e("，更多用法，请参阅 "),n("a",P,[e("reveal.js 文档"),s(t)]),e("。")])])}const A=d(k,[["render",T],["__file","index.html.vue"]]);export{A as default};