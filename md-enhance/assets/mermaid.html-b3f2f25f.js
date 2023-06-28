import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as m,c as v,a as n,b as e,d as s,e as p,w as d,f as a}from"./app-1f522f6c.js";const b={},g={href:"https://mermaid.js.org/",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),e(" 配置")],-1),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 启用 mermaid"),e(`
      mermaid`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" mdEnhancePlugin "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-plugin-md-enhance"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token function"},"mdEnhancePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token comment"},"// 启用 mermaid"),e(`
      `),n("span",{class:"token literal-property property"},"mermaid"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=a('<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">mermaid</span>\n<span class="token code-block language-mermaid language-mermaid">\n&lt;!-- 在此处放置 mermaid 代码 --&gt;\n</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div><p>除了使用 mermaid 代码块，你也可以直接使用以下代码块：</p><ul><li>class: <code>classDiagram</code></li><li>c4c: <code>C4Context</code></li><li>er: <code>erDiagram</code></li><li>gantt: <code>gantt</code></li><li>&quot;git-graph&quot;: <code>gitGraph</code></li><li>journey: <code>journey</code></li><li>mindmap: <code>mindmap</code></li><li>pie: <code>pie</code></li><li>sequence: <code>sequenceDiagram</code></li><li>state: <code>stateDiagram-v2</code></li><li>timeline: <code>timeline</code></li></ul><p>你不需要再声明图表类型，也不需要缩进图表代码。</p><p>当图表支持设置标题时，你可以直接在代码块信息后添加标题:</p>',6),q=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),e(" 使用")],-1),w={href:"https://mermaid.js.org/",target:"_blank",rel:"noopener noreferrer"},A=a(`<h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h2><p>你可以在客户端配置文件中导入并使用 <code>defineMermaidConfig</code> 来自定义 Mermaid 配置:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineMermaidConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineMermaidConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在此设置 mermaid 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><h3 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h3>`,5),x=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mermaid</span>
<span class="token code-block language-mermaid language-mermaid">---
title: Flowchart
---
flowchart TB
    c1--&gt;a2
    subgraph one
    a1--&gt;a2
    end
    subgraph two
    b1--&gt;b2
    end
    subgraph three
    c1--&gt;c2
    end
    one --&gt; two
    three --&gt; two
    two --&gt; c2</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="循序图" tabindex="-1"><a class="header-anchor" href="#循序图" aria-hidden="true">#</a> 循序图</h3>`,2),S=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">sequence Greetings</span>
<span class="token code-block language-sequence language-sequence">Alice -&gt;&gt; Bob: Hello Bob, how are you?
Bob--&gt;&gt;John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long&lt;br/&gt;long time, so long&lt;br/&gt;that the text does&lt;br/&gt;not fit on a row.

