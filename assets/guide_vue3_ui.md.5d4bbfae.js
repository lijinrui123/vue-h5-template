import{_ as s,c as n,o as a,a as p}from"./app.0374baa8.js";const C=JSON.parse('{"title":"\u591A UI \u7EC4\u4EF6\u5E93\u4F9B\u9009\u62E9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u63D2\u4EF6","slug":"\u5B89\u88C5\u63D2\u4EF6"},{"level":2,"title":"\u4F7F\u7528\u7EC4\u4EF6\u5E93","slug":"\u4F7F\u7528\u7EC4\u4EF6\u5E93"},{"level":2,"title":"\u4E0D\u9700\u8981\u67D0\u4E2A\u7EC4\u4EF6\u5E93","slug":"\u4E0D\u9700\u8981\u67D0\u4E2A\u7EC4\u4EF6\u5E93"}],"relativePath":"guide/vue3/ui.md","lastUpdated":1660904971000}'),l={name:"guide/vue3/ui.md"},o=p(`<h1 id="\u591A-ui-\u7EC4\u4EF6\u5E93\u4F9B\u9009\u62E9" tabindex="-1">\u591A UI \u7EC4\u4EF6\u5E93\u4F9B\u9009\u62E9 <a class="header-anchor" href="#\u591A-ui-\u7EC4\u4EF6\u5E93\u4F9B\u9009\u62E9" aria-hidden="true">#</a></h1><p>Vite \u6784\u5EFA\u5DE5\u5177\uFF0C\u4F7F\u7528 vite-plugin-style-import \u548C unplugin-vue-components/vite \u5B9E\u73B0\u6309\u9700\u5F15\u5165\u3002</p><h2 id="\u5B89\u88C5\u63D2\u4EF6" tabindex="-1">\u5B89\u88C5\u63D2\u4EF6 <a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add vite-plugin-style-import -D</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add unplugin-vue-components/vite -D</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528\u7EC4\u4EF6\u5E93" tabindex="-1">\u4F7F\u7528\u7EC4\u4EF6\u5E93 <a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a></h2><p>nutUI \u6CA1\u6709\u6309\u9700\u52A0\u8F7D\u7684 resolvers\uFF0Cstyle \u9700\u8981\u81EA\u5DF1\u914D\u7F6E\u6309\u9700\u52A0\u8F7D</p><p>\u5728 <code>config/vite/plugins/styleImport.ts</code> \u8BBE\u7F6E</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6309\u9700\u52A0\u8F7D\u6837\u5F0F\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">createStyleImportPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">resolves</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">NutuiResolve</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div><p>\u9879\u76EE\u5728 <code>src/plugins/nutUI.ts</code> \u4E0B\u7EDF\u4E00\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u7528\u54EA\u4E2A\u5F15\u5165\u54EA\u4E2A\uFF0C\u65E0\u9700\u5728\u9875\u9762\u91CC\u91CD\u590D\u5F15\u7528</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// \u6309\u9700\u5168\u5C40\u5F15\u5165nutUI\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cell</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CellGroup</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@nutui/nutui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> nutUiComponents </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [Button</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Cell</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CellGroup]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5728main.ts\u6587\u4EF6\u4E2D\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">nutUiComponents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>vant \u548C varlet \u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u6309\u9700\u52A0\u8F7D</p><p>\u5728<code>config/vite/plugins/component.ts</code>\u4E0B</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VueUseComponentsResolver</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VantResolver</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VarletUIResolver</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin-vue-components/resolvers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">resolvers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">VantResolver</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VarletUIResolver</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E0D\u9700\u8981\u67D0\u4E2A\u7EC4\u4EF6\u5E93" tabindex="-1">\u4E0D\u9700\u8981\u67D0\u4E2A\u7EC4\u4EF6\u5E93 <a class="header-anchor" href="#\u4E0D\u9700\u8981\u67D0\u4E2A\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a></h2><p>nutUI \u9700\u5220\u9664<code>src/plugins/nutUI.ts</code>\u548C<code>main.ts</code>\u6587\u4EF6\u4E0B\u7684\u5F15\u5165</p><p>vant \u548C varlet \u53EA\u9700\u5220\u9664\u5BF9\u5E94\u7684 resolvers \u5373\u53EF</p><p>\u5220\u9664\u540E\u9700\u5168\u5C40\u641C\u7D22\u5220\u9664\u4E0D\u9700\u8981\u7684\u7EC4\u4EF6\uFF0C\u907F\u514D\u62A5\u9519</p>`,17),e=[o];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{C as __pageData,u as default};
