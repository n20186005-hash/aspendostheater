# 交付验证状态

本文件用于明确区分“已完成的源码静态检查”和“因当前执行环境网络限制未能完成的依赖/构建验证”。

## 已完成

- `package.json` 可正常解析。
- `package.json` 中 Astro / Tailwind CSS / TypeScript / pnpm / Wrangler 等版本均使用精确版本号。
- `.node-version` 与 `engines.node` 固定为 Node.js 24.20.0 LTS。
- 未创建 `pnpm-workspace.yaml`。
- 源码 grep 未发现 `example.com`、`localhost`、`chrome-extension://`。
- 站点自身 canonical / Open Graph / JSON-LD URL 从 `Astro.site` 派生；`site` 为空时相关绝对 URL 标签省略。
- `@astrojs/sitemap` 仅在 `site` 有值时启用。
- Google Maps iframe 语言/地区参数已改为土耳其语 `tr`。
- 外部 `<script src>` 仅有用户指定的 GA4 `G-HXM22WWPKP`。
- Logo、SVG favicon、16x16、32x32、180x180 Apple Touch Icon 和 ICO 均为本地文件并保持统一视觉。
- 所需内容板块均已写入：票价/费用、详细交通、停车、最佳时段/停留时长、周边景点、周边美食、住宿、FAQ。

## 当前环境未能完成

执行：

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
```

Corepack 在下载 `pnpm@12.3.4` 时失败，根因是当前容器无法解析 `registry.npmjs.org`（`getaddrinfo EAI_AGAIN`）。完整错误保存在 `.qa/install-error.log`。

因此本次会话无法真实生成并验证 `pnpm-lock.yaml`，也无法继续执行 `pnpm check` 与 `pnpm build`。项目没有放入伪造或不完整的 lockfile，以免把不可复现状态冒充为通过。

同一网络限制也阻止了 Wikimedia 图片二进制下载到 `public/images/`。页面使用已核实授权的 Wikimedia Commons 实景照片 URL；来源与许可证见 `PHOTO-CREDITS.md`。
