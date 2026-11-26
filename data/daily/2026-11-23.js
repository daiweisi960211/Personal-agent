window.RADAR_DAILY = window.RADAR_DAILY || {};
window.RADAR_DAILY["2026-11-23"] = {
  date: "2026-11-23",
  weekday: "周一",
  tldr: "主动式 Personal Agent「Roze」在 X 刷屏，核心理念「你不该去 Prompt Agent，而是 Agent 主动来 Prompt 你」获超千赞；同日 Anthropic 推出 Claude Ship（PR Steward & Approvals）强化团队审批工作流，海外开发者热议 Grok Bot 替代方案的可靠性。",
  stats: {
    signalsCount: 118,
    topProduct: "Roze / Claude Ship / Grok Bot",
    sentimentSplit: "正向 46% · 建议 30% · 吐槽 24%"
  },
  understanding: [
    {
      tag: "主动范式",
      publishedAt: "2026-11-23 16:58",
      title: "「你不该去 Prompt 你的 Agent，而是 Agent 主动来 Prompt 你」",
      summary: "Roze 创始人发文获 25 万浏览与 1,007 赞：产品连接邮箱与日历后自动判断待办，以「一键采纳建议卡」取代传统空聊天框。",
      source: "twitter",
      sourceName: "Twitter (X) · @galaxy_brainin（1,007赞）",
      linkType: "direct",
      url: "https://x.com/galaxy_brainin/status/2124910589323743517"
    },
    {
      tag: "竞品横评",
      publishedAt: "2026-11-23 01:48",
      title: "实测多款 Grok Bot 替代品：极简 UI 与高稳定性比堆砌插件更重要",
      summary: "X 重度用户横评 OpenBot、Rakazo、Mausbot 等竞品（260赞 291收藏），指出界面简洁、插件克制但极度稳定的工具留存远高于功能繁杂的产品。",
      source: "twitter",
      sourceName: "Twitter (X) · @BackupBrainy（260赞）",
      linkType: "direct",
      url: "https://x.com/BackupBrainy/status/2124681393448079695"
    }
  ],
  newProducts: {
    domestic: [
      {
        id: "today_app",
        name: "Today",
        vendor: "此间无限 · 齐俊元团队",
        stage: "职场口碑发酵",
        updatedAt: "2026-11-23",
        highlight: "主打单窗口长记忆与主动早晚简报，持续打磨飞书/钉钉/邮箱连接器",
        detail: "在知识工作者圈层形成高辨识度，其白盒记忆设计成为同行参考标杆。",
        source: "wechat_mp",
        sourceName: "36氪",
        url: "https://36kr.com/p/4039749830120583"
      },
      {
        id: "lingguang",
        name: "灵光 2.0",
        vendor: "蚂蚁集团",
        stage: "事务托管放量",
        updatedAt: "2026-11-23",
        highlight: "独立云主机沙盒托管长程任务，覆盖自动续费排查、机票降价与群通知整理",
        detail: "采用 APASS 密钥分离托管架构，强调随时可撤销授权的安全感。",
        source: "wechat_mp",
        sourceName: "36氪",
        url: "https://36kr.com/p/4043978243953537"
      }
    ],
    overseas: [
      {
        id: "claude_duet",
        name: "Claude Duet",
        vendor: "Anthropic",
        stage: "生态联动 Claude Ship",
        updatedAt: "2026-11-23",
        highlight: "Anthropic 同期推出 Claude Ship（PR Steward & Approvals），深化「人机协同审批流」",
        detail: "将安全审批门控从个人收件箱延伸到团队研发协作。",
        source: "twitter",
        sourceName: "Twitter (X) · @wangray",
        url: "https://x.com/wangray/status/2125189996395348273"
      },
      {
        id: "grok_bot",
        name: "Grok Bot",
        vendor: "xAI (SpaceXSI)",
        stage: "社区竞品横评",
        updatedAt: "2026-11-23",
        highlight: "保持海外搜索热度第一，但社区开始呼吁更轻快的 UI 与更高执行稳定性",
        detail: "大量垂直 Bot 竞品切入简化版场景，倒逼大厂做交互减法。",
        source: "twitter",
        sourceName: "Twitter (X) · @BackupBrainy",
        url: "https://x.com/BackupBrainy/status/2124681393448079695"
      }
    ]
  },
  sentiment: {
    praise: [
      {
        product: "Roze",
        topic: "去掉空白聊天框 · 主动算好建议并支持「一键采纳」",
        count: 27,
        summary: "「Agent 主动来 Prompt 你」精准戳中用户不想写复杂 Prompt 的痛点，成为当日 X 传播最广的产品理念。",
        quotes: [
          "「You shouldn't have to prompt your agent, your agent should prompt you.」—— X @galaxy_brainin（1,007赞）"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 27"
      }
    ],
    suggestions: [
      {
        product: "Grok Bot / 桌面 PA",
        topic: "界面做减法 · 宁可少插件也要极度稳定",
        count: 18,
        summary: "重度用户横评后普遍偏好「极简 UI + 低学习成本 + 极高稳定性」，反感把 Agent 做成复杂控制台。",
        quotes: [
          "「Simple UI, less add-ons, but extremely reliable.」—— X @BackupBrainy（260赞）"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 18"
      }
    ],
    complaints: [
      {
        product: "多产品共性",
        topic: "学习曲线过陡与插件堆砌导致日常使用阻力大",
        count: 14,
        summary: "不少 Agent 工具功能强大但配置门槛高，普通用户很难坚持度过前 3 天学习期。",
        quotes: [
          "「Turned me from hater to lover, but steep learning curve.」—— X @BackupBrainy"
        ],
        sources: ["twitter"],
        sourceBreakdown: "Twitter 14"
      }
    ]
  },
  renaTakeaways: [
    {
      module: "交互范式 · Today",
      action: "值得借鉴",
      actionType: "adopt",
      title: "将「Agent 主动来 Prompt 用户」作为 PC 端默认首页，弱化空白输入框",
      signal: "Roze 凭「一键采纳主动建议卡」获 1,007 赞，验证了主动发起远比被动对话更有留存力。",
      implication: "PC 端 Agent 打开首页即展示基于业务变化自动算出的高优机会卡，用户点「采纳/微调/忽略」即可推进，无需从零写 Prompt。"
    },
    {
      module: "审美与减法",
      action: "值得借鉴",
      actionType: "adopt",
      title: "克制插件与配置项数量，把「极简 UI + 高稳定性」做到极致",
      signal: "X 260 赞竞品横评明确指出：简洁、少附加项但极度可靠的产品更容易赢得长期主力席位。",
      implication: "坚持极简产品审美，拒绝把工作台做成复杂中控台，能默认帮用户配置好的规则全部默认。"
    },
    {
      module: "审批闭环",
      action: "持续观察",
      actionType: "watch",
      title: "从个人提醒升级为「结构化审批流」，承接团队级协作",
      signal: "Anthropic 推出 Claude Approvals，把 Agent 动作确认做成了清晰的轻量审批单。",
      implication: "在涉及跨团队触达或业务参数调整的 Action 中，采用结构化对比确认卡，让用户 3 秒看清变更并拍板。"
    }
  ]
};
