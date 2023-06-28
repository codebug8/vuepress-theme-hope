import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,b as a,d as s,e as p,a as n,f as e}from"./app-08a03a85.js";const r={},d={href:"https://www.vidstack.io/",target:"_blank",rel:"noopener noreferrer"},u=a("div",{class:"hint-container warning"},[a("p",{class:"hint-container-title"},"Note"),a("p",null,"VidStack has some known issues with Vue. So stop using it until we fixed it.")],-1),k=a("h2",{id:"demo",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),s(" Demo")],-1),m=a("p",null,"A video player:",-1),h=e(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VidStack</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>A video player with poster and tracks:</p>`,2),v=e(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VidStack</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>An audio player:</p>`,2),b=e(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VidStack</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/sample.mp3<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>A Sample Audio<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Video source link.</p><h3 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> sources</h3><ul><li><p>Type: <code>VidStackSource[]</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">VidStackSource</span> <span class="token punctuation">{</span>
  src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Required: No</p></li></ul><p>Detailed audio/video source with type.</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Audio/Video title</p><h3 id="poster" tabindex="-1"><a class="header-anchor" href="#poster" aria-hidden="true">#</a> poster</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Video poster (not working with audio)</p><h3 id="alt" tabindex="-1"><a class="header-anchor" href="#alt" aria-hidden="true">#</a> alt</h3><ul><li>Type: <code>string</code></li><li>Default: <code>poster</code></li></ul><p>Video poster alt (not working with audio)</p><h3 id="thumbnails" tabindex="-1"><a class="header-anchor" href="#thumbnails" aria-hidden="true">#</a> thumbnails</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Video thumbnails (not working with audio)</p><h3 id="aspect-ratio" tabindex="-1"><a class="header-anchor" href="#aspect-ratio" aria-hidden="true">#</a> aspect-ratio</h3><ul><li>Type: <code>\${number}/\${number}</code></li><li>Required: No</li></ul><p>Video aspect ratio (not working with audio). E.g.: <code>16/9</code></p>`,23);function g(_,w){const t=o("ExternalLinkIcon");return l(),c("div",null,[a("p",null,[s("Embed "),a("a",d,[s("VidStack"),p(t)]),s(" in Markdown files.")]),u,n(" more "),k,m,n(' <VidStack src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4" /> '),h,n(` <VidStack
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
/> `),v,n(` <VidStack
  src="/sample.mp3"
  title="A Sample Audio"
/> `),b])}const V=i(r,[["render",g],["__file","vidstack.html.vue"]]);export{V as default};
