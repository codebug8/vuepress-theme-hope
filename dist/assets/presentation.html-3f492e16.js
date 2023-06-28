import{_ as u,r as i,o as v,c as m,b as n,d as s,e,a as k,w as a,f as c}from"./app-2e3f1779.js";const h={},b=n("p",null,"让你的 VuePress 站点中的 Markdown 文件支持幻灯片。",-1),g={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),f=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mdEnhance`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        presentation`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"presentation"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=c('<p><code>presentation</code> 也接收一个字符串数组，可以自由配置是否启用一些内置插件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>内置插件包括:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul><p>注: 为了支持 Markdown 语法，我们总会启用 <code>markdown</code> 插件。</p></div>',2),q={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},x=c(`<p>你可以在客户端配置文件中导入并使用 <code>defineRevealConfig</code> 来自定义 reveal.js 的配置:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前可用的主题(请使用它们直接替换 <code>[theme]</code>):</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,7),C=n("h2",{id:"演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),s(" 演示")],-1),U=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 1</span>

一个有文字和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">https://mrhope.site</span>)</span> 的段落

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 2</span>

<span class="token list punctuation">-</span> 项目 1
<span class="token list punctuation">-</span> 项目 2

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 3.1</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

--

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 3.2</span>

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),P={class:"hint-container tip"},R=n("p",{class:"hint-container-title"},"提示",-1),z=n("h2",{id:"选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选项","aria-hidden":"true"},"#"),s(" 选项")],-1),T=n("p",null,[s("你可以在 Frontmatter 设置 "),n("code",null,"reveal"),s(" 以设置特定页面的 reveal.js 选项，也可以在插件选项中设置 "),n("code",null,"presentation"),s(" 以全局设置 reveal.js。")],-1),V={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function F(B,J){const t=i("ExternalLinkIcon"),r=i("CodeTabs"),p=i("ProjectLink"),d=i("Presentation");return v(),m("div",null,[b,n("p",null,[s("我们使用 "),n("a",g,[s("reveal.js"),e(t)]),s(" 来支持这一功能。")]),k(" more "),_,e(r,{id:"10",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:l,isActive:o})=>[s("TS")]),title1:a(({value:l,isActive:o})=>[s("JS")]),tab0:a(({value:l,isActive:o})=>[f]),tab1:a(({value:l,isActive:o})=>[w]),_:1}),y,n("p",null,[s("Reveal.js 还提供了"),n("a",q,[s("更多的插件"),e(t)]),s("。如果你需要某个特定的插件，请在 GitHub 上提出 "),n("a",j,[s("Feature Request"),e(t)])]),x,n("p",null,[s("主题演示，请详见 "),e(p,{name:"md-enhance",path:"/zh/guide/presentation/themes.html"},{default:a(()=>[s("幻灯片主题")]),_:1}),s("。")]),C,e(d,{id:"presentation-150",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),U,n("div",P,[R,n("p",null,[s("详细与完整的演示详见 "),e(p,{name:"md-enhance",path:"/zh/guide/presentation/demo.html"},{default:a(()=>[s("幻灯片演示")]),_:1}),s("。")])]),z,T,n("p",null,[s("更多选项，请参见"),n("a",V,[s("reveal.js config"),e(t)]),s("，更多用法，请参阅 "),n("a",A,[s("reveal.js 文档"),e(t)]),s("。")])])}const S=u(h,[["render",F],["__file","presentation.html.vue"]]);export{S as default};
