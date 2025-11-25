# Linux.do 分流规则集

为 Linux.do 论坛提供的自动分流规则，同时支持 sing-box 和 Clash。

## 特性

- ✅ 支持 sing-box 和 Clash
- ✅ 自动直连 linux.do 域名
- ✅ 使用 DoH 解析 linux.do（连接使用直连）
- ✅ 定期自动更新规则集

## 使用方法

### sing-box

1. 下载规则文件：
```bash
curl -O https://raw.githubusercontent.com/JCrun/linux.do_ruleset/main/singbox/linux.do.json
```

2. 在你的 sing-box 配置中引入规则，参考 [singbox/config_example.json](singbox/config_example.json)

### Clash

1. 下载规则文件：
```bash
curl -O https://raw.githubusercontent.com/JCrun/linux.do_ruleset/main/clash/linux.do.yaml
```

2. 在你的 Clash 配置中引入规则，参考 [clash/config_example.yaml](clash/config_example.yaml)

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
