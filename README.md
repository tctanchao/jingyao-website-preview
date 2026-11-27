# 精曜官网预览

数码 3C 产品研发与解决方案官网的静态预览版本。

## 在线查看

https://tctanchao.github.io/jingyao-website-preview/

用于页面效果与文案审核，与正式官网独立。

## 文件说明

- `index.html`：首页。
- `styles.css`：响应式样式。
- `script.js`：导航交互。
- `logo-options.html`、`assets/logo-option-*.svg`：Logo 预览。
- 产品图使用现有的 HTTPS 图片链接；暂缺图片的展示区域保持空白。

不包含服务器备份、证书、上传凭据、部署工具或内部测试记录。

## 本地查看

```sh
python -m http.server 8765 --bind 127.0.0.1
```

GitHub Pages 从 `preview` 分支根目录发布。
