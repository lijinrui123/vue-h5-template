import{_ as s,o as a,c as n,R as l}from"./chunks/framework.6241eaf2.js";const A=JSON.parse('{"title":"多 UI 组件库供选择","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue3/ui.md","filePath":"guide/vue3/ui.md","lastUpdated":1685617392000}'),o={name:"guide/vue3/ui.md"},p=l(`<h1 id="多-ui-组件库供选择" tabindex="-1">多 UI 组件库供选择 <a class="header-anchor" href="#多-ui-组件库供选择" aria-label="Permalink to &quot;多 UI 组件库供选择&quot;">​</a></h1><p>Vite 构建工具，使用 vite-plugin-style-import 和 unplugin-vue-components/vite 实现按需引入。</p><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite-plugin-style-import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unplugin-vue-components/vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre></div><h2 id="使用组件库" tabindex="-1">使用组件库 <a class="header-anchor" href="#使用组件库" aria-label="Permalink to &quot;使用组件库&quot;">​</a></h2><p>nutUI 没有按需加载的 resolvers，style 需要自己配置按需加载</p><p>在 <code>config/vite/plugins/styleImport.ts</code> 设置</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 按需加载样式文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">createStyleImportPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">resolves</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">NutuiResolve</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span></code></pre></div><p>项目在 <code>src/plugins/nutUI.ts</code> 下统一管理组件，用哪个引入哪个，无需在页面里重复引用</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 按需全局引入nutUI组件</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cell</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CellGroup</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@nutui/nutui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> nutUiComponents </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [Button</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Cell</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> CellGroup]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 在main.ts文件中引入</span></span>
<span class="line"><span style="color:#A6ACCD;">nutUiComponents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>vant 和 varlet 可以使用组件按需加载</p><p>在<code>config/vite/plugins/component.ts</code>下</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VueUseComponentsResolver</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VantResolver</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VarletUIResolver</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unplugin-vue-components/resolvers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">resolvers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">VantResolver</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VarletUIResolver</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span></code></pre></div><h2 id="不需要某个组件库" tabindex="-1">不需要某个组件库 <a class="header-anchor" href="#不需要某个组件库" aria-label="Permalink to &quot;不需要某个组件库&quot;">​</a></h2><p>nutUI 需删除<code>src/plugins/nutUI.ts</code>和<code>main.ts</code>文件下的引入</p><p>vant 和 varlet 只需删除对应的 resolvers 即可</p><p>删除后需全局搜索删除不需要的组件，避免报错</p><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h2><ul><li><p><a href="https://nutui.jd.com/#/zh-CN/component/button" target="_blank" rel="noreferrer">nutUI</a></p></li><li><p><a href="https://vant-contrib.gitee.io/vant/#/zh-CN" target="_blank" rel="noreferrer">vant</a></p></li><li><p><a href="https://varlet-varletjs.vercel.app/#/zh-CN/button" target="_blank" rel="noreferrer">varlet</a></p></li></ul>`,19),e=[p];function t(r,c,i,y,D,C){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{A as __pageData,u as default};
