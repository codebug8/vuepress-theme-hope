import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as p,e as r,d,w as a,a as s,b as n,f as u}from"./app-1f522f6c.js";const k={},m=s("p",null,"让你的 VuePress 站点中的 Markdown 文件支持任务列表。",-1),b=s("h2",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),n(" 配置")],-1),v=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{ts:"",class:"language-typescript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.ts"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" mdEnhancePlugin "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  plugins`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token function"},"mdEnhancePlugin"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token comment"},"// 启用任务列表"),n(`
      tasklist`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{js:"",class:"language-javascript"},[s("code",null,[s("span",{class:"token comment"},"// .vuepress/config.js"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" mdEnhancePlugin "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"export"),n(),s("span",{class:"token keyword"},"default"),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token literal-property property"},"plugins"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
    `),s("span",{class:"token function"},"mdEnhancePlugin"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
      `),s("span",{class:"token comment"},"// 启用任务列表"),n(`
      `),s("span",{class:"token literal-property property"},"tasklist"),s("span",{class:"token operator"},":"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),n(`
  `),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=u(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li>使用 <code>- [ ] 一些文字</code> 渲染一个未勾选的任务项</li><li>使用 <code>- [x] 一些文字</code> 渲染一个勾选了的任务项 (我们也支持大写的 <code>X</code>)</li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 A</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 B</label></li></ul><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] 计划 A
<span class="token list punctuation">-</span> [x] 计划 B
</code></pre></div><h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h2><p>除了在插件选项中设置 <code>tasklist: true</code> 之外，你还可以将对象作为选项传递给它。可用选项如下:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TaskListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 是否禁用 checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否使用 \`&lt;label&gt;\` 来包裹文字
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function f(_,x){const l=c("CodeTabs");return o(),p("div",null,[m,r(" more "),b,d(l,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[n("TS")]),title1:a(({value:e,isActive:t})=>[n("JS")]),tab0:a(({value:e,isActive:t})=>[v]),tab1:a(({value:e,isActive:t})=>[h]),_:1}),g])}const A=i(k,[["render",f],["__file","tasklist.html.vue"]]);export{A as default};
