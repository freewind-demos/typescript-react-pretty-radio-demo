# TypeScript React Pretty Radio Demo

这是一个使用 TypeScript 和 React 实现的美化单选按钮（Radio）组件示例项目。

## 项目描述

本项目展示了如何使用 TypeScript 和 React 创建一个自定义样式的单选按钮组件。主要特点：

- 使用 TypeScript 确保类型安全
- 基于 React 17.x 构建
- 支持自定义标签文本
- 支持点击选中和取消选中功能
- 现代化的 UI 设计

## 技术栈

- React 17.0.2
- TypeScript 5.4.3
- Vite 5.x (构建工具)

## 安装

```bash
# 使用 pnpm 安装依赖
pnpm install
```

## 运行

```bash
# 启动开发服务器
pnpm start

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

服务器启动后会自动在浏览器中打开页面。默认地址为 http://localhost:5173

## 使用方式

组件使用示例：

```tsx
import { PrettyRadio } from './components/PrettyRadio';

// 在组件中使用
<PrettyRadio 
  label="选项文本"
  checked={selected === 'value'}
  onChange={() => handleChange('value')}
/>
