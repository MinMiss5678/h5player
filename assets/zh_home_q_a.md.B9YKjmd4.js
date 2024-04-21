import{_ as e}from"./chunks/blockSetCurrentTime.BbfZNUzw.js";import{_ as i,E as t,c as r,J as o,a5 as p,o as s}from"./chunks/framework.gwyxBWs1.js";const c="/assets/bilibili.avc.DRJLxsCM.jpg",n="/assets/kuozhanchengxu.6tRhAXIE.png",h="/assets/tampermonkey.xiangqing.BFJSTdgX.png",d="/assets/unblockSetPlaybackRate.rk5S5bnL.png",m="/assets/allowExperimentFeatures.CBljw2TO.png",T=JSON.parse('{"title":"Q&A","description":"","frontmatter":{},"headers":[],"relativePath":"zh/home/q&a.md","filePath":"zh/home/q&a.md","lastUpdated":1712059366000}'),u={name:"zh/home/q&a.md"},b=p('<h1 id="q-a" tabindex="-1">Q&amp;A <a class="header-anchor" href="#q-a" aria-label="Permalink to &quot;Q&amp;A&quot;">​</a></h1><h2 id="倍速刷课为啥学习进度没变化" tabindex="-1">倍速刷课为啥学习进度没变化 <a class="header-anchor" href="#倍速刷课为啥学习进度没变化" aria-label="Permalink to &quot;倍速刷课为啥学习进度没变化&quot;">​</a></h2><p><code>脚本支持视频倍速，但不是针对刷课时而设计的，所以不要指望使用脚本来刷学习进度</code></p><p>目前大部分学习网站都会有较严谨的学习进度监控逻辑，包括但不限于：</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>倍速检测（发现使用倍速就不记录学习进度）</li><li>后端校验（学习时长跟视频时长有出入就不记录学习进度）</li><li>服务器计时（学习端报告学习状态，服务器计算并记录学习进度）</li><li>日志审核（人工审查核对学习日志，学时严重不符直接通报开除）</li></ul></div><p>罗列这些检测手段只是想告诉你：<code>倍速学习有风险，出了问题不要怪脚本</code></p><p>除去刷课，该脚本还可以用来干很多有用的事情，例如：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>享受一致的视频网站播放控制体验</li><li>电视剧、电影、娱乐节目的倍速快看</li><li>视频课程复习阶段的倍速快学</li><li>网盘音视频文件的倍速播放</li><li>视频旋转平移等画面调整</li><li>网页视频精彩画面截图</li><li>网页视频画中画播放等</li></ul></div><h2 id="百度网盘视频无法倍速播放" tabindex="-1">百度网盘视频无法倍速播放 <a class="header-anchor" href="#百度网盘视频无法倍速播放" aria-label="Permalink to &quot;百度网盘视频无法倍速播放&quot;">​</a></h2><p>这是因为非百度会员使用的非h5标准的播放器进行播放导致的</p><p>建议结合<a href="https://greasyfork.org/zh-CN/scripts/?q=pan.baidu.com" target="_blank" rel="noreferrer">https://greasyfork.org/zh-CN/scripts/?q=pan.baidu.com</a> 其它百度盘脚本使用，即可实现倍速播放</p><p>如果你是百度会员用户，并且结合上面的脚本依然无法进行倍速播放，建议查看下控制台是否报错，并将报错信息反馈给作者</p><h2 id="b站视频无法倍速或者倍速播放卡顿" tabindex="-1">B站视频无法倍速或者倍速播放卡顿 <a class="header-anchor" href="#b站视频无法倍速或者倍速播放卡顿" aria-label="Permalink to &quot;B站视频无法倍速或者倍速播放卡顿&quot;">​</a></h2><p>这是因为B站对H5播放器进行了较多的特殊定制，且使用软解的方式对视频进行解码等原因造成的，如果出现无法倍速或者倍速播放卡顿的情况，请将编码方式切换为AVC：</p><p><img src="'+c+'" alt="blockSetCurrentTime"></p><h2 id="倍速播放卡顿、无进度、音画不同步" tabindex="-1">倍速播放卡顿、无进度、音画不同步 <a class="header-anchor" href="#倍速播放卡顿、无进度、音画不同步" aria-label="Permalink to &quot;倍速播放卡顿、无进度、音画不同步&quot;">​</a></h2><p>一、开启倍速出现播放卡顿的可能原因如下：</p><ul><li>1、电脑性能较差，倍速播放占用了大量CPU、GPU资源导致的卡顿</li><li>2、接入的网络较差，开启倍速后，视频加载速度跟不上播放速度导致的卡顿</li><li>3、视频网站网络带宽有限，传输数据缓慢导致的视频加载卡顿</li><li>4、看的是直播视频，没法加载还没录制进去的数据流，请使用1x速度观看</li></ul><p>二、开启倍速后导致无进度，或者播放进度直接归零、又或者画面一直在某个时间点循环，通常来说这是网站自身不希望你倍速播放导致的</p><p>可尝试开启：<code>禁止默认播放进度控制逻辑</code> 来解决该问题</p><p><img src="'+e+'" alt="blockSetCurrentTime"></p><p>三、开启倍速后视频看起来音画不同步，这通常是由于网站自身将音视频分开加载导致的</p><p>可通过下面的方法减少此类情况的出现：</p><ul><li>1、使用性能较好的电脑和确保网络质量处于较佳的状态</li><li>2、请勿频繁在高倍播放倍速和正常播放倍速里反复切换</li><li>3、尝试调整一下播放进度，可能会触发重新校正音画进度的逻辑</li><li>4、这也可能是视频本身就是音画不同步的，这种情况暂时无解</li></ul><h2 id="如何支持本地视频文件的倍速播放" tabindex="-1">如何支持本地视频文件的倍速播放 <a class="header-anchor" href="#如何支持本地视频文件的倍速播放" aria-label="Permalink to &quot;如何支持本地视频文件的倍速播放&quot;">​</a></h2><p>在浏览器的扩展程序里，找到你的脚本运行插件（如：Tampermonkey），点击<code>详情</code>，然后开启<code>允许访问文件网址</code> 即可，具体图示如下：</p><p><img src="'+n+'" alt="扩展程序"></p><p><img src="'+h+'" alt="插件详情"></p><p>最后将你的本地视频拖放到浏览器里，即可使用插件的快捷键控制视频的播放了</p><h2 id="开启插件后网站自身的调速失效了" tabindex="-1">开启插件后网站自身的调速失效了 <a class="header-anchor" href="#开启插件后网站自身的调速失效了" aria-label="Permalink to &quot;开启插件后网站自身的调速失效了&quot;">​</a></h2><p>这是因为插件接管了默认的调速逻辑，并且禁止了其他逻辑进行调速操作，如果不进行禁用，则会存在多套调速逻辑，这将会导致以下问题：</p><ul><li>默认调速逻辑和插件调速逻辑相互覆盖，插件调了2x的速度，而默认逻辑认为此时应该为1x，最终导致同一个视频下倍速调节不断跳跃变换</li><li>在多个视频的网站下，播放首个视频时调了速，播放下一个视频时又要重新调速</li><li>在不希望你进行调速的网站下，会通过锁定倍速而导致插件无法调速</li><li>安装了其他调速插件，调速逻辑相互被抢占，导致调速结果混乱</li></ul><p>基于以上几点原因，所以插件只能默认全盘接管调速逻辑，从而致使其他调速逻辑失效<br> 如果你希望不要全盘接管，插件也提供了选项：<code>允许默认速度调节逻辑</code></p><p>允许后就可以调速逻辑共存了，当然也免不了会出现上述相关问题，所以<code>不建议允许默认速度调节逻辑</code></p><p><img src="'+d+'" alt="unblockSetPlaybackRate"></p><h2 id="如何开启实验性功能" tabindex="-1">如何开启实验性功能 <a class="header-anchor" href="#如何开启实验性功能" aria-label="Permalink to &quot;如何开启实验性功能&quot;">​</a></h2><p>在有视频媒体的网站下，将会出现如下菜单：</p><p><img src="'+m+'" alt="扩展程序"></p><p>点击菜单即可全局开启实验性功能</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>实验性功能可能造成一些不确定的问题，请谨慎开启。</p></div><h2 id="如何才能使用媒体下载功能" tabindex="-1">如何才能使用媒体下载功能 <a class="header-anchor" href="#如何才能使用媒体下载功能" aria-label="Permalink to &quot;如何才能使用媒体下载功能&quot;">​</a></h2><p>使用媒体下载功能需要具备以下两个条件：</p><ul><li>脚本版本要在 <a href="./changeLog">3.6.1</a> 以上</li><li>需开启实验性功能</li></ul><h2 id="为什么视频跟音频是分开下载的" tabindex="-1">为什么视频跟音频是分开下载的 <a class="header-anchor" href="#为什么视频跟音频是分开下载的" aria-label="Permalink to &quot;为什么视频跟音频是分开下载的&quot;">​</a></h2><p>因为与其它下载脚本不同的是：该脚本下载的是媒体的原始数据流，如果原始数据流是音视频分开的，则下载回来的也是分开的。<br> 这也是为什么该脚本可以下载直播流媒体数据的原因</p><p>由于是下载原始数据流，这意味着你选了什么画质的视频，则下载到的也是对应画质的媒体数据， 所以希望下载高清画质媒体文件的，请选高画质进行播放，播放结束后再下载即可</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：不完全是画质越高越好，这得跟你电脑配置和带宽相匹配才行，否则会出现严重的卡顿和大量的内存占用等情况</p></div><h2 id="如何合并下载到的音视频文件" tabindex="-1">如何合并下载到的音视频文件 <a class="header-anchor" href="#如何合并下载到的音视频文件" aria-label="Permalink to &quot;如何合并下载到的音视频文件&quot;">​</a></h2><p>你可以使用第三方工具进行音视频文件的合并，例如：</p><ul><li><a href="http://www.pcgeshi.com/" target="_blank" rel="noreferrer">格式工厂</a></li><li><a href="https://lv.ulikecam.com/" target="_blank" rel="noreferrer">剪影</a></li><li><a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noreferrer">Adobe Premiere Pro</a></li></ul><p>这些工具都能进行音视频文件的合并，但也存在其缺点和弊端：</p><ul><li>1、需要进行可视化界面操作，效率偏低</li><li>2、需了解转换操作过程和配置相关转换参数</li><li>3、转换过程需要占用较高的CPU和GPU资源</li><li>4、转换后文件体积和画质发生一定的改变</li><li>5、部分工具需付费授权才可使用</li><li>6、部分工具存在广告弹窗等烦人行为</li></ul><p>总的来说，这些第三方工具有其更擅长的领域，如果只是单纯的音视频合并，往往不是那么合适和方便</p><p>为了简化下载好的音视频文件合并过程，作者发布了<a href="https://github.com/xxxily/ffmpeg-script" target="_blank" rel="noreferrer">ffmpeg-script</a>, 该脚本可实现：</p><ul><li>支持批量处理</li><li>不重新编码，快速处理</li><li>自动检测是否存在相关文件</li><li>自动跳过已处理完成的文件</li><li>可随时终止，无需担心出错</li><li>只需一条命令，简单快捷</li></ul><p>具体的使用说明，参见：<a href="https://github.com/xxxily/ffmpeg-script" target="_blank" rel="noreferrer">https://github.com/xxxily/ffmpeg-script</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>脚本是免费、开源、跨平台的，不存在任何限制，可放心食用</p></div><h2 id="为什么视频截图不同网站表现不一致" tabindex="-1">为什么视频截图不同网站表现不一致 <a class="header-anchor" href="#为什么视频截图不同网站表现不一致" aria-label="Permalink to &quot;为什么视频截图不同网站表现不一致&quot;">​</a></h2><p>这是因为受 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noreferrer">CORS</a> 策略的影响，部分视频画面截取后，数据没法被直接下载回来</p><p>当出现CORS受限后，只能通过新开弹窗的方式将画面截取下来，这个时候只能手动对截图结果进行保存或复制了</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果截图后能自动下载保存到本地文件夹，这个时候脚本也会尝试自动将截图写入到你的剪贴板里，从而允许你直接将截图粘贴到聊天窗口或word文档中</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果你按了截图快捷键，既没有自动下载，也没新开窗口，这个时候很有可能是你阻止了新开弹窗，导致截图功能异常，只需要设置允许当前网站的弹窗操作即可</p></div><h2 id="快捷键太多如何禁用不需要的快捷键" tabindex="-1">快捷键太多如何禁用不需要的快捷键 <a class="header-anchor" href="#快捷键太多如何禁用不需要的快捷键" aria-label="Permalink to &quot;快捷键太多如何禁用不需要的快捷键&quot;">​</a></h2><p>非常抱歉，到目前为止插件还未提供禁用快捷键的控制选项，等后续想好了可视化配置方案后会加上，但可能遥遥无期，请不要寄予过高的期望，因为作者空闲时间有限、精力有限……</p><p>如果你非常需要这个功能，而又有一定编程基础，恭喜你，插件是完全开源的，你可以fork一份，加上自己的逻辑即可</p><p>同时补充一句：<code>鄙视那种一言不合，因为没有他们想要的功能就给插件差评的人，鄙视那种不尊重他人辛劳付出，随便恶言相向的人</code></p><br><br><br><br>',70);function k(a,f,_,g,q,x){const l=t("Vssue");return s(),r("div",null,[b,o(l,{title:a.$title},null,8,["title"])])}const C=i(u,[["render",k]]);export{T as __pageData,C as default};
