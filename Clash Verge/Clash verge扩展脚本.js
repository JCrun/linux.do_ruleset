/**
 * ClashVerge 代理规则配置生成脚本
 * MIT License ~
 * author : Phantasia https://github.com/MarchPhantasia
 */

// ==================== 用户配置区（可自由修改） ====================

/**
 * 常用配置选项
 */
const CONFIG = {
    testUrl: "https://www.gstatic.com/generate_204",
    testInterval: 300,
    tolerance: 20,
    balanceStrategy: "sticky-sessions"
};

/**
 * 用户自定义规则（高优先级）
 */
const USER_RULES = [
    "IP-CIDR,223.113.52.0/22,DIRECT,no-resolve",
    "DOMAIN-SUFFIX,greasyfork.org,被墙网站",
    "DOMAIN-SUFFIX,aistudio.google.com,Non_HK_TW",
    "DOMAIN-SUFFIX,apis.google.com,Non_HK_TW",
    "DOMAIN-SUFFIX,ai.google.dev,Non_HK_TW",
    "DOMAIN-SUFFIX, alkalimakersuite-pa.clients6.google.com,Non_HK_TW",
];

const SAVED_RULES = [
    "RULE-SET,reject,广告拦截",
    "RULE-SET,cncidr,DIRECT,no-resolve",
    "RULE-SET,direct,DIRECT",
    "GEOSITE,gfw,被墙网站",
    "GEOIP,CN,国内网站",
    "MATCH,国外网站"
];

/**
 * 高质量节点关键词列表
 */
const HIGH_QUALITY_KEYWORDS = [
    "家宽", "家庭宽带", "IEPL", "Iepl", "iepl",
    "IPLC", "iplc", "Iplc", "专线", "高速",
    "高级", "精品", "原生", "SVIP", "svip",
    "Svip", "VIP", "vip", "Vip", "Premium",
    "premium",
    "特殊", "特殊线路", "游戏", "Game", "game"
];

/**
 * 排除香港和台湾的关键词
 */
const EXCLUDE_HK_TW_KEYWORDS = [
    "香港", "HK", "Hong Kong", "HONG KONG",
    "台湾", "TW", "Taiwan", "TAIWAN",
    "流量", "套餐"
];

/**
 * 代理规则根据自己需求修改/添加配置
 */
const PROXY_RULES = [
    { 
        name: "广告拦截", 
        gfw: false, 
        extraProxies: "REJECT", 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/AdvertisingLite/AdvertisingLite_Classical.yaml",
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Reject.png"
    },
    { 
        name: "linux.do",
        gfw: false,
        payload: "DOMAIN-SUFFIX,linux.do",
        extraProxies: "DIRECT", // DIRECT 对应 clash 策略里的 DIRECT
        icon: "https://linux.do/uploads/default/original/3X/9/d/9dd49731091ce8656e94433a26a3ef36062b3994.png",
        ruleProvider: {
            type: "http",
            behavior: "classical",
            url: "https://raw.githubusercontent.com/JCrun/linux.do_ruleset/main/clash/linux.do.yaml",
            path: "./ruleset/linux.do.yaml",
            interval: 86400,
        },    },
    { 
        name: "GitHub", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub.yaml",
        icon: "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Social_Media/GitHub.png"
    },
    { 
        name: "YouTube", 
        gfw: true, 
        urls: [
            "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
            "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTubeMusic/YouTubeMusic.yaml"
        ],
        icon: "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Social_Media/YouTube.png"
    },
    { 
        name: "Gemini", 
        gfw: true, 
        extraProxies: "Non_HK_TW", 
        urls: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Gemini/Gemini.yaml",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Google_Bard_logo.svg"
    },
    { 
        name: "OpenAi", 
        gfw: true, 
        extraProxies: "Non_HK_TW", 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI_No_Resolve.yaml",
        icon: "https://raw.githubusercontent.com/HotKids/Rules/master/Quantumult/X/Images/Qure/ChatGPT.png"
    },
    { 
        name: "Netflix", 
        gfw: true, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix_No_Resolve.yaml",
        icon: "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Universal/Netflix.png"
    },
    { 
        name: "Microsoft", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft_No_Resolve.yaml",
        icon: "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Universal/Microsoft.png"
    },
    { 
        name: "Steam", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/Steam/Steam_No_Resolve.yaml",
        icon: "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Universal/Steam.png"
    },
    { 
        name: "Cloudflare", 
        gfw: false, 
        urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Cloudflare/Cloudflare_No_Resolve.yaml",
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cloudflare.png"
    }
];

/**
 * DNS 配置
 */
