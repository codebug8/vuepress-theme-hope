import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as l,f as u,a as s,b as n,d as e,w as r,e as t}from"./app-0ad4067d.js";const d={},k=s("p",null,"此插件会使页面正文内的图片在点击时进入浏览模式浏览。",-1),v=t('<h2 id="浏览模式介绍" tabindex="-1"><a class="header-anchor" href="#浏览模式介绍" aria-hidden="true">#</a> 浏览模式介绍</h2><p>在浏览模式中，你可以:</p><ul><li>左右滑动按顺序浏览页面内其他的图片</li><li>查看图片的描述</li><li>对图片进行缩放</li><li>全屏浏览图片</li><li>下载图片</li><li>分享图片</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>除了点击右上角的 &quot;×&quot; 退出浏览模式外，在上下滚动超过一定距离后，会自动退出图片浏览模式。</li><li>在移动端，或使用 PC 触控板，你可以使用平移、缩放手势在浏览模式中平移、缩放图片。</li></ul></div><h2 id="图片选择" tabindex="-1"><a class="header-anchor" href="#图片选择" aria-hidden="true">#</a> 图片选择</h2><p>插件默认会按照默认主题的选择器选中图片，如果你在使用第三方主题，你可以将一个或多个 CSS 选择器设置给 <code>selector</code> 选项。</p><h2 id="自定义-photoswipe-选项" tabindex="-1"><a class="header-anchor" href="#自定义-photoswipe-选项" aria-hidden="true">#</a> 自定义 PhotoSwipe 选项</h2>',7),m=s("code",null,"definePhotoSwipeOptions",-1),h={href:"http://photoswipe.com/",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"photo-swipe",-1),f=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> definePhotoSwipeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-photo-swipe/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">definePhotoSwipeOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在此设置 photoswipe 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作延迟" tabindex="-1"><a class="header-anchor" href="#操作延迟" aria-hidden="true">#</a> 操作延迟</h2><p>如果你的主题在页面切换时会添加动画，你可能需要延迟 photo-swipe 重新查找页面图片的时间点。你可以通过 <code>delay</code> 选项来配置这一延迟，默认的值为 <code>800</code> (单位为毫秒)。</p><h2 id="多语言配置" tabindex="-1"><a class="header-anchor" href="#多语言配置" aria-hidden="true">#</a> 多语言配置</h2><p>你可以通过 <code>locales</code> 来新增特定语言的多语言配置或修改已支持语言的配置。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> photoSwipePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-photo-swipe&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这是一个支持的语言</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这是一个没有收到插件支持的语言</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;mm-NN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">photoSwipePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 覆盖分享标签文字</span>
          share<span class="token operator">:</span> <span class="token string">&quot;分享给伙伴&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 在这里完整设置 \`mm-NN\` 的多语言配置</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(_,w){const p=a("ExternalLinkIcon"),o=a("RouterLink");return c(),l("div",null,[k,u(" more "),v,s("p",null,[n("你可以通过在客户端配置文件中导入和调用 "),m,n(" 来将选项传递给 "),s("a",h,[b,e(p)]),n("：")]),f,s("p",null,[n("对于具体的选项，详见 "),e(o,{to:"/zh/config.html#locales"},{default:r(()=>[n("配置 → 多语言设置")]),_:1}),n(".")])])}const x=i(d,[["render",g],["__file","guide.html.vue"]]);export{x as default};
