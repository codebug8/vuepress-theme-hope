import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as r,d as i,w as a,a as n,b as s}from"./app-1f522f6c.js";const d={},m=n("h2",{id:"install",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),s(" Install")],-1),k=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])])],-1),v=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])])],-1),h=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])])],-1),g=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// your options"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// your options"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h2",{id:"migrating-from-v1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#migrating-from-v1","aria-hidden":"true"},"#"),s(" Migrating from V1")],-1);function x(y,w){const l=c("CodeTabs"),o=c("RouterLink");return p(),r("div",null,[m,i(l,{id:"3",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:a(({value:e,isActive:t})=>[s("pnpm")]),title1:a(({value:e,isActive:t})=>[s("yarn")]),title2:a(({value:e,isActive:t})=>[s("npm")]),tab0:a(({value:e,isActive:t})=>[k]),tab1:a(({value:e,isActive:t})=>[v]),tab2:a(({value:e,isActive:t})=>[h]),_:1}),g,i(l,{id:"17",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[b]),tab1:a(({value:e,isActive:t})=>[_]),_:1}),f,n("p",null,[s("For details, see "),i(o,{to:"/migration.html"},{default:a(()=>[s("Migration Guide")]),_:1}),s(".")])])}const T=u(d,[["render",x],["__file","index.html.vue"]]);export{T as default};