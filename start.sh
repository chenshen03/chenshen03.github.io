#!/bin/bash

# 项目启动脚本
# 使用方法: ./start.sh 或 bash start.sh

echo "🚀 正在启动个人主页项目..."
echo ""

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未检测到 Node.js，请先安装 Node.js"
    echo "   下载地址: https://nodejs.org/"
    exit 1
fi

# 检查 npm 是否安装
if ! command -v npm &> /dev/null; then
    echo "❌ 错误: 未检测到 npm，请先安装 npm"
    exit 1
fi

# 显示版本信息
echo "📦 环境信息:"
echo "   Node.js: $(node --version)"
echo "   npm: $(npm --version)"
echo ""

# 检查依赖是否已安装
if [ ! -d "node_modules" ]; then
    echo "📥 检测到依赖未安装，正在安装依赖..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败，请检查网络连接或 npm 配置"
        exit 1
    fi
    echo "✅ 依赖安装完成"
    echo ""
fi

# 启动开发服务器
echo "🌐 正在启动开发服务器..."
echo "   访问地址: http://127.0.0.1:5173"
echo "   按 Ctrl+C 停止服务器"
echo ""

npm run dev

