# 雨停之前 · 中英双语完整工程

本包为当前已发布双语版本：同一个界面切换中文 / English，首次默认中文；英文角色为 Miss、Mr、sister。

## 本地运行

安装 Python 3，解压后在本目录打开终端，执行：

```sh
python -m http.server 8000 --bind 127.0.0.1
```

随后在浏览器打开 http://127.0.0.1:8000 。macOS / Linux 可将 python 改为 python3。
不需要编译、不需要后台服务。请通过 HTTP 服务运行，不建议直接双击 index.html。
游戏存档与语言偏好保存在当前浏览器，换域名或端口不会自动携带线上存档。

## 文件结构

- index.html：统一页面入口
- story.js / story.en.js：中文 / 英文剧情
- game.js / game.en.js：对应语言的交互运行时
- language.js：语言加载、选择与进度迁移
- language-map.js / language-ui.js：文本对照与英文界面
- style.css / style.en.css / language.css：界面样式
- assets/：中文 WebP 场景图与中文字体
- assets/en/：英文版 WebP 场景图
- tests/：中文全流程、英文全流程、语言切换专项测试
- licenses/：字体版权与许可
- web-application.json：原页面发布身份配置

## 自动测试（可选）

安装 Node.js 后，在本目录执行：

```sh
npm install --no-save playwright
npx playwright install chromium
node tests/test-rain.cjs
node tests/test-rain-bilingual-en.cjs
node tests/test-rain-language.cjs
```

测试会自动启动临时本地 HTTP 服务，并将截图写入 tests/。也可用 CHROMIUM_PATH 环境变量指定现有 Chromium 可执行文件。
游戏运行不依赖 Node.js 或 Playwright，只有执行自动测试才需要。

## 修改与部署提醒

原页面：https://data.bytedance.net/apps/93ec4b85bc26
本包保留原页面身份；若另建新项目，请先删除 web-application.json，避免覆盖原游戏。
双语改剧情时请同步两份 story、运行时文案及 language-map.js，确保进度与翻译对照一致。
新增中文字符时，现有子集字体可能不覆盖，需要重新生成字体子集或使用完整的合规中文字体。

字体遵循随附 OFL 许可；游戏中出现的第三方品牌、标识不因本工程交付而转让其权利。
