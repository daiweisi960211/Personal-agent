window.RADAR_DAILY = window.RADAR_DAILY || {};
window.RADAR_DAILY["2026-11-22"] = {
  date: "2026-11-22",
  weekday: "周日",
  tldr: "海外黑五购物季前夕，行业追踪显示 AI Agent 代理购物已初具规模（Grok Bot 占约 24% 订单份额，仅次于 Meta Muse）；但同日 Reuters 曝光 Meta Muse 内部测试出现跨账号串台与泄露个人银行余额隐患，引发全球对常驻 Agent 数据隔离的警觉。",
  stats: {
    signalsCount: 109,
    topProduct: "Meta Muse / Grok Bot",
    sentimentSplit: "正向 33% · 建议 25% · 吐槽 42%"
  },
  understanding: [
    {
      tag: "安全警钟",
      publishedAt: "2026-11-22 18:30",
      title: "Meta Muse 内部串台隐患曝光：Personal Agent 时代的数据隔离是生死线",
      summary: "内部测试泄露显示，云端多租户 Agent 一旦发生上下文串台（暴露陌生人银行余额或误发消息），对品牌信任的打击远超传统 Chatbot 幻觉。",
      source: "twitter",
      sourceName: "Twitter (X) · TechCrunch / Reuters",
      linkType: "direct",
      url: "https://x.com/zuohai/status/2117504888557232348"
    },
    {
      tag: "生态基建",
      publishedAt: "2026-11-22 10:15",
      title: "代理式商业（Agentic Commerce）迎来首个黑五大考",
      summary: "马斯克高调力推 Grok Bot 作为黑五自动比价下单助手，第三方数据估算 Grok 已拿下约 24% 的 AI 代理购物订单，Meta Muse 仍居首位。",
      source: "twitter",
      sourceName: "Twitter (X) · 行业观察",
      linkType: "direct",
      url: "https://x.com/MilksandMatcha/status/2103508158690058592"
    }
  ],
  newProducts: {
    domestic: [
      {
        id: "qianwengo",
        name: "千问Go！",
        vendor: "阿里巴巴 · 通义千问",
        stage: "生态多步任务强化",
        updatedAt: "2026-11-22",
        highlight: "深化购物价保、保险理赔与多步出行编排，强化交易闭环优势",
        detail: "依托淘宝、支付宝、飞猪与高德，在国内率先跑通「对话即履约」。",
        source: "wechat_mp",
        sourceName: "极客公园",
        url: "https://www.geekpark.net/news/372279"
      },
      {
        id: "yuanbao",
        name: "腾讯元宝",
        vendor: "腾讯",
        stage: "多智能体整合",
        updatedAt: "2026-11-22",
        highlight: "持续打通公众号与腾讯文档知识库，布局独立助手形态",
        detail: "侧重内容理解与办公文档场景。",
        source: "wechat_mp",
        sourceName: "IT之家",
        url: "https://www.ithome.com/1/012/026.htm"
      }
    ],
    overseas: [
      {
        id: "meta_muse",
        name: "Meta Muse",
        vendor: "Meta",
        stage: "黑五领跑 · 隐私遭质疑",
        updatedAt: "2026-11-22",
        highlight: "占据黑五代理购物份额第一，但内部串台事件引发隐私边界危机",
        detail: "再次凸显安全隔离（Sandbox Isolation）在多租户云端 Agent 中的极端重要性。",
        source: "twitter",
        sourceName: "Twitter (X) · @zuohai",
        url: "https://x.com/zuohai/status/2117504888557232348"
      },
      {
        id: "grok_bot",
        name: "Grok Bot",
        vendor: "xAI (SpaceXSI)",
        stage: "黑五购物份额约 24%",
        updatedAt: "2026-11-22",
        highlight: "马斯克主推假日自动比价下单，成为海外第二大代理购物入口",
        detail: "依托实时全网检索与云电脑环境切入高频消费场景。",
        source: "twitter",
        sourceName: "Twitter (X) · @MilksandMatcha",
        url: "https://x.com/MilksandMatcha/status/2103508158690058592"
      }
    ]
  },
  sentiment: {
    praise: [
      {
        product: "Grok Bot / Meta Muse",
        topic: "黑五自动盯价与比价下单省心省力",
        count: 21,
        summary: "海外消费者首次在黑五大规模尝试让 Agent 后台盯折扣和自动凑单，省钱感知直观。",
        quotes: [
          "「让 Agent 在黑五前持续盯降价和自动比价，终于看到除了聊天之外的真实 ROI。」"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 21"
      }
    ],
    suggestions: [
      {
        product: "Meta Muse / 云端 PA",
        topic: "必须公开透明的沙盒隔离与权限审计日志",
        count: 17,
        summary: "用户呼吁任何接入金融、邮件或工作数据的 Agent 必须提供清晰的权限范围与执行审计记录。",
        quotes: [
          "「没有透明的权限审计日志和严格租户隔离，根本不敢把主力工作账号交出去。」"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 17"
      }
    ],
    complaints: [
      {
        product: "Meta Muse",
        topic: "跨账号数据串台与隐私泄露担忧",
        count: 29,
        summary: "Reuters 曝光的内部测试串台事件引发 X 社区高度警惕，用户担心私密对话与财务数据被错发。",
        quotes: [
          "「云端 Agent 一旦串台泄露隐私，哪怕 99% 时候再好用也会直接卸载。」"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 29"
      }
    ]
  },
  renaTakeaways: [
    {
      module: "安全与隔离",
      action: "重点避坑",
      actionType: "warn",
      title: "把「单用户数据严格隔离 + 执行动作可追溯」作为产品底线",
      signal: "Meta Muse 串台风波在黑五前夕重创口碑，证明数据安全事故对 Personal Agent 具有一票否决权。",
      implication: "PC 端 Agent 在接入多账号业务数据与群聊时，必须保证严格的用户级权限隔离，每条发现与执行均带可审计来源。"
    },
    {
      module: "ROI 感知",
      action: "值得借鉴",
      actionType: "adopt",
      title: "用「可量化的业务收益/省时指标」替代抽象的 AI 能力宣传",
      signal: "黑五代理购物爆发说明，只有当 Agent 直接挂钩「省钱/赚钱/防漏单」等硬指标时，用户才会高频复购。",
      implication: "PC 端 Agent 的每一张机会卡都应尽量量化预期收益或风险敞口，让运营与管理者一眼看懂价值。"
    },
    {
      module: "生态卡位",
      action: "持续观察",
      actionType: "watch",
      title: "大促/关键业务节点是 Personal Agent 最佳的「集中破圈时机」",
      signal: "海外借黑五引爆 Agent 购物，国内也在盯春节与大促节点。",
      implication: "结合业务大促或重点活动周期推出专属盯盘目标模板，最容易在团队内快速跑出标杆案例。"
    }
  ]
};
