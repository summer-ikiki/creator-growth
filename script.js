const refreshIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const metaDescription = document.querySelector('meta[name="description"]');
const initialMeta = {
  lang: document.documentElement.lang || "en",
  title: document.title,
  description: metaDescription ? metaDescription.getAttribute("content") : "",
};

const zhMeta = {
  lang: "zh-Hans",
  title: "Zhe Chen | 创作者增长与社群增长系统",
  description: "陈喆的创作者增长个人网站：北美创作者生态、社群增长、校园项目、创作者激活、推荐裂变、小红书/TikTok 平台经验与 AI 工作流落地。",
};

const translations = [
  { selector: ".topbar", attr: "aria-label", zh: "主导航" },
  { selector: ".brand", attr: "aria-label", zh: "Zhe Chen 首页" },
  { selector: ".navlinks", attr: "aria-label", zh: "页面板块" },
  { selector: ".navlinks a", mode: "text", zh: ["匹配", "系统", "案例", "证据", "联系"] },
  { selector: ".top-actions", attr: "aria-label", zh: "操作链接" },
  { selector: ".language-switch", attr: "aria-label", zh: "语言切换" },
  { selector: ".top-actions .icon-button", attr: "aria-label", zh: ["打开简历 PDF", "打开作品集", "发送邮件"] },

  { selector: ".hero", attr: "aria-label", zh: "创作者增长与社群增长系统概览" },
  { selector: ".hero .eyebrow", mode: "text", zh: "创作者增长 + 社群驱动获客" },
  { selector: ".hero h1", mode: "html", zh: "内容社区平台的<br />创作者增长搭建者" },
  {
    selector: ".hero .lede",
    mode: "html",
    zh: "我擅长把 <strong>创作者获客</strong>、<strong>社群激活</strong>、校园/大使项目、推荐裂变、线下到线上活动体验、小红书/TikTok 内容机制，以及 <strong>AI 工作流</strong>，沉淀成可复用、可追踪、可规模化的增长系统。",
  },
  { selector: ".hero-pills", attr: "aria-label", zh: "核心定位" },
  {
    selector: ".hero-pills span",
    mode: "html",
    zh: [
      '<i data-lucide="users-round"></i> 创作者生态',
      '<i data-lucide="map"></i> 校园项目',
      '<i data-lucide="refresh-cw"></i> 推荐裂变',
      '<i data-lucide="bot"></i> AI 增长工作流',
    ],
  },
  { selector: ".contact-strip", attr: "aria-label", zh: "联系方式" },
  { selector: ".contact-strip span", mode: "text", zh: ["Los Angeles, CA", "可支持 Bay Area hybrid", "summer.ikiki@gmail.com"] },
  {
    selector: ".hero .actions .button",
    mode: "html",
    zh: [
      '<i data-lucide="file-text"></i> 简历 PDF',
      '<i data-lucide="route"></i> 创作者增长案例',
      '<i data-lucide="folder-open"></i> 作品集',
      '<i data-lucide="mail"></i> 邮件联系',
    ],
  },

  {
    selector: ".signal-band span",
    mode: "html",
    zh: [
      '横跨小红书、TikTok、Discord、Telegram、微信等平台的 <strong>社群成员</strong>。',
      '覆盖小红书、TikTok、Instagram 与创作者社区的 <strong>达人/KOL 资源</strong>。',
      '通过大型校园增长合作覆盖的 <strong>美国高校</strong>，验证北美校园增长能力。',
      '小红书文案 AI Agent 的 <strong>用户数</strong>，并产生 81K 次对话。',
    ],
  },

  { selector: "#fit .section-kicker", mode: "text", zh: "岗位适配" },
  { selector: "#fit h2", mode: "text", zh: "适合把社群当作增长引擎的创作者增长岗位。" },
  {
    selector: "#fit .section-heading.split > p",
    mode: "html",
    zh: "我最强的经验集中在 <strong>创作者关系</strong>、社群项目、本地/校园渠道、产品激活、内容机制和可衡量增长的交叉点。",
  },
  { selector: ".fit-grid article h3", mode: "text", zh: ["创作者获客", "激活与归属感", "可规模化项目", "增长复盘"] },
  {
    selector: ".fit-grid article p",
    mode: "text",
    zh: [
      "搭建达人/KOL 网络、内容驱动获客路径、小红书/TikTok 创作者合作，以及把高意向用户导入社群和产品的转化路径。",
      "通过线下到线上路径、meetup、校园活动、私域承接、新用户引导和产品教育，帮助用户更快理解产品价值并留下来。",
      "沉淀校园大使、校园项目、推荐裂变、活动执行、合作方 onboarding 和创作者运营 playbook，可复制到不同学校、城市和社群。",
      "用 UTM、邮箱验证、渠道质量、漏斗复盘、Tableau 看板、ROI 复盘和留存诊断，判断哪些社群和内容真正带来有效增长。",
    ],
  },

  { selector: "#system .section-kicker", mode: "text", zh: "增长系统" },
  { selector: "#system h2", mode: "text", zh: "我如何把创作者/社群工作做成可复用增长系统。" },
  { selector: ".system-flow article h3", mode: "text", zh: ["找到高匹配社群", "设计激活时刻", "搭好转化路径", "复盘并系统化"] },
  {
    selector: ".system-flow article p",
    mode: "text",
    zh: [
      "梳理创作者、学生组织、校园网络、Discord/Telegram/微信社群、平台内容圈层和本地合作资源。",
      "给用户一个明确加入理由：创作者活动、真实线下体验、产品教育、推荐激励、校园福利或平台原生内容钩子。",
      "把内容、二维码/海报、落地页、私信、社群邀请、新用户引导和 follow-up 串起来，让注意力变成激活。",
      "复盘渠道质量、验证率、激活、互动、留存、推荐信号、活动结果和创作者反馈，把有效打法沉淀成 playbook。",
    ],
  },

  { selector: ".platform-section .section-kicker", mode: "text", zh: "平台实战" },
  { selector: ".platform-section h2", mode: "text", zh: "创作者增长判断来自真实平台行为。" },
  {
    selector: ".platform-section .section-heading.split > p",
    mode: "text",
    zh: "创作者增长不是只看曝光，而是理解用户如何发现、信任、收藏、评论、分享、加入并持续留下。",
  },
  {
    selector: ".platform-grid span",
    mode: "html",
    zh: [
      '小红书首篇笔记曝光，并转化 <strong>1,000 个精准用户</strong>进入私域社群。',
      'TikTok <strong>24K+ 粉丝</strong>、<strong>400K+ 点赞</strong>，来自创作者型心理健康内容。',
      '知乎长内容与知识型内容的累计阅读，体现长内容表达和分发能力。',
      '单条微博阅读，体现跨平台热点敏感度。',
    ],
  },

  { selector: "#cases .section-kicker", mode: "text", zh: "代表案例" },
  { selector: "#cases h2", mode: "text", zh: "覆盖创作者生态、校园增长与 AI 工作流落地的真实案例。" },
  {
    selector: "#cases .section-heading.split > p",
    mode: "text",
    zh: "每个案例对应创作者增长的一层能力：创作者供给、社群项目、激活路径、可衡量获客和工作流系统化。",
  },
  {
    selector: ".case-topline",
    mode: "html",
    zh: [
      '<i data-lucide="rocket"></i> DITTO.AI',
      '<i data-lucide="users-round"></i> PandaPal',
      '<i data-lucide="map-pinned"></i> ENCMOBILE',
      '<i data-lucide="sparkles"></i> RED AI Agent',
      '<i data-lucide="shuffle"></i> SWAP',
      '<i data-lucide="clapperboard"></i> Legend Co-Shooting',
    ],
  },
  {
    selector: ".case-card h3",
    mode: "text",
    zh: [
      "校园创作者与社群增长系统",
      "0 到 1 创作者 / 社群生态",
      "本地 + 校园增长运营",
      "创作者工作流产品化",
      "社交产品启动与教育转化",
      "创作者工作流与制作资源社区",
    ],
  },
  {
    selector: ".case-card > p",
    mode: "text",
    zh: [
      "带领 30+ 市场与 BD 团队，将校园大使、战略合作、学生社群、线下活动、海报/二维码路径、消息触达和渠道质量复盘连成增长系统。",
      "在小红书、TikTok、Discord、Telegram 和微信上搭建学生生活方式社群与创作者生态。",
      "通过付费媒体、学生组织、本地合作、高校活动、数据看板和 ROI 复盘搭建学生市场增长体系。",
      "把小红书内容规律转化为创作者和营销团队可以直接使用的 AI 文案工作流。",
      "共同创立技能交换社交产品，通过小红书视频、官网、教学内容和线下活动，把产品教育转成获客路径。",
      "搭建 AI 辅助影视制作平台和创作者资源社区，连接创作者协作、资源匹配与流程标准化。",
    ],
  },
  {
    selector: ".case-card dt",
    mode: "text",
    zh: ["成果", "系统", "规模", "创作者", "增长", "网络", "成果", "方法", "成果", "适配", "规模", "内容"],
  },
  {
    selector: ".case-card dd",
    mode: "html",
    zh: [
      '<strong>800% 用户增长</strong>、<strong>150K+ 用户</strong>、<strong>100K+ 合作渠道报名</strong>',
      '校园增长 playbook、活动 playbook、合作方 onboarding、UTM / 渠道质量信号',
      '<strong>100K+ 社群成员</strong>、<strong>80K+ 校园网络</strong>、<strong>50+ 美国高校</strong>',
      '<strong>2,000+ 达人/KOL 资源</strong>、<strong>200+ 品牌创作者方案</strong>',
      '<strong>8x 用户增长</strong>、<strong>10x 营收增长</strong>',
      '<strong>40+ 商家/供应商</strong>、<strong>60+ 学生组织</strong>、<strong>每年 60+ 高校活动</strong>',
      '小红书文案工具榜 <strong>#1</strong>、<strong>12.4K 用户</strong>、<strong>81K 对话</strong>',
      'Prompt 结构、内容规律、迭代路径、面向用户的工作流设计',
      '通过定位、社群增长、线下激活和产品教育内容获得 <strong>100K+ 用户</strong>',
      '信任建立、激活路径、社群叙事、社交产品 onboarding',
      '<strong>3,000+ 专业创作者</strong>、<strong>6,000+ 制作资源</strong>',
      '<strong>B 站 1.114M 播放</strong>、<strong>腾讯视频 27.577M 累计播放</strong>',
    ],
  },

  { selector: "#proof .section-kicker", mode: "text", zh: "证据墙" },
  { selector: "#proof h2", mode: "text", zh: "可以继续查看的公开链接和作品材料。" },
  {
    selector: "#proof .section-heading.split > p",
    mode: "text",
    zh: "简历负责快速扫读，这些链接展示更完整的项目痕迹、公开页面、产品材料和增长/创作者工作流。",
  },
  {
    selector: ".proof-grid span",
    mode: "text",
    zh: ["AI 工作流", "0 到 1 产品", "作品集", "简历", "社交产品", "本地增长"],
  },
  {
    selector: ".proof-grid strong",
    mode: "text",
    zh: ["InfluencerOps Playbook", "PandaPal 产品材料", "精选项目作品集", "创作者增长简历 PDF", "SWAP 官网", "ENCMOBILE 官网"],
  },
  {
    selector: ".proof-grid p",
    mode: "text",
    zh: [
      "从 0 到 1 搭建的创作者增长工作流，用于达人筛选、评分、触达、复盘和续约判断。",
      "商业计划、营销计划、小程序早期版本、产品视频和 GTM 材料。",
      "DITTO、PandaPal、ENCMOBILE、SWAP、Legend 等项目的作品和项目证据。",
      "针对创作者增长、社群获客、校园项目和 AI 工作流定制的简历版本。",
      "技能交换社交产品，包含产品教育和启动阶段证明。",
      "学生市场增长、本地合作、付费媒体和校园活动相关背景。",
    ],
  },

  { selector: ".closing-section .section-kicker", mode: "text", zh: "联系" },
  {
    selector: ".closing-section h2",
    mode: "text",
    zh: "我最适合创作者生态、社群项目、内容判断和可衡量增长交汇的岗位。",
  },
  {
    selector: ".closing-section p",
    mode: "text",
    zh: "我关注创作者增长、社群驱动增长、内容平台增长、创作者运营、合作伙伴和非技术型产品/增长岗位，尤其适合消费社交、创作者工具和 AI 内容产品。",
  },
  {
    selector: ".contact-card .button",
    mode: "html",
    zh: [
      '<i data-lucide="mail"></i> 邮件联系',
      '<span class="brand-glyph" aria-hidden="true">in</span> LinkedIn',
      '<i data-lucide="file-text"></i> 简历 PDF',
    ],
  },
];

