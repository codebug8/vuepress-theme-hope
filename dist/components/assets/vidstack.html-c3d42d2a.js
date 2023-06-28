import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as o,b as a,d as s,e as p,a as n,f as e}from"./app-08a03a85.js";const r={},d=a("div",{class:"hint-container warning"},[a("p",{class:"hint-container-title"},"注意"),a("p",null,"VidStack 有一些和 Vue 渲染的已知问题。")],-1),u={href:"https://www.vidstack.io/",target:"_blank",rel:"noopener noreferrer"},k=a("h2",{id:"示例",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),s(" 示例")],-1),m=a("p",null,"视频播放器:",-1),v=e(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VidStack</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>有封面和音轨的播放器:</p>`,2),h=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VidStack</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VidStack video<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/poster.svg<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:tracks</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
    {
      default: true,
      src: &#39;/en.vtt&#39;,
      kind: &#39;subtitles&#39;,
      label: &#39;English&#39;,
      srcLang: &#39;en&#39;,
    },
    {
      src: &#39;//fr.vtt&#39;,
      kind: &#39;subtitles&#39;,
      label: &#39;French&#39;,
      srcLang: &#39;fr&#39;,
    },
  ]<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个音频播放器:</p>`,2),b=e(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VidStack</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/sample.mp3<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>A Sample Audio<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>视频源链接。</p><h3 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> sources</h3><ul><li><p>类型: <code>VidStackSource[]</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VidStackSource</span> <span class="token punctuation">{</span>
  src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>必填: 否</p></li></ul><p>带有类型的详细音频/视频源。</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>音频/视频标题</p><h3 id="poster" tabindex="-1"><a class="header-anchor" href="#poster" aria-hidden="true">#</a> poster</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>视频封面 (不适用于音频)</p><h3 id="alt" tabindex="-1"><a class="header-anchor" href="#alt" aria-hidden="true">#</a> alt</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>poster</code></li></ul><p>视频封面替代文字 (不适用于音频)</p><h3 id="thumbnails" tabindex="-1"><a class="header-anchor" href="#thumbnails" aria-hidden="true">#</a> thumbnails</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>视频缩略图 (不适用于音频)</p><h3 id="aspect-ratio" tabindex="-1"><a class="header-anchor" href="#aspect-ratio" aria-hidden="true">#</a> aspect-ratio</h3><ul><li>类型: <code>\${number}/\${number}</code></li><li>必填: 否</li></ul><p>视频宽高比 (不适用于音频)。例如: <code>16/9</code></p>`,23);function g(_,f){const t=l("ExternalLinkIcon");return c(),o("div",null,[d,a("p",null,[s("在 Markdown 文件中嵌入 "),a("a",u,[s("VidStack"),p(t)]),s("。")]),n(" more "),k,m,n(' <VidStack src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4" /> '),v,n(` <VidStack
  src="https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm"
  title="VidStack video"
  poster="/poster.svg"
  :tracks="[
    {
      default: true,
      src: '/en.vtt',
      kind: 'subtitles',
      label: 'English',
      srcLang: 'en',
    },
    {
      src: '//fr.vtt',
      kind: 'subtitles',
      label: 'French',
      srcLang: 'fr',
    },
  ]"
/> `),h,n(` <VidStack
  src="/sample.mp3"
  title="A Sample Audio"
/> `),b])}const S=i(r,[["render",g],["__file","vidstack.html.vue"]]);export{S as default};