const DNS_CONFIG = {
    trustDnsList: [
        "tls://8.8.8.8", "tls://1.1.1.1", "tls://9.9.9.9",
        "https://8.8.8.8/dns-query", "https://1.1.1.1/dns-query"
    ],
    defaultDNS: ["tls://1.12.12.12", "tls://223.5.5.5"],
    cnDnsList: [
        '119.29.29.29',
        '223.5.5.5',
        '1.12.12.12',
        "114.114.114.114",
    ],
    fakeIpFilter: [
        "+.lan", "+.local",
        "+.msftconnecttest.com", "+.msftncsi.com",
        "localhost.ptlogin2.qq.com", "localhost.sec.qq.com",
        "localhost.work.weixin.qq.com",
    ],
    nameserverPolicy: {
        "linux.do,+.linux.do": "https://clash.ddd.oaifree.com/query-dns",
        "geosite:private": "system",
        "geosite:cn,steam@cn,category-games@cn,microsoft@cn,apple@cn": 'cnDnsList'
    },
    fallbackDomains: [
        "+.azure.com", "+.bing.com", "+.bingapis.com",
        "+.cloudflare.net", "+.docker.com", "+.docker.io",
        "+.facebook.com", "+.github.com", "+.githubusercontent.com",
        "+.google.com", "+.gstatic.com", "+.google.dev",
        "+.googleapis.cn", "+.googleapis.com", "+.googlevideo.com",
        "+.instagram.com", "+.meta.ai", "+.microsoft.com",
        "+.microsoftapp.net", "+.msn.com", "+.openai.com",
        "+.poe.com", "+.t.me", "+.twitter.com",
        "+.x.com", "+.youtube.com"
    ]
};

// ==================== 系统实现区 ====================

const HIGH_QUALITY_REGEX = new RegExp(HIGH_QUALITY_KEYWORDS.join("|"), "i");
const dns = buildDnsConfig(DNS_CONFIG);

// ==================== 辅助函数部分 ====================

function buildDnsConfig(config) {
    return {
        enable: true,
        listen: ":53",
        ipv6: true,
        "prefer-h3": true,
        "use-hosts": true,
        "use-system-hosts": true,
        "respect-rules": true,
        "enhanced-mode": "fake-ip",
        "fake-ip-range": "198.18.0.1/16",
        "fake-ip-filter": config.fakeIpFilter,
        "default-nameserver": config.defaultDNS,
        nameserver: config.trustDnsList,
        "proxy-server-nameserver": config.cnDnsList,
        "nameserver-policy": {
            "geosite:private": "system",
            "geosite:cn,steam@cn,category-games@cn,microsoft@cn,apple@cn": config.cnDnsList,
        },
        fallback: config.trustDnsList,
        "fallback-filter": {
            geoip: true,
            "geoip-code": "CN",
            geosite: ["gfw"],
            ipcidr: ["240.0.0.0/4"],
            domain: config.fallbackDomains
        }
    };
}

function createRuleProviderUrl(url) {
    return {
        type: "http",
        interval: 86400,
        behavior: "classical",
        format: "yaml",
        url
    };
}

function createPayloadRules(payload, name) {
    const payloads = Array.isArray(payload) ? payload : [payload];
    const len = payloads.length;
    const rules = new Array(len);
    const normalizedName = name.split(",").join("-");
    
    for (let i = 0; i < len; i++) {
        const item = payloads[i];
        const p = item.split(",");
        let insertPos = p.length;
        const last = p[p.length - 1];
        if (last === "no-resolve" || last === "NO-RESOLVE") {
            insertPos--;
        }
        p.splice(insertPos, 0, normalizedName);
        rules[i] = p.join(",");
    }
    return rules;
}

function createGfwProxyGroup(name, addProxies, testUrl, icon) {
    addProxies = addProxies ? (Array.isArray(addProxies) ? addProxies : [addProxies]) : [];
    return {
        "name": name,
        "type": "select",
        "proxies": [...addProxies, "自动选择(最低延迟)", "负载均衡", "DIRECT"],
        "include-all": true,
        "url": testUrl,
        "icon": icon
    };
}

function createProxyGroup(name, addProxies, testUrl, icon) {
    addProxies = addProxies ? (Array.isArray(addProxies) ? addProxies : [addProxies]) : [];
    return {
        "name": name,
        "type": "select",
        "proxies": [...addProxies, "DIRECT", "自动选择(最低延迟)", "负载均衡"],
        "include-all": true,
        "url": testUrl,
        "icon": icon
    };
}

function filterHighQualityProxies(proxies) {
    if (!proxies || !Array.isArray(proxies)) return [];
    const result = [];
    const len = proxies.length;
    const regex = HIGH_QUALITY_REGEX;
    for (let i = 0; i < len; i++) {
        const proxy = proxies[i];
        const proxyName = proxy.name || "";
        if (regex.test(proxyName)) result.push(proxyName);
    }
    return result;
}

function filterNonHkTwProxies(proxies) {
    if (!proxies || !Array.isArray(proxies)) return [];
    const excludeRegex = new RegExp(EXCLUDE_HK_TW_KEYWORDS.join("|"), "i");
    const result = [];
    for (let proxy of proxies) {
        const proxyName = proxy.name || "";
        if (!excludeRegex.test(proxyName)) result.push(proxyName);
    }
    return result;
}

