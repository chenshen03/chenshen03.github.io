# 数据文件使用说明

## 概述

个人主页的信息已经从HTML中解耦到独立的数据文件 `data.json` 中。这样可以让内容管理和代码维护分离，更方便更新个人信息。

## 文件结构

- `data.json` - 包含所有个人信息的JSON数据文件
- `render.js` - 负责加载和渲染数据的JavaScript文件
- `index.html` - 主HTML文件（现在只包含结构，不包含具体内容）

## 如何更新信息

### 1. 更新个人信息

编辑 `data.json` 文件中的 `profile` 部分：

```json
{
  "profile": {
    "name": "Your Name (你的名字)",
    "title": "Your Title",
    "affiliation": "Your Affiliation",
    "bio": [
      "第一段简介",
      "第二段简介"
    ],
    "contacts": [
      {
        "label": "Email",
        "url": "mailto:your@email.com"
      }
    ]
  }
}
```

### 2. 添加新闻

在 `news` 数组中添加新条目：

```json
{
  "date": "01/2025",
  "content": "Your news content with <b>bold</b> or <a href=\"url\">links</a>"
}
```

### 3. 添加论文

在 `publications.papers` 或 `publications.preprints` 数组中添加：

```json
{
  "image": "./projects/your_image.png",
  "title": "Paper Title",
  "authors": "Author list with <b>bold</b> and <sup>*</sup>",
  "venue": "Conference/Journal Name",
  "year": "2024",
  "links": [
    {
      "label": "Paper",
      "url": "https://paper-url.com"
    },
    {
      "label": "Code",
      "url": "https://github.com/..."
    }
  ]
}
```

### 4. 添加奖项

在 `awards` 数组中添加：

```json
{
  "rank": "First Place",
  "title": "Competition Name",
  "note": "(Optional note)"
}
```

## 注意事项

1. **JSON格式**：确保JSON格式正确，可以使用在线JSON验证工具检查
2. **HTML标签**：在JSON中可以使用HTML标签（如 `<b>`, `<a>`, `<sup>` 等）
3. **图片路径**：确保图片路径正确，相对于网站根目录
4. **链接**：确保所有URL链接有效

## 测试

更新数据后，在浏览器中打开 `index.html` 查看效果。如果数据加载失败，请检查：

1. `data.json` 文件是否存在
2. JSON格式是否正确
3. 浏览器控制台是否有错误信息
