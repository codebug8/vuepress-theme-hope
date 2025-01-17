import{_ as a,r as d,o as i,c as n,b as e,d as o,e as t,w as r,a as l,f as s}from"./app-2e3f1779.js";const h={},p=e("p",null,"有些时候，你可能不想让你的某些文章被他人复制，或者你想让他人在复制时，自动生成一段版权信息到剪切板中。",-1),u=e("code",null,"vuepress-theme-hope",-1),g=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"相关信息"),e("p",null,[e("code",null,"vuepress-theme-hope"),o(" 将主题选项中的 "),e("code",null,"plugins.copyright"),o(" 作为插件选项提供给 "),e("code",null,"vuepress-plugin-copyright2"),o("。")])],-1),_=s('<h2 id="启用插件" tabindex="-1"><a class="header-anchor" href="#启用插件" aria-hidden="true">#</a> 启用插件</h2><p>由于相当一部分用户将本主题用于构建文档，而文档站点通常不需要附加版权信息，所以此插件并不是默认启用的。</p><div class="hint-container info"><p class="hint-container-title">启用插件</p><p>要想启用此插件，你需要在主题选项中将 <code>plugins.copyright</code> 设置为 <code>true</code> 或是一个对象 (空对象也是可以的) 才能启用它。</p><p>设置为 <code>true</code> 等同于设置 <code>{ global: true }</code>。</p></div><ul><li>当插件的 <code>global</code> 选项不为 <code>true</code> 时，插件全局禁用，你需要在需要的页面的 frontmatter 中设置 <code>copy: true</code> 手动开启。</li><li>设置 <code>global: true</code> 会使其全局生效，并允许在个别页面的 frontmatter 中设置 <code>copy: false</code> 禁用它。</li></ul><p>处于不打扰用户的考虑，默认配置下，仅当用户复制字符长度不小于 <code>100</code> 时，才会触发追加版权信息，如果你希望改变这个触发值，请设置 <code>triggerWords</code>，同时该选项支持在 frontmatter 中通过 <code>copy.triggerWord</code> 单独设置。</p><h2 id="禁用复制和选择" tabindex="-1"><a class="header-anchor" href="#禁用复制和选择" aria-hidden="true">#</a> 禁用复制和选择</h2><ul><li>如果你不希望用户复制你的整个站点或特定页面文字，你可以在主题选项中的 <code>plugins.copyright</code> 或在页面 frontmatter 中设置 <code>disableCopy</code> 来禁用复制，后者具有更高优先级。</li><li>如果你不希望用户选择你的整个站点或特定页面文字，你可以在主题选项中的 <code>plugins.copyright</code> 或在页面 frontmatter 中设置 <code>disableSelection</code> 来禁用选择，后者具有更高优先级。</li></ul><h2 id="版权信息获取" tabindex="-1"><a class="header-anchor" href="#版权信息获取" aria-hidden="true">#</a> 版权信息获取</h2><p>你可以在主题选项中通过 <code>plugins.copyright.author</code> 和 <code>plugins.copyright.license</code> 选项设置作者和协议信息。如果文档的不同部分拥有不同的作者和协议，你可以传入一个使用当前页面对象作为参数的函数 <code>(page: Page) =&gt; string</code> 返回相应信息。</p><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2><p>请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。请复制这段文字粘贴到任意地点查看效果。</p><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2>',12);function f(m,y){const c=d("ProjectLink");return i(),n("div",null,[p,e("p",null,[u,o(" 为应对此场景引入了 "),t(c,{name:"copyright2",path:"/zh/"},{default:r(()=>[o("vuepress-plugin-copyright2")]),_:1}),o("。")]),g,l(" more "),_,e("p",null,[o("关于插件文档，请参见 "),t(c,{name:"copyright2",path:"/zh/"},{default:r(()=>[o("vuepress-plugin-copyright2 文档")]),_:1}),o("。")])])}const v=a(h,[["render",f],["__file","copyright.html.vue"]]);export{v as default};
