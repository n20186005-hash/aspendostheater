# 交付验证状态

## 已完成的静态检查与构建验证

- `astro.config.mjs`：`site = 'https://aspendostheater.com'` 已配置；canonical / Open Graph / JSON-LD / sitemap 均由此派生。
- 依赖安装：`pnpm@12.3.4 install` 已通过并生成 `pnpm-lock.yaml`。
  - 环境注：本机 pnpm 全局 shim 与其 store 位于“不受信任的装入点”，会报 `ERR_PNPM_CMD_SHIM_READ_MANIFEST`；用 `npx pnpm@12.3.4 install --node-linker=hoisted --package-import-method=copy` 成功规避（仓库内真实目录，无符号链接）。
- `pnpm-workspace.yaml`：由 pnpm 12 自动生成，仅放行 `esbuild` 构建脚本。
- `astro check`：**0 errors / 0 warnings / 0 hints**（5 文件）。
- `astro build`：成功，1 页生成于 `dist/`，输出 `sitemap-index.xml` + `sitemap-0.xml`（23 文件，约 2.25 MB）。

## SEO 实体绑定（单页 varlık bağlama）

- TDK：标题/描述含官方全称 + 城市（Serik, Antalya）。
- `TouristAttraction` JSON-LD：`@id`、`image[]`、`alternateName`、`geo`、NAP（postalCode 07500 / TR）、`hasMap`、`sameAs`（Google Maps + muze.gov.tr + UNESCO 6036）、`aggregateRating` 4,8 / 22.619、`openingHoursSpecification` 08.00–18.45、`isAccessibleForFree: false`。
- `FAQPage` JSON-LD：8 问，与 DOM `<details>` 一一对应。
- H1：`Aspendos Antik Tiyatrosu` + Serik · Antalya · Türkiye 副行；正文面包屑行（Ana sayfa › Türkiye › Antalya › Serik › 全称）。
- 图片：全部切换为 `public/images/` 本地实景图（优化至 1920/1600 最长边，q82；原 39 MB → 约 2 MB），`og:image` 与 JSON-LD `image` 指向本地 hero；不再依赖远程 Wikimedia 图床。
- Google Maps：新版短链 `https://maps.app.goo.gl/DSrGmEky8GKnY3pK8` 用于 Hero / 地图块 / 页脚 + JSON-LD `hasMap`/`sameAs`；iframe 使用用户提供的最新 pb embed（含 `referrerpolicy="strict-origin-when-cross-origin"`、lazy）。
- Kaynaklar 板块：`muze.gov.tr`、UNESCO Geçici Liste（6036）、GoTürkiye 三个官方/权威来源；页脚含同款官方链接 + 全称 + 地址（NAP）。
- 图片产权声明：页脚与 Kaynaklar 板块均注明“本网站展示的所有图片产权及版权均归原摄影者所有”，并列出 CC BY-SA 作者。

## PWA

- `public/manifest.webmanifest`（tr、theme #9f4d31、192/512 + maskable 图标）。
- `public/icons/icon-192.png`、`icon-512.png`、`maskable-512.png`（由 apple-touch-icon 栅格化生成）。
- `public/sw.js`：导航 network-first + 离线兜底 `/`；静态资源 stale-while-revalidate；同源限定；旧缓存清理。
- 页面 `<head>`：manifest link、apple/mobile meta、SW 注册（仅 https / localhost）。

## robots.txt 与 sitemap

- `robots.txt`：`Allow: /` + `Sitemap: https://aspendostheater.com/sitemap-index.xml`。
- 构建输出：`dist/sitemap-index.xml` → `dist/sitemap-0.xml` → `https://aspendostheater.com/`。

## 已知说明

- 站点仍为单语（tr）；未引入 hreflang / 多语言。
- Google 评分 4,8（22.619）依据最新 Google 资料；如日后 Google 计数变化，需同步 Hero、信息条与 JSON-LD `reviewCount`。
