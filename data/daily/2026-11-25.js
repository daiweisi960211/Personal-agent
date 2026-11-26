window.RADAR_DAILY = window.RADAR_DAILY || {};
window.RADAR_DAILY["2026-11-25"] = {
  date: "2026-11-25",
  weekday: "周三",
  tldr: "小豆公测次日全网求码热度飙升，微信小微与千问Go 的差异化路线引发行业复盘；海外社区开始集中讨论「Always-on Agent 的算力成本与高客单价商业模式」。",
  stats: {
    signalsCount: 98,
    topProduct: "小豆 / 微信小微",
    sentimentSplit: "正向 49% · 建议 28% · 吐槽 23%"
  },
  understanding: [
    {
      tag: "商业模式",
      title: "云端虚拟机 + 持续轮询带来高算力成本，倒逼 Personal Agent 走向高客单订阅",
      summary: "公众号分析指出，小豆 68 元起、Meta Muse 与 OpenAI Dots 的高阶会员定价，说明行业已默认 Personal Agent 无法靠免费流量变现，必须交付可量化的「省时间」价值。",
      source: "wechat_mp",
      sourceName: "微信公众号 · 商业观察",
      url: "https://36kr.com"
    },
    {
      tag: "产品形态",
      title: "「对话流」不再是唯一主界面，「状态看板 + 审批流」权重显著上升",
      summary: "Twitter 设计师与 PM 讨论认为，当 Agent 在后台同时跑 5 个任务时，纯聊天窗口根本看不过来，必须引入类似 Today / Inbox 的任务状态视图。",
      source: "twitter",
      sourceName: "Twitter (X) · Product Design",
      url: "https://x.com"
    }
  ],
  newProducts: {
    domestic: [
      {
        id: "xiaodou",
        name: "小豆",
        vendor: "字节跳动 · 豆包",
        stage: "公测次日",
        highlight: "全网求码破圈，「关于你」长期记忆与代打电话成为传播核心卖点",
        detail: "首批测评集中在生活琐事代办与豆包数据打通，商业化阶梯订阅引发广泛热议。",
        source: "xiaohongshu",
        sourceName: "小红书",
        url: "https://www.xiaohongshu.com"
      },
      {
        id: "xiaowei",
        name: "微信小微",
        vendor: "腾讯 · 微信",
        stage: "微信内灰度测试",
        highlight: "寄生于国民级微信聊天生态，主打「顺手提醒 + 调起小程序完成轻任务」",
        detail: "不强求用户下载新 App，在聊天流里直接完成定时提醒、信息汇总与点奶茶/打车等小程序调用。",
        source: "wechat_mp",
        sourceName: "微信公众号",
        url: "https://mp.weixin.qq.com"
      }
    ],
    overseas: [
      {
        id: "claude_duet",
        name: "Claude Duet",
        vendor: "Anthropic",
        stage: "定向内测",
        highlight: "定位「收件箱与日历幕僚长」，强调高安全边界下的后台整理与草稿准备",
        detail: "主打零打扰的后台信息预处理：自动归类重要邮件、提前起草回复并标出日程冲突。",
        source: "twitter",
        sourceName: "Twitter (X)",
        url: "https://x.com"
      },
      {
        id: "meta_muse",
        name: "Meta Muse",
        vendor: "Meta",
        stage: "公测扩张",
        highlight: "WhatsApp 轻触达 + macOS 深处理双端协同",
        detail: "在海外市场率先跑通「手机端 IM 确认 + 云端桌面执行」的 Personal Agent 闭环。",
        source: "twitter",
        sourceName: "Twitter (X)",
        url: "https://x.com"
      }
    ]
  },
  sentiment: {
    praise: [
      {
        product: "微信小微",
        topic: "零切换成本 · 聊天流里直接办事",
        count: 22,
        summary: "用户认为不需要改变使用习惯是最大优势，顺手拉起小程序和定时提醒体验极轻。",
        quotes: [
          "「不用切 App，聊天说到一半直接让它 5 分钟后提醒我，顺手到像真人在群里。」"
        ],
        sources: ["xiaohongshu", "wechat_mp"],
        sourceBreakdown: "小红书 14 · 公众号 8"
      },
      {
        product: "Claude Duet",
        topic: "极度克制的幕僚感 · 每日决策压缩",
        count: 14,
        summary: "把几十封杂乱邮件压成 3 条待拍板决策卡，职场用户评价「比炫技自动点鼠标实用得多」。",
        quotes: [
          "「每天早上把 40 封邮件压成 3 条需要我拍板的决策卡，这才是职场需要的 Agent。」"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 14"
      }
    ],
    suggestions: [
      {
        product: "多产品共性",
        topic: "后台任务进度透明 · 明确卡点提示",
        count: 16,
        summary: "希望能看到简短执行进度与卡点原因，不要静默跑 10 分钟最后只回一句失败。",
        quotes: [
          "「后台在跑的任务希望能看到简短进度条和卡点提示，不然总觉得它死机了。」"
        ],
        sources: ["twitter", "xiaohongshu"],
        sourceBreakdown: "Twitter 10 · 小红书 6"
      }
    ],
    complaints: [
      {
        product: "小豆",
        topic: "邀请码稀缺与首测预期落差",
        count: 24,
        summary: "全网炒码拉高预期，部分用户拿到码后觉得除代打电话外，日常对话与豆包主端差异不够大。",
        quotes: [
          "「好不容易拿到邀请码测了一圈，发现除了代打电话比较惊艳，其他场景和豆包差不多。」"
        ],
        sources: ["xiaohongshu"],
        sourceBreakdown: "小红书 24"
      }
    ]
  },
  renaTakeaways: [
    {
      module: "Setup 引导",
      action: "重点避坑",
      actionType: "warn",
      title: "冷启动不要一上来要求全量授权，先给「最小可用数据」跑出首个 Aha Moment",
      signal: "小红书与公众号复盘均指出，多款 Personal Agent 首日流失集中在「漫长的账号授权与偏好问卷」。",
      implication: "PC 端 Agent Setup 保持极简：默认预置核心经营指标与办公协作连接，先在 3 分钟内生成第一张高价值机会卡，再按需引导补充授权。"
    },
    {
      module: "双端定位",
      action: "持续观察",
      actionType: "watch",
      title: "「重工作台走 PC，轻触达走 IM」正成为职场 Personal Agent 的主流分工",
      signal: "腾讯用「微信小微」做轻量顺手触达，海外 Meta Muse 绑定 WhatsApp + macOS 协同，验证了 IM 触达与桌面深处理互补。",
      implication: "与「PC 端承载持续目标与深度工作台 + IM Bot 负责轻触达与确认」的双端设计高度一致，可进一步强化消息卡片的一键审批闭环。"
    },
    {
      module: "产品定位",
      action: "值得借鉴",
      actionType: "adopt",
      title: "ToB / 职场垂类比泛 C 端更容易跑通高价值留存",
      signal: "社区普遍认为 C 端生活琐事（买猫粮、订餐厅）频次低、难撑高价订阅；而职场高频重复工作（盯数据、跟项目）的 ROI 感知强得多。",
      implication: "聚焦垂类业务运营的经营盯盘与机会发现，天然具备高频刚需优势，可重点强调与泛 C 端产品的价值差异。"
    }
  ]
};
