import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as v,e as p,d as l,w as s,a as n,b as e,f as d}from"./app-1f522f6c.js";const b={},m=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持选项卡。",-1),k=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 添加选项卡支持"),e(`
      tabs`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 添加选项卡支持"),e(`
      `),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=d(`<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>你需要将选项卡包装在 <code>tabs</code> 容器中。</p><p>你可以在 <code>tabs</code> 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- 这里，fruit 将用作 id，它是可选的 --&gt;</span>

<span class="token comment">&lt;!-- 选项卡内容 --&gt;</span>

:::
</code></pre></div><p>在这个容器内，你应该使用 <code>@tab</code> 标记来标记和分隔选项卡内容。</p><p>在 <code>@tab</code> 标记后，你可以添加文本 <code>:active</code> 默认激活选项卡，之后的文本将被解析为选项卡标题。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

@tab:active 标题 3

<span class="token comment">&lt;!-- tab 3 将会被默认激活 --&gt;</span>

<span class="token comment">&lt;!-- tab 3 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- 此处，选项卡 1 的标题“标题 1”将用作值。 --&gt;</span>

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2#值 2

<span class="token comment">&lt;!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值--&gt;</span>

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在每个选项卡中使用 Vue 语法和组件，并且你可以访问 <code>value</code> 和 <code>isActive</code>，表示选项卡的绑定值和选项卡是否处于激活状态。</p>`,10),A={class:"hint-container info"},f=n("p",{class:"hint-container-title"},"一起切换并保持选择",-1),w=n("p",null,"如果你想让一些选项卡组一起切换，你可以使用相同的选项卡 ID 来绑定它们。",-1),x=n("p",null,"针对每个选项卡 ID 的选择会被存储并进行持久化。",-1),y=n("p",null,"下方是一个案例。",-1),B=n("p",null,"选择包管理器:",-1),T=n("p",null,"npm 应该与 Node.js 被一同安装。",-1),V=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("corepack prepare pnpm@latest "),n("span",{class:"token parameter variable"},"--activated"),e(`
`)])])],-1),j=n("p",null,[e("安装 "),n("code",null,"vuepress-plugin-md-enhance"),e(":")],-1),N=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(" i "),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])])],-1),C=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-plugin-md-enhance
`)])])],-1),E=n("h2",{id:"案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),e(" 案例")],-1),P=n("p",null,"一个水果选项卡列表:",-1),S=n("p",null,"Apple",-1),D=n("p",null,"Banana",-1),O=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个水果选项卡列表:</p>`,2),I=n("p",null,"Apple",-1),J=n("p",null,"Banana",-1),M=n("p",null,"Orange",-1),q=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个没有绑定 id 的水果选项卡列表:</p>`,2),z=n("p",null,"Apple",-1),F=n("p",null,"Banana",-1),G=n("p",null,"Orange",-1),H=d(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function K(L,Q){const o=c("CodeTabs"),t=c("Tabs");return r(),v("div",null,[m,p(" more "),k,l(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:a,isActive:i})=>[e("TS")]),title1:s(({value:a,isActive:i})=>[e("JS")]),tab0:s(({value:a,isActive:i})=>[h]),tab1:s(({value:a,isActive:i})=>[g]),_:1}),_,n("div",A,[f,w,x,y,B,l(t,{id:"52",data:[{id:"npm"},{id:"pnpm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:i})=>[e("npm")]),title1:s(({value:a,isActive:i})=>[e("pnpm")]),tab0:s(({value:a,isActive:i})=>[T]),tab1:s(({value:a,isActive:i})=>[V]),_:1}),j,l(t,{id:"65",data:[{id:"npm"},{id:"pnpm"}],"tab-id":"shell"},{title0:s(({value:a,isActive:i})=>[e("使用 npm")]),title1:s(({value:a,isActive:i})=>[e("使用 pnpm")]),tab0:s(({value:a,isActive:i})=>[N]),tab1:s(({value:a,isActive:i})=>[C]),_:1})]),E,P,l(t,{id:"80",data:[{id:"apple"},{id:"banana"}],"tab-id":"fruit"},{title0:s(({value:a,isActive:i})=>[e("apple")]),title1:s(({value:a,isActive:i})=>[e("banana")]),tab0:s(({value:a,isActive:i})=>[S]),tab1:s(({value:a,isActive:i})=>[D]),_:1}),O,l(t,{id:"96",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:s(({value:a,isActive:i})=>[e("apple")]),title1:s(({value:a,isActive:i})=>[e("banana")]),title2:s(({value:a,isActive:i})=>[e("orange")]),tab0:s(({value:a,isActive:i})=>[I]),tab1:s(({value:a,isActive:i})=>[J]),tab2:s(({value:a,isActive:i})=>[M]),_:1}),q,l(t,{id:"117",data:[{id:"apple"},{id:"banana"},{id:"orange"}]},{title0:s(({value:a,isActive:i})=>[e("apple")]),title1:s(({value:a,isActive:i})=>[e("banana")]),title2:s(({value:a,isActive:i})=>[e("orange")]),tab0:s(({value:a,isActive:i})=>[z]),tab1:s(({value:a,isActive:i})=>[F]),tab2:s(({value:a,isActive:i})=>[G]),_:1}),H])}const W=u(b,[["render",K],["__file","tabs.html.vue"]]);export{W as default};
