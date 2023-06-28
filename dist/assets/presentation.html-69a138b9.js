import{_ as u,r as i,o as m,c as v,a as k,e as s,w as a,d as e,b as n,f as c}from"./app-2e3f1779.js";const h={},b=n("p",null,"Let the Markdown file in your VuePress site support presentation.",-1),g=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),e(" Config")],-1),f=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  theme`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        presentation`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" hopeTheme "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token literal-property property"},"presentation"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("code",null,"vuepress-plugin-md-enhance",-1),w={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"},x=c('<p><code>presentation</code> also receives an array of strings, allowing you to freely config whether to enable some built-in plugins.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Built-in plugins are:</p><ul><li><code>&quot;highlight&quot;</code></li><li><code>&quot;math&quot;</code></li><li><code>&quot;search&quot;</code></li><li><code>&quot;notes&quot;</code></li><li><code>&quot;zoom&quot;</code></li></ul><p>Note: <code>markdown</code> plugin is enabled anyway to support markdown grammar.</p></div>',2),j={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},C=c(`<p>You can import and call <code>defineRevealConfig</code> in client config file to customize reveal.js:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineRevealConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineRevealConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// reveal.js options here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>---</code> to split slides</li><li>Use <code>--</code> to split the slides second time (vertical display)</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Theme available(replace <code>[theme]</code> with them):</p><ul><li><code>auto</code> (Default)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,7),R=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),e(" Demo")],-1),T=c(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart

<span class="token title important"><span class="token punctuation">##</span> Slide 1</span>

A paragraph with some text and a <span class="token url">[<span class="token content">link</span>](<span class="token url">https://mrhope.site</span>)</span>

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> Slide 2</span>

<span class="token list punctuation">-</span> Item 1
<span class="token list punctuation">-</span> Item 2

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> Slide 3.1</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

--

<span class="token title important"><span class="token punctuation">##</span> Slide 3.2</span>

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S={class:"hint-container info"},F=n("p",{class:"hint-container-title"},"Info",-1),A=n("h2",{id:"options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),e(" Options")],-1),M=n("p",null,[e("You can set "),n("code",null,"reveal"),e(" to pass options to reveal.js per page in frontmatter, you can also set "),n("code",null,"presentation"),e(" in plugin options to set reveal.js globally.")],-1),I={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function P(D,J){const r=i("CodeTabs"),t=i("ExternalLinkIcon"),p=i("ProjectLink"),d=i("Presentation");return m(),v("div",null,[b,k(" more "),g,s(r,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:o,isActive:l})=>[e("TS")]),title1:a(({value:o,isActive:l})=>[e("JS")]),tab0:a(({value:o,isActive:l})=>[f]),tab1:a(({value:o,isActive:l})=>[_]),_:1}),n("p",null,[y,e(" uses "),n("a",w,[e("reveal.js"),s(t)]),e(" to support this feature.")]),x,n("p",null,[e("Reveal.js also provides "),n("a",j,[e("more plugins"),s(t)]),e(". If you need a specific plugin, please submit a "),n("a",q,[e("Feature Request"),s(t)]),e(" on GitHub.")]),C,n("p",null,[e("For details, see "),s(p,{name:"md-enhance",path:"/guide/presentation/themes.html"},{default:a(()=>[e("Themes demo")]),_:1}),e(".")]),R,s(d,{id:"presentation-150",code:"eJxVjc0KwjAQhO/7FAvtoQX7pzelB4969WilDXYx0aYNyYqC+O4mUJDeho9vZiCK8DSonrAC2KMRVtysMBJfiiW6SRMyvRnF2KPA86DGxyWRzMZti0JbORnKnWJKAbIsg//c2gM8MGk/PIeAFs4m96dd190dXKfR+RessdoFFNSF6ctxDMekYUks2nI1hyr1ncY9dftRdfkN0g8aMTop",theme:"auto"}),T,n("div",S,[F,n("p",null,[e("For detailed demo, please see "),s(p,{name:"md-enhance",path:"/guide/presentation/demo.html"},{default:a(()=>[e("Presentation demo")]),_:1})])]),A,M,n("p",null,[e("For more options, see "),n("a",I,[e("reveal.js config"),s(t)]),e(". For more usage, see "),n("a",N,[e("reveal.js documentation"),s(t)])])])}const B=u(h,[["render",P],["__file","presentation.html.vue"]]);export{B as default};
