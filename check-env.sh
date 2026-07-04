#!/bin/bash

# 环境检查脚本
# 用于检查项目运行所需的环境是否已正确配置

echo "🔍 正在检查项目环境..."
echo ""

# 检查 Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js: $NODE_VERSION"
    
    # 检查版本是否符合要求 (v18+)
    NODE_MAJOR=$(echo $NODE_VERSION | sed 's/v\([0-9]*\).*/\1/')
    if [ "$NODE_MAJOR" -ge 18 ]; then
        echo "   ✓ 版本符合要求 (>= 18.x)"
    else
        echo "   ⚠️  版本可能过低，建议升级到 18.x 或更高"
    fi
else
    echo "❌ Node.js: 未安装"
    echo "   请访问 https://nodejs.org/ 下载安装"
    exit 1
fi

echo ""

# 检查 npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✅ npm: $NPM_VERSION"
else
    echo "❌ npm: 未安装"
    exit 1
fi

echo ""

# 检查依赖
if [ -d "node_modules" ]; then
    echo "✅ 项目依赖: 已安装"
    
    # 检查关键依赖是否存在
    if [ -d "node_modules/react" ] && [ -d "node_modules/vite" ]; then
        echo "   ✓ 核心依赖完整"
    else
        echo "   ⚠️  依赖可能不完整，建议运行: npm install"
    fi
else
    echo "⚠️  项目依赖: 未安装"
    echo "   请运行: npm install"
fi

echo ""

# 检查配置文件
echo "📄 配置文件检查:"
CONFIG_FILES=("vite.config.ts" "tsconfig.json" "tailwind.config.js" "postcss.config.js")
for file in "${CONFIG_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ $file"
    else
        echo "   ⚠️  $file (缺失)"
    fi
done

echo ""
echo "✨ 环境检查完成！"
echo ""
echo "🚀 启动项目:"
echo "   ./start.sh"
echo "   或"
echo "   npm run dev"

