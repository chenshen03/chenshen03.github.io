# 个人主页项目

一个基于 React + TypeScript + Vite 构建的现代化个人主页项目。

## 📋 环境要求

### 必需环境

- **Node.js**: 18.x 或更高版本（推荐使用 LTS 版本）
- **npm**: 9.x 或更高版本（随 Node.js 自动安装）

### 检查环境

**方法一：使用环境检查脚本（推荐）**

```bash
# 给脚本添加执行权限（仅首次需要）
chmod +x check-env.sh

# 运行环境检查
./check-env.sh
```

**方法二：手动检查**

在终端中运行以下命令检查环境：

```bash
node --version  # 应显示 v18.x.x 或更高
npm --version   # 应显示 9.x.x 或更高
```

### 安装 Node.js

如果未安装 Node.js，请访问 [nodejs.org](https://nodejs.org/) 下载并安装。

**macOS 用户推荐使用 Homebrew:**
```bash
brew install node
```

**或使用 nvm (Node Version Manager):**
```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 安装并使用 Node.js LTS 版本
nvm install --lts
nvm use --lts
```

## 🚀 快速开始

### 方法一：使用启动脚本（推荐）

```bash
# 给脚本添加执行权限（仅首次需要）
chmod +x start.sh

# 运行启动脚本
./start.sh
```

### 方法二：手动启动

#### 1. 安装依赖

```bash
npm install
```

#### 2. 启动开发服务器

```bash
npm run dev
```

#### 3. 访问应用

打开浏览器访问: **http://127.0.0.1:5173**

## 📜 可用命令

| 命令 | 说明 |
|------|------|
| `./check-env.sh` | 检查环境配置是否完整 |
| `./start.sh` | 一键启动项目（自动检查环境并启动） |
| `npm install` | 安装项目依赖 |
| `npm run dev` | 启动开发服务器（支持热更新） |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |

## 🛠️ 技术栈

- **React** 18.3.1 - UI 框架
- **TypeScript** 5.8.3 - 类型系统
- **Vite** 7.0.0 - 构建工具
- **Tailwind CSS** 3.4.17 - 样式框架
- **React Router** 6.30.1 - 路由管理
- **Zustand** 4.4.7 - 状态管理
- **i18next** - 国际化支持

## 📁 项目结构

```
personal_homepage/
├── src/                    # 源代码目录
│   ├── components/         # React 组件
│   ├── pages/             # 页面组件
│   ├── store/             # 状态管理
│   ├── i18n/              # 国际化配置
│   └── assets/            # 静态资源
├── index.html             # HTML 入口
├── package.json           # 项目配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── postcss.config.js      # PostCSS 配置
├── start.sh               # 启动脚本
├── check-env.sh           # 环境检查脚本
└── README.md              # 项目说明
```

## ⚠️ 常见问题

### 1. 端口被占用

如果 5173 端口被占用，Vite 会自动尝试其他端口。查看终端输出获取实际端口号。

### 2. 依赖安装失败

- 检查网络连接
- 尝试清除 npm 缓存: `npm cache clean --force`
- 使用国内镜像: `npm config set registry https://registry.npmmirror.com`

### 3. Node.js 版本过低

如果遇到版本相关错误，请升级 Node.js 到 18.x 或更高版本。

### 4. 权限问题（macOS/Linux）

如果启动脚本无法执行，运行:
```bash
chmod +x start.sh
```

## 📝 开发说明

- 开发服务器支持**热模块替换 (HMR)**，修改代码会自动刷新
- 项目使用 TypeScript，确保类型安全
- 样式使用 Tailwind CSS，支持响应式设计
- 支持深色模式（自动检测系统偏好）

## 📄 许可证

本项目为个人项目。

---

**提示**: 首次运行前请确保已安装 Node.js 并执行 `npm install` 安装依赖。

