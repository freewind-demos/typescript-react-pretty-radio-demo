# TypeScript React Pretty Radio Demo

这是一个使用 TypeScript 和 React 实现的美化单选按钮（Radio）组件示例项目。

## 项目目的

本项目旨在展示如何使用 TypeScript 和 React 创建一个美观、现代化的单选按钮组件。通过这个示例，你可以学习：

- 如何使用 TypeScript 为 React 组件添加类型定义
- 如何使用 CSS-in-JS（Emotion）创建组件样式
- 如何实现自定义表单控件
- 如何处理组件的状态和事件

## 功能特点

- ✨ 现代化的 UI 设计
- 🎯 完全可定制的样式（使用 Emotion）
- 💪 TypeScript 类型支持
- 🔄 平滑的状态切换动画
- ✅ 优雅的选中状态指示
- 🎨 自定义边框和背景颜色
- 📱 响应式设计
- 🔍 清晰的焦点状态

## 技术栈

- React 17.0.2
- TypeScript 5.4.3
- Emotion (CSS-in-JS)
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

### 基本用法

```tsx
import { PrettyRadio } from './components/PrettyRadio';

function MyComponent() {
  const [selected, setSelected] = useState(false);

  return (
    <PrettyRadio 
      checked={selected}
      onChange={(checked) => setSelected(checked)}
      name="myRadio"
    />
  );
}
```

### Props 说明

组件接受以下属性：

- `checked`: boolean - 控制选中状态
- `onChange`: (checked: boolean) => void - 状态改变时的回调函数
- `name`: string - radio 组的名称
- 支持其他标准的 input[type="radio"] 属性（除了 type 和 onChange）

## 贡献

欢迎提交 Issue 和 Pull Request 来完善这个组件。

## 许可

MIT
