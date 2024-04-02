import{_ as l,c as i,o as a,a5 as e}from"./chunks/framework.fQL-neGn.js";const q=JSON.parse('{"title":"更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"zh/home/changeLog.md","filePath":"zh/home/changeLog.md","lastUpdated":1712059366000}'),r={name:"zh/home/changeLog.md"},h=e('<h1 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to &quot;更新日志&quot;">​</a></h1><h2 id="_4-2-4-2024-03-29" tabindex="-1">4.2.4 [2024/03/29] <a class="header-anchor" href="#_4-2-4-2024-03-29" aria-label="Permalink to &quot;4.2.4 [2024/03/29]&quot;">​</a></h2><ul><li>增加鼠标控制模块的开关配置选项</li><li>增加长按鼠标的生效时间配置选项</li><li>优化默认自定义配置的默认参数选项</li><li>优化调整菜单选项的归类和显示逻辑</li></ul><h2 id="_4-2-3-2024-03-02" tabindex="-1">4.2.3 [2024/03/02] <a class="header-anchor" href="#_4-2-3-2024-03-02" aria-label="Permalink to &quot;4.2.3 [2024/03/02]&quot;">​</a></h2><ul><li>增加鼠标控制模块，预计接下来将完善鼠标控制的能力</li><li>重新定义黑名单的数据结构，增加urls和domains两种全局黑名单</li><li>重构针对某个域名禁用脚本的逻辑，以实现禁用列表配置的自定义编辑</li><li>修改默认推荐配置列表，去掉旧有的不合理的推荐配置</li><li>修正禁用脚本菜单的显隐逻辑，确保任意网站下都能正常开启/禁用脚本</li></ul><h2 id="_4-2-2-2024-02-29" tabindex="-1">4.2.2 [2024/02/29] <a class="header-anchor" href="#_4-2-2-2024-02-29" aria-label="Permalink to &quot;4.2.2 [2024/02/29]&quot;">​</a></h2><ul><li>增加排除URL的配置选项，实现更精细化的配置能力</li><li>将B站首页添加到排除URL中，解决部分人反馈的首页内存严重泄漏问题</li></ul><h2 id="_4-2-1-2024-02-28" tabindex="-1">4.2.1 [2024/02/28] <a class="header-anchor" href="#_4-2-1-2024-02-28" aria-label="Permalink to &quot;4.2.1 [2024/02/28]&quot;">​</a></h2><ul><li>优化禁用逻辑，以实现在单个网站上的脚本彻底禁用</li><li>去掉快捷键禁用脚本逻辑，解决遗留太多干扰逻辑的问题</li><li>优化UI界面部分交互逻辑异常问题</li></ul><h2 id="_4-2-0-2024-02-26" tabindex="-1">4.2.0 [2024/02/26] <a class="header-anchor" href="#_4-2-0-2024-02-26" aria-label="Permalink to &quot;4.2.0 [2024/02/26]&quot;">​</a></h2><ul><li>增加对非油猴插件的支持改进，提升兼容性</li><li>移除推荐模块的循环滚动逻辑，提升用户体验</li><li>修改调整推荐模块的渲染逻辑，弱化显示效果</li><li>增加油猴菜单下禁用UI界面选项的控制逻辑</li><li>优化下载保存逻辑，减少文件名的输入次数</li><li>对下载模块的提示进行国际化改造</li></ul><h2 id="_4-1-0-2024-02-22" tabindex="-1">4.1.0 [2024/02/22] <a class="header-anchor" href="#_4-1-0-2024-02-22" aria-label="Permalink to &quot;4.1.0 [2024/02/22]&quot;">​</a></h2><ul><li>增加主动读取官网配置信息的模块</li><li>增加预防UI渲染死循环的逻辑</li><li>优化UI界面的显示逻辑，降低工具条的干扰性</li><li>调整UI关闭按钮的显示顺序</li><li>修复全局配置写入异常的问题</li><li>修复油管字幕没法正常跟随的问题</li><li>按需声明@antifeature标识</li></ul><h2 id="_4-0-1-2024-02-19" tabindex="-1">4.0.1 [2024/02/19] <a class="header-anchor" href="#_4-0-1-2024-02-19" aria-label="Permalink to &quot;4.0.1 [2024/02/19]&quot;">​</a></h2><ul><li>根据社区规则增加@antifeature，主动叠甲</li><li>解决因出现轮播推荐免费GPT-4而被举报的问题（确实是免费的！）</li><li>暂无计划增加@antifeature标识的一系列“功能”</li><li>但不排除会增加少量的、不影响用户体验的推广链接</li></ul><h2 id="_4-0-0-2024-02-15" tabindex="-1">4.0.0 [2024/02/15] <a class="header-anchor" href="#_4-0-0-2024-02-15" aria-label="Permalink to &quot;4.0.0 [2024/02/15]&quot;">​</a></h2><ul><li>增加可视化UI操作界面，降低使用门槛、提升操作便捷性</li><li>实现了对移动端浏览器下开启调速的支持（使用文档后续更新）</li><li>完善视频下载功能，极大提升更多网站的视频流提取能力</li><li>完善设置选项功能，实现更精细化的配置能力</li><li>优化实验性功能的内存占用和进行了整体的性能调优</li><li>修复了一系列已知问题（但增加了UI界面，也引入了更多潜在的问题）</li></ul><h2 id="_3-7-12-2024-01-19" tabindex="-1">3.7.12 [2024/01/19] <a class="header-anchor" href="#_3-7-12-2024-01-19" aria-label="Permalink to &quot;3.7.12 [2024/01/19]&quot;">​</a></h2><ul><li>修复截图保存的jpg文件过大问题</li><li>修复将截图传递给剪贴板失效的问题</li></ul><h2 id="_3-7-11-2024-01-04" tabindex="-1">3.7.11 [2024/01/04] <a class="header-anchor" href="#_3-7-11-2024-01-04" aria-label="Permalink to &quot;3.7.11 [2024/01/04]&quot;">​</a></h2><ul><li>增加自动跳过油管广告的脚本逻辑</li><li>修复底层快捷键库不支持多窗口对象绑定的问题</li><li>解决iframe嵌套网站下快捷键没法透传的问题</li></ul><h2 id="_3-7-10-2024-01-03" tabindex="-1">3.7.10 [2024/01/03] <a class="header-anchor" href="#_3-7-10-2024-01-03" aria-label="Permalink to &quot;3.7.10 [2024/01/03]&quot;">​</a></h2><ul><li>增加记住历史播放倍速功能</li><li>优化油管播放暂停时进度条的显隐逻辑</li><li>优化debug输出相关逻辑</li></ul><h2 id="_3-7-9-2023-11-03" tabindex="-1">3.7.9 [2023/11/03] <a class="header-anchor" href="#_3-7-9-2023-11-03" aria-label="Permalink to &quot;3.7.9 [2023/11/03]&quot;">​</a></h2><ul><li>解决油管播放、暂停时Loading图标滞留问题</li></ul><h2 id="_3-7-8-2023-06-28" tabindex="-1">3.7.8 [2023/06/28] <a class="header-anchor" href="#_3-7-8-2023-06-28" aria-label="Permalink to &quot;3.7.8 [2023/06/28]&quot;">​</a></h2><ul><li>尝试优化B站的内存占用</li></ul><h2 id="_3-7-7-2023-06-26" tabindex="-1">3.7.7 [2023/06/26] <a class="header-anchor" href="#_3-7-7-2023-06-26" aria-label="Permalink to &quot;3.7.7 [2023/06/26]&quot;">​</a></h2><ul><li>解决高低倍速频繁切换后，音画不同步的问题</li></ul><h2 id="_3-7-6-2023-05-16" tabindex="-1">3.7.6 [2023/05/16] <a class="header-anchor" href="#_3-7-6-2023-05-16" aria-label="Permalink to &quot;3.7.6 [2023/05/16]&quot;">​</a></h2><ul><li>增加全局配置的UI配置界面</li><li>增加对ShadowDOM事件的支持</li><li>修复B站视频比例调整后受到干扰的问题</li></ul><h2 id="_3-7-5-2023-04-21" tabindex="-1">3.7.5 [2023/04/21] <a class="header-anchor" href="#_3-7-5-2023-04-21" aria-label="Permalink to &quot;3.7.5 [2023/04/21]&quot;">​</a></h2><ul><li>解决NewBing下无法正常聊天的问题</li><li>解决无法正常进入文心一言的问题</li><li>解决脚本图标在部分网络下现实异常的问题</li><li>修复快捷键对win和mac兼容的逻辑问题</li></ul><h2 id="_3-7-4-2023-03-31" tabindex="-1">3.7.4 [2023/03/31] <a class="header-anchor" href="#_3-7-4-2023-03-31" aria-label="Permalink to &quot;3.7.4 [2023/03/31]&quot;">​</a></h2><ul><li>增加公益ChatGPT推广</li></ul><h2 id="_3-7-3-2023-03-15" tabindex="-1">3.7.3 [2023/03/15] <a class="header-anchor" href="#_3-7-3-2023-03-15" aria-label="Permalink to &quot;3.7.3 [2023/03/15]&quot;">​</a></h2><ul><li>增加开启/禁用脚本的菜单选项</li><li>更改UA解决百度盘非会员倍速异常问题</li></ul><h2 id="_3-7-2-2023-02-23" tabindex="-1">3.7.2 [2023/02/23] <a class="header-anchor" href="#_3-7-2-2023-02-23" aria-label="Permalink to &quot;3.7.2 [2023/02/23]&quot;">​</a></h2><ul><li>解决百度盘非会员倍速异常问题</li><li>增强倍速调节的抗干扰能力</li></ul><h2 id="_3-7-1-2022-11-29" tabindex="-1">3.7.1 [2022/11/29] <a class="header-anchor" href="#_3-7-1-2022-11-29" aria-label="Permalink to &quot;3.7.1 [2022/11/29]&quot;">​</a></h2><ul><li>增加音量增益的开关菜单选项</li><li>增加跨域控制的开关菜单选项</li><li>完善国际化信息</li></ul><h2 id="_3-7-0-2022-11-25" tabindex="-1">3.7.0 [2022/11/25] <a class="header-anchor" href="#_3-7-0-2022-11-25" aria-label="Permalink to &quot;3.7.0 [2022/11/25]&quot;">​</a></h2><ul><li>实现自定义快捷键能力</li><li>实现自定义配置的能力</li><li>实现自定义任务配置中心的能力</li><li>增加音量增益能力提升音量响度</li><li>增加菜单控制项并优化菜单交互</li><li>移除调试模式减少无用信息输出</li><li>优化快捷键占用和冲突问题</li><li>解决恢复播放倍速异常问题</li><li>移除部分用不到的API和脚本</li></ul><h2 id="_3-6-3-2022-11-18" tabindex="-1">3.6.3 [2022/11/18] <a class="header-anchor" href="#_3-6-3-2022-11-18" aria-label="Permalink to &quot;3.6.3 [2022/11/18]&quot;">​</a></h2><ul><li>提升倍速调节的抗干扰能力</li><li>修复禁止默认进度不生效问题</li><li>修复B站部分地址下一集失效问题</li></ul><h2 id="_3-6-2-2022-11-11" tabindex="-1">3.6.2 [2022/11/11] <a class="header-anchor" href="#_3-6-2-2022-11-11" aria-label="Permalink to &quot;3.6.2 [2022/11/11]&quot;">​</a></h2><ul><li>优化菜单描述</li><li>修复B站HEVC视频控制失效问题</li></ul><h2 id="_3-6-1-2022-11-3" tabindex="-1">3.6.1 [2022/11/3] <a class="header-anchor" href="#_3-6-1-2022-11-3" aria-label="Permalink to &quot;3.6.1 [2022/11/3]&quot;">​</a></h2><ul><li>增加开启/关闭实验性功能选项</li><li>增加对视频流内容的下载能力（实验性功能）</li><li>优化播放进度记录与恢复逻辑</li><li>修复Tampermonkey菜单叠加出现的问题</li></ul><h2 id="_3-6-0-2022-10-23" tabindex="-1">3.6.0 [2022/10/23] <a class="header-anchor" href="#_3-6-0-2022-10-23" aria-label="Permalink to &quot;3.6.0 [2022/10/23]&quot;">​</a></h2><ul><li>重构底层控制逻辑，提升兼容能力</li><li>增加对音频播放的倍速控制支持</li><li>增加对AdGuard扩展的支持</li><li>支持作为单独脚本引入到网页中使用</li><li>逐渐降低对Tampermonkey专有API的依赖</li><li>记录播放进度的逻辑调整</li><li>优化和提升播放实例切换准确率</li><li>修复腾讯视频倍速控制失效问题</li><li>修复内容提示停滞再页面上的问题</li><li>解决播放进度控制没法回到0:00的问题</li><li>解决Tampermonkey出现数字菜单的问题</li></ul><h2 id="_3-5-4-2022-10-9" tabindex="-1">3.5.4 [2022/10/9] <a class="header-anchor" href="#_3-5-4-2022-10-9" aria-label="Permalink to &quot;3.5.4 [2022/10/9]&quot;">​</a></h2><ul><li>增加低版本webkit内核的兼容</li></ul><h2 id="_3-5-3-2022-9-28" tabindex="-1">3.5.3 [2022/9/28] <a class="header-anchor" href="#_3-5-3-2022-9-28" aria-label="Permalink to &quot;3.5.3 [2022/9/28]&quot;">​</a></h2><ul><li>优化数字键调速的双击反应时间</li><li>修复tips频繁出现的问题</li><li>修复对多邻国网站的兼容</li></ul><h2 id="_3-5-2-2022-9-26" tabindex="-1">3.5.2 [2022/9/26] <a class="header-anchor" href="#_3-5-2-2022-9-26" aria-label="Permalink to &quot;3.5.2 [2022/9/26]&quot;">​</a></h2><ul><li>增加倍速跳跃式调节的能力</li><li>解决油管快速调速不生效的问题</li><li>更新脚本文档信息和相关地址</li><li>修复部分网站静音/取消静音失效问题</li></ul><h2 id="_3-5-1-2022-9-24" tabindex="-1">3.5.1 [2022/9/24] <a class="header-anchor" href="#_3-5-1-2022-9-24" aria-label="Permalink to &quot;3.5.1 [2022/9/24]&quot;">​</a></h2><ul><li>增加视频画面平移、缩放、旋转的恢复能力</li><li>优化学堂在线的兼容</li><li>优化debug信息输出</li></ul><h2 id="_3-5-0-2022-9-21" tabindex="-1">3.5.0 [2022/9/21] <a class="header-anchor" href="#_3-5-0-2022-9-21" aria-label="Permalink to &quot;3.5.0 [2022/9/21]&quot;">​</a></h2><ul><li>重构配置选项存储管理逻辑</li><li>增强播放暂停状态切换的容错能力</li><li>提升脚本初始化的成功率</li><li>提升视频实例的检出率</li><li>优化垮TAB控制的快捷键占用情况</li><li>调音幅度从10%改到5%</li><li>画面缩放从10%改到5%</li><li>移除初始化实例时的音量同步逻辑</li><li>移除无用代码精简脚本体积</li><li>修复多个站点的播放控制支持</li></ul><h2 id="_3-4-8-2022-9-13" tabindex="-1">3.4.8 [2022/9/13] <a class="header-anchor" href="#_3-4-8-2022-9-13" aria-label="Permalink to &quot;3.4.8 [2022/9/13]&quot;">​</a></h2><ul><li>暂时回退到3.4.6的代码</li></ul><h2 id="_3-4-7-2022-9-06" tabindex="-1">3.4.7 [2022/9/06] <a class="header-anchor" href="#_3-4-7-2022-9-06" aria-label="Permalink to &quot;3.4.7 [2022/9/06]&quot;">​</a></h2><ul><li>增加记录播放音量的管理逻辑</li><li>实现调速和网站自身的调速相兼容</li><li>增加任务配置中心的可配置选项</li><li>增加开启/关闭增强配置的菜单选项</li><li>增加阻断调整播放进度的检测并进行反阻断</li><li>修复配置项状态管理器的配置项同步异常问题</li></ul><h2 id="_3-4-6-2022-9-04" tabindex="-1">3.4.6 [2022/9/04] <a class="header-anchor" href="#_3-4-6-2022-9-04" aria-label="Permalink to &quot;3.4.6 [2022/9/04]&quot;">​</a></h2><ul><li>增加阻断调速的检测和进行反阻断</li><li>提升多实例视频网站的视频实例切换的准确率</li><li>优化西瓜视频、知乎视频、微博视频的操作体验</li></ul><h2 id="_3-4-5-2022-9-02" tabindex="-1">3.4.5 [2022/9/02] <a class="header-anchor" href="#_3-4-5-2022-9-02" aria-label="Permalink to &quot;3.4.5 [2022/9/02]&quot;">​</a></h2><ul><li>实现将视频截图结果自动写入到剪贴板</li><li>增加任务配置中心可配置项</li><li>增强任务配置中心的容错性</li><li>快捷键调用函数化改造</li><li>优化对netflix的支持</li></ul><h2 id="_3-4-4-2022-8-30" tabindex="-1">3.4.4 [2022/8/30] <a class="header-anchor" href="#_3-4-4-2022-8-30" aria-label="Permalink to &quot;3.4.4 [2022/8/30]&quot;">​</a></h2><ul><li>增加全局播放速率的配置选项</li><li>优化跨域受限页面的倍速记录</li><li>修复自动播放菜单选项无效的问题</li><li>修复知乎视频无法调节音量的问题</li></ul><h2 id="_3-4-3-2022-8-29" tabindex="-1">3.4.3 [2022/8/29] <a class="header-anchor" href="#_3-4-3-2022-8-29" aria-label="Permalink to &quot;3.4.3 [2022/8/29]&quot;">​</a></h2><ul><li>增加对本地视频播放控制支持</li><li>增加对B站的HEVC视频（bwp播放器）的支持</li><li>修复提示DOM可能造成的样式错乱问题</li><li>优化截图时自动暂停的条件判断</li></ul><h2 id="_3-4-2-2022-8-26" tabindex="-1">3.4.2 [2022/8/26] <a class="header-anchor" href="#_3-4-2-2022-8-26" aria-label="Permalink to &quot;3.4.2 [2022/8/26]&quot;">​</a></h2><ul><li>调整截图的交互，实现视频截图的全兼容</li><li>增加视频镜像翻转功能</li><li>优化跨TAB控制逻辑</li><li>优化画中画检测逻辑</li><li>修复画中画因性能策略导致的跨TAB控制失效问题</li></ul><h2 id="_3-4-1-2022-8-22" tabindex="-1">3.4.1 [2022/8/22] <a class="header-anchor" href="#_3-4-1-2022-8-22" aria-label="Permalink to &quot;3.4.1 [2022/8/22]&quot;">​</a></h2><ul><li>提升跨域iframe视频的操控体验</li><li>修复开启/禁用自动播放的菜单功能</li></ul><h2 id="_3-4-0-2022-8-21" tabindex="-1">3.4.0 [2022/8/21] <a class="header-anchor" href="#_3-4-0-2022-8-21" aria-label="Permalink to &quot;3.4.0 [2022/8/21]&quot;">​</a></h2><ul><li>提升脚本初始化的成功率</li><li>增加配置管理脚本逻辑</li><li>调整完善菜单注册逻辑</li><li>增加对douyin.com的兼容</li><li>修复B站稍后观看视频快捷键失效问题</li></ul><h2 id="_3-3-12-2022-8-14" tabindex="-1">3.3.12 [2022/8/14] <a class="header-anchor" href="#_3-3-12-2022-8-14" aria-label="Permalink to &quot;3.3.12 [2022/8/14]&quot;">​</a></h2><ul><li>修复B站空格暂停播放失效问题</li><li>修复B站下一集快捷键失效问题</li></ul><h2 id="_3-3-11-2022-8-14" tabindex="-1">3.3.11 [2022/8/14] <a class="header-anchor" href="#_3-3-11-2022-8-14" aria-label="Permalink to &quot;3.3.11 [2022/8/14]&quot;">​</a></h2><ul><li>修复B站网页全屏和全屏快捷键失效问题</li></ul><h2 id="_3-3-10-2022-5-10" tabindex="-1">3.3.10 [2022/5/10] <a class="header-anchor" href="#_3-3-10-2022-5-10" aria-label="Permalink to &quot;3.3.10 [2022/5/10]&quot;">​</a></h2><ul><li>优化部分底层库的功能和兼容</li></ul><h2 id="_3-3-9-2021-6-6" tabindex="-1">3.3.9 [2021/6/6] <a class="header-anchor" href="#_3-3-9-2021-6-6" aria-label="Permalink to &quot;3.3.9 [2021/6/6]&quot;">​</a></h2><ul><li>修复自多视频同时自动播放问题</li><li>增加禁用初始化播放逻辑的按钮</li></ul><h2 id="_3-3-8-2021-6-6" tabindex="-1">3.3.8 [2021/6/6] <a class="header-anchor" href="#_3-3-8-2021-6-6" aria-label="Permalink to &quot;3.3.8 [2021/6/6]&quot;">​</a></h2><ul><li>优化跟其它插件兼容性</li><li>解决初始化异常后脚本失效的问题</li></ul><h2 id="_3-3-7-2021-5-30" tabindex="-1">3.3.7 [2021/5/30] <a class="header-anchor" href="#_3-3-7-2021-5-30" aria-label="Permalink to &quot;3.3.7 [2021/5/30]&quot;">​</a></h2><ul><li>增加B站视频自动播放</li><li>优化百度盘、西瓜视频等网站的网页全屏功能</li><li>修复部分脚本逻辑错误</li></ul><h2 id="_3-3-6-2021-5-27" tabindex="-1">3.3.6 [2021/5/27] <a class="header-anchor" href="#_3-3-6-2021-5-27" aria-label="Permalink to &quot;3.3.6 [2021/5/27]&quot;">​</a></h2><ul><li>修复B站切换视频后调速无提示问题</li><li>修复国内环境下图标资源加载异常问题</li><li>修复百度网盘非VIP会员的视频播放倍速无效问题</li><li>解决百度非vip用户播放视频前进行调速死循环问题</li></ul><h2 id="_3-3-5-2021-5-26" tabindex="-1">3.3.5 [2021/5/26] <a class="header-anchor" href="#_3-3-5-2021-5-26" aria-label="Permalink to &quot;3.3.5 [2021/5/26]&quot;">​</a></h2><ul><li>实现主流视频网站的广告倍速播放</li><li>重构部分核心脚本库逻辑</li><li>优化脚本性能，提升脚本兼容性</li></ul><h2 id="_3-3-4-2021-5-25" tabindex="-1">3.3.4 [2021/5/25] <a class="header-anchor" href="#_3-3-4-2021-5-25" aria-label="Permalink to &quot;3.3.4 [2021/5/25]&quot;">​</a></h2><ul><li>降低hookJs性能对其他网站的影响（临时方案）</li></ul><h2 id="_3-3-3-2021-5-20" tabindex="-1">3.3.3 [2021/5/20] <a class="header-anchor" href="#_3-3-3-2021-5-20" aria-label="Permalink to &quot;3.3.3 [2021/5/20]&quot;">​</a></h2><ul><li>修复百度网盘非VIP会员的视频播放倍速无效问题</li></ul><h2 id="_3-3-2-2021-5-19" tabindex="-1">3.3.2 [2021/5/19] <a class="header-anchor" href="#_3-3-2-2021-5-19" aria-label="Permalink to &quot;3.3.2 [2021/5/19]&quot;">​</a></h2><ul><li>修复对百度网盘等网站的支持</li></ul><h2 id="_3-3-1-2020-9-3" tabindex="-1">3.3.1 [2020/9/3] <a class="header-anchor" href="#_3-3-1-2020-9-3" aria-label="Permalink to &quot;3.3.1 [2020/9/3]&quot;">​</a></h2><ul><li>解决B站黑屏问题</li></ul><h2 id="_3-3-0-2020-4-24" tabindex="-1">3.3.0 [2020/4/24] <a class="header-anchor" href="#_3-3-0-2020-4-24" aria-label="Permalink to &quot;3.3.0 [2020/4/24]&quot;">​</a></h2><ul><li>提示界面支持国际化</li><li>优化B站和油管的部分操作体验</li><li>优化部分其他反馈的问题</li></ul><h2 id="_3-2-8-2020-4-12" tabindex="-1">3.2.8 [2020/4/12] <a class="header-anchor" href="#_3-2-8-2020-4-12" aria-label="Permalink to &quot;3.2.8 [2020/4/12]&quot;">​</a></h2><ul><li>增加调试辅助逻辑实现热更新调试</li><li>引入UI相关依赖，准备进行UI界面开发</li><li>解决部分网站兼容异常问题</li></ul><h2 id="_3-2-7-2020-4-11" tabindex="-1">3.2.7 [2020/4/11] <a class="header-anchor" href="#_3-2-7-2020-4-11" aria-label="Permalink to &quot;3.2.7 [2020/4/11]&quot;">​</a></h2><ul><li>修复脚本报错导致的网站页面异常</li></ul><h2 id="_3-2-6-2020-4-11" tabindex="-1">3.2.6 [2020/4/11] <a class="header-anchor" href="#_3-2-6-2020-4-11" aria-label="Permalink to &quot;3.2.6 [2020/4/11]&quot;">​</a></h2><ul><li>修复跨域截图导致的多个网站报错问题</li></ul><h2 id="_3-2-5-2020-4-10" tabindex="-1">3.2.5 [2020/4/10] <a class="header-anchor" href="#_3-2-5-2020-4-10" aria-label="Permalink to &quot;3.2.5 [2020/4/10]&quot;">​</a></h2><ul><li>修正部分网站兼容问题</li></ul><h2 id="_3-2-4-2020-4-9" tabindex="-1">3.2.4 [2020/4/9] <a class="header-anchor" href="#_3-2-4-2020-4-9" aria-label="Permalink to &quot;3.2.4 [2020/4/9]&quot;">​</a></h2><ul><li>支持跨域截图</li><li>支持对特定事件进行挂起（增强抗干扰能力）</li><li>音量调节步长逻辑优化</li></ul><h2 id="_3-2-3-2020-4-5" tabindex="-1">3.2.3 [2020/4/5] <a class="header-anchor" href="#_3-2-3-2020-4-5" aria-label="Permalink to &quot;3.2.3 [2020/4/5]&quot;">​</a></h2><ul><li>支持多语言</li></ul><h2 id="_3-2-2-2020-4-4" tabindex="-1">3.2.2 [2020/4/4] <a class="header-anchor" href="#_3-2-2-2020-4-4" aria-label="Permalink to &quot;3.2.2 [2020/4/4]&quot;">​</a></h2><ul><li>增加facebook全屏快捷键的兼容</li><li>增加快进快退，音量快升快降（ctrl+上下左右箭头）</li><li>修复旋转功能BUG</li></ul><h2 id="_3-2-1-2019-12-21" tabindex="-1">3.2.1 [2019/12/21] <a class="header-anchor" href="#_3-2-1-2019-12-21" aria-label="Permalink to &quot;3.2.1 [2019/12/21]&quot;">​</a></h2><ul><li>自动恢复设置调整为按域名进行控制</li><li>增加对A站的兼容，取消B站的自动播放</li><li>其它功能的部分细节优化</li></ul><h2 id="_3-2-0-2019-11-22" tabindex="-1">3.2.0 [2019/11/22] <a class="header-anchor" href="#_3-2-0-2019-11-22" aria-label="Permalink to &quot;3.2.0 [2019/11/22]&quot;">​</a></h2><ul><li>增加跨Tab操作画中画视频功能</li></ul><h2 id="_3-1-2-2019-11-20" tabindex="-1">3.1.2 [2019/11/20] <a class="header-anchor" href="#_3-1-2-2019-11-20" aria-label="Permalink to &quot;3.1.2 [2019/11/20]&quot;">​</a></h2><ul><li>修复火狐下滤镜不兼容导致黑屏的BUG</li><li>部分网站增加一键播放下一个视频功能</li><li>增强部分网站的兼容</li></ul><h2 id="_3-1-1-2019-11-5" tabindex="-1">3.1.1 [2019/11/5] <a class="header-anchor" href="#_3-1-1-2019-11-5" aria-label="Permalink to &quot;3.1.1 [2019/11/5]&quot;">​</a></h2><ul><li>增加部分网站兼容</li><li>优化提示父节点获取逻辑</li></ul><h2 id="_3-1-0-2019-10-24" tabindex="-1">3.1.0 [2019/10/24] <a class="header-anchor" href="#_3-1-0-2019-10-24" aria-label="Permalink to &quot;3.1.0 [2019/10/24]&quot;">​</a></h2><ul><li>增加自动恢复播放进度的控制选项</li><li>修复部分网站tips无法正常显示BUG</li></ul><h2 id="_3-0-5-2019-10-14" tabindex="-1">3.0.5 [2019/10/14] <a class="header-anchor" href="#_3-0-5-2019-10-14" aria-label="Permalink to &quot;3.0.5 [2019/10/14]&quot;">​</a></h2><ul><li>增加mac快捷键兼容</li><li>优化部分代码逻辑</li></ul><h2 id="_3-0-4-2019-10-11" tabindex="-1">3.0.4 [2019/10/11] <a class="header-anchor" href="#_3-0-4-2019-10-11" aria-label="Permalink to &quot;3.0.4 [2019/10/11]&quot;">​</a></h2><ul><li>增强提示样式在不同网站下的兼容</li><li>优化获取video包裹节点的方法</li></ul><h2 id="_3-0-3-2019-10-9" tabindex="-1">3.0.3 [2019/10/9] <a class="header-anchor" href="#_3-0-3-2019-10-9" aria-label="Permalink to &quot;3.0.3 [2019/10/9]&quot;">​</a></h2><ul><li>解决tips引起的样式混乱BUG</li><li>优化获取video包裹节点的方法</li><li>增加MouseObserver模块</li></ul><h2 id="_3-0-2-2019-9-27" tabindex="-1">3.0.2 [2019/9/27] <a class="header-anchor" href="#_3-0-2-2019-9-27" aria-label="Permalink to &quot;3.0.2 [2019/9/27]&quot;">​</a></h2><ul><li>修复任务配置中心失效问题</li><li>优化操作提示样式降低干扰</li><li>优化截图保存文件大小</li><li>增加部分网站兼容</li></ul><h2 id="_3-0-1-2019-9-25" tabindex="-1">3.0.1 [2019/9/25] <a class="header-anchor" href="#_3-0-1-2019-9-25" aria-label="Permalink to &quot;3.0.1 [2019/9/25]&quot;">​</a></h2><ul><li>修复截图时文件连结过长截图下载失败BUG</li><li>增加ico图标</li></ul><h2 id="_3-0-0-2019-9-22" tabindex="-1">3.0.0 [2019/9/22] <a class="header-anchor" href="#_3-0-0-2019-9-22" aria-label="Permalink to &quot;3.0.0 [2019/9/22]&quot;">​</a></h2><ul><li>支持视频画面截图</li><li>支持快捷键跨域控制</li><li>增加更多实用模块，便于后续开发</li></ul><h2 id="_2-6-1-2019-9-19" tabindex="-1">2.6.1 [2019/9/19] <a class="header-anchor" href="#_2-6-1-2019-9-19" aria-label="Permalink to &quot;2.6.1 [2019/9/19]&quot;">​</a></h2><ul><li>移除统计功能</li><li>兼容跨域iframe下播放</li></ul><h2 id="_2-6-0-2019-9-18" tabindex="-1">2.6.0 [2019/9/18] <a class="header-anchor" href="#_2-6-0-2019-9-18" aria-label="Permalink to &quot;2.6.0 [2019/9/18]&quot;">​</a></h2><ul><li>增加还原播放速度功能</li><li>增加Esc退出网页全屏</li><li>代码逻辑模块化</li></ul><h2 id="_2-5-1-2019-9-11" tabindex="-1">2.5.1 [2019/9/11] <a class="header-anchor" href="#_2-5-1-2019-9-11" aria-label="Permalink to &quot;2.5.1 [2019/9/11]&quot;">​</a></h2><ul><li>修复快捷键过度占用BUG</li></ul><h2 id="_2-5-0-2019-9-11" tabindex="-1">2.5.0 [2019/9/11] <a class="header-anchor" href="#_2-5-0-2019-9-11" aria-label="Permalink to &quot;2.5.0 [2019/9/11]&quot;">​</a></h2><ul><li>增加画面移动功能</li><li>任务配置中心增加自定义初始化方法</li><li>屏蔽部分网站水印</li><li>屏蔽iqiyi暂停广告</li><li>兼容百度云盘全屏快捷键</li><li>修复若干BUG</li></ul><h2 id="_2-4-1-2019-8-30" tabindex="-1">2.4.1 [2019/8/30] <a class="header-anchor" href="#_2-4-1-2019-8-30" aria-label="Permalink to &quot;2.4.1 [2019/8/30]&quot;">​</a></h2><ul><li>兼容腾讯视频倍速播放</li><li>增加画中画功能</li><li>增加快捷键自定义功能</li></ul><h2 id="_2-3-3-2019-8-30" tabindex="-1">2.3.3 [2019/8/30] <a class="header-anchor" href="#_2-3-3-2019-8-30" aria-label="Permalink to &quot;2.3.3 [2019/8/30]&quot;">​</a></h2><ul><li>兼容腾讯视频快捷键操作</li><li>增加画中画功能</li><li>增加快捷键自定义功能</li></ul><h2 id="_2-3-2-2019-6-15" tabindex="-1">2.3.2 [2019/6/15] <a class="header-anchor" href="#_2-3-2-2019-6-15" aria-label="Permalink to &quot;2.3.2 [2019/6/15]&quot;">​</a></h2><ul><li>兼容网易公开课网页</li><li>修复亮度、对比度、饱和度非线性调节BUG</li><li>优化快进快退等其它细节</li></ul><h2 id="_2-3-0-2019-5-5" tabindex="-1">2.3.0 [2019/5/5] <a class="header-anchor" href="#_2-3-0-2019-5-5" aria-label="Permalink to &quot;2.3.0 [2019/5/5]&quot;">​</a></h2><ul><li>增加默认的全屏逻辑</li><li>增加默认网页全屏逻辑</li><li>修复其它相关BUG</li></ul><h2 id="_2-2-0-2019-4-21" tabindex="-1">2.2.0 [2019/4/21] <a class="header-anchor" href="#_2-2-0-2019-4-21" aria-label="Permalink to &quot;2.2.0 [2019/4/21]&quot;">​</a></h2><ul><li>重构任务配置中心代码逻辑</li><li>修正B站下暂停播放的兼容逻辑</li><li>增加对B站直播的兼容</li><li>修复其它相关BUG</li></ul><h2 id="_2-1-0-2019-4-18" tabindex="-1">2.1.0 [2019/4/18] <a class="header-anchor" href="#_2-1-0-2019-4-18" aria-label="Permalink to &quot;2.1.0 [2019/4/18]&quot;">​</a></h2><ul><li>实现任务配置中心（TCC）</li><li>通过任务配置中心增加某些网站的全屏，网页全屏播放快捷键</li><li>修正多实例下不能同步播放速度的问题</li><li>优化提示样式</li><li>修复其它相关BUG</li></ul><h2 id="_2-0-0-2019-4-15" tabindex="-1">2.0.0 [2019/4/15] <a class="header-anchor" href="#_2-0-0-2019-4-15" aria-label="Permalink to &quot;2.0.0 [2019/4/15]&quot;">​</a></h2><ul><li>解锁shadowdom下的video组件</li><li>支持多实例环境</li><li>大幅度优化性能，使用更快的侦听方式</li><li>代码重构和提炼</li><li>修复其它相关BUG</li></ul><h2 id="_1-3-0-2019-4-13" tabindex="-1">1.3.0 [2019/4/13] <a class="header-anchor" href="#_1-3-0-2019-4-13" aria-label="Permalink to &quot;1.3.0 [2019/4/13]&quot;">​</a></h2><ul><li>增加恢复播放进度功能</li><li>增加记录播放速度功能</li><li>增加禁用插件快捷功能（Ctrl+space）</li><li>快捷键变成全局可用，增强兼容</li><li>修复其它相关BUG</li></ul><h2 id="_1-2-0-2019-4-12" tabindex="-1">1.2.0 [2019/4/12] <a class="header-anchor" href="#_1-2-0-2019-4-12" aria-label="Permalink to &quot;1.2.0 [2019/4/12]&quot;">​</a></h2><ul><li>增加缩放视频画面大小功能</li><li>增加对netflix网站的支持</li><li>全面调整代码结构</li><li>修正部分兼容性问题和相关BUG</li><li>脚本代码工程化，代码遵循js standard 规范</li><li>完善文档说明</li></ul><h2 id="_1-1-2-2019-4-11" tabindex="-1">1.1.2 [2019/4/11] <a class="header-anchor" href="#_1-1-2-2019-4-11" aria-label="Permalink to &quot;1.1.2 [2019/4/11]&quot;">​</a></h2><ul><li>接坑，梳理代码</li><li>优化调整部分代码</li></ul>',169),t=[h];function o(u,n,d,s,c,_){return a(),i("div",null,t)}const m=l(r,[["render",o]]);export{q as __pageData,m as default};