Bob--&gt;Alice: Checking with John...
Alice-&gt;John: Yes... John, how are you?</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="类图" tabindex="-1"><a class="header-anchor" href="#类图" aria-hidden="true">#</a> 类图</h3>`,2),D=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">class Animal Example</span>
<span class="token code-block language-class language-class">note &quot;From Duck till Zebra&quot;
Animal &lt;|-- Duck
note for Duck &quot;can fly\\ncan swim\\ncan dive\\ncan help in debugging&quot;
Animal &lt;|-- Fish
Animal &lt;|-- Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Duck{
  +String beakColor
  +swim()
  +quack()
}
class Fish{
  -int sizeInFeet
  -canEat()
}
class Zebra{
  +bool is_wild
  +run()
}</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="状态图" tabindex="-1"><a class="header-anchor" href="#状态图" aria-hidden="true">#</a> 状态图</h3>`,2),B=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">state Check if n is negative</span>
<span class="token code-block language-state language-state">
state if_state &lt;&lt;choice&gt;&gt;
[*] --&gt; IsPositive
IsPositive --&gt; if_state
if_state --&gt; False: if n &lt; 0
if_state --&gt; True : if n &gt;= 0</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div></details><h3 id="关系图" tabindex="-1"><a class="header-anchor" href="#关系图" aria-hidden="true">#</a> 关系图</h3>`,2),C=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">er Er Example</span>
<span class="token code-block language-er language-er">CAR ||--o{ NAMED-DRIVER : allows
CAR {
    string registrationNumber
    string make
    string model
}
PERSON ||--o{ NAMED-DRIVER : is
PERSON {
    string firstName
    string lastName
    int age
}</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="用户日记图" tabindex="-1"><a class="header-anchor" href="#用户日记图" aria-hidden="true">#</a> 用户日记图</h3>`,2),E=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">journey</span>
<span class="token code-block language-journey language-journey">title My working day
section Go to work
  Make tea: 5: Me
  Go upstairs: 3: Me
  Do work: 1: Me, Cat
section Go home
  Go downstairs: 5: Me
  Sit down: 5: Me</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="甘特图" tabindex="-1"><a class="header-anchor" href="#甘特图" aria-hidden="true">#</a> 甘特图</h3>`,2),M=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">gantt</span>
<span class="token code-block language-gantt language-gantt">dateFormat  YYYY-MM-DD
title       Adding GANTT diagram functionality to mermaid
excludes    weekends
%% (\`excludes\` accepts specific dates in YYYY-MM-DD format, days of the week (&quot;sunday&quot;) or &quot;weekends&quot;, but not the word &quot;weekdays&quot;.)

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2              :         des4, after des3, 5d

section Critical tasks
Completed task in the critical line :crit, done, 2014-01-06,24h
Implement parser                    :crit, done, after des1, 2d
Create tests for parser             :crit, active, 3d
Future task in critical line        :crit, 5d
Create tests for renderer           :2d
Add to mermaid                      :1d

section Documentation
Describe gantt syntax               :active, a1, after des1, 3d
Add gantt diagram to demo page      :after a1  , 20h
Add another diagram to demo page    :doc1, after a1  , 48h

section Last section
Describe gantt syntax               :after doc1, 3d
Add gantt diagram to demo page      :20h
Add another diagram to demo page    :48h</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="饼图" tabindex="-1"><a class="header-anchor" href="#饼图" aria-hidden="true">#</a> 饼图</h3>`,2),I=a('<details class="hint-container details"><summary>Code</summary><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">pie</span>\n<span class="token code-block language-pie language-pie">title What Voldemort doesn&#39;t have?\n  &quot;FRIENDS&quot; : 2\n  &quot;FAMILY&quot; : 3\n  &quot;NOSE&quot; : 45</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div></details><h3 id="git-图表" tabindex="-1"><a class="header-anchor" href="#git-图表" aria-hidden="true">#</a> Git 图表</h3>',2),Y=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">git-graph</span>
<span class="token code-block language-git-graph language-git-graph">commit
branch hotfix
checkout hotfix
commit
branch develop
checkout develop
commit id:&quot;ash&quot; tag:&quot;abc&quot;
branch featureB
checkout featureB
commit type:HIGHLIGHT
checkout main
checkout hotfix
commit type:NORMAL
checkout develop
commit type:REVERSE
checkout featureB
commit
checkout main
merge hotfix
checkout featureB
commit
checkout develop
branch featureA
commit
checkout develop
merge hotfix
checkout featureA
commit
checkout featureB
commit
checkout develop
merge featureA
branch release
checkout release
commit
checkout main
commit
checkout release
merge main
checkout develop
merge release</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="c4c-图表" tabindex="-1"><a class="header-anchor" href="#c4c-图表" aria-hidden="true">#</a> C4C 图表</h3>`,2),P=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">c4c</span>
<span class="token code-block language-c4c language-c4c">title System Context diagram for Internet Banking System

Person(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)
Person(customerB, &quot;Banking Customer B&quot;)
Person_Ext(customerC, &quot;Banking Customer C&quot;)
System(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)

Person(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, &lt;br/&gt; with personal bank accounts.&quot;)

Enterprise_Boundary(b1, &quot;BankBoundary&quot;) {

  SystemDb_Ext(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)

  System_Boundary(b2, &quot;BankBoundary2&quot;) {
    System(SystemA, &quot;Banking System A&quot;)
    System(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)
  }

  System_Ext(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)
  SystemDb(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)

  Boundary(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;) {
    SystemQueue(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)
    SystemQueue_Ext(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)
  }
}

BiRel(customerA, SystemAA, &quot;Uses&quot;)
BiRel(SystemAA, SystemE, &quot;Uses&quot;)
Rel(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)
Rel(SystemC, customerA, &quot;Sends e-mails to&quot;)</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图" aria-hidden="true">#</a> 思维导图</h3>`,2),J=a(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mindmap</span>
<span class="token code-block language-mindmap language-mindmap">root((VuePress))
  Out of box
    Default theme
      Navbar
      Sidebar
      Darkmode
    I18n
    Search
      Search
      DocSearch&lt;br /&gt;by algolia
  Customize
    Theme
      (hope)
    Plugins
      (components)
      (md-enhance)
      (photo-swipe)
      (copy-code2)
      (copyright2)
      (feed2)
      (sitemap2)
      (seo2)</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="时间线" tabindex="-1"><a class="header-anchor" href="#时间线" aria-hidden="true">#</a> 时间线</h3>`,2),Q=a(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">timeline</span>
<span class="token code-block language-timeline language-timeline">title Timeline of Industrial Revolution
section 17th-20th century
    Industry 1.0 : Machinery, Water power, Steam &lt;br&gt;power
    Industry 2.0 : Electricity, Internal combustion engine, Mass production
    Industry 3.0 : Electronics, Computers, Automation
section 21st century
    Industry 4.0 : Internet, Robotics, Internet of Things
    Industry 5.0 : Artificial intelligence, Big data,3D printing</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="一个复杂的案例" tabindex="-1"><a class="header-anchor" href="#一个复杂的案例" aria-hidden="true">#</a> 一个复杂的案例</h3>`,2),T=a(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mermaid</span>
<span class="token code-block language-mermaid language-mermaid">graph TB
    sq[Square shape] --&gt; ci((Circle shape))

    subgraph A
        od&gt;Odd shape]-- Two line&lt;br/&gt;edge comment --&gt; ro
        di{Diamond with &lt;br/&gt; line break} -.-&gt; ro(Rounded&lt;br&gt;square&lt;br&gt;shape)
        di==&gt;ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --&gt; od3&gt;Really long text with line break&lt;br&gt;in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle&lt;br&gt;and some odd &lt;br&gt;special characters)) --&gt; f(,.?!+-*ز)

    cyr[Cyrillic]--&gt;cyr2((Circle shape));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange</span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function F(V,z){const o=c("ExternalLinkIcon"),r=c("CodeTabs"),i=c("Mermaid");return m(),v("div",null,[n("p",null,[e("让你的 VuePress 站点中的 Markdown 文件支持 "),n("a",g,[e("mermaid"),s(o)]),e("。")]),p(" more "),k,s(r,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:d(({value:l,isActive:t})=>[e("TS")]),title1:d(({value:l,isActive:t})=>[e("JS")]),tab0:d(({value:l,isActive:t})=>[h]),tab1:d(({value:l,isActive:t})=>[y]),_:1}),f,s(i,{id:"mermaid-85",code:"eJzT1dXlKsksyUm1Uniye/HzBY3PFrS/XDSDCyTOVZxaWJqal5zqkpmYXpSYy6Wg8HLhrqe7+p/O3gdR/LSt9em6nUBxPT09LgD0tyKZ"}),q,n("p",null,[e("详见 "),n("a",w,[e("mermaid 官方文档"),s(o)]),e("。")]),A,s(i,{id:"mermaid-105",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),x,s(i,{id:"mermaid-112",code:"eJxtkL1OxDAQhPs8xdCfQx+hIH4kfgp6Sie3Z1vneIW9UcLbsw7hkBDdaubzeHeMMY0EidThKRNJSK40VWwKfcyURnoM1mU7NcBdDCPB9D3ueejwTDFyHQ/wvMBmwifPtwqqZhR7ZZ8Uq97As1QXVbsg63dkhxfYCY75CPE2ncvVTqwb/7//xkLIwXkBn3ZO3ygRlIBF5ORuhnzd1wESJjqg8K+sUaI0QWgVHJnKJicWnIKGJs3IvLTN5aJ92wdP41mLwhLEbz+3bfvTj9nPfqei6ub+6ecL4yd1lw=="}),S,s(i,{id:"mermaid-119",code:"eJxdkMtOxDAMRff9CqsrEOoPjNggZiqxYMUOISG39WSsOsmQpAzPfyePUpjubo6vr+00TVMFDkIbuDGsUWD3hvooVKVK1Qt6v2VUDnUFYGwgqFtnNWynfoTAIvBIncM6VueA66+myeXfhr11xV73aGAv708mCX9iXdTAr1TUgeQIHAl1k1Js1Dq3ZX9YoTz/j23gik0AVHTGHoKLcaDIDOSWSjL7e9RRXlz+pxoDZZJ/IK//GV+wBHWE460Vm7IiTcdkf9QvE/ZjfnwvAWnvEtCk7Tx/0J1piUJh8fYdhlVPPmye2lkrwP75xDIU4iYz+38AvwSIcw=="}),D,s(i,{id:"mermaid-126",code:"eJxdjrEKwkAQRPv7iqmFBbGU8xpFsLOwE5HjWJPFmEBuzfe7OTWEdLvzZoYhIqeiDW+xrzk9IQ+0kIyWq6gysBsdLmtUPkis+viiYeMcUCSz37+H96nuJHEIxq6rG4gCTvncZSk1mD2F/ZNGppJRP8Ym25qyw2O9xJf+zfjhsDP+AfL5Oro="}),B,s(i,{id:"mermaid-133",code:"eJx1jcEKwjAMhu99irxAX2C34XrwYJUK3iPGEmxXySoK297dFnbZYIGQ5MvP/2utVeYcqAEjYH4Y34FUpYqkY/SCUQEcWgfTpHUawbYn0+nOHW/GQQMYQvoOi2Qss9aQhXsPQp7LiplTbz/xTrL+R3zRhqQHhYLm0hfjrme7E8s1clFsUp8sQ7YYN9YBV5T7DOjrNas/3tBLQA=="}),C,s(i,{id:"mermaid-140",code:"eJxVzD0OgzAMhuG9p/gO0KWqumRtpU6ZegKrWGB+YpQYIW4PBAFifT77rXWIgacbYGItw08YNTYSShS0cuK/iQZ8FaZ5WxDw1DCMyeHl4DnbcjL0yUhicnge/NneHB4r3fEmu3Yr7Y5AoWPYE2f5J5aX3WYBdjXD"}),E,s(i,{id:"mermaid-147",code:"eJyVU01v2zAMvfdXEAYKtIAzxGk2dLkFCToMWHfqZbeqEp0ItaVAorfm34+UP2A3adHqJJt6j4+P5E45ogsAowjvfKgVAfzhM7u/n223HCBLFUJ71sZYt4Mf698PD2Cs2gVVQ9k4TdY7VVk6AnmokWmsYSy+6KoxGAX7D/EZnYn8+/ISrh772CMorfFAEeIBtS2tTloiWDcSAmXSlnPsGMGXQHtMlHCVxcbx3+wafICsT5Pl8NQQOE/tUx9MGxSC7Mv1BeuImITDur/xv42vDxUSGiAVn7u601kZ7zCXG6sucljMi+VsXszm3/LhessMa6b6iydwYVApxBzMsBgxfM/hRvy6a6gJ56HDjaE3OaiSMHQ0X19BF+9AlyMo0zB05MMmWLJaVYlFGvXKDO6IeKn7Z5V1CCv55L4kc8aeLPfM8FMIanQEBxUi5z1zJgyDOnFYCtsE5HEAnggeEZ6Cc0QdQ2/viZcsfCp6iksGnuQJPEYYJplWSRFvwWjMz1XEL4uJs1uvG3FBdVO2xcipnxDS+kE8cujlrWlRbMXYllSeiGjB/R6yJIO1Z392XYGrFqUKAGmN9ENgipdiL2xvAHnQ9ZCyBS9v9+NyfqnIooed+Vg1bQWJ+uMVfEK1aPwPxhRkQQ=="}),M,s(i,{id:"mermaid-154",code:"eJwryEzlUlAoySzJSVUIz0gsUQjLz0lJzc0vKlFIyU8tzlMvUchILEu1BypSUFByC/J09XMJVlKwUjCCijj6evpEggSMIQJ+/sGuIK6JKRcA9yEXxA=="}),I,s(i,{id:"mermaid-161",code:"eJyNUUEOgjAQvPuKhmdww4SACWqCxnspC22klJRi9Pci1bAiFg5NNrMzs5NpKUykacM3hDAlpTD9kGlaM064MoW4vxYc2FV1BiETag43qFSDuQgayETkvkdb7hFDy37KmDfqC6Cm07DFBhizDubRgB/vojjp3xlzJRW1I6hVHo7pPkicGQdeGl7C9BQ6s8wcl6BLmCnNqR0TfDcRLLAXjs3LVyax3sjpHU1DBbQFLELQv1p+F6PIXpp+3jTJh/8EoXrlcg=="}),Y,s(i,{id:"mermaid-168",code:"eJytlMFu2zAMhu99CiKnFMg2rN1xGBDHbrFDgG7pzgXtMIlQWwokeUkw9N1HybKtxN6Gbb3YEP2J/PmL1uLDQklLR3sFYIUtCVYnY6mCEIa1wK3GCjZKw2cOaUkWEpTPQm4De8V7H0gbJadFbayqSM9nMGmhRYjBfMLRObQMqA3YHUHO3AwOwu5g77Ng6WOARaFqac3byfWwQjJWIYnIp+xoO3oxRi883fQwbV5zJ/wXbXr1ZakOpmvBgFXwXdABhGSDKrRCScBc1da1JvR5IzNAuYYKnwn2eKoo9DZsLh2Tm/7Ovo+5fvfpTyZyocz1ttfC0FPC8TXq0zR/H8q1kck1/HBwa06aezObRcbwErlfngoasWhllSYDWJatwoIDXowDh0Z1ZrI9nVFWozRYOIxXZIugv5UUqb+5UH/j5Tv08nAjV8OUz/0IDMh4uAKZNO6bZvV3owvwcqa9N9PNZfamQlGGzK7KI2cWfgY53VIUWhm1sZAdix3KLQHFG9oK7UmFxPEEhQ5SSNFijob+uRVfqXf+9sL5W5eYz7QfotjbLzXVFOTdDeXdgQf+y+azUpHN98Ny969Q7oWf/mQT8ZXK+PKLbpNvhoznG6j/0v9OHTIGuBFZkVybcO7G/2TLx4eLHczFt+/ZFr6mmP4Juk31kg=="}),P,s(i,{id:"mermaid-175",code:"eJxdkD1vwyAQhvf+ihudwaraqUPVpV66tJFSdT/D2aAaDsGRr18f5MSxnY3n4X1PHM567TA8AURmqaq/TNtIKW02RQH8ZAHuoOXjiAANdZgHATHk6OYAvnHfYrzjzmpacoPx37Ge8l8vb/523BFGZebiGhtWV/PeRnj+aE+AQ8+DxTHxmZOws+dp7O/qSZXhQNclALZD7q1P86ViF9iTlzRFinS6Jm/Qq3uvyGBYuE4HO08b++FUq7LS64OMtjeylB2RXnKyQuXDV4q44AVkU2O4"}),J,s(i,{id:"mermaid-182",code:"eJx1kM9qwzAMxu99Cj2AN5p0YzDGoPtz6GGXrrCz46iJwLaCLW/k7ad4HYzAfBKSvp++z0IBPUXcAAiJRzhdGsBnOMS+ZElkPRzxk30R4qibGd1SQXMn41W7lREcRilp1tnyLroZmust3MObdaMS02zgwwommPgLk4F3QRvgoUuPtbEWt1X86vVYIkei8kNUeVQ7jkOnW4sJjIPCjV7JGabEfanm1rTdHxpHctnAM4epKFDLfREOdhWvbbL8l+ym4n78oBg4csdSqb+95QNPmnvIa+1t1e6T0FlzaRpSifc0YHQa5IkG6K1Ys3vRPDpTxuYb3KCNDQ=="}),Q,s(i,{id:"mermaid-189",code:"eJx9UstOwzAQvPcrFiGkFBqQWoREgSAoFy4gATfEYWtvEgvXDrajUiF+iq/hc9jYgUIP+OTHzOzOjiuHTQ0PlwPg5V8e719adAS+xoaeIM8LECrLZsoJ3d8Oh4MEbueJfBGP3bKyuJWyJ+c5PCwtaGXodO4OCpIVgbCLBZkQhZ39IUr1dqVwYY2EpQo1REKkwtwRPr9Dvh8Z2Z1tjSTJgMLHVuMu9vVL7eyscHb8DWZfa1MJRkYmFzs7cGODEgShxgDGQqDXAMokNHQ8lJ1ITbxVxgdCmcDKAzYNS/Fr2brACJB2aVKF6NHKSXFHqPUKtDVVEo8W1+Y6B1wPDayH99PcLA2MK5UhyrdzDqIhJ7oxelUZn8pl2bUxjDjgwLqwOlXkeXq7IG5DdjMtfENCoQZRo0PBgn44jH2W2Wj/fGsv3/386OMVK/c4WzmltRKcZcHn8eZHOElQEBq9v6ISKkdkoGTSdPu4PBr54OwzTbcnk0m/z5dKhno6bl5PNrjWoeEfksjl8T/kw79kjndEqfTvW6l6ycEXT1TpbQ=="}),T])}const U=u(b,[["render",F],["__file","mermaid.html.vue"]]);export{U as default};
