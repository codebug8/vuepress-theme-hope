import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as u,c as p,e as v,d as l,w as e,a as n,b as s,f as c}from"./app-1f522f6c.js";const m={},b=n("p",null,"自定义内容对齐方式。",-1),k=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用自定义对齐"),s(`
      align`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 启用自定义对齐"),s(`
      `),n("span",{class:"token literal-property property"},"align"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=c(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>嵌套和转义</summary><ul><li><p>嵌套可以通过增加外层容器的 marker 数量完成:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>:::: center
居中的内容...
::: left
左对齐的内容...
:::
居中的内容...
::::
</code></pre></div><p>会被渲染为</p><div style="text-align:center;"><p>居中的内容...</p><div style="text-align:left;"><p>左对齐的内容...</p></div><p>居中的内容...</p></div></li><li><p>转义可以通过在 marker 前添加 <code>\\</code> 转义来完成:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>\\::: left

:::
</code></pre></div><p>会被渲染为</p><p>::: left</p><p>:::</p></li></ul></details><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2>`,4),f={class:"hint-container danger"},x=n("p",{class:"hint-container-title"},"W.I.P",-1),y=n("p",null,"VuePress Theme Hope V2 版本仍在制作中，API 可能会有",-1),w=n("div",{style:{"text-align":"center"}},[n("p",null,"重大的变动。")],-1),P=n("p",null,"如果你在使用过程中遇到了 bug，可以",-1),V={style:{"text-align":"right"}},E={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues",target:"_blank",rel:"noopener noreferrer"},T=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: danger W.I.P
VuePress Theme Hope V2 版本仍在制作中，API 可能会有

::: center
重大的变动。
:::

如果你在使用过程中遇到了 bug，可以

::: right
<span class="token url">[<span class="token content">提一个 issue</span>](<span class="token url">https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues</span>)</span>。
:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function j(A,I){const o=t("CodeTabs"),r=t("ExternalLinkIcon");return u(),p("div",null,[b,v(" more "),k,l(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:i})=>[s("TS")]),title1:e(({value:a,isActive:i})=>[s("JS")]),tab0:e(({value:a,isActive:i})=>[h]),tab1:e(({value:a,isActive:i})=>[g]),_:1}),_,n("div",f,[x,y,w,P,n("div",V,[n("p",null,[n("a",E,[s("提一个 issue"),l(r)]),s("。")])])]),T])}const S=d(m,[["render",j],["__file","align.html.vue"]]);export{S as default};
