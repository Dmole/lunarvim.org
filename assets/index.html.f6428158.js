import{r as l,o as r,c,a as s,b as e,w as i,F as p,e as t,d as n}from"./app.0fab34bf.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=t(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2><ol><li>Make sure to check that you have a recent Neovim version with <code>luajit</code> support. The output of version information <code>nvim -v</code> should include a line for: <code>LuaJIT</code>.</li><li>Make sure all the dependencies listed in <a href="#manual-install">Manual Install</a> are actually installed on your system.</li></ol><h2 id="unable-to-run-lvim" tabindex="-1"><a class="header-anchor" href="#unable-to-run-lvim" aria-hidden="true">#</a> Unable to run <code>lvim</code></h2><p>Make sure that <code>lvim</code> is available and executable on your path. You can check the results of these commands to verify that</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">which</span> lvim
<span class="token function">stat</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> lvim<span class="token variable">)</span></span>&quot;</span>
<span class="token function">cat</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> lvim<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you get errors with any of the above commands, then you need to either fix that manually or reinstall the binary again.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>lunarvim-repo<span class="token operator">&gt;</span> <span class="token comment"># this will be in \`~/.local/share/lunarvim/lvim\` by default</span>
<span class="token function">bash</span> utils/installer/install_bin.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="getting-errors-after-an-update" tabindex="-1"><a class="header-anchor" href="#getting-errors-after-an-update" aria-hidden="true">#</a> Getting errors after an update</h2><h3 id="cache-issues" tabindex="-1"><a class="header-anchor" href="#cache-issues" aria-hidden="true">#</a> Cache issues</h3>`,10),m=n("This might be the result of old cache files that need to be reset. LunarVim makes use of "),_={href:"https://github.com/lewis6991/impatient.nvim",target:"_blank",rel:"noopener noreferrer"},g=n("impatients's"),b=n(" to optimize the startup procedure and deliver a snappy experience."),k=s("ol",null,[s("li",null,[n("while running LunarVim: "),s("code",null,":LvimCacheReset")]),s("li",null,[n("from the CLI: "),s("code",null,"lvim +LvimCacheReset")])],-1),v=s("h3",{id:"plugin-issue",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#plugin-issue","aria-hidden":"true"},"#"),n(" Plugin issue")],-1),f=n("Another common reason for such errors is due to Packer being unable to fully restore a snapshot. This could be due to multiple reasons, but mostl commonly it's a breaking change in some plugin, or "),y=s("code",null,"git",-1),x=n(" refusing to pull an update to a plugin because it "),I={href:"https://blog.sffc.xyz/post/185195398930/why-you-should-use-git-pull-ff-only-git-is-a",target:"_blank",rel:"noopener noreferrer"},w=n("can't safely fast-forward the current branch"),L=n("."),R=n("The easiest way to solve this is to manually update (a rebase is likely required) the offending plugin, which should be located in "),q={href:"https://github.com/wbthomason/packer.nvim/blob/4dedd3b08f8c6e3f84afbce0c23b66320cd2a8f2/doc/packer.txt#L199",target:"_blank",rel:"noopener noreferrer"},M=n("Packer's package-root"),N=n(" at "),U=s("code",null,"$LUNARVIM_RUNTIME_DIR/site/pack/packer",-1),V=n("."),T=t(`<p>Let&#39;s say it&#39;s <code>nvim-cmp</code> for example</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span><span class="token operator">!</span> git <span class="token operator">-</span>C <span class="token string">&quot;$LUNARVIM_RUNTIME_DIR/site/pack/packer/start/nvim-cmp&quot;</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>now check which commit is currently checked out</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span><span class="token operator">!</span> git <span class="token operator">-</span>C <span class="token string">&quot;$LUNARVIM_RUNTIME_DIR/site/pack/packer/start/nvim-cmp&quot;</span> log <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>it should match the one in <code>$LUNARVIM_RUNTIME_DIR/lvim/snapshots/default.json</code>, but you can always restore the snapshot with <code>:LvimSyncCorePlugins</code></p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span><span class="token operator">!</span> git <span class="token operator">-</span>C <span class="token string">&quot;$LUNARVIM_RUNTIME_DIR/site/pack/packer/start/nvim-cmp&quot;</span> pull <span class="token operator">-</span><span class="token operator">-</span>rebase
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="packer-failure" tabindex="-1"><a class="header-anchor" href="#packer-failure" aria-hidden="true">#</a> Packer failure</h3><p>if you have not done any changes to any of the plugins, then you can remove Packer&#39;s package root completely.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">LUNARVIM_RUNTIME_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${LUNARVIM_RUNTIME_DIR<span class="token operator">:-</span>$HOME<span class="token operator">/</span>.local<span class="token operator">/</span>share<span class="token operator">/</span>lunarvim}</span>&quot;</span>
<span class="token function">rm</span> -rf <span class="token string">&quot;<span class="token variable">$LUNARVIM_RUNTIME_DIR</span>/site/pack/packer&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>now open <code>lvim</code>, you&#39;ll see a lot of errors about all the plugins missing, but running <code>:LvimSyncCorePlugins</code> should fix them all.</p><h2 id="lunarvim-is-slow" tabindex="-1"><a class="header-anchor" href="#lunarvim-is-slow" aria-hidden="true">#</a> LunarVim is slow!</h2><h3 id="are-you-using-fish" tabindex="-1"><a class="header-anchor" href="#are-you-using-fish" aria-hidden="true">#</a> are you using <code>fish</code>?</h3><blockquote><p>First of all, it is not recommended to set shell to fish in vim. Plenty of vim addons execute fish-incompatible shellscript, so setting it to /bin/sh is typically better, especially if you have no good reason to set it to fish.</p></blockquote><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>shell <span class="token operator">=</span> <span class="token string">&quot;/bin/sh&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14),A=n("See "),E={href:"https://github.com/fish-shell/fish-shell/issues/7004",target:"_blank",rel:"noopener noreferrer"},C=n("fish-shell/fish-shell#7004"),$=n(" and "),D=s("code",null,":h 'shell'",-1),P=n(" for more info."),F=t('<h2 id="language-server-xxx-does-not-start-for-me" tabindex="-1"><a class="header-anchor" href="#language-server-xxx-does-not-start-for-me" aria-hidden="true">#</a> Language server XXX does not start for me!</h2><h3 id="update-node" tabindex="-1"><a class="header-anchor" href="#update-node" aria-hidden="true">#</a> Update node</h3><p>Some language servers depend on newer versions of node. Update your version of node to the latest.</p><h3 id="is-it-overriden" tabindex="-1"><a class="header-anchor" href="#is-it-overriden" aria-hidden="true">#</a> is it overriden?</h3>',4),S=n("This could be due to the fact that the server is "),j=n("overridden"),B=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">--- is it in this list?</span>
<span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If that&#39;s the case, then you need to either remove it from that list and re-run <code>:LvimCacheReset</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span><span class="token function">tbl_map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>
  <span class="token keyword">return</span> server <span class="token operator">~=</span> <span class="token string">&quot;emmet_ls&quot;</span>
