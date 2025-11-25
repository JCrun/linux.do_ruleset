# Linux.do 分流规则集

为 Linux.do 论坛提供的自动分流规则，同时支持 sing-box 和 Clash。

## 特性

- ✅ 支持 sing-box 和 Clash
- ✅ 自动直连 linux.do 域名
- ✅ 使用 DoH 解析 linux.do（连接使用直连）
- ✅ 定期自动更新规则集

## 使用方法

### sing-box

#### 快速开始

1. 下载规则文件：
```bash
curl -O https://raw.githubusercontent.com/JCrun/linux.do_ruleset/main/singbox/linux.do.json
```

2. 在你的 sing-box 配置中引入规则，参考 [singbox/config_example.json](singbox/config_example.json)

#### 核心配置说明

你可以选择以下任一方式：
- **增量配置**：在现有配置中添加 linux.do 相关配置块
- **替换配置**：用提供的示例配置替换对应部分
- **完整实现**：参考 `config_example.json` 实现完整配置

**1. linux.do 分流规则配置块**

在 `route.rule_set` 中添加：
```json
{
  "tag": "linux.do",
  "type": "remote",
  "url": "https://raw.githubusercontent.com/JCrun/linux.do_ruleset/main/singbox/linux.do.srs",
  "format": "binary",
  "download_detour": "🚀 节点选择"
}
```

在 `route.rules` 中添加：
```json
{
  "action": "route",
  "rule_set": ["linux.do"],
  "outbound": "🎯 全球直连"
}
```

**2. DoH (DNS over HTTPS) 配置块**

在 `dns.servers` 中添加：
```json
{
  "tag": "Local-DNS",
  "type": "https",
  "domain_resolver": "Local-DNS-Resolver",
  "server_port": 443,
  "server": "sing.ddd.oaifree.com",
  "path": "/query-dns"
},
{
  "tag": "Local-DNS-Resolver",
  "type": "udp",
  "server_port": 53,
  "server": "223.5.5.5"
}
```

在 `dns.rules` 中添加：
```json
{
  "action": "route",
  "rule_set": ["linux.do"],
  "server": "Local-DNS"
}
```

> **注意**：
> - 规则集 URL 使用 `.srs` 二进制格式，需要先编译 `.json` 文件
> - `download_detour` 可根据实际情况调整为合适的出站标签
> - DoH 服务器可替换为其他可用的 DoH 服务

### Clash

#### 快速开始

1. 下载规则文件：
```bash
curl -O https://raw.githubusercontent.com/JCrun/linux.do_ruleset/main/clash/linux.do.yaml
```

2. 在你的 Clash 配置中引入规则，参考 [clash/config_example.yaml](clash/config_example.yaml)

#### 核心配置说明

你可以选择以下任一方式：
- **增量配置**：在现有配置中添加 linux.do 相关配置块
- **替换配置**：用提供的示例配置替换对应部分
- **完整实现**：参考 `config_example.yaml` 实现完整配置

**1. linux.do 分流规则配置块**

在 `rule-providers` 中添加：
```yaml
rule-providers:
  linux.do:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/JCrun/linux.do_ruleset/main/clash/linux.do.yaml
    path: ./ruleset/linux.do.yaml
    interval: 86400
```

在 `rules` 中添加（建议放在靠前位置）：
```yaml
rules:
  - RULE-SET,linux.do,DIRECT
```

**2. DoH (DNS over HTTPS) 配置块**

在 `dns` 中添加或修改：
```yaml
dns:
  enable: true
  ipv6: false
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  nameserver:
    - https://doh.pub/dns-query
    - https://dns.alidns.com/dns-query
  nameserver-policy:
    'linux.do,+.linux.do': 
      - https://clash.ddd.oaifree.com/query-dns
```

> **注意**：
> - `interval` 设置规则集更新间隔，默认 86400 秒（1天）
> - `nameserver-policy` 为 linux.do 域名指定专用 DoH 服务器
> - DoH 服务器可替换为其他可用的 DoH 服务
> - `DIRECT` 可根据实际需要替换为其他策略组

## 规则说明

- 所有 `*.linux.do` 域名将使用直连
- DNS 查询使用 DoH (DNS over HTTPS)，但连接本身走直连
- 避免 DNS 污染和泄露

## 自动更新

规则集会通过 GitHub Actions 自动更新（计划中）。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
