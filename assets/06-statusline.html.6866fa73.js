import{r as t,o as c,c as l,a as s,b as a,w as u,F as i,d as n,e as p}from"./app.0fab34bf.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const k={},b=s("h1",{id:"statusline",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#statusline","aria-hidden":"true"},"#"),n(" Statusline")],-1),d=s("p",null,[n("LunarVim uses "),s("code",null,"lualine"),n(" as a default statusline.")],-1),m=n("Configuration is same as that of lualine with full support. See "),g={href:"https://github.com/nvim-lualine/lualine.nvim/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},h=n("Lualine README.md"),f=p(`<p>In addition, LunarVim provides predefined styles(layout) and components.</p><h2 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> Style</h2><p>There are three style options LunarVim accepts,</p><ul><li>lvim <blockquote><p>LunarVim&#39;s default layout</p></blockquote></li><li>default <blockquote><p>Lualine&#39;s default layout</p></blockquote></li><li>none <blockquote><p>Empty layout</p></blockquote></li></ul><p>To set style other than <code>&quot;lvim&quot; style</code>,</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span> <span class="token comment">-- or &quot;none&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><br><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>You can use any component that <code>lualine</code> provides and <code>LunarVim</code> provides.</p><p><strong>LunarVim&#39;s components</strong></p><p><code>mode</code>, <code>branch</code>, <code>filename</code>, <code>diff</code>, <code>python_env</code>, <code>diagnostics</code>, <code>treesitter</code>, <code>lsp</code>, <code>location</code>, <code>progress</code>, <code>spaces</code>, <code>encoding</code>, <code>filetype</code>, <code>scrollbar</code></p><p>To set <code>lualine&#39;s &quot;diff&quot;</code> component to section c of <code>&quot;default&quot; style</code>,</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>sections<span class="token punctuation">.</span>lualine_c <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;diff&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>To set <code>LunarVim&#39;s &quot;spaces&quot; and &quot;location&quot;</code> components to section y and <code>lualine&#39;s &quot;mode&quot;</code> component to section a of <code>&quot;lvim&quot; style</code>,</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- no need to set style = &quot;lvim&quot;</span>
<span class="token keyword">local</span> components <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.core.lualine.components&quot;</span><span class="token punctuation">)</span>

lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>sections<span class="token punctuation">.</span>lualine_a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;mode&quot;</span> <span class="token punctuation">}</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>sections<span class="token punctuation">.</span>lualine_y <span class="token operator">=</span> <span class="token punctuation">{</span>
  components<span class="token punctuation">.</span>spaces<span class="token punctuation">,</span>
  components<span class="token punctuation">.</span>location
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><br><h2 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme</h2><p>LunarVim automatically detects current colorscheme and set it as theme.</p>`,18),q=n("To change your colorscheme, see "),v=n("Colorscheme"),_=p(`<p>If there is no matching theme, it will fallback to <code>&quot;auto&quot;</code> theme provided by lualine.</p><p>In case you want to use different theme, set it manually,</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>options<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token string">&quot;gruvbox&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>To customize existing theme,</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> custom_gruvbox <span class="token operator">=</span> require <span class="token string">&quot;lualine.themes.gruvbox_dark&quot;</span>
custom_gruvbox<span class="token punctuation">.</span>insert<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> custom_gruvbox<span class="token punctuation">.</span>insert<span class="token punctuation">.</span>a<span class="token punctuation">.</span>bg<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span>
custom_gruvbox<span class="token punctuation">.</span>visual<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> custom_gruvbox<span class="token punctuation">.</span>visual<span class="token punctuation">.</span>a<span class="token punctuation">.</span>bg<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span>
custom_gruvbox<span class="token punctuation">.</span>replace<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> custom_gruvbox<span class="token punctuation">.</span>replace<span class="token punctuation">.</span>a<span class="token punctuation">.</span>bg<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span>
custom_gruvbox<span class="token punctuation">.</span>command<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> custom_gruvbox<span class="token punctuation">.</span>command<span class="token punctuation">.</span>a<span class="token punctuation">.</span>bg<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span>

lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>options<span class="token punctuation">.</span>theme <span class="token operator">=</span> custom_gruvbox
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>To create your own theme,</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> colors <span class="token operator">=</span> <span class="token punctuation">{</span>
  color2 <span class="token operator">=</span> <span class="token string">&quot;#0f1419&quot;</span><span class="token punctuation">,</span>
  color3 <span class="token operator">=</span> <span class="token string">&quot;#ffee99&quot;</span><span class="token punctuation">,</span>
  color4 <span class="token operator">=</span> <span class="token string">&quot;#e6e1cf&quot;</span><span class="token punctuation">,</span>
  color5 <span class="token operator">=</span> <span class="token string">&quot;#14191f&quot;</span><span class="token punctuation">,</span>
  color13 <span class="token operator">=</span> <span class="token string">&quot;#b8cc52&quot;</span><span class="token punctuation">,</span>
  color10 <span class="token operator">=</span> <span class="token string">&quot;#36a3d9&quot;</span><span class="token punctuation">,</span>
  color8 <span class="token operator">=</span> <span class="token string">&quot;#f07178&quot;</span><span class="token punctuation">,</span>
  color9 <span class="token operator">=</span> <span class="token string">&quot;#3e4b59&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>options<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token punctuation">{</span>
  normal <span class="token operator">=</span> <span class="token punctuation">{</span>
    c <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color9<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color2 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    a <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color2<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color10<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color4<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color5 <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  insert <span class="token operator">=</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color2<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color13<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color4<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color5 <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  visual <span class="token operator">=</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color2<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color3<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color4<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color5 <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  replace <span class="token operator">=</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color2<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color8<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color4<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color5 <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  inactive <span class="token operator">=</span> <span class="token punctuation">{</span>
    c <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color4<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color2 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    a <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color4<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color5<span class="token punctuation">,</span> gui <span class="token operator">=</span> <span class="token string">&quot;bold&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span> fg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color4<span class="token punctuation">,</span> bg <span class="token operator">=</span> colors<span class="token punctuation">.</span>color5 <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><br><h2 id="callback" tabindex="-1"><a class="header-anchor" href="#callback" aria-hidden="true">#</a> Callback</h2><p>Callback function is available for more flexibility.</p><p>It will run when configuration is done,</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>lualine<span class="token punctuation">.</span>on_config_done <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>lualine<span class="token punctuation">)</span>
  <span class="token keyword">local</span> config <span class="token operator">=</span> lualine<span class="token punctuation">.</span><span class="token function">get_config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">local</span> components <span class="token operator">=</span> require <span class="token string">&quot;core.lualine.components&quot;</span>

  config<span class="token punctuation">.</span>sections<span class="token punctuation">.</span>lualine_x<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>color<span class="token punctuation">.</span>bg <span class="token operator">=</span> <span class="token string">&quot;#2c2c2c&quot;</span>
  table<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>sections<span class="token punctuation">.</span>lualine_x<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">-- remove treesitter icon</span>
  table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>sections<span class="token punctuation">.</span>lualine_x<span class="token punctuation">,</span> components<span class="token punctuation">.</span>location<span class="token punctuation">)</span>
  lualine<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,12),y=n("If you want to go way beyond with configuration, check "),x={href:"https://github.com/jimcornmell/lvim/blob/main/lua/user/lualine.lua",target:"_blank",rel:"noopener noreferrer"},w=n("jimcornmell's setup"),L=n(" as a reference.");function V(T,E){const o=t("ExternalLinkIcon"),e=t("RouterLink");return c(),l(i,null,[b,d,s("p",null,[m,s("a",g,[h,a(o)])]),f,s("p",null,[q,a(e,{to:"/configuration/03-colorschemes.html"},{default:u(()=>[v]),_:1})]),_,s("p",null,[y,s("a",x,[w,a(o)]),L])],64)}var S=r(k,[["render",V]]);export{S as default};