<span class="token keyword">end</span><span class="token punctuation">,</span> lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),X=n("or set it up "),z=n("manually"),G=n("."),H={id:"is-it-supported-by-nvim-lsp-installer",tabindex:"-1"},J=s("a",{class:"header-anchor",href:"#is-it-supported-by-nvim-lsp-installer","aria-hidden":"true"},"#",-1),O=n(" is it supported by "),W={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},Y=n("nvim-lsp-installer"),K=n("?"),Q=s("p",null,[n("Any server that does not show up in "),s("code",null,"LspInstallInfo"),n(" needs to be installed manually.")],-1),Z=s("h3",{id:"is-it-at-least-showing-up-in-lspinfo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#is-it-at-least-showing-up-in-lspinfo","aria-hidden":"true"},"#"),n(" is it at least showing up in "),s("code",null,":LspInfo"),n("?")],-1),ss=n("Check out the tips for "),ns={href:"https://github.com/neovim/nvim-lspconfig#debugging",target:"_blank",rel:"noopener noreferrer"},es=n("debugging nvim-lspconfig"),as=n("."),ts=s("h2",{id:"too-many-language-servers-are-starting-at-once",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#too-many-language-servers-are-starting-at-once","aria-hidden":"true"},"#"),n(" Too many language servers are starting at once!")],-1),os=n("Are any of these servers "),is=n("overridden"),ls=n(" by default?"),rs=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>override<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),cs=n("If they are then you are using the syntax prior to "),ps={href:"https://github.com/LunarVim/LunarVim/pull/1813",target:"_blank",rel:"noopener noreferrer"},us=n("LunarVim#1813"),ds=n("."),hs=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- this is the correct syntax since 3dd60bd</span>
vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>override<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;jsonls&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- this the correct syntax since 198577a</span>
vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;jsonls&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="my-lunarvim-looks-ugly" tabindex="-1"><a class="header-anchor" href="#my-lunarvim-looks-ugly" aria-hidden="true">#</a> My LunarVim looks ugly!</h2>`,3),ms=s("li",null,[s("p",null,"Make sure that you have a terminal that supports 24-bit colors. If not, you might face some issues regarding the default colorscheme, and other colorschemes."),s("ul",null,[s("li",null,"For a explainer on what 24-bit colors are, and to test if your terminal supports it, we like this usefull repository: https://github.com/termstandard/colors")])],-1),_s=s("p",null,[n("Another issue might be "),s("code",null,"termguicolors"),n(". If this is the case, we advice you to look at the official neovim docs:")],-1),gs=n("What is "),bs=s("code",null,"termguicolors",-1),ks=n("? see "),vs={href:"https://neovim.io/doc/user/options.html#'termguicolors'",target:"_blank",rel:"noopener noreferrer"},fs=n("https://neovim.io/doc/user/options.html#'termguicolors'"),ys=s("li",null,[s("p",null,[n("Another case might be that your "),s("code",null,"$TERM"),n(" variable changes the colors in your terminal.")]),s("ul",null,[s("li",null,[n("For this, we advice you to look and see if anyone else has the same "),s("code",null,"$TERM"),n(" variable as you, and what they did https://github.com/neovim/neovim/issues?q=label%3Atui+color")])])],-1);function xs(Is,ws){const a=l("ExternalLinkIcon"),o=l("RouterLink");return r(),c(p,null,[h,s("p",null,[m,s("a",_,[g,e(a)]),b]),k,v,s("p",null,[f,y,x,s("a",I,[w,e(a)]),L]),s("p",null,[R,s("a",q,[M,e(a)]),N,U,V]),T,s("p",null,[A,s("a",E,[C,e(a)]),$,D,P]),F,s("p",null,[S,e(o,{to:"/languages/#server-override"},{default:i(()=>[j]),_:1})]),B,s("p",null,[X,e(o,{to:"/languages/#server-setup"},{default:i(()=>[z]),_:1}),G]),s("h3",H,[J,O,s("a",W,[Y,e(a)]),K]),Q,Z,s("p",null,[ss,s("a",ns,[es,e(a)]),as]),ts,s("p",null,[os,e(o,{to:"/languages/#server-override"},{default:i(()=>[is]),_:1}),ls]),rs,s("p",null,[cs,s("a",ps,[us,e(a)]),ds]),hs,s("ul",null,[ms,s("li",null,[_s,s("ul",null,[s("li",null,[gs,bs,ks,s("a",vs,[fs,e(a)])])])]),ys])],64)}var qs=u(d,[["render",xs]]);export{qs as default};
