import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,b as e,d as n,e as t,w as _}from"./app-c3318ec5.js";const a={},p=e("p",null,"此插件从你的 VuePress 站点中删除任何相关的 Service Worker，因此如果你在启用后任何 PWA 插件后移除它们，用户仍然可以获得更新。",-1),u={class:"hint-container tip"},d=e("p",{class:"hint-container-title"},"如果你启用过 PWA，为什么需要这个插件？",-1),h={href:"https://vuejs.press/zh/reference/plugin/pwa.html",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"@vuepress/plugin-pwa",-1),v=e("code",null,"vuepress-plugin-pwa2",-1),m=e("p",null,"但是，如果你删除 PWA 插件，先前的 Service Worker 仍将在那里，但它们永远无法获得更新，因为他们永远无法找到要更新的新 Service Worker。 因此，用户将继续使用你网站的旧版本。",-1),f=e("p",null,"要解决这个问题：",-1),W=e("ol",null,[e("li",null,[e("p",null,"一个新的内容为空的 Service Worker 需要生成在原位置。")]),e("li",null,[e("p",null,"新的 Service Worker 应该尝试删除旧 Service Worker 缓存的内容，然后它应该注销自己。")])],-1);function x(P,S){const r=o("ExternalLinkIcon"),s=o("ProjectLink");return l(),i("div",null,[p,e("div",u,[d,e("p",null,[n("PWA 插件，如 "),e("a",h,[k,t(r)]),n(" 和 "),t(s,{name:"pwa2",path:"/zh/"},{default:_(()=>[v]),_:1}),n(" 将 Service Worker 注册到你的站点，这将缓存你的站点并使其离线可用。")]),m,f,W])])}const A=c(a,[["render",x],["__file","guide.html.vue"]]);export{A as default};