import{_ as o,r as t,o as c,c as l,a as i,b as n,d as s,e as p,w as r,f as e}from"./app-2e3f1779.js";const d={},u=n("p",null,"This page guides you how to customize theme colors.",-1),m=e(`<h2 id="modify-the-built-in-color" tabindex="-1"><a class="header-anchor" href="#modify-the-built-in-color" aria-hidden="true">#</a> Modify the built-in color</h2><p>The theme controls the color through the palette, you may need to set your color in two situations:</p><ol><li>This color remains the same in day mode and night mode, like theme color.</li><li>This color is different in day mode, night mode, such as background color, font, border color, etc.</li></ol><p>The palette file is the <code>.vuepress/styles/palette.scss</code> file under the VuePress project folder.</p><p>For the former, you need to write variable values in <code>palette.scss</code>, e.g.:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>
<span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
</code></pre></div><p>For the latter, you need to set up a Map with key names <code>light</code> and <code>dark</code>, and values as color values, e.g.:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>
<span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
  <span class="token property">dark</span><span class="token punctuation">:</span> #000<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,8),v=e(`<h2 id="modify-other-colors" tabindex="-1"><a class="header-anchor" href="#modify-other-colors" aria-hidden="true">#</a> Modify other colors</h2><p>Sometimes, you may want to modify some colors that are not in <code>palette.scss</code>, such as the background color of the code block. At this time, you can check whether the corresponding color attribute value is a CSS variable through the devTools. If so, you can go to <code>index.scss</code> to manually override this variable value:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/index.scss</span>

<span class="token comment">// override code block background color</span>
<span class="token selector">#app </span><span class="token punctuation">{</span>
  <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>

  <span class="token selector">html[data-theme=&quot;dark&quot;] <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If not, write your own selectors to override them:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/index.scss</span>

<span class="token comment">// override code block language font color</span>
<span class="token selector">pre[class*=&quot;language-&quot;]::before </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff <span class="token important">!important</span><span class="token punctuation">;</span>

  <span class="token selector">html[data-theme=&quot;dark&quot;] <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #222 <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function h(k,b){const a=t("RouterLink");return c(),l("div",null,[u,i(" more "),m,n("p",null,[s("See "),p(a,{to:"/config/style.html#color-config"},{default:r(()=>[s("Theme Configuration → Color Settings")]),_:1}),s(" for all available color variables.")]),v])}const f=o(d,[["render",h],["__file","color.html.vue"]]);export{f as default};
