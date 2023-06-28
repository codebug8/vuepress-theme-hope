import{_ as l}from"./favicon-9032e9a7.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as r,e as d,d as u,w as s,a as n,b as a,f as k}from"./app-1f522f6c.js";const m={},v=n("p",null,"你可以使用特殊标记为 Markdown 元素添加属性。",-1),b=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),a(" Config")],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  plugins`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// 启用属性支持"),a(`
      attrs`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// Enable attrs support"),a(`
      `),n("span",{class:"token literal-property property"},"attrs"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=k(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>你可以使用语法 <code>{attrs}</code> 来为 Markdown 元素添加属性。</p><p>比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Hello World {#say-hello-world}</span>
</code></pre></div><p>如果你想要一个有 full-width Class 的图片，你可以使用:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">img</span>](<span class="token url">link/to/image.png</span>)</span> {.full-width}
</code></pre></div><p>同时，其他属性也收到支持:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>一个包含文字的段落。 {#p .a .b align=center customize-attr=&quot;content with spaces&quot;}
</code></pre></div><p>会被渲染为:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a b<span class="token punctuation">&quot;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">customize-attr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content with spaces<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  一个包含文字的段落。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h2><p>你可以向 <code>attrs</code> 传递选项以自定义插件行为。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MarkdownItAttrRuleName</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;fence&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;inline&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;table&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;list&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;hr&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;softbreak&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownItAttrsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 左分隔符
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">{</span>&#39;
   */</span>
  left<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 右分隔符
   *
   * <span class="token keyword">@default</span> &#39;<span class="token punctuation">}</span>&#39;
   */</span>
  right<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 允许的属性
   *
   * <span class="token keyword">@description</span> 设置空数组意味着允许所有属性
   *
   * <span class="token keyword">@default</span> []
   */</span>
  allowed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 启用的规则
   *
   * <span class="token keyword">@default</span> &quot;all&quot;
   */</span>
  rule<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> MarkdownItAttrRuleName<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><blockquote><p>所有的 class 都使用 <code>margin: 4px;padding: 4px;border: 1px solid red;</code> 进行显示以展示效果。</p></blockquote><h3 id="行内元素-inline" tabindex="-1"><a class="header-anchor" href="#行内元素-inline" aria-hidden="true">#</a> 行内元素 (inline)</h3><p>包含 <code class="inline-code">行内代码</code> 和 <img src="`+l+`" alt="favicon" class="image" loading="lazy"> 的文字，也支持 <em class="inline-emphasis">强调</em> 和 <strong class="inline-bold">加粗</strong>。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>包含 <span class="token code-snippet code keyword">\`行内代码\`</span>{.inline-code} 和 <span class="token url"><span class="token operator">!</span>[<span class="token content">favicon</span>](<span class="token url">/favicon.ico</span>)</span>{.image} 的文字，也支持 <span class="token italic"><span class="token punctuation">_</span><span class="token content">强调</span><span class="token punctuation">_</span></span>{.inline-emphasis} 和 <span class="token bold"><span class="token punctuation">**</span><span class="token content">加粗</span><span class="token punctuation">**</span></span>{.inline-bold}。
</code></pre></div><h3 id="块级元素-block" tabindex="-1"><a class="header-anchor" href="#块级元素-block" aria-hidden="true">#</a> 块级元素 (block)</h3><p class="block">块级元素</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>块级元素 {.block}
</code></pre></div><h3 id="代码块-fence" tabindex="-1"><a class="header-anchor" href="#代码块-fence" aria-hidden="true">#</a> 代码块 (fence)</h3><div class="language-javascript" data-ext="js"><pre class="fence language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js {.fence}</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><h3 id="表格-table" tabindex="-1"><a class="header-anchor" href="#表格-table" aria-hidden="true">#</a> 表格 (table)</h3><table class="md-table"><thead><tr><th>表格</th></tr></thead><tbody><tr><td>内容</td></tr></tbody></table><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>| 表格 |
| ---- |
| 内容 |

{.md-table}
</code></pre></div><h3 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list" aria-hidden="true">#</a> 列表 (list)</h3><ul class="list-wrapper"><li class="list-item"><p>列表内容</p><ul class="nested"><li>嵌套列表内容</li></ul></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 列表内容{.list-item}

  <span class="token list punctuation">-</span> 嵌套列表内容
    {.nested}

{.list-wrapper}
</code></pre></div><h3 id="水平线-hr" tabindex="-1"><a class="header-anchor" href="#水平线-hr" aria-hidden="true">#</a> 水平线 (hr)</h3><hr class="horizontal"><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>--- {.horizontal}
</code></pre></div><h3 id="换行-softbreak" tabindex="-1"><a class="header-anchor" href="#换行-softbreak" aria-hidden="true">#</a> 换行 (softbreak)</h3><p class="break">一行换行的文字<br></p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>一行换行的文字  
{.break}
</code></pre></div>`,36);function f(_,x){const o=p("CodeTabs");return i(),r("div",null,[v,d(" more "),b,u(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:e,isActive:t})=>[a("TS")]),title1:s(({value:e,isActive:t})=>[a("JS")]),tab0:s(({value:e,isActive:t})=>[g]),tab1:s(({value:e,isActive:t})=>[h]),_:1}),w])}const A=c(m,[["render",f],["__file","attrs.html.vue"]]);export{A as default};