const originalValues = new Map();

const getKey = (element, rule, index) => `${rule.selector}::${rule.mode || "attr"}::${rule.attr || ""}::${index}`;

const captureOriginal = () => {
  translations.forEach((rule) => {
    const nodes = document.querySelectorAll(rule.selector);
    nodes.forEach((node, index) => {
      const key = getKey(node, rule, index);
      if (originalValues.has(key)) return;
      if (rule.attr) {
        originalValues.set(key, node.getAttribute(rule.attr) || "");
      } else if (rule.mode === "html") {
        originalValues.set(key, node.innerHTML);
      } else {
        originalValues.set(key, node.textContent);
      }
    });
  });
};

const applyRule = (rule, lang) => {
  const nodes = document.querySelectorAll(rule.selector);
  nodes.forEach((node, index) => {
    const key = getKey(node, rule, index);
    const zhValue = Array.isArray(rule.zh) ? rule.zh[index] : rule.zh;
    const value = lang === "zh" ? zhValue : originalValues.get(key);
    if (typeof value === "undefined") return;

    if (rule.attr) {
      node.setAttribute(rule.attr, value);
    } else if (rule.mode === "html") {
      node.innerHTML = value;
    } else {
      node.textContent = value;
    }
  });
};

const setLanguage = (lang) => {
  const isZh = lang === "zh";
  document.documentElement.lang = isZh ? zhMeta.lang : initialMeta.lang;
  document.title = isZh ? zhMeta.title : initialMeta.title;
  if (metaDescription) {
    metaDescription.setAttribute("content", isZh ? zhMeta.description : initialMeta.description);
  }

  translations.forEach((rule) => applyRule(rule, lang));
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.langOption === lang ? "true" : "false");
  });
  localStorage.setItem("zheCreatorGrowthLang", lang);
  refreshIcons();
};

captureOriginal();

document.querySelectorAll("[data-lang-option]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langOption));
});

const savedLanguage = localStorage.getItem("zheCreatorGrowthLang");
setLanguage(savedLanguage === "zh" ? "zh" : "en");
refreshIcons();
