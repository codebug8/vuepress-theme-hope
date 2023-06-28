import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as v,e as m,a as n,b as s,d as a,w as e,f as c}from"./app-1f522f6c.js";const b={},g=n("p",null,[s("The plugin provides you vue playground support with "),n("code",null,"@vue/repl"),s(" package.")],-1),k={class:"hint-container tip"},h=n("p",{class:"hint-container-title"},"Tips",-1),y=n("p",null,[s("Since we are providing a runtime compiler, we are introducing the whole "),n("code",null,"@vue/compiler-sfc"),s(" package with typescript support, so the whole Vue Playground chunk is > 4MB. So you should only use this if you are heavily depending on interactive Vue Playground.")],-1),f=n("h2",{id:"config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),s(" Config")],-1),C=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// enable vue playground"),s(`
      vuePlayground`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// enable vue playground"),s(`
      `),n("span",{class:"token literal-property property"},"vuePlayground"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>To use vue playground, you should use a container named <code>vue-playground</code>.</p><p>In it, you can use 3 directives:</p><ul><li><code>@file FileName</code> then a code block to add files</li><li><code>@import</code> then a json block to customize &quot;import map&quot;</li><li><code>@setting</code> then a json block to customize settings</li></ul><p>You can see the below demos to see more details.</p><p>You can import and call <code>defineVuePlaygroundConfig</code> in client config file to customize <code>@vue/repl</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineVuePlaygroundConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineVuePlaygroundConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \`@vue/repl\` options here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`,8),B=c(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: vue-playground Vue Playground

@file App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue language-vue">&lt;script setup&gt;
import { ref } from &quot;vue&quot;;

const msg = ref(&quot;Hello Playground!&quot;);
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),V=c(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: vue-playground Vue Playground with customized settings and import

@file App.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue language-vue">&lt;script setup&gt;
import { ref } from &quot;vue&quot;;
import Comp from &quot;./Comp.vue&quot;;

const msg = ref(&quot;Hello Playground!&quot;);
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
  &lt;input v-model=&quot;msg&quot; /&gt;
  &lt;Comp /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@file Comp.vue

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue language-vue">&lt;script setup&gt;
import { useBattery } from &quot;@vueuse/core&quot;;
import { ref } from &quot;vue&quot;;

const { charging, level } = useBattery();
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;Battery status&lt;/h1&gt;
  &lt;p&gt;Charging: {{ charging }}&lt;/p&gt;
  &lt;p&gt;Level: {{ level * 100 }}%&lt;/p&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

@import

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json">{
  &quot;imports&quot;: {
    &quot;@vueuse/core&quot;: &quot;https://unpkg.com/@vueuse/core/index.mjs&quot;,
    &quot;@vueuse/shared&quot;: &quot;https://unpkg.com/@vueuse/shared/index.mjs&quot;,
    &quot;vue-demi&quot;: &quot;https://unpkg.com/vue-demi/lib/index.mjs&quot;
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

@setting

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json language-json">{
  &quot;showCompileOutput&quot;: true
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function X(Z,x){const o=l("RouterLink"),d=l("CodeTabs"),u=l("VuePlayground");return r(),v("div",null,[g,m(" more "),n("div",k,[h,y,n("p",null,[s("You can use "),a(o,{to:"/guide/demo/vue.html"},{default:e(()=>[s("Vue Demo")]),_:1}),s(" and "),a(o,{to:"/guide/playground.html#vue"},{default:e(()=>[s("Playground Vue Preset")]),_:1}),s(" as an alternative.")])]),f,a(d,{id:"15",data:[{id:"TS"},{id:"JS"}],"tab-id":"config"},{title0:e(({value:i,isActive:t})=>[s("TS")]),title1:e(({value:i,isActive:t})=>[s("JS")]),tab0:e(({value:i,isActive:t})=>[C]),tab1:e(({value:i,isActive:t})=>[I]),_:1}),w,a(u,{title:"Vue%20Playground",key:"d1beade6",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gUGxheWdyb3VuZCFcIik7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cbiJ9"}),B,a(u,{title:"Vue%20Playground%20with%20customized%20settings%20and%20import",key:"7ccf5454",settings:"%7B%22showCompileOutput%22%3Atrue%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBDb21wIGZyb20gXCIuL0NvbXAudnVlXCI7XG5cbmNvbnN0IG1zZyA9IHJlZihcIkhlbGxvIFBsYXlncm91bmQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbiAgPENvbXAgLz5cbjwvdGVtcGxhdGU%2BXG4iLCJDb21wLnZ1ZSI6IjxzY3JpcHQgc2V0dXA%2BXG5pbXBvcnQgeyB1c2VCYXR0ZXJ5IH0gZnJvbSBcIkB2dWV1c2UvY29yZVwiO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuXG5jb25zdCB7IGNoYXJnaW5nLCBsZXZlbCB9ID0gdXNlQmF0dGVyeSgpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPkJhdHRlcnkgc3RhdHVzPC9oMT5cbiAgPHA%2BQ2hhcmdpbmc6IHt7IGNoYXJnaW5nIH19PC9wPlxuICA8cD5MZXZlbDoge3sgbGV2ZWwgKiAxMDAgfX0lPC9wPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL0B2dWV1c2UvY29yZS9pbmRleC5tanNcIixcbiAgICBcIkB2dWV1c2Uvc2hhcmVkXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vQHZ1ZXVzZS9zaGFyZWQvaW5kZXgubWpzXCIsXG4gICAgXCJ2dWUtZGVtaVwiOiBcImh0dHBzOi8vdW5wa2cuY29tL3Z1ZS1kZW1pL2xpYi9pbmRleC5tanNcIlxuICB9XG59XG4ifQ%3D%3D"}),V])}const _=p(b,[["render",X],["__file","vue-playground.html.vue"]]);export{_ as default};
