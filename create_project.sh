#!/bin/bash

# 1. 创建根目录下的文件
touch index.html package.json tailwind.config.js YOUWARE.md yw_manifest.json

# 2. 创建src目录及子结构
mkdir -p src/assets \
         src/components/sections \
         src/i18n/locales \
         src/pages \
         src/store

# 3. 创建src下的文件
# src/assets
touch src/assets/avatar.jpg src/assets/youware-bg.png

# src/components/sections
touch src/components/sections/ActivitySection.tsx \
      src/components/sections/AwardsSection.tsx \
      src/components/sections/PublicationsSection.tsx \
      src/components/sections/ServicesSection.tsx

# src/components
touch src/components/Collapse.tsx \
      src/components/Footer.tsx \
      src/components/Header.tsx \
      src/components/ProfileCard.tsx

# src/i18n
touch src/i18n/locales/en.json src/i18n/locales/zh.json
touch src/i18n/config.ts

# src/pages
touch src/pages/Home.tsx

# src/store
touch src/store/mockData.ts src/store/useStore.ts

# src根文件
touch src/App.tsx src/index.css src/main.tsx src/vite-env.d.ts

echo "✅ 项目文件结构已全部创建完成！"
