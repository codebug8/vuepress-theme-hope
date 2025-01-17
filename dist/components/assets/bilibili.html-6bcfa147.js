import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as l,e,b as a,d as p,f as t}from"./app-08a03a85.js";const d={},r=a("p",null,"在 Markdown 文件中嵌入 B 站视频。",-1),u=a("h2",{id:"案例",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),p(" 案例")],-1),h=a("p",null,"一个 B 站视频:",-1),k=t(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BiliBili</span> <span class="token attr-name">bvid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BV1kt411o7C3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>一个自定义空降地址的 B 站视频:</p>`,2),m=t(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BiliBili</span> <span class="token attr-name">aid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>34304064<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>109293122<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9:16<span class="token punctuation">&quot;</span></span> <span class="token attr-name">time</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span> <span class="token attr-name">page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="bvid" tabindex="-1"><a class="header-anchor" href="#bvid" aria-hidden="true">#</a> bvid</h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>B 站视频 bvid。</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>B 站视频标题</p><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>1</code></li></ul><p>视频分 P。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>设置视频分 P 时，必须提供 <code>aid</code> 和 <code>cid</code>，并且可以忽略 <code>bvid</code> 属性。</p></div><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>B 站组件宽度。</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h3><ul><li>类型: <code>string | number</code></li><li>必填：否</li></ul><p>B 站组件高度</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio" aria-hidden="true">#</a> ratio</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>16 / 9</code></li></ul><p>B 站组件高度宽高比，只有当未指定 <code>height</code> 时有效。</p><h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>0</code></li></ul><p>视频开始时间 (单位: 秒)。</p><h3 id="autoplay" tabindex="-1"><a class="header-anchor" href="#autoplay" aria-hidden="true">#</a> autoplay</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>视频自动播放</p>`,27);function b(g,_){const n=i("BiliBili");return o(),c("div",null,[r,l(" more "),u,h,e(n,{bvid:"BV1kt411o7C3"}),k,e(n,{aid:"34304064",cid:"109293122",ratio:"9:16",time:"60",page:"2"}),m])}const B=s(d,[["render",b],["__file","bilibili.html.vue"]]);export{B as default};
