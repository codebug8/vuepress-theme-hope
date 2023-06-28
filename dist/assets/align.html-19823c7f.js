import{_ as d,r as i,o as p,c as u,a as v,e as l,w as s,d as e,b as n,f as o}from"./app-2e3f1779.js";const m={},h=n("p",null,"Customize content alignment.",-1),b=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),e(" Config")],-1),k=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  theme`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        align`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=o(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: left
Contents to align left
:::

::: center
Contents to align center
:::

::: right
Contents to align right
:::

::: justify
Contents to align justify
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Nesting and escaping</summary><ul><li><p>Nesting can be done by increasing marker number of outer container:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>:::: center
Center contents...
::: left
Left contents..
:::
Center contents...
::::
</code></pre></div><p>will be</p><div style="text-align:center;"><p>Center contents...</p><div style="text-align:left;"><p>Left contents...</p></div><p>Center contents...</p></div></li><li><p>Escaping can be done by adding <code>\\</code> to escape the marker:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>\\::: left

:::
</code></pre></div><p>will be</p><p>::: left</p><p>:::</p></li></ul></details><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`,4),_={class:"hint-container danger"},y=n("p",{class:"hint-container-title"},"Warning",-1),x=n("p",null,"vuepress-theme-hope v2 is still in W.I.P, the API may have",-1),w=n("div",{style:{"text-align":"center"}},[n("p",null,"Significant changes.")],-1),C=n("p",null,"If you meet a bug during usage, you can",-1),T={style:{"text-align":"right"}},I={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues",target:"_blank",rel:"noopener noreferrer"},S=o(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: danger
vuepress-theme-hope v2 is still in W.I.P, the API may have

::: center
Significant changes.
:::

If you meet a bug during usage, you can

::: right
<span class="token url">[<span class="token content">open an issue</span>](<span class="token url">https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues</span>)</span>.
:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function j(N,A){const c=i("CodeTabs"),r=i("ExternalLinkIcon");return p(),u("div",null,[h,v(" more "),b,l(c,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:a,isActive:t})=>[e("TS")]),title1:s(({value:a,isActive:t})=>[e("JS")]),tab0:s(({value:a,isActive:t})=>[k]),tab1:s(({value:a,isActive:t})=>[g]),_:1}),f,n("div",_,[y,x,w,C,n("div",T,[n("p",null,[n("a",I,[e("open an issue"),l(r)]),e(".")])])]),S])}const V=d(m,[["render",j],["__file","align.html.vue"]]);export{V as default};
