import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as u,a as c,e as s,b as a,d as i,f as e}from"./app-08a03a85.js";const r={},d=a("p",null,"CodePen 演示组件。",-1),k=a("p",null,"你可以使用它在 Markdown 嵌入 Demo。",-1),h=a("h2",{id:"示例",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),i(" 示例")],-1),m=a("p",null,"一个使用用户和 Slug Hash 的案例:",-1),q=e(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodePen</span>
  <span class="token attr-name">user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>kowlor<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">slug-hash</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ZYYQoy<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Solar System animation - Pure CSS<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:default-tab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;css&#39;,&#39;result&#39;]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$isDarkmode? &#39;dark&#39;: &#39;light&#39;<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>一个使用链接的案例:</p>`,2),g=e(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodePen</span>
  <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://codepen.io/kowlor/pen/ZYYQoy<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Solar System animation - Pure CSS<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:default-tab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;css&#39;,&#39;result&#39;]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$isDarkmode? &#39;dark&#39;: &#39;light&#39;<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>一个加载运行的案例:</p>`,2),f=e(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodePen</span>
  <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://codepen.io/kowlor/pen/ZYYQoy<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Envelope w/ Hearts<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clicktorun<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$isDarkmode? &#39;dark&#39;: &#39;light&#39;<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> link</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>CodePen 项目链接。</p><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h3><ul><li>类型: <code>string</code></li><li>必填: 如果未设置 <code>link</code>，则是</li></ul><p>CodePen 用户。</p><h3 id="slughash" tabindex="-1"><a class="header-anchor" href="#slughash" aria-hidden="true">#</a> slugHash</h3><ul><li>类型: <code>string</code></li><li>必填: 如果未设置 <code>link</code>，则是</li></ul><p>CodePen 项目 slug hash。</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>CodePen 项目标题。</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>380</code></li></ul><p>以 px 为单位的编辑器高度。</p><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3><ul><li>类型: <code>&quot;default&quot; | &quot;light&quot; | &quot;dark&quot;</code></li><li>默认值: <code>&quot;default&quot;</code></li></ul><p>编辑器主题。</p><h3 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> status</h3><ul><li>: <code>&quot;autoload&quot; | &quot;preview&quot; | &quot;clicktorun&quot;</code></li><li>默认值: <code>&quot;preview&quot;</code></li></ul><p>CodePen 嵌入演示状态。</p><ul><li><code>&quot;autoload&quot;</code>: 页面加载时会加载 demo。</li><li><code>&quot;preview&quot;</code>: 演示的代码会被加载并显示预览按钮。</li><li><code>&quot;clicktorun&quot;</code>: 只有在用户单击“运行代码”按钮后才会加载演示。</li></ul><h3 id="defaulttab" tabindex="-1"><a class="header-anchor" href="#defaulttab" aria-hidden="true">#</a> defaultTab</h3><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[&quot;result&quot;]</code></li></ul><p>编辑器默认打开的选项卡。</p>`,27);function v(n,_){const t=l("CodePen");return p(),u("div",null,[d,k,c(" more "),h,m,s(t,{user:"kowlor","slug-hash":"ZYYQoy",title:"Solar System animation - Pure CSS","default-tab":["css","result"],theme:n.$isDarkmode?"dark":"light"},null,8,["theme"]),q,s(t,{link:"https://codepen.io/kowlor/pen/ZYYQoy",title:"Solar System animation - Pure CSS","default-tab":["css","result"],theme:n.$isDarkmode?"dark":"light"},null,8,["theme"]),g,s(t,{link:"https://codepen.io/keginaring/pen/XWZazwW",title:"Solar System animation - Pure CSS",status:"clicktorun",theme:n.$isDarkmode?"dark":"light"},null,8,["theme"]),f])}const C=o(r,[["render",v],["__file","codepen.html.vue"]]);export{C as default};