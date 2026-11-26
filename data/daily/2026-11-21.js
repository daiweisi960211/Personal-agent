window.RADAR_DAILY = window.RADAR_DAILY || {};
window.RADAR_DAILY["2026-11-21"] = {
  date: "2026-11-21",
  weekday: "周六",
  tldr: "X 社区热帖直击 Personal Agent 最大留存痛点——「大家配置完 Grok Bot / Muse / Dots 后放那儿吃灰，根本不知道拿它干什么」，催生 Agent Use Cases 等实战案例库走红；同时国内 MCP / Skill 生态接入清单引发开发者广泛收藏。",
  stats: {
    signalsCount: 96,
    topProduct: "Agent Use Cases / Grok Bot / Meta Muse",
    sentimentSplit: "正向 38% · 建议 37% · 吐槽 25%"
  },
  understanding: [
    {
      tag: "留存痛点",
      publishedAt: "2026-11-21 15:04",
      title: "最大抱怨：配置好 Grok Bot / Muse / Dots 后放着吃灰，不知道拿它干什么",
      summary: "X 上 275 赞 351 收藏热帖指出，多数用户配完 Agent 缺乏具体场景抓手，推荐通过实战案例库（如找回无人认领款项、谈判降话费）让用户直接抄作业。",
      source: "twitter",
      sourceName: "Twitter (X) · @AIExplorerTim（275赞 · 351收藏）",
      linkType: "direct",
      url: "https://x.com/AIExplorerTim/status/2124036098531955000"
    },
    {
      tag: "本地主权",
      publishedAt: "2026-11-19 10:09",
      title: "开源本地 Personal Agent「Linger」持续发酵：上下文主权归个人电脑",
      summary: "强调个人数据与记忆不该按 Token 租借，推动本地优先桌面 Agent 路线在开发者社区持续扩散。",
      source: "twitter",
      sourceName: "Twitter (X) · @zhangboknight（936赞）",
      linkType: "direct",
      url: "https://x.com/zhangboknight/status/2123237197050794364"
    }
  ],
  newProducts: {
    domestic: [
      {
        id: "lingguang",
        name: "灵光 2.0",
        vendor: "蚂蚁集团",
        stage: "MCP / CLI 生态扩展",
        updatedAt: "2026-11-21",
        highlight: "支持开放环境调用 MCP 与 CLI 工具，打通飞书/钉钉/支付宝/米家等场景",
        detail: "通过预置「帮我管」模板降低用户冷启动不知道干嘛的门槛。",
        source: "wechat_mp",
        sourceName: "36氪",
        url: "https://36kr.com/p/4043978243953537"
      },
      {
        id: "today_app",
        name: "Today",
        vendor: "此间无限 · 齐俊元团队",
        stage: "公开测试",
        updatedAt: "2026-11-21",
        highlight: "聚焦知识工作者高频碎片信息整合，以早晚简报驱动日活留存",
        detail: "避免空白对话冷场，主动从已连接工具中挖掘待办。",
        source: "wechat_mp",
        sourceName: "36氪",
        url: "https://36kr.com/p/4039749830120583"
      }
    ],
    overseas: [
      {
        id: "grok_bot",
        name: "Grok Bot",
        vendor: "xAI (SpaceXSI)",
        stage: "场景案例库热议",
        updatedAt: "2026-11-21",
        highlight: "社区自发沉淀大量 Grok Bot 实战工作流模板（降话费、信息监控、自动化运营）",
        detail: "反映出「好用的模板市场」正成为 Agent 产品留存的核心杠杆。",
        source: "twitter",
        sourceName: "Twitter (X) · @AIExplorerTim",
        url: "https://x.com/AIExplorerTim/status/2124036098531955000"
      },
      {
        id: "openai_dots",
        name: "OpenAI Dots",
        vendor: "OpenAI",
        stage: "Plus 测试反馈",
        updatedAt: "2026-11-21",
        highlight: "新拿到测试资格的 Plus 用户同样面临「配好后不知如何下手」的冷启动摩擦",
        detail: "缺乏开箱即用的垂类场景引导。",
        source: "twitter",
        sourceName: "Twitter (X) · @AIExplorerTim",
        url: "https://x.com/AIExplorerTim/status/2124036098531955000"
      }
    ]
  },
  sentiment: {
    praise: [
      {
        product: "Agent Use Cases 生态",
        topic: "「抄作业式」真实场景模板极大降低上手门槛",
        count: 23,
        summary: "用户非常喜欢按行业与目标分类的真实案例库，可以直接把案例丢给自己的 Agent 复刻。",
        quotes: [
          "「每个案例都给你用途、最终结果和可直接抄的提示词，终于知道怎么让 Agent 帮我干活了。」—— X @AIExplorerTim"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 23"
      }
    ],
    suggestions: [
      {
        product: "Grok Bot / Muse / Dots",
        topic: "产品内必须自带「场景启发器」而不是只给配置页",
        count: 25,
        summary: "大家不是不想用 Agent，而是不知道哪些日常琐事适合交给 Agent，需要产品主动推荐高频可用模板。",
        quotes: [
          "「我听到最多的抱怨就是，大家配置好 Grok Bot、Muse、Dots 后就放那儿吃灰。」—— X @AIExplorerTim（351收藏）"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 25"
      }
    ],
    complaints: [
      {
        product: "多产品共性",
        topic: "「装完吃灰」成行业通病，次周留存断崖",
        count: 19,
        summary: "缺乏明确的首周任务引导，导致尝鲜期过后用户很快忘记打开 Agent。",
        quotes: [
          "「折腾半天绑完账号，第二天打开盯着空白框发呆，不知道该让它干嘛。」"
        ],
        sources: ["twitter", "xiaohongshu"],
        sourceBreakdown: "Twitter 12 · 小红书 7"
      }
    ]
  },
  renaTakeaways: [
    {
      module: "冷启动 · Goals 模板",
      action: "值得借鉴",
      actionType: "adopt",
      title: "内置按角色划分的「可抄作业」Goals 模板库，彻底消灭装完吃灰",
      signal: "X 上 351 收藏热帖证实「不知道拿 Agent 干什么」是当前通用 PA 留存最大杀手。",
      implication: "PC 端 Agent 首日引导直接按岗位提供 3–5 个一键启用的核心监控/执行目标模板，让用户零思考即可跑起来。"
    },
    {
      module: "主动启发",
      action: "值得借鉴",
      actionType: "adopt",
      title: "让 Agent 扫描用户近期工作记录，主动建议「我可以帮你接管这 3 件事」",
      signal: "比起让用户自己去逛外部案例网站，Agent 主动结合上下文给出可接管清单转化率高得多。",
      implication: "接入协作与数据上下文后，在 Today 页定期推送「新发现的可自动化常规任务」建议卡。"
    },
    {
      module: "留存机制",
      action: "持续观察",
      actionType: "watch",
      title: "用「每日定时早报」建立固定回访节律，避免被遗忘",
      signal: "没有固定触达节奏的独立桌面应用极易在 3 天后吃灰。",
      implication: "通过每日早间固定推送高信噪比简报，培养用户每天开工先看 Agent 发现的肌肉记忆。"
    }
  ]
};