function main(config) {
    const { proxies } = config;
    const testUrl = CONFIG.testUrl;
    const highQualityProxies = filterHighQualityProxies(proxies);
    const rules = USER_RULES.slice();
    const proxyGroups = [];
    const gfwProxyGroups = [];
    const ruleProviderCommon = {
        type: "http",
        format: "yaml",
        interval: 86400
    };
    const ruleProviders = {
        reject: {
            ...ruleProviderCommon,
            behavior: "domain",
            url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
            path: "./ruleset/loyalsoldier/reject.yaml"
        },
        cncidr: {
            ...ruleProviderCommon,
            behavior: "ipcidr",
            url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
            path: "./ruleset/loyalsoldier/cncidr.yaml"
        },
        direct: {
            ...ruleProviderCommon,
            behavior: "domain",
            url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
            path: "./ruleset/loyalsoldier/direct.yaml"
        }
    };

    const configLen = PROXY_RULES.length;
    for (let i = 0; i < configLen; i++) {
        const { name, gfw, urls, payload, extraProxies, icon } = PROXY_RULES[i];
        if (gfw) {
            gfwProxyGroups.push(createGfwProxyGroup(name, extraProxies, testUrl, icon));
        } else {
            proxyGroups.push(createProxyGroup(name, extraProxies, testUrl, icon));
        }
        if (payload) {
            rules.push(...createPayloadRules(payload, name));
        } else if (urls) {
            const urlList = Array.isArray(urls) ? urls : [urls];
            const urlLen = urlList.length;
            for (let j = 0; j < urlLen; j++) {
                const theUrl = urlList[j];
                const iName = `${name}-rule${j !== 0 ? `-${j}` : ''}`;
                ruleProviders[iName] = createRuleProviderUrl(theUrl);
                rules.push(`RULE-SET,${iName},${name}`);
            }
        }
    }

    const baseProxyGroups = buildBaseProxyGroups(testUrl, highQualityProxies, proxies);

    return {
        mode: "rule",
        "find-process-mode": "strict",
        "global-client-fingerprint": "chrome",
        "unified-delay": true,
        "tcp-concurrent": true,
        "geox-url": {
            geoip: "https://ghgo.xyz/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
            geosite: "https://ghgo.xyz/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
        },
        dns,
        proxies,
        "proxy-groups": [
            ...baseProxyGroups,
            ...gfwProxyGroups,
            ...proxyGroups,
        ],
        "rule-providers": ruleProviders,
        rules: [
            ...rules,
            ...SAVED_RULES
        ]
    };
}

function buildBaseProxyGroups(testUrl, highQualityProxies, proxies) {
    const nonHkTwProxies = filterNonHkTwProxies(proxies);
    return [
        {
            "name": "国内网站",
            "type": "select",
            "proxies": ["DIRECT", "自动选择(最低延迟)", "负载均衡", "HighQuality"],
            "include-all": true,
            "url": "https://www.baidu.com/favicon.ico",
            "icon": "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Rounded_Rectangle/China.png"
        },
        {
            "name": "国外网站",
            "type": "select",
            "proxies": ["自动选择(最低延迟)","DIRECT", "负载均衡", "HighQuality"],
            "include-all": true,
            "url": "https://www.bing.com/favicon.ico",
            "icon": "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Rounded_Rectangle/United_Nations.png"
        },
        {
            "name": "被墙网站",
            "type": "select",
            "proxies": ["自动选择(最低延迟)", "负载均衡", "DIRECT", "HighQuality"],
            "include-all": true,
            "url": testUrl,
            "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Lock.png"
        },
        {
            "name": "HighQuality",
            "type": "select",
            "proxies": [
                "自动选择(最低延迟)",
                "负载均衡",
                "DIRECT",
                ...(highQualityProxies.length > 0 ? highQualityProxies : [])
            ],
            "icon": "https://fastly.jsdelivr.net/gh/Semporia/Hand-Painted-icon@master/Universal/Final.png"
        },
        {
            "name": "Non_HK_TW",
            "type": "url-test",
            "proxies": nonHkTwProxies.length > 0 ? nonHkTwProxies : ["DIRECT"],
            "tolerance": CONFIG.tolerance,
            "url": testUrl,
            "interval": CONFIG.testInterval,
            "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png"
        },
        {
            "name": "自动选择(最低延迟)",
            "type": "url-test",
            "tolerance": CONFIG.tolerance,
            "include-all": true,
            "url": testUrl,
            "interval": CONFIG.testInterval,
            "icon": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/icon/qure/color/Proxy.png"
        },
        {
            "name": "负载均衡",
            "type": "load-balance",
            "include-all": true,
            "strategy": CONFIG.balanceStrategy,
            "url": testUrl,
            "interval": CONFIG.testInterval,
            "icon": "https://www.clashverge.dev/assets/icons/balance.svg"
        },
    ];
}
